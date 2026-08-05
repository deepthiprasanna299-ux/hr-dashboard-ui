export default function Profile(){
  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] bg-white/90 p-6 shadow-md border border-slate-200/80 dark:bg-slate-950/90 dark:border-slate-800">
        <div className="flex items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center text-white text-2xl font-semibold">D</div>
          <div>
            <h2 className="text-2xl font-semibold">Deepthi</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">HR Manager</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Email</p>
            <p className="font-medium">deepthi@example.com</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Phone</p>
            <p className="font-medium">+1 (555) 123-4567</p>
          </div>
        </div>
      </section>
    </div>
  )
}
