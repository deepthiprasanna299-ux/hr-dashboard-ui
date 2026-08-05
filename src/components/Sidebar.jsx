import { NavLink } from "react-router-dom";
import { Home, Users, Briefcase, Calendar, Settings, X } from 'lucide-react'

export default function Sidebar({ collapsed = false, mobileOpen = false, onClose = () => {} }) {
  const baseClasses = 'bg-white dark:bg-slate-950 transition-all duration-300 min-h-screen border-r border-slate-200 dark:border-slate-800';
  const widthClasses = collapsed ? 'lg:w-20' : 'lg:w-72';

  return (
    <>
      {mobileOpen && <div className="fixed inset-0 z-40 bg-slate-900/60 lg:hidden" onClick={onClose} />}
      <aside className={`${baseClasses} ${mobileOpen ? 'fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-slate-950 shadow-2xl' : 'hidden'} ${widthClasses} lg:block`}>
        <div className={`p-4 flex items-center gap-3 ${collapsed ? 'justify-center' : ''}`}>
          <div className="w-10 h-10 bg-purple-600 rounded text-white flex items-center justify-center">C</div>
          {!collapsed && <div className="font-semibold text-slate-900 dark:text-slate-100">Craftive Labs</div>}
          {mobileOpen && (
            <button onClick={onClose} className="ml-auto rounded-full p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 lg:hidden">
              <X size={18} />
            </button>
          )}
        </div>

        <nav className="px-2 pb-4 space-y-2">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'flex items-center gap-3 px-3 py-3 rounded-2xl bg-purple-600 text-white' : 'flex items-center gap-3 px-3 py-3 rounded-2xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'}>
            <Home size={18} /> {!collapsed && 'Dashboard'}
          </NavLink>
          <NavLink to="/employees" className={({ isActive }) => isActive ? 'flex items-center gap-3 px-3 py-3 rounded-2xl bg-purple-600 text-white' : 'flex items-center gap-3 px-3 py-3 rounded-2xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'}>
            <Users size={18} /> {!collapsed && 'Employees'}
          </NavLink>
          <NavLink to="/hiring" className={({ isActive }) => isActive ? 'flex items-center gap-3 px-3 py-3 rounded-2xl bg-purple-600 text-white transition duration-200' : 'flex items-center gap-3 px-3 py-3 rounded-2xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-200'}>
            <Briefcase size={18} /> {!collapsed && 'Hiring'}
          </NavLink>
          <NavLink to="/calendar" className={({ isActive }) => isActive ? 'flex items-center gap-3 px-3 py-3 rounded-2xl bg-purple-600 text-white transition duration-200' : 'flex items-center gap-3 px-3 py-3 rounded-2xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-200'}>
            <Calendar size={18} /> {!collapsed && 'Calendar'}
          </NavLink>
          <NavLink to="/settings" className={({ isActive }) => isActive ? 'flex items-center gap-3 px-3 py-3 rounded-2xl bg-purple-600 text-white transition duration-200' : 'flex items-center gap-3 px-3 py-3 rounded-2xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-200'}>
            <Settings size={18} /> {!collapsed && 'Settings'}
          </NavLink>
        </nav>
      </aside>
    </>
  )
}
