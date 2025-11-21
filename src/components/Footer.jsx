import React from 'react'

function Footer() {
  return (
    <footer className="relative w-full bg-black py-10">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,#0f0f14,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6 flex flex-col items-center gap-4">
        <p className="text-center text-sm text-white/60">
          Made for the night. Minimal, moody, and full of motion.
        </p>
        <div className="flex items-center gap-3 text-xs text-white/40">
          <span>© {new Date().getFullYear()} Spooky Co.</span>
          <span>•</span>
          <a className="hover:text-white/80 transition" href="#explore">Explore</a>
          <span>•</span>
          <a className="hover:text-white/80 transition" href="#countdown">Countdown</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
