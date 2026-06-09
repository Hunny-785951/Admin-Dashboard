import React from 'react';
import { useLocation } from 'react-router-dom';
import { Bell, Search, User } from 'lucide-react';
import { m } from 'framer-motion';

export const Navbar = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

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
        
        <m.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Notifications"
          className="relative rounded-full p-2 text-text-secondary hover:bg-warm-hover hover:text-text-primary dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
        >
          <Bell size={20} />
          <span className="absolute right-1.5 top-1.5 flex h-2 w-2 rounded-full bg-red-500">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
          </span>
        </m.button>
        
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
