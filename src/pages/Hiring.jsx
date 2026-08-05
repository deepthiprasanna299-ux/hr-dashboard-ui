export default function Hiring(){
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Hiring</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Track open positions, candidate pipelines, and interview planning.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[2rem] bg-white/90 p-6 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.15)] border border-slate-200/80 dark:bg-slate-950/90 dark:border-slate-800">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Open positions</h2>
          <div className="mt-4 space-y-3">
            {['Product Designer', 'Frontend Engineer', 'HR Coordinator'].map((role) => (
              <div key={role} className="rounded-3xl bg-slate-50 dark:bg-slate-900 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">{role}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">3 candidates in review</p>
                  </div>
                  <span className="rounded-3xl bg-purple-50 dark:bg-purple-900/20 px-3 py-2 text-sm font-semibold text-purple-600 dark:text-purple-200">Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-white/90 p-6 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.15)] border border-slate-200/80 dark:bg-slate-950/90 dark:border-slate-800">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Interview calendar</h2>
          <div className="mt-4 space-y-4">
            {['Sep 13 - Talent interview', 'Sep 14 - Hiring sync', 'Sep 16 - Offer review'].map((item) => (
              <div key={item} className="rounded-3xl bg-slate-50 dark:bg-slate-900 p-4">
                <div className="text-sm text-slate-900 dark:text-slate-100">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
