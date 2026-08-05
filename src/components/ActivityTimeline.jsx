import { Clock, CheckCircle, UserPlus, User } from 'lucide-react'

export default function ActivityTimeline({ events }){
  const sample = events ?? [
    { id: 1, title: 'Sarah Wilson joined HR', time: '2 hours ago', icon: UserPlus, color: 'bg-emerald-500' },
    { id: 2, title: 'Rahul requested leave', time: '4 hours ago', icon: Clock, color: 'bg-yellow-500' },
    { id: 3, title: 'Emma completed onboarding', time: '1 day ago', icon: CheckCircle, color: 'bg-sky-500' },
    { id: 4, title: 'New policy published', time: '2 days ago', icon: User, color: 'bg-indigo-500' },
  ]

  return (
    <div className="rounded-[2rem] bg-white/90 p-6 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.25)] border border-slate-200/80 dark:bg-slate-950/90 dark:border-slate-800">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Recent Activity</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Latest team and HR updates</p>
        </div>
      </div>

      <ul className="mt-4 space-y-3" role="list">
        {(events ?? sample).map((e) => {
          const Icon = e.icon ?? Clock
          return (
            <li key={e.id} role="listitem" className="flex items-start gap-3">
              <div className={`mt-1 flex h-9 w-9 items-center justify-center rounded-lg text-white ${e.color ?? 'bg-slate-500'}`}>
                <Icon size={16} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-slate-900 dark:text-slate-100">{e.title}</div>
                  <div className="text-xs text-slate-400 dark:text-slate-500">{e.time}</div>
                </div>
                {e.detail && <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{e.detail}</div>}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
