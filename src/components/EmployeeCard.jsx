import { Link } from 'react-router-dom'

function initials(name){
  return name.split(' ').map(s => s[0]).slice(0,2).join('').toUpperCase()
}

export default function EmployeeCard({employee, onQuickView}){
  const status = employee.status ?? 'Active'
  const statusColor = status === 'Active' ? 'bg-emerald-500' : status === 'On Leave' ? 'bg-yellow-500' : 'bg-slate-500'

  return (
    <div className="p-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-20px_rgba(15,23,42,0.35)]">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center text-white text-lg font-semibold">{initials(employee.name)}</div>
        <div>
          <div className="text-lg font-semibold text-slate-900 dark:text-slate-100">{employee.name}</div>
          <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{employee.role}</div>
          <div className="mt-2 flex items-center gap-3">
            <div className="text-xs rounded-full px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200">{employee.department}</div>
            <div className="text-xs text-slate-400 dark:text-slate-500">ID {employee.id}</div>
            <div className={`h-2.5 w-2.5 rounded-full ${statusColor}`} title={status} />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button type="button" aria-label={`Quick view ${employee.name}`} onClick={()=> onQuickView(employee)} className="rounded-2xl border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-200 transition duration-200 hover:bg-slate-100 dark:hover:bg-slate-800">Quick View</button>
        <Link to={`/employee/${employee.id}`} className="rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-500 px-4 py-2 text-sm text-white transition duration-200 hover:opacity-95">Details</Link>
      </div>
    </div>
  )
}
