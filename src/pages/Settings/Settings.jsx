import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { fadeVariants, slideUpVariants } from '../../motion/variants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { User, Bell, Lock, Palette, Upload, Monitor, Smartphone } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useUIStore } from '../../store/uiStore';

const tabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Lock },
  { id: 'appearance', label: 'Appearance', icon: Palette },
];

export const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const { theme, setTheme } = useUIStore();

  return (
    <m.div
      variants={fadeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-6 max-w-6xl mx-auto"
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary dark:text-white">Settings</h1>
        <p className="text-text-secondary dark:text-slate-400">Manage your account settings and preferences.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 shrink-0">
          <nav className="flex flex-row md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 hide-scrollbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  type="button"
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-sm font-medium whitespace-nowrap",
                    isActive ? "text-text-primary dark:text-white" : "text-text-secondary hover:text-text-primary hover:bg-warm-hover/80 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/50"
                  )}
                >
                  {isActive && (
                    <m.div
                      layoutId="settings-active-tab"
                      className="absolute inset-0 bg-warm-hover border border-warm-border dark:bg-blue-600/10 dark:border-blue-500/20 rounded-xl"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <tab.icon size={18} className="relative z-10" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Tab Content */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            {activeTab === 'profile' && (
              <m.div key="profile" variants={slideUpVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-text-primary dark:text-white">Profile Picture</CardTitle>
                    <CardDescription>Upload a new avatar. Larger image will be resized automatically.</CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center gap-6">
                    <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-3xl font-bold text-white shadow-xl ring-4 ring-white dark:ring-slate-950">
                      A
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Button variant="primary" size="sm" type="button">
                          <Upload size={14} className="mr-2" /> Upload New
                        </Button>
                        <Button variant="outline" size="sm" type="button">Remove</Button>
                      </div>
                      <p className="text-xs text-text-secondary dark:text-slate-500">Max file size is 5MB. Supported formats: .jpg, .png, .svg.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-text-primary dark:text-white">Personal Information</CardTitle>
                    <CardDescription>Update your personal details here.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-text-primary dark:text-slate-300">First Name</label>
                        <input id="firstName" type="text" defaultValue="Admin" className="w-full h-10 rounded-xl border border-warm-border bg-warm-bg px-4 text-sm text-text-primary focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors dark:border-slate-700 dark:bg-slate-900/50 dark:text-white" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-text-primary dark:text-slate-300">Last Name</label>
                        <input id="lastName" type="text" defaultValue="User" className="w-full h-10 rounded-xl border border-warm-border bg-warm-bg px-4 text-sm text-text-primary focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors dark:border-slate-700 dark:bg-slate-900/50 dark:text-white" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label htmlFor="email" className="text-sm font-medium text-text-primary dark:text-slate-300">Email Address</label>
                        <input id="email" type="email" defaultValue="admin@example.com" className="w-full h-10 rounded-xl border border-warm-border bg-warm-bg px-4 text-sm text-text-primary focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors dark:border-slate-700 dark:bg-slate-900/50 dark:text-white" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label htmlFor="bio" className="text-sm font-medium text-text-primary dark:text-slate-300">Bio</label>
                        <textarea id="bio" rows="3" defaultValue="I am the system administrator." className="w-full rounded-xl border border-warm-border bg-warm-bg p-4 text-sm text-text-primary focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors resize-none dark:border-slate-700 dark:bg-slate-900/50 dark:text-white" />
                      </div>
                    </div>
                    <div className="flex justify-end pt-4">
                      <Button variant="primary" type="button">Save Changes</Button>
                    </div>
                  </CardContent>
                </Card>
              </m.div>
            )}

            {activeTab === 'notifications' && (
              <m.div key="notifications" variants={slideUpVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-text-primary dark:text-white">Email Notifications</CardTitle>
                    <CardDescription>Choose what updates you want to receive via email.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      { title: 'Weekly Reports', desc: 'Receive a weekly summary of your workspace activity.' },
                      { title: 'Security Alerts', desc: 'Get notified about unusual account activity immediately.' },
                      { title: 'Product Updates', desc: 'Hear about new features, updates, and product changes.' }
                    ].map((item, i) => (
                      <div key={item.title} className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <h4 className="text-sm font-medium text-text-primary dark:text-slate-200">{item.title}</h4>
                          <p className="text-xs text-text-secondary dark:text-slate-500">{item.desc}</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" aria-label={item.title} className="sr-only peer" defaultChecked={i !== 2} />
                          <div className="w-11 h-6 bg-stone-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 dark:after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-primary"></div>
                        </label>
                      </div>
                    ))}
                    <div className="flex justify-end pt-4">
                      <Button variant="primary" type="button">Save Preferences</Button>
                    </div>
                  </CardContent>
                </Card>
              </m.div>
            )}

            {activeTab === 'security' && (
              <m.div key="security" variants={slideUpVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-text-primary dark:text-white">Change Password</CardTitle>
                    <CardDescription>Ensure your account is using a long, random password to stay secure.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="currentPassword" className="text-sm font-medium text-text-primary dark:text-slate-300">Current Password</label>
                      <input id="currentPassword" type="password" placeholder="••••••••" className="w-full h-10 rounded-xl border border-warm-border bg-warm-bg px-4 text-sm text-text-primary focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors dark:border-slate-700 dark:bg-slate-900/50 dark:text-white" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="newPassword" className="text-sm font-medium text-text-primary dark:text-slate-300">New Password</label>
                      <input id="newPassword" type="password" placeholder="••••••••" className="w-full h-10 rounded-xl border border-warm-border bg-warm-bg px-4 text-sm text-text-primary focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors dark:border-slate-700 dark:bg-slate-900/50 dark:text-white" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="confirmPassword" className="text-sm font-medium text-text-primary dark:text-slate-300">Confirm New Password</label>
                      <input id="confirmPassword" type="password" placeholder="••••••••" className="w-full h-10 rounded-xl border border-warm-border bg-warm-bg px-4 text-sm text-text-primary focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors dark:border-slate-700 dark:bg-slate-900/50 dark:text-white" />
                    </div>
                    <div className="flex justify-end pt-4">
                      <Button variant="primary" type="button">Update Password</Button>
                    </div>
                  </CardContent>
                </Card>
              </m.div>
            )}

            {activeTab === 'appearance' && (
              <m.div key="appearance" variants={slideUpVariants} initial="hidden" animate="visible" exit="exit" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-text-primary dark:text-white">Theme Preferences</CardTitle>
                    <CardDescription>Customize the look and feel of the dashboard.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Dark Mode Option */}
                      <div 
                        role="button"
                        tabIndex={0}
                        onClick={() => setTheme('dark')}
                        onKeyDown={(e) => e.key === 'Enter' && setTheme('dark')}
                        className={cn(
                          "cursor-pointer rounded-xl p-4 flex flex-col items-center gap-3 transition-colors border-2",
                          theme === 'dark' ? "border-accent-primary bg-slate-900" : "border-transparent bg-slate-900 opacity-80 hover:opacity-100"
                        )}
                      >
                        <div className="h-20 w-full rounded-lg bg-slate-950 border border-slate-800 flex overflow-hidden">
                          <div className="w-1/4 h-full bg-slate-900 border-r border-slate-800"></div>
                          <div className="w-3/4 h-full bg-slate-950 p-2 space-y-2">
                            <div className="h-2 w-1/3 bg-slate-800 rounded"></div>
                            <div className="h-8 w-full bg-slate-900 rounded border border-slate-800"></div>
                          </div>
                        </div>
                        <span className={cn("font-medium flex items-center gap-2", theme === 'dark' ? "text-accent-primary" : "text-slate-400")}>
                          <Monitor size={16}/> Dark Mode {theme === 'dark' && "(Active)"}
                        </span>
                      </div>
                      
                      {/* Light Mode Option */}
                      <div 
                        role="button"
                        tabIndex={0}
                        onClick={() => setTheme('light')}
                        onKeyDown={(e) => e.key === 'Enter' && setTheme('light')}
                        className={cn(
                          "cursor-pointer rounded-xl p-4 flex flex-col items-center gap-3 transition-colors border-2",
                          theme === 'light' ? "border-accent-primary bg-warm-bg" : "border-warm-border bg-white dark:border-slate-700 dark:bg-slate-800 opacity-80 hover:opacity-100"
                        )}
                      >
                        <div className="h-20 w-full rounded-lg bg-warm-bg border border-warm-border flex overflow-hidden">
                          <div className="w-1/4 h-full bg-white border-r border-warm-border"></div>
                          <div className="w-3/4 h-full bg-warm-bg p-2 space-y-2">
                            <div className="h-2 w-1/3 bg-stone-200 rounded"></div>
                            <div className="h-8 w-full bg-white rounded border border-warm-border"></div>
                          </div>
                        </div>
                        <span className={cn("font-medium flex items-center gap-2", theme === 'light' ? "text-accent-primary" : "text-text-secondary dark:text-slate-400")}>
                          <Smartphone size={16}/> Light Mode {theme === 'light' && "(Active)"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </m.div>
  );
};
