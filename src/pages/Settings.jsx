export default function Settings(){
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Settings</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Configure platform preferences, theme settings, and account details.</p>
        </div>
      </div>

      <section className="rounded-[2rem] bg-white/90 p-6 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.15)] border border-slate-200/80 dark:bg-slate-950/90 dark:border-slate-800">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 p-5">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Profile</h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Update your profile and company branding settings.</p>
          </div>
          <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 p-5">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Notifications</h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Manage alerts for interviews, approvals, and team updates.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
