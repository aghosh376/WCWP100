import { CITIES } from './constants'

export default function SatClassroom({ cityId, username, satForm, onSatChange }) {
  const city = CITIES.find((c) => c.id === cityId) ?? CITIES[0]

  return (
    <div className="game-zoom-in flex-1 p-4 sm:p-6">
      <div className="mb-4 overflow-hidden rounded-lg border border-amber-900/40 bg-gradient-to-r from-amber-950/60 to-zinc-900 px-4 py-3">
        <p className="font-mono text-[10px] uppercase tracking-widest text-amber-500/90">
          {city.name} · Sector 12
        </p>
        <h2 className="font-serif text-lg text-amber-100">Room 214 — College Prep Block</h2>
        <p className="text-xs text-zinc-500">Camera zoom: classroom interior</p>
      </div>

      <div className="mx-auto max-w-xl rounded-sm border-2 border-zinc-500 bg-zinc-200 p-6 shadow-xl sm:p-8">
        <div className="flex items-start justify-between border-b-2 border-zinc-600 pb-3">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-700">
              College Board
            </p>
            <h3 className="font-serif text-xl font-bold text-zinc-800">SAT Reasoning Test</h3>
          </div>
          <div className="border border-zinc-500 bg-white px-2 py-1 text-center font-mono text-[10px] text-zinc-600">
            FORM 9999
            <br />
            REV. 2024
          </div>
        </div>

        <p className="mt-4 font-mono text-xs text-zinc-600">
          Student: <span className="text-zinc-800">{username || '—'}</span> · Site: {city.name}
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="sat-name"
              className="block font-mono text-[10px] font-bold uppercase text-zinc-600"
            >
              1. Legal name (print)
            </label>
            <input
              id="sat-name"
              type="text"
              value={satForm.studentName}
              onChange={(e) => onSatChange({ ...satForm, studentName: e.target.value })}
              className="mt-1 w-full border-2 border-zinc-500 bg-white px-2 py-2 font-mono text-sm text-zinc-900 outline-none focus:border-zinc-700"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="sat-reg"
                className="block font-mono text-[10px] font-bold uppercase text-zinc-600"
              >
                2. Registration #
              </label>
              <input
                id="sat-reg"
                type="text"
                value={satForm.registrationId}
                onChange={(e) => onSatChange({ ...satForm, registrationId: e.target.value })}
                className="mt-1 w-full border-2 border-zinc-500 bg-white px-2 py-2 font-mono text-sm text-zinc-900"
              />
            </div>
            <div>
              <label
                htmlFor="sat-section"
                className="block font-mono text-[10px] font-bold uppercase text-zinc-600"
              >
                3. Section code
              </label>
              <input
                id="sat-section"
                type="text"
                value={satForm.sectionCode}
                onChange={(e) => onSatChange({ ...satForm, sectionCode: e.target.value })}
                className="mt-1 w-full border-2 border-zinc-500 bg-white px-2 py-2 font-mono text-sm text-zinc-900"
              />
            </div>
          </div>

          <div className="rounded border border-zinc-400 bg-zinc-100 p-3">
            <p className="font-mono text-[10px] font-bold uppercase text-zinc-600">
              4. Answer sheet — Section I (sample)
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {['A', 'B', 'C', 'D'].map((letter) => (
                <div key={letter} className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <div
                      key={n}
                      className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-500 bg-white text-[9px] text-zinc-500"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <label className="flex cursor-pointer items-start gap-3 border border-zinc-400 bg-zinc-100 p-3 text-sm text-zinc-700">
            <input
              type="checkbox"
              checked={satForm.agreed}
              onChange={(e) => onSatChange({ ...satForm, agreed: e.target.checked })}
              className="mt-0.5 h-4 w-4 accent-zinc-700"
            />
            <span>
              I certify that I am the person named above and will follow all testing procedures.
            </span>
          </label>

          <button
            type="button"
            disabled
            className="w-full cursor-not-allowed border-2 border-zinc-600 bg-zinc-400 py-3 font-mono text-sm font-bold uppercase tracking-widest text-zinc-600"
          >
            Begin Section I
          </button>
          <p className="text-center font-mono text-[10px] text-zinc-500">
            Timing begins when instructed by the proctor. Do not open this booklet until told.
          </p>
        </div>
      </div>
    </div>
  )
}
