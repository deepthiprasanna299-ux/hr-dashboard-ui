export default function WelcomeCard(){
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-600 via-fuchsia-600 to-sky-500 p-8 shadow-[0_30px_90px_-30px_rgba(79,70,229,0.55)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.24),_transparent_35%)]" />
      <div className="relative grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-200/70">HR command center</p>
          <h2 className="text-4xl font-semibold tracking-tight">Welcome back, Deepthi.</h2>
          <p className="max-w-xl text-sm leading-7 text-slate-100/95">Review your team’s performance, upcoming interviews, and people analytics all on one polished report.</p>
          <div className="flex flex-wrap gap-3">
            <div className="rounded-3xl bg-white/10 px-4 py-3">
              <div className="text-xs uppercase tracking-[0.3em] text-slate-200/70">Pending interviews</div>
              <div className="mt-2 text-2xl font-semibold">5</div>
            </div>
            <div className="rounded-3xl bg-white/10 px-4 py-3">
              <div className="text-xs uppercase tracking-[0.3em] text-slate-200/70">Team happiness</div>
              <div className="mt-2 text-2xl font-semibold">92%</div>
            </div>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-200/70">Monthly growth</p>
              <p className="mt-3 text-3xl font-semibold">+18%</p>
            </div>
            <div className="rounded-3xl bg-white/15 px-3 py-2 text-xs font-semibold uppercase text-slate-100/90">On track</div>
          </div>
          <div className="mt-6 space-y-4">
            {[
              {label: 'New hires', value: '12', progress: 'w-3/5'},
              {label: 'Retention', value: '94%', progress: 'w-5/6'},
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex items-center justify-between text-sm text-slate-200/80">
                  <span>{item.label}</span>
                  <span className="font-semibold">{item.value}</span>
                </div>
                <div className="h-2 rounded-full bg-white/15">
                  <div className={`h-full rounded-full bg-white ${item.progress}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
