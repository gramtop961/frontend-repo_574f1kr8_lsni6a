import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      {/* 3D Spline Scene as full-width cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/fvh1rcczCU4MCcKH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark gradient vignettes */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_40%_at_50%_10%,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_40%,rgba(0,0,0,0.35)_100%)]" />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute -top-16 -left-16 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-white/70 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400" />
          Live Halloween Special
        </div>

        <h1 className="text-balance bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-black text-transparent drop-shadow-sm sm:text-6xl md:text-7xl">
          A Dark, Animated Halloween Vibe
        </h1>
        
        <p className="mt-4 max-w-2xl text-pretty text-base text-white/75 sm:text-lg">
          Step into the forest. Minimalist. Moody. Subtle motion everywhere. Built for late‑night browsing.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#explore" className="group relative overflow-hidden rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(255,106,0,0.35)] transition hover:brightness-110">
            <span className="relative z-10">Explore the Darkness</span>
            <span className="absolute inset-0 translate-y-full bg-gradient-to-t from-black/20 to-transparent transition-transform duration-500 ease-out group-hover:translate-y-0" />
          </a>
          <a href="#countdown" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            Countdown to 31 Oct
          </a>
        </div>
      </div>

      {/* Ambient stars */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <span
            key={i}
            className="absolute h-0.5 w-0.5 rounded-full bg-white/70 opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out ${Math.random() * 2}s infinite`,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
