import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'
import { Bell, Sun, Moon, Menu, ChevronDown, LogOut } from 'lucide-react'
import profilePic from '../assets/profile pic.png'

export default function Header({ onToggleCollapse, dark, onToggleDark, search, onSearch }){
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const notifRef = useRef(null)
  const profileRef = useRef(null)
  const navigate = useNavigate()

  const notifications = [
    { id: 1, text: 'Sarah Wilson joined HR', time: '2h' },
    { id: 2, text: 'Rahul requested leave', time: '4h' },
    { id: 3, text: 'Emma completed onboarding', time: '1d' },
  ]

  useEffect(() => {
    function onDoc(e){
      if (notifRef.current && !notifRef.current.contains(e.target)) setShowNotifications(false)
      if (profileRef.current && !profileRef.current.contains(e.target)) setShowProfile(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  return (
    <header className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 dark:border-slate-800 border-b border-slate-200 dark:border-opacity-60 shadow-sm">
      <div className="flex items-center gap-3">
        <button type="button" aria-label="Toggle sidebar" onClick={onToggleCollapse} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-200">
          <Menu size={18} />
        </button>
        <SearchBar value={search} onChange={onSearch} />
      </div>

      <div className="flex items-center gap-4 relative">
        <button type="button" aria-label="Toggle theme" onClick={() => onToggleDark()} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-200">
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <div className="relative" ref={notifRef}>
          <button type="button" aria-label={`Notifications, ${notifications.length} unread`} onClick={() => setShowNotifications((s) => !s)} className="relative p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition duration-200">
            <Bell />
            {notifications.length > 0 && (
              <span aria-hidden className="absolute -top-1 -right-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">{notifications.length}</span>
            )}
          </button>

          {showNotifications && (
            <div role="dialog" aria-label="Notifications panel" className="absolute right-0 z-50 mt-2 w-80 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold">Notifications</div>
                  <button type="button" aria-label="Close notifications" onClick={() => setShowNotifications(false)} className="text-xs text-slate-500">Close</button>
                </div>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-800 max-h-64 overflow-auto">
                {notifications.map((n) => (
                  <div role="button" tabIndex={0} key={n.id} className="p-3 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
                    <div className="text-sm text-slate-900 dark:text-slate-100">{n.text}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{n.time}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="relative" ref={profileRef}>
          <button type="button" aria-label="Open profile menu" onClick={() => setShowProfile((s) => !s)} className="flex items-center gap-3 rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-2 transition duration-200 hover:bg-slate-200 dark:hover:bg-slate-700">
            <img src={profilePic} alt="Profile" className="h-10 w-10 rounded-full object-cover border-2 border-white dark:border-slate-900 shadow-sm" />
            <div className="hidden md:block text-right">
              <div className="font-semibold">Deepthi</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">HR Manager</div>
            </div>
            <ChevronDown className="hidden md:block" />
          </button>

          {showProfile && (
            <div className="absolute right-0 z-50 mt-2 w-48 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden">
              <div className="p-2">
                <button onClick={() => { setShowProfile(false); navigate('/profile') }} className="w-full text-left rounded-xl px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800">Profile</button>
                <button onClick={() => { setShowProfile(false); navigate('/settings') }} className="w-full text-left rounded-xl px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800">Settings</button>
                <div className="border-t border-slate-100 dark:border-slate-800 mt-2" />
                <button onClick={() => { setShowProfile(false); localStorage.removeItem('auth'); navigate('/') }} className="w-full text-left rounded-xl px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2"> <LogOut size={14} /> Logout</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
