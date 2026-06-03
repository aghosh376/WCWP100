import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { STAT_KEYS, STAT_LABELS } from '../game/constants'
import StatIcon from '../game/StatIcon'
import PixelAvatar from './PixelAvatar'
import { REALMS } from './RealmMap'
import { getTaskPoolForRealm } from './taskPools'

const TASK_INTERVAL_MS = 5000
const MAX_PENDING_TASKS = 5

function taskFailureMessage(topicId, reason) {
  return (
    <span className="text-red-700">
      Task failed due to{' '}
      <Link
        to="/topics"
        state={{ anchor: topicId }}
        className="font-semibold underline hover:text-red-900"
      >
        {reason}
      </Link>
      .
    </span>
  )
}

/** Stress rises slowly with inbox depth — room to read each failure */
function stressFromPendingCount(count) {
  if (count <= 0) return 5
  const steps = [12, 28, 44, 62, 82, 100]
  return steps[Math.min(count, steps.length - 1)]
}

export default function TaskTrials({ stats, avatar, realmId, onParalysis, frozen }) {
  const taskPool = getTaskPoolForRealm(realmId)
  const taskIdRef = useRef(0)
  const poolIndexRef = useRef(0)

  const [tasks, setTasks] = useState(() => {
    taskIdRef.current += 1
    const template = taskPool[0]
    poolIndexRef.current = 1
    return [{ id: `t-${taskIdRef.current}`, ...template, status: 'pending' }]
  })
  const [errors, setErrors] = useState({})

  const realm = REALMS.find((r) => r.id === realmId)
  const pendingTasks = tasks.filter((t) => t.status === 'pending')
  const pendingCount = pendingTasks.length
  const stress = stressFromPendingCount(pendingCount)

  const panelStressClass =
    pendingCount >= 5
      ? 'bg-red-100/90 ring-2 ring-inset ring-red-500/70'
      : pendingCount >= 4
        ? 'bg-red-50/80 ring-1 ring-red-400/50'
        : ''

  useEffect(() => {
    if (frozen) return
    const timer = setInterval(() => {
      setTasks((prev) => {
        const pending = prev.filter((t) => t.status === 'pending')
        if (pending.length >= MAX_PENDING_TASKS) {
          onParalysis()
          return prev
        }
        taskIdRef.current += 1
        const template = taskPool[poolIndexRef.current % taskPool.length]
        poolIndexRef.current += 1
        return [
          ...prev,
          { id: `t-${taskIdRef.current}`, ...template, status: 'pending' },
        ]
      })
    }, TASK_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [frozen, onParalysis, taskPool])

  useEffect(() => {
    if (pendingCount >= MAX_PENDING_TASKS && !frozen) onParalysis()
  }, [pendingCount, frozen, onParalysis])

  useEffect(() => {
    if (!frozen) return
    setErrors((prev) => {
      const next = { ...prev }
      let changed = false
      for (const task of tasks) {
        if (task.status === 'pending' && !next[task.id]) {
          next[task.id] = taskFailureMessage(task.topicId, task.reason)
          changed = true
        }
      }
      return changed ? next : prev
    })
  }, [frozen, tasks])

  const resolveTask = (taskId, topicId, reason) => {
    if (frozen) return
    setErrors((e) => ({
      ...e,
      [taskId]: taskFailureMessage(topicId, reason),
    }))
  }

  return (
    <div className="overflow-hidden rounded-2xl border-2 border-zinc-500 bg-zinc-300 shadow-inner">
      <div className="border-b-2 border-zinc-500 bg-zinc-400 px-4 py-2">
        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-700">
          State 3 — Bureaucratic dashboard
        </p>
        <h2 className="font-serif text-lg text-zinc-800">
          {realm?.name ?? 'Realm'} · Processing queue
        </h2>
        <p className="text-xs text-zinc-600">
          New tasks arrive every {TASK_INTERVAL_MS / 1000}s · {pendingCount}/{MAX_PENDING_TASKS}{' '}
          pending
        </p>
      </div>

      <div className="flex min-h-[440px] flex-col lg:flex-row">
        <aside
          className={`w-full border-b border-zinc-500 bg-zinc-200 p-5 lg:w-60 lg:border-b-0 lg:border-r ${panelStressClass}`}
        >
          <p className="font-mono text-[10px] uppercase text-zinc-600">Character panel</p>

          <div className="mt-3 flex justify-center">
            <PixelAvatar avatar={avatar} pendingCount={pendingCount} size="default" />
          </div>

          <ul className="mt-4 space-y-2">
            {STAT_KEYS.map((key) => (
              <li
                key={key}
                className="flex justify-between rounded border border-zinc-400 bg-zinc-100 px-2 py-1.5 text-sm text-zinc-600"
              >
                <span className="flex items-center gap-1">
                  <StatIcon stat={key} className="h-3.5 w-3.5 text-zinc-500" />
                  {STAT_LABELS[key]}
                </span>
                <span className="font-mono line-through opacity-60">{stats[key]}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <div className="flex justify-between font-mono text-[10px] uppercase text-zinc-600">
              <span>Stress level</span>
              <span>{stress}%</span>
            </div>
            <div className="mt-1 h-3 overflow-hidden rounded bg-zinc-400">
              <motion.div
                className="h-full bg-gradient-to-r from-amber-500 to-red-600"
                animate={{ width: `${stress}%` }}
                transition={{ type: 'spring', stiffness: 80, damping: 18 }}
              />
            </div>
          </div>
        </aside>

        <div className={`relative z-0 flex-1 p-4 sm:p-6 ${frozen ? 'opacity-95' : ''}`}>
          <p className="font-mono text-xs uppercase text-zinc-600">Inbox — action required</p>
          <ul className="mt-4 space-y-3">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="rounded border-2 border-zinc-500 bg-zinc-100 p-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <p className="font-medium text-zinc-800">{task.title}</p>
                  <button
                    type="button"
                    onClick={() => resolveTask(task.id, task.topicId, task.reason)}
                    disabled={frozen || !!errors[task.id]}
                    className="rounded border-2 border-zinc-600 bg-zinc-300 px-3 py-1 font-mono text-xs font-bold uppercase text-zinc-700 hover:bg-zinc-400 disabled:opacity-40"
                  >
                    Resolve
                  </button>
                </div>
                {errors[task.id] && (
                  <p className="mt-2 font-mono text-xs leading-relaxed">{errors[task.id]}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
