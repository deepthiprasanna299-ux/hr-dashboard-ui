export default function EmployeeModal({open, onClose, employee}){
  if(!open || !employee) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-8">
      <div className="w-full max-w-lg rounded-3xl bg-white dark:bg-slate-900 p-8 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold">{employee.name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{employee.role} • {employee.department}</p>
          </div>
          <button onClick={onClose} className="rounded-full border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm">Close</button>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 dark:bg-slate-950 p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Email</div>
            <div className="mt-2 font-medium">{employee.email}</div>
          </div>
          <div className="rounded-3xl bg-slate-50 dark:bg-slate-950 p-4">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Phone</div>
            <div className="mt-2 font-medium">{employee.phone}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
