'use client'

import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function SignInPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const [particles, setParticles] = useState([])
  const [codeRain, setCodeRain] = useState([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/')
    }
  }, [status, router])

  useEffect(() => {
    setIsClient(true)

    const particleData = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 3,
      animationDuration: 2 + Math.random() * 2,
    }))
    setParticles(particleData)

    const codeRainData = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: i * 5,
      animationDelay: i * 0.5,
      bits: '010110101'.split(''),
    }))
    setCodeRain(codeRainData)
  }, [])

  if (status === 'loading') return <p className="text-center mt-10">Loading...</p>

  return (
    <main className="min-h-screen relative overflow-hidden flex items-center justify-center px-6 text-white">

      {/* Background Glow & Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900 to-black z-0" />

      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.3)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      {isClient && (
        <div className="absolute inset-0 z-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.animationDelay}s`,
                animationDuration: `${particle.animationDuration}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Code Rain */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden opacity-10 z-0">
          {codeRain.map((rain) => (
            <div
              key={rain.id}
              className="absolute text-cyan-400 font-mono text-sm animate-bounce"
              style={{
                left: `${rain.left}%`,
                top: `-10px`,
                animationDelay: `${rain.animationDelay}s`,
                animationDuration: '8s',
              }}
            >
              {rain.bits.map((bit, j) => (
                <div key={j} className="mb-4">{bit}</div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Sign-in Card */}
      <div className="relative z-10 w-full max-w-md border border-purple-500/30 p-10 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/5 via-purple-500/10 to-white/5 shadow-2xl space-y-8">

        {/* Border Highlights */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-purple-500/50 rounded-tl-lg" />
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-500/50 rounded-tr-lg" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-emerald-500/50 rounded-bl-lg" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-pink-500/50 rounded-br-lg" />

        <div className="flex items-center justify-center space-x-2">
  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
    <div className="w-6 h-6 bg-white rounded-full animate-pulse"></div>
  </div>
  <h1 className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
    InterPrep
  </h1>
</div>


        <p className="text-xl text-center bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
          Practice job interviews with AI
        </p>

        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="w-full flex items-center justify-center gap-3 cursor-pointer bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <Image
            src="/google-icon.svg"
            alt="Google"
            width={20}
            height={20}
            className="inline"
          />
          Sign in with Google
        </button>
        

        <p className="text-xs text-center text-gray-400">
          We respect your privacy. No spam — just interviews.
        </p>

        <p className="text-xs text-gray-400 cursor-pointer text-center mt-6">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://cealadigital.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Ceala Digital Media
          </a>
        </p>
      </div>
    </main>
  )
}
