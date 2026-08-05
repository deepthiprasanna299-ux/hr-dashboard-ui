import { useNavigate } from 'react-router-dom'
import { Calendar, Clock, User } from 'lucide-react'

export default function UpcomingInterviews({ items }){
  const navigate = useNavigate()
  const sample = items ?? [
    { id: 1, name: 'Aisha Khan', role: 'Product Designer', date: 'Aug 7', time: '09:30 AM', to: '/hiring' },
    { id: 2, name: 'Marcus Lee', role: 'Frontend Engineer', date: 'Aug 7', time: '11:00 AM', to: '/calendar' },
    { id: 3, name: 'Lina Gomez', role: 'Data Analyst', date: 'Aug 8', time: '02:00 PM', to: '/hiring' }
  ]

  return (
    <section className="rounded-[2rem] bg-white/90 p-6 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.25)] border border-slate-200/80 dark:bg-slate-950/90 dark:border-slate-800">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Upcoming Interviews</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Next 3 scheduled interviews</p>
        </div>
        <div className="text-sm text-slate-400 dark:text-slate-500">Today</div>
      </div>

      <div className="mt-4 space-y-3">
        {sample.map((it) => (
          <button type="button" aria-label={`Open interview for ${it.name}`} key={it.id} onClick={() => navigate(it.to)} className="w-full text-left rounded-3xl p-3 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center text-white"><User size={16} /></div>
              <div>
                <div className="font-medium text-slate-900 dark:text-slate-100">{it.name}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{it.role}</div>
              </div>
            </div>
            <div className="text-right text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2 justify-end"><Calendar size={14} />{it.date}</div>
              <div className="flex items-center gap-2 justify-end text-xs"><Clock size={12} />{it.time}</div>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
