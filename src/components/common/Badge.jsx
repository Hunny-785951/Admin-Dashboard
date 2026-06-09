import React from 'react';
import { cn } from '../../lib/utils';
import { m } from 'framer-motion';

const variants = {
  default: 'border-transparent bg-stone-200 text-stone-800 hover:bg-stone-300 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
  primary: 'border-transparent bg-warm-hover text-accent-primary hover:bg-blue-200 dark:bg-blue-500/10 dark:text-blue-500 dark:hover:bg-blue-500/20',
  success: 'border-transparent bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-500 dark:hover:bg-emerald-500/20',
  warning: 'border-transparent bg-amber-100 text-amber-700 hover:bg-amber-200 dark:bg-amber-500/10 dark:text-amber-500 dark:hover:bg-amber-500/20',
  danger: 'border-transparent bg-accent-danger/10 text-accent-danger hover:bg-red-200 dark:bg-red-500/10 dark:text-red-500 dark:hover:bg-red-500/20',
  outline: 'text-text-secondary border-stone-300 dark:text-slate-300 dark:border-slate-700',
};

const Badge = ({ className, variant = 'default', children, ...props }) => {
  const baseStyles = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';
  
  return (
    <m.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </m.div>
  );
};

export { Badge };
