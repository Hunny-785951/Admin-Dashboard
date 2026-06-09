import React from 'react';
import { cn } from '../../lib/utils';
import { m } from 'framer-motion';

const variants = {
  primary: 'bg-accent-primary text-white hover:opacity-90 shadow-lg shadow-accent-primary/30',
  secondary: 'bg-stone-200 text-text-primary hover:bg-stone-300 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
  outline: 'border border-stone-300 bg-transparent hover:bg-warm-hover text-text-primary dark:border-slate-700 dark:hover:bg-slate-800 dark:text-slate-200',
  ghost: 'hover:bg-warm-hover text-text-secondary hover:text-text-primary dark:hover:bg-slate-800 dark:text-slate-300 dark:hover:text-slate-100',
  danger: 'bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/30',
};

const sizes = {
  sm: 'h-9 px-3 text-xs',
  md: 'h-10 px-4 py-2',
  lg: 'h-11 px-8',
  icon: 'h-10 w-10',
};

const Button = ({ className, variant = 'primary', size = 'md', asChild = false, children, ref, ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95 duration-200';
  
  const Comp = asChild ? m.div : m.button;

  return (
    <Comp
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </Comp>
  );
};

Button.displayName = 'Button';

export { Button };
