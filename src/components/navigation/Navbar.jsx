import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Bell, Search, User, Info, CheckCircle, Clock } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';

const mockNotifications = [
  {
    id: 1,
    title: 'New User Registered',
    message: 'Alice Smith just joined the platform.',
    time: '2 mins ago',
    unread: true,
    type: 'user'
  },
  {
    id: 2,
    title: 'Server Update',
    message: 'Server maintenance completed successfully.',
    time: '1 hour ago',
    unread: false,
    type: 'system'
  },
  {
    id: 3,
    title: 'New Order #1234',
    message: 'You received a new order for $120.00.',
    time: '3 hours ago',
    unread: true,
    type: 'order'
  }
];

export const Navbar = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-warm-border bg-white/80 dark:border-slate-800 dark:bg-slate-950/80 px-6 backdrop-blur-xl transition-colors duration-300">
      <div className="flex items-center gap-4">
        {/* Breadcrumbs Placeholder */}
        <div className="hidden md:flex items-center text-sm text-text-secondary dark:text-slate-400">
          <span className="hover:text-text-primary dark:hover:text-white cursor-pointer transition-colors">Dashboard</span>
          {pathnames.length > 0 && (
            <>
              <span className="mx-2">/</span>
              <span className="text-text-primary dark:text-white capitalize">{pathnames[0]}</span>
            </>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <label htmlFor="search-input" className="sr-only">Search</label>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted dark:text-slate-500" size={18} />
          <input 
            id="search-input"
            type="text" 
            placeholder="Search..." 
            aria-label="Search"
            className="h-10 w-64 rounded-full border border-warm-border bg-warm-bg pl-10 pr-4 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
          />
        </div>
        
        <div className="relative" ref={notificationRef}>
          <m.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            aria-label="Notifications"
            className="relative rounded-full p-2 text-text-secondary hover:bg-warm-hover hover:text-text-primary dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
          >
            <Bell size={20} />
            <span className="absolute right-1.5 top-1.5 flex h-2 w-2 rounded-full bg-red-500">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
            </span>
          </m.button>

          <AnimatePresence>
            {isNotificationsOpen && (
              <m.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-80 rounded-2xl border border-warm-border bg-white/90 p-4 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90 z-50 origin-top-right"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-text-primary dark:text-white">Notifications</h3>
                  <button className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Mark all as read</button>
                </div>
                
                <div className="flex max-h-[320px] flex-col gap-3 overflow-y-auto pr-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
                  {mockNotifications.map((notif) => (
                    <div 
                      key={notif.id} 
                      className={`relative flex gap-3 rounded-xl p-3 transition-colors hover:bg-warm-hover dark:hover:bg-slate-800/50 cursor-pointer ${notif.unread ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''}`}
                    >
                      {notif.unread && (
                        <span className="absolute left-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                      )}
                      <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        notif.type === 'user' ? 'bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400' :
                        notif.type === 'system' ? 'bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400' :
                        'bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400'
                      }`}>
                        {notif.type === 'user' ? <User size={16} /> :
                         notif.type === 'system' ? <Info size={16} /> :
                         <CheckCircle size={16} />}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-text-primary dark:text-white">{notif.title}</span>
                        <span className="text-xs text-text-secondary dark:text-slate-400 mt-0.5">{notif.message}</span>
                        <div className="mt-1.5 flex items-center gap-1 text-[10px] text-text-muted dark:text-slate-500">
                          <Clock size={10} />
                          <span>{notif.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 border-t border-warm-border dark:border-slate-800 pt-3">
                  <button className="w-full rounded-lg py-2 text-sm font-medium text-text-secondary transition-colors hover:bg-warm-hover hover:text-text-primary dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">
                    View all notifications
                  </button>
                </div>
              </m.div>
            )}
          </AnimatePresence>
        </div>
        
        <div 
          role="button"
          tabIndex={0}
          aria-label="User Profile"
          className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center border-2 border-white dark:border-slate-800 cursor-pointer shadow-lg shadow-blue-500/20"
        >
          <User size={16} className="text-white" />
        </div>
      </div>
    </header>
  );
};
