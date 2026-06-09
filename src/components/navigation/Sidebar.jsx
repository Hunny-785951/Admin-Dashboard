import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { m, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Users, ShoppingCart, Settings, Menu, X, BarChart } from 'lucide-react';
import { useUIStore } from '../../store/uiStore';
import { cn } from '../../lib/utils';

const navItems = [
  { name: 'Overview', path: '/', icon: LayoutDashboard },
  { name: 'Analytics', path: '/analytics', icon: BarChart },
  { name: 'eCommerce', path: '/inventory', icon: ShoppingCart },
  { name: 'Users', path: '/users', icon: Users },
  { name: 'Settings', path: '/settings', icon: Settings },
];

export const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useUIStore();
  const location = useLocation();

  return (
    <m.aside
      initial={false}
      animate={{ 
        width: isSidebarOpen ? '260px' : '80px',
      }}
      className="fixed left-0 top-0 z-40 h-screen border-r border-warm-border bg-white dark:border-slate-800 dark:bg-slate-950 flex flex-col transition-colors duration-300"
    >
      <div className="flex h-16 items-center justify-between px-4 border-b border-warm-border dark:border-slate-800 transition-colors duration-300">
        <AnimatePresence mode="popLayout">
          {isSidebarOpen && (
            <m.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex items-center gap-2 overflow-hidden"
            >
              <div className="h-8 w-8 rounded-xl bg-accent-primary flex items-center justify-center shrink-0 shadow-lg shadow-accent-primary/30">
                <span className="font-bold text-white text-xl">A</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-text-primary dark:text-white whitespace-nowrap">Admin PRO</span>
            </m.div>
          )}
        </AnimatePresence>
        
        <button
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
          className="p-2 rounded-xl text-text-secondary hover:bg-warm-hover hover:text-text-primary dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors ml-auto shrink-0"
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-3 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                "relative flex items-center gap-3 px-3 py-3 rounded-xl transition-colors group",
                isActive ? "text-text-primary dark:text-white" : "text-text-secondary hover:text-text-primary hover:bg-warm-hover/80 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/50"
              )}
            >
              {isActive && (
                <m.div
                  layoutId="active-nav-bg"
                  className="absolute inset-0 bg-warm-hover border border-warm-border dark:bg-blue-600/10 dark:border-blue-500/20 rounded-xl"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <item.icon size={20} className="relative z-10 shrink-0" />
              <AnimatePresence mode="popLayout">
                {isSidebarOpen && (
                  <m.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    className="relative z-10 font-medium whitespace-nowrap overflow-hidden"
                  >
                    {item.name}
                  </m.span>
                )}
              </AnimatePresence>
            </NavLink>
          );
        })}
      </div>
    </m.aside>
  );
};
