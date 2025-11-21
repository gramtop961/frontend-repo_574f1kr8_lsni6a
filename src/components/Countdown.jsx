import React, { useEffect, useState } from 'react'

function pad(n) { return n.toString().padStart(2, '0') }

function getTimeLeft(target) {
  const now = new Date()
  const diff = target - now
  if (diff <= 0) return { d: '00', h: '00', m: '00', s: '00' }
  const d = Math.floor(diff / (1000 * 60 * 60 * 24))
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const m = Math.floor((diff / (1000 * 60)) % 60)
  const s = Math.floor((diff / 1000) % 60)
  return { d: pad(d), h: pad(h), m: pad(m), s: pad(s) }
}

function Countdown() {
  const [time, setTime] = useState(getTimeLeft(new Date(new Date().getFullYear(), 9, 31, 0, 0, 0)))

  useEffect(() => {
    const target = new Date(new Date().getFullYear(), 9, 31, 0, 0, 0)
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="countdown" className="relative w-full bg-[#0a0a0c] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,#16161d,transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Countdown to Halloween</h2>
        <p className="mt-3 text-white/70">Tick-tock. The night approaches.</p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: 'Days', value: time.d },
            { label: 'Hours', value: time.h },
            { label: 'Minutes', value: time.m },
            { label: 'Seconds', value: time.s },
          ].map((x, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-5xl font-black tracking-tight text-white drop-shadow-[0_4px_40px_rgba(255,106,0,0.35)]">
                {x.value}
              </div>
              <div className="mt-2 text-sm uppercase tracking-widest text-white/60">{x.label}</div>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(255,106,0,0.15),transparent_60%)]" />
            </div>
          ))}
        </div>

        <p className="mt-10 text-white/60">
          Tip: Hover and explore — hidden glows and shadows react to you.
        </p>
      </div>
    </section>
  )
}

export default Countdown
