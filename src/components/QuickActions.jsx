import { useNavigate } from 'react-router-dom'
import { Plus, Briefcase, Download } from 'lucide-react'
import employees from '../data/employees'

function downloadCSV(filename, rows) {
  const header = Object.keys(rows[0] || {}).join(',')
  const csv = [header]
  rows.forEach(r => {
    csv.push(Object.values(r).map(v => `"${String(v).replace(/"/g, '""')}"`).join(','))
  })
  const blob = new Blob([csv.join('\n')], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.setAttribute('download', filename)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default function QuickActions(){
  const navigate = useNavigate()

  return (
    <div className="rounded-[2rem] bg-white/90 p-4 shadow-[0_15px_60px_-30px_rgba(15,23,42,0.12)] border border-slate-200/80 dark:bg-slate-950/90 dark:border-slate-800 flex items-center gap-3">
      <button type="button" aria-label="Add employee" onClick={() => navigate('/employees')} className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 px-4 py-2 text-white font-semibold shadow hover:opacity-95">
        <Plus /> Add Employee
      </button>

      <button type="button" aria-label="Create new job" onClick={() => navigate('/hiring')} className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-fuchsia-500 to-pink-500 px-4 py-2 text-white font-semibold shadow hover:opacity-95">
        <Briefcase /> New Job
      </button>

      <button type="button" aria-label="Export employees as CSV" onClick={() => downloadCSV('employees.csv', employees)} className="ml-auto flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">
        <Download /> Export
      </button>
    </div>
  )
}
