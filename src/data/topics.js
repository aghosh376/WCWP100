export const TOPICS = [
  {
    id: 'errand-paralysis',
    title: 'Errand Paralysis',
    summary:
      'This is the cognitive freeze that sets in when mundane administrative tasks pile up without clear pathways to resolution. It occurs when young people can flawlessly manage complex digital systems but become paralyzed by basic civic or personal duties. This paralysis is a rational response to a world where prior real-world effort has repeatedly failed to produce any systemic feedback.',
  },
  {
    id: 'attention-economy',
    title: 'The Attention Economy',
    summary:
      'A business model that treats human focus as an extractable resource. Tech monopolies employ behavioral psychologists to capture, retain, and resell the sidelined energy of youth who find little leverage elsewhere. We are sold virtual struggles that satisfy our need for agency, while platforms profit directly off our politically neutralized frustration.',
  },
  {
    id: 'systemic-precarity',
    title: 'Systemic Precarity',
    summary:
      'The underlying structural instability in housing, wages, credentialing, and debt that heavily compresses real-world options. This overwhelming background radiation of hopelessness creates a stagnant physical reality, making virtual worlds feel like the only remaining arenas where effort still reliably maps to a guaranteed outcome.',
  },
  {
    id: 'illusion-of-meritocracy',
    title: 'The Illusion of Meritocracy',
    summary:
      'The foundational promise that hard work guarantees proportional advancement. While real-world institutions actively gatekeep access and obscure the rules of success, video games perfectly simulate true meritocracy. They offer a safe, enclosed space where effort undeniably equals reward, temporarily masking the fact that the real world has priced an entire generation out of building actual empires.',
  },
]

export function getTopicById(id) {
  return TOPICS.find((t) => t.id === id)
}
