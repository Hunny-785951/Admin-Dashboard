import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/navigation/Sidebar';
import { Navbar } from '../components/navigation/Navbar';
import { useUIStore } from '../store/uiStore';
import { m } from 'framer-motion';

export const AdminLayout = () => {
  const { isSidebarOpen } = useUIStore();

  return (
    <div className="min-h-screen bg-warm-bg text-text-primary dark:bg-slate-950 dark:text-slate-50 flex transition-colors duration-300">
      <Sidebar />
      <m.div
        animate={{ 
          marginLeft: isSidebarOpen ? '260px' : '80px',
        }}
        transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
        className="flex-1 flex flex-col min-w-0"
      >
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-warm-bg dark:bg-slate-950 p-6 transition-colors duration-300">
          <Outlet />
        </main>
      </m.div>
    </div>
  );
};
