import { useOutletContext } from 'react-router-dom'
import EmployeeCard from '../components/EmployeeCard'
import EmployeeModal from '../components/EmployeeModal'
import employeesData from '../data/employees'
import { useMemo, useState } from 'react'

export default function Employees(){
  const { search } = useOutletContext()
  const [dept, setDept] = useState('All')
  const [selected, setSelected] = useState(null)

  const departments = useMemo(() => ['All', ...Array.from(new Set(employeesData.map((e) => e.department)))], [])

  const list = useMemo(() => {
    const query = search.trim().toLowerCase()
    return employeesData
      .filter((e) => dept === 'All' || e.department === dept)
      .filter((e) => {
        if (!query) return true
        return e.name.toLowerCase().includes(query) || e.id === query
      })
  }, [dept, search])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Employees</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Search by name or employee ID, filter departments, and open quick views.</p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="rounded-3xl bg-slate-100 dark:bg-slate-800 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">Showing {list.length} of {employeesData.length}</div>
          <select value={dept} onChange={(e)=>setDept(e.target.value)} className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-sm text-slate-900 dark:text-slate-100">
            {departments.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4">
        {list.length > 0 ? (
          list.map((emp) => (
            <EmployeeCard key={emp.id} employee={emp} onQuickView={setSelected} />
          ))
        ) : (
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 text-center text-slate-500 dark:text-slate-400">
            No employees matched your search. Try a different name, ID, or department.
          </div>
        )}
      </div>

      <EmployeeModal open={!!selected} onClose={() => setSelected(null)} employee={selected} />
    </div>
  )
}
