import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Countdown from './components/Countdown'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Hero with Spline cover */}
      <Hero />

      {/* Features */}
      <Features />

      {/* Countdown */}
      <Countdown />

      {/* Footer */}
      <Footer />

      {/* Keyframes for stars */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: translateY(0px) scale(1); }
          50% { opacity: 0.8; transform: translateY(-2px) scale(1.2); }
        }
      `}</style>
    </div>
  )
}

export default App
