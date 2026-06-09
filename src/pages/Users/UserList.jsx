import React from 'react';
import { m } from 'framer-motion';
import { fadeVariants, staggerContainerVariants, staggerItemVariants } from '../../motion/variants';
import { Card, CardContent } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { MoreVertical, Mail, Phone, Calendar, Shield, Activity } from 'lucide-react';
import { cn } from '../../lib/utils';

const users = [
  { id: 1, name: 'Alice Cooper', role: 'Admin', email: 'alice@admin.com', phone: '+1 234 567 8900', lastActive: '2 mins ago', status: 'Online', initials: 'AC', color: 'from-blue-500 to-indigo-600' },
  { id: 2, name: 'Bob Smith', role: 'Editor', email: 'bob.smith@example.com', phone: '+1 987 654 3210', lastActive: '1 hour ago', status: 'Offline', initials: 'BS', color: 'from-emerald-400 to-teal-500' },
  { id: 3, name: 'Charlie Davis', role: 'Viewer', email: 'charlie.d@example.com', phone: '+1 555 123 4567', lastActive: '3 days ago', status: 'Offline', initials: 'CD', color: 'from-orange-400 to-pink-500' },
  { id: 4, name: 'Diana Prince', role: 'Admin', email: 'diana@admin.com', phone: '+1 888 999 0000', lastActive: 'Just now', status: 'Online', initials: 'DP', color: 'from-purple-500 to-fuchsia-600' },
  { id: 5, name: 'Evan Wright', role: 'Editor', email: 'evan@example.com', phone: '+1 333 444 5555', lastActive: '5 hours ago', status: 'Offline', initials: 'EW', color: 'from-cyan-400 to-blue-500' },
  { id: 6, name: 'Fiona Gallagher', role: 'Viewer', email: 'fiona@example.com', phone: '+1 777 888 9999', lastActive: '12 mins ago', status: 'Online', initials: 'FG', color: 'from-rose-400 to-red-500' },
];

const getRoleBadge = (role) => {
  switch (role) {
    case 'Admin': return 'danger';
    case 'Editor': return 'primary';
    case 'Viewer': return 'default';
    default: return 'outline';
  }
};

export const UserList = () => {
  return (
    <m.div
      variants={fadeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-text-primary dark:text-white">Users</h1>
          <p className="text-text-secondary dark:text-slate-400">Manage system users, roles, and access control.</p>
        </div>
        <Button variant="primary" className="shrink-0" type="button">
          Invite User
        </Button>
      </div>

      <m.div 
        variants={staggerContainerVariants}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {users.map((user) => (
          <m.div key={user.id} variants={staggerItemVariants}>
            <Card className="group relative overflow-hidden hover:border-stone-300 dark:hover:border-slate-700 transition-all duration-300">
              <div className="absolute top-0 w-full h-24 bg-warm-hover border-b border-warm-border dark:bg-slate-900/80 dark:border-slate-800"></div>
              
              <CardContent className="pt-12 pb-6 px-6 relative z-10 flex flex-col items-center text-center">
                <div className="absolute top-4 right-4">
                  <button type="button" aria-label="More actions" className="text-text-muted hover:text-text-primary dark:text-slate-400 dark:hover:text-white transition-colors bg-white/50 dark:bg-slate-950/50 p-1.5 rounded-full backdrop-blur-sm">
                    <MoreVertical size={16} />
                  </button>
                </div>

                <div className={cn("h-20 w-20 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-xl ring-4 ring-white dark:ring-slate-950 bg-gradient-to-tr mb-4", user.color)}>
                  {user.initials}
                </div>
                
                <h3 className="text-lg font-bold text-text-primary dark:text-white leading-tight">{user.name}</h3>
                <p className="text-sm text-text-secondary dark:text-slate-400 mb-4">{user.email}</p>
                
                <Badge variant={getRoleBadge(user.role)} className="mb-6 flex items-center gap-1.5">
                  <Shield size={12} />
                  {user.role}
                </Badge>

                <div className="w-full space-y-3">
                  <div className="flex items-center gap-3 text-sm text-text-secondary bg-warm-bg border border-warm-border dark:text-slate-400 dark:bg-slate-900/50 p-2.5 rounded-xl dark:border-slate-800/50">
                    <Phone size={14} className="text-text-muted dark:text-slate-500" />
                    <span>{user.phone}</span>
                  </div>
                  
                  <div className="flex justify-between items-center bg-warm-bg border border-warm-border dark:bg-slate-900/50 p-2.5 rounded-xl dark:border-slate-800/50">
                    <div className="flex items-center gap-2 text-sm">
                      <div className={cn("h-2 w-2 rounded-full", user.status === 'Online' ? 'bg-emerald-500 animate-pulse' : 'bg-stone-300 dark:bg-slate-600')}></div>
                      <span className={user.status === 'Online' ? 'text-emerald-600 dark:text-emerald-500 font-medium' : 'text-text-muted dark:text-slate-500'}>{user.status}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-text-muted dark:text-slate-500">
                      <Activity size={12} />
                      {user.lastActive}
                    </div>
                  </div>
                </div>
              </CardContent>
              
              {/* Subtle hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-50 dark:to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>
          </m.div>
        ))}
      </m.div>
    </m.div>
  );
};
