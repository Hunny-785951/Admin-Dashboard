import React from 'react';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-warm-bg dark:bg-slate-950 flex items-center justify-center p-4 transition-colors duration-300">
      <Outlet />
    </div>
  );
};
