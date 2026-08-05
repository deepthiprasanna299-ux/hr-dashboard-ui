import { useEffect, useState } from 'react'

export default function StatsCard({ title, value, description, accent = 'from-purple-600 to-indigo-500', icon: Icon }){
  const [count, setCount] = useState(typeof value === 'number' ? 0 : value)

  useEffect(() => {
    if (typeof value !== 'number') return
    let start = 0
    const duration = 800
    const stepTime = 16
    const steps = Math.max(1, Math.floor(duration / stepTime))
    const increment = (value - start) / steps
    let current = start
    const t = setInterval(() => {
      current += increment
      if ((increment > 0 && current >= value) || (increment < 0 && current <= value)) {
        setCount(value)
        clearInterval(t)
      } else {
        setCount(Math.round(current))
      }
    }, stepTime)
    return () => clearInterval(t)
  }, [value])

  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 shadow-[0_25px_80px_-40px_rgba(99,102,241,0.45)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_-40px_rgba(99,102,241,0.35)] dark:border-slate-800 dark:bg-slate-950/80">
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            {Icon && <div className="rounded-lg bg-slate-100 dark:bg-slate-900 p-2"><Icon /></div>}
            <div>
              <div className="text-sm uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">{title}</div>
              <div className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">{typeof count === 'number' ? count : count}</div>
            </div>
          </div>
          <div className={`rounded-3xl px-3 py-2 text-sm font-semibold text-white bg-gradient-to-r ${accent}`}>{description}</div>
        </div>
      </div>
    </div>
  )
}
