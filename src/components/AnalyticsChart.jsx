export default function AnalyticsChart({ title, description, data, attendance }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const sampleAttendance = attendance ?? [90, 85, 92, 88, 84, 70, 60]

  return (
    <section className="rounded-[2rem] bg-white/90 p-6 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.25)] border border-slate-200/80 dark:bg-slate-950/90 dark:border-slate-800">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400 dark:text-slate-500">{title}</p>
          <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">{description}</p>
        </div>
        <div className="rounded-3xl bg-slate-100/90 px-4 py-2 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-200">Total {total} employees</div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.9fr] items-start">
        <div className="space-y-4">
          {data.map((item) => (
            <div key={item.label} className="rounded-3xl bg-slate-50 dark:bg-slate-950 p-4 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{item.label}</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.value} employees</p>
                </div>
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">{Math.round((item.value / total) * 100)}%</div>
              </div>
              <div className="mt-4 h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div className={`h-full rounded-full bg-gradient-to-r ${item.color}`} style={{ width: `${Math.round((item.value / total) * 100)}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[2rem] border border-slate-200/80 bg-slate-100 p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Department mix</div>
          <div className="mt-6 grid gap-4">
            {data.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <span className={`inline-flex h-4 w-4 rounded-full bg-gradient-to-r ${item.color}`} />
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{item.label}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{Math.round((item.value / total) * 100)}% of team</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 border-t border-slate-200/80 pt-4 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <div className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Weekly attendance</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Avg {Math.round(sampleAttendance.reduce((a,b)=>a+b,0)/sampleAttendance.length)}%</div>
            </div>
            <div className="mt-3 flex items-end gap-2 h-24">
              {sampleAttendance.map((val, idx) => (
                <div key={idx} className="flex-1">
                  <div className="h-full flex items-end">
                    <div className={`mx-auto w-4 rounded-t-lg bg-gradient-to-b from-emerald-400 to-emerald-600`} style={{ height: `${val}%` }} />
                  </div>
                  <div className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400">{['S','M','T','W','T','F','S'][idx]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
