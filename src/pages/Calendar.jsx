export default function CalendarPage(){
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Calendar</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Review HR events, team meetings, and planned coaching sessions.</p>
        </div>
      </div>

      <section className="rounded-[2rem] bg-white/90 p-6 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.15)] border border-slate-200/80 dark:bg-slate-950/90 dark:border-slate-800">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Upcoming schedule</h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Key HR and team events for the next two weeks.</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {date: 'Sep 13', title: 'All hands review', time: '10:00 AM'},
            {date: 'Sep 14', title: 'Hiring sync', time: '11:30 AM'},
            {date: 'Sep 16', title: 'Performance check-in', time: '2:00 PM'},
            {date: 'Sep 18', title: 'Pulse survey review', time: '4:00 PM'},
          ].map((event) => (
            <div key={event.date + event.title} className="rounded-3xl bg-slate-50 dark:bg-slate-900 p-5 transition duration-200 hover:bg-slate-100 dark:hover:bg-slate-800">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{event.title}</div>
                  <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{event.date}</div>
                </div>
                <span className="rounded-3xl bg-purple-50 dark:bg-purple-900/20 px-3 py-1 text-sm font-semibold text-purple-600 dark:text-purple-200">{event.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
