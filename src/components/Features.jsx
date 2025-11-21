import React from 'react'
import { Ghost, Zap, Moon, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Ghost,
    title: 'Whispers in Motion',
    desc: 'Micro-animations and moody gradients bring life to every scroll.'
  },
  {
    icon: Moon,
    title: 'Night Mode First',
    desc: 'Designed for darkness. Calibrated contrast for effortless reading.'
  },
  {
    icon: Zap,
    title: 'HMR Spells',
    desc: 'Lightning-fast interactions thanks to modern UI enchantments.'
  },
  {
    icon: Sparkles,
    title: 'Polished to a Sheen',
    desc: 'Subtle glow, tasteful blur, and cinematic vignettes everywhere.'
  }
]

function Features() {
  return (
    <section id="explore" className="relative w-full bg-[#0b0b0f] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,#1a1a23,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">What makes it spooky-good</h2>
          <p className="mt-3 text-white/70">Clean lines. Deep shadows. Animated accents that feel alive.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/10">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/90 to-purple-600/90 text-black shadow-[0_10px_30px_rgba(255,106,0,0.3)]">
                <Icon className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-orange-500/10 blur-2xl transition group-hover:scale-150" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
