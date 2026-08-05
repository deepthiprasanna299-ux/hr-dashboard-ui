import { useParams, useNavigate } from 'react-router-dom'
import employeesData from '../data/employees'
import ActivityTimeline from '../components/ActivityTimeline'
import { Mail, Phone, Edit } from 'lucide-react'

export default function EmployeeDetails(){
  const { id } = useParams()
  const nav = useNavigate()
  const emp = employeesData.find((e) => e.id === id)

  if(!emp) return (
    <div className="space-y-6">
      <div className="text-center text-xl font-semibold">Employee not found</div>
      <button onClick={() => nav(-1)} className="px-4 py-2 rounded-2xl bg-purple-600 text-white">Go Back</button>
    </div>
  )

  const initials = emp.name.split(' ').map((part) => part[0]).join('').slice(0, 2)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button onClick={() => nav(-1)} className="px-4 py-2 rounded-2xl bg-slate-100 dark:bg-slate-800">Back</button>
        <div className="flex items-center gap-3">
          <a href={`mailto:${emp.email}`} className="flex items-center gap-2 rounded-2xl bg-slate-100 dark:bg-slate-800 px-4 py-2 text-sm"><Mail /> Email</a>
          <a href={`tel:${emp.phone}`} className="flex items-center gap-2 rounded-2xl bg-slate-100 dark:bg-slate-800 px-4 py-2 text-sm"><Phone /> Call</a>
          <button onClick={() => nav('/settings')} className="flex items-center gap-2 rounded-2xl bg-purple-600 px-4 py-2 text-white text-sm"><Edit /> Edit</button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(280px,360px)_1fr]">
        <aside className="rounded-3xl bg-white dark:bg-slate-900 p-6 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-purple-600 text-3xl font-semibold text-white">{initials}</div>
            <div>
              <h1 className="text-3xl font-semibold">{emp.name}</h1>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{emp.role}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{emp.department}</p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="rounded-3xl bg-slate-50 dark:bg-slate-950 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Employee ID</div>
              <div className="mt-2 text-lg font-semibold">{emp.id}</div>
            </div>

            <div className="rounded-3xl bg-slate-50 dark:bg-slate-950 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Email</div>
              <div className="mt-2 font-medium text-slate-900 dark:text-slate-100">{emp.email}</div>
            </div>

            <div className="rounded-3xl bg-slate-50 dark:bg-slate-950 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Phone</div>
              <div className="mt-2 font-medium text-slate-900 dark:text-slate-100">{emp.phone}</div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between rounded-3xl bg-slate-50 dark:bg-slate-950 p-4">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Performance</p>
                <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">Top rated</p>
              </div>
              <span className="rounded-3xl bg-purple-50 dark:bg-purple-900/20 px-3 py-2 text-sm font-semibold text-purple-600 dark:text-purple-200">4.9 / 5</span>
            </div>

            <div className="flex items-center justify-between rounded-3xl bg-slate-50 dark:bg-slate-950 p-4">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">Projects</p>
                <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">8 active</p>
              </div>
              <span className="rounded-3xl bg-slate-100 dark:bg-slate-800 px-3 py-2 text-sm text-slate-600 dark:text-slate-300">Engineering</span>
            </div>
          </div>
        </aside>

        <section className="rounded-3xl bg-white dark:bg-slate-900 p-6 shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">About {emp.name}</h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">A concise profile summary and recent activity overview to support quick HR decisions.</p>
            </div>
            <div className="rounded-3xl bg-slate-100 dark:bg-slate-800 px-4 py-2 text-sm text-slate-600 dark:text-slate-300">Active</div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 dark:bg-slate-950 p-5">
              <p className="text-sm text-slate-500 dark:text-slate-400">Last Active</p>
              <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">Today, 15:20</p>
            </div>
            <div className="rounded-3xl bg-slate-50 dark:bg-slate-950 p-5">
              <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
              <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">Remote / US</p>
            </div>
          </div>

          <div className="mt-8">
            <ActivityTimeline events={[
              { id: 1, title: 'Completed interview feedback', time: '3 days ago', detail: 'Feedback submitted for Product Designer', icon: undefined, color: 'bg-emerald-500' },
              { id: 2, title: 'Updated onboarding schedule', time: '1 week ago', detail: 'Adjusted orientation for new hires', icon: undefined, color: 'bg-sky-500' },
              { id: 3, title: 'Reviewed sprint priorities', time: '2 weeks ago', detail: 'Aligned tasks with product roadmap', icon: undefined, color: 'bg-purple-500' }
            ]} />
          </div>
        </section>
      </div>
    </div>
  )
}
