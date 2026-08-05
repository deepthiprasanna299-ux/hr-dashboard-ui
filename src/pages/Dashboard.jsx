import StatsCard from '../components/StatsCard'
import { Users, UserPlus, ShieldCheck, DollarSign } from 'lucide-react'
import WelcomeCard from '../components/WelcomeCard'
import AnalyticsChart from '../components/AnalyticsChart'
import ActivityTimeline from '../components/ActivityTimeline'
import UpcomingInterviews from '../components/UpcomingInterviews'
import QuickActions from '../components/QuickActions'

const departmentData = [
  { label: 'Engineering', value: 36, color: 'from-sky-500 to-indigo-500' },
  { label: 'Design', value: 24, color: 'from-fuchsia-500 to-pink-500' },
  { label: 'HR', value: 18, color: 'from-emerald-500 to-teal-400' },
  { label: 'Product', value: 22, color: 'from-violet-500 to-purple-500' },
]

export default function Dashboard(){
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <QuickActions />
        <WelcomeCard />
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.7fr_1fr]">
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatsCard title="Employees" value={168} description="+12% from last month" accent="from-emerald-500 to-teal-400" icon={Users} />
            <StatsCard title="Hirings" value={53} description="+8% since last week" accent="from-fuchsia-500 to-pink-500" icon={UserPlus} />
            <StatsCard title="Retention" value={94} description="+3% annual" accent="from-sky-500 to-indigo-500" icon={ShieldCheck} />
            <StatsCard title="Salary" value="$48.6K" description="+10% budget" accent="from-violet-500 to-purple-500" icon={DollarSign} />
          </div>

          <AnalyticsChart
            title="Department distribution"
            description="Active team breakdown across HR, Design, Product, and Engineering."
            data={departmentData}
          />

          <div className="grid gap-4 xl:grid-cols-2">
            <section className="rounded-[2rem] bg-white/90 p-6 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.25)] border border-slate-200/80 dark:bg-slate-950/90 dark:border-slate-800">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">Work Progress</p>
                  <h3 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-100">5.1h</h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Work logged by HR this week</p>
                </div>
                <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-indigo-500 px-4 py-2 text-sm font-semibold text-white">This Week</div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-full bg-slate-100 dark:bg-slate-900 h-3 overflow-hidden">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500"></div>
                </div>
                <div className="grid grid-cols-7 text-[11px] text-slate-500 dark:text-slate-400 gap-1">
                  {['S','M','T','W','T','F','S'].map((d) => (
                    <span key={d} className="text-center">{d}</span>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-[2rem] bg-white/90 p-6 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.25)] border border-slate-200/80 dark:bg-slate-950/90 dark:border-slate-800">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">Time Tracker</p>
                  <h3 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-100">02:35</h3>
                </div>
                <div className="rounded-3xl bg-slate-100 dark:bg-slate-800 px-4 py-2 text-sm text-slate-600 dark:text-slate-300">Today</div>
              </div>
              <div className="relative mt-6 h-44 rounded-[2rem] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950 overflow-hidden">
                <div className="absolute -left-10 top-8 h-24 w-24 rounded-full bg-purple-500 opacity-20 blur-2xl"></div>
                <div className="absolute right-8 top-14 h-20 w-20 rounded-full bg-sky-500 opacity-20 blur-2xl"></div>
                <div className="absolute inset-6 rounded-[1.75rem] bg-slate-50 dark:bg-slate-950 border border-white/70 dark:border-slate-800" />
              </div>
            </section>
          </div>

          <section className="rounded-[2rem] bg-white/90 p-6 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.25)] border border-slate-200/80 dark:bg-slate-950/90 dark:border-slate-800">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Team health</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">People analytics at a glance</p>
              </div>
              <div className="rounded-3xl bg-purple-50 dark:bg-purple-900/20 px-3 py-2 text-sm font-semibold text-purple-600 dark:text-purple-200">Optimized</div>
            </div>
            <div className="mt-6 space-y-4">
              {[
                {label: 'Engagement', value: '88%', width: 'w-4/5', color: 'from-emerald-500 to-teal-400'},
                {label: 'Satisfaction', value: '91%', width: 'w-11/12', color: 'from-sky-500 to-indigo-500'},
                {label: 'Onboarding', value: '78%', width: 'w-3/4', color: 'from-violet-500 to-fuchsia-500'}
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                    <span>{item.label}</span>
                    <span className="font-semibold text-slate-900 dark:text-slate-100">{item.value}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div className={`h-full ${item.width} rounded-full bg-gradient-to-r ${item.color}`} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-4">
           <section className="rounded-[2rem] bg-white/90 p-6 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.25)] border border-slate-200/80 dark:bg-slate-950/90 dark:border-slate-800">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Onboarding</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">18% completed</p>
              </div>
              <div className="rounded-3xl bg-purple-50 dark:bg-purple-900/20 px-3 py-2 text-sm font-semibold text-purple-600 dark:text-purple-200">18%</div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="rounded-full bg-slate-100 dark:bg-slate-800 h-3 overflow-hidden">
                <div className="h-full w-1/3 rounded-full bg-purple-600"></div>
              </div>
              {[
                { title: 'Interview', date: 'Sep 13, 08:30', done: true },
                { title: 'Team Meeting', date: 'Sep 13, 10:00', done: true },
                { title: 'Project Update', date: 'Sep 13, 13:00', done: false },
                { title: 'Discuss Q3 Goals', date: 'Sep 14, 09:00', done: false },
                { title: 'HR Policy Review', date: 'Sep 14, 16:00', done: false }
              ].map((task) => (
                <div key={task.title} className="flex items-center justify-between gap-3 rounded-3xl bg-slate-50 dark:bg-slate-950 p-4">
                  <div>
                    <p className="font-medium text-slate-900 dark:text-slate-100">{task.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{task.date}</p>
                  </div>
                  <div className={`h-3 w-3 rounded-full ${task.done ? 'bg-purple-600' : 'bg-slate-300 dark:bg-slate-700'}`} />
                </div>
              ))}
            </div>
          </section>

            <ActivityTimeline />

            <UpcomingInterviews />

            <section className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 text-white shadow-[0_25px_80px_-40px_rgba(15,23,42,0.45)] border border-white/10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">Upcoming Events</h3>
                <p className="mt-1 text-sm text-slate-300/80">Stay aligned with key HR meetings.</p>
              </div>
              <div className="rounded-3xl bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.3em] text-slate-200">Live</div>
            </div>
            <div className="mt-6 space-y-4 text-sm">
              <div className="rounded-3xl bg-white/5 p-4">
                <p className="font-semibold">People Ops Sync</p>
                <p className="mt-1 text-slate-300/80">Wed • 9:00 AM</p>
              </div>
              <div className="rounded-3xl bg-white/5 p-4">
                <p className="font-semibold">Hiring Review</p>
                <p className="mt-1 text-slate-300/80">Thu • 11:30 AM</p>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  )
}
