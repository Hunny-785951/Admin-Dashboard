import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AdminLayout } from './layouts/AdminLayout';
import { AuthLayout } from './layouts/AuthLayout';
import { Overview } from './pages/Dashboard/Overview';
import { Analytics } from './pages/Dashboard/Analytics';
import { Inventory } from './pages/eCommerce/Inventory';
import { UserList } from './pages/Users/UserList';
import { Settings } from './pages/Settings/Settings';
import { AnimatePresence, LazyMotion, domAnimation, MotionConfig } from 'framer-motion';
import { useUIStore } from './store/uiStore';

function App() {
  const { theme } = useUIStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              {/* Admin Routes */}
              <Route path="/" element={<AdminLayout />}>
                <Route index element={<Overview />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="inventory" element={<Inventory />} />
                <Route path="users" element={<UserList />} />
                <Route path="settings" element={<Settings />} />
              </Route>

              {/* Auth Routes */}
              <Route element={<AuthLayout />}>
                {/* Future auth pages can go here */}
                <Route path="login" element={<div className="text-white">Login Page</div>} />
              </Route>
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </MotionConfig>
    </LazyMotion>
  );
}

export default App;
