import React from 'react';
import { cn } from '../../lib/utils';
import { m } from 'framer-motion';

const Card = ({ className, children, ref, ...props }) => (
  <m.div
    ref={ref}
    className={cn(
      'rounded-2xl border border-warm-border bg-white text-text-primary shadow-xl overflow-hidden transition-colors duration-300',
      'dark:border-slate-800 dark:bg-slate-900/50 dark:backdrop-blur-xl dark:text-slate-100',
      className
    )}
    {...props}
  >
    {children}
  </m.div>
);
Card.displayName = 'Card';

const CardHeader = ({ className, children, ref, ...props }) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  >
    {children}
  </div>
);
CardHeader.displayName = 'CardHeader';

const CardTitle = ({ className, children, ref, ...props }) => (
  <h3
    ref={ref}
    className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    {...props}
  >
    {children}
  </h3>
);
CardTitle.displayName = 'CardTitle';

const CardDescription = ({ className, children, ref, ...props }) => (
  <p
    ref={ref}
    className={cn('text-sm text-text-secondary dark:text-slate-400', className)}
    {...props}
  >
    {children}
  </p>
);
CardDescription.displayName = 'CardDescription';

const CardContent = ({ className, children, ref, ...props }) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props}>
    {children}
  </div>
);
CardContent.displayName = 'CardContent';

const CardFooter = ({ className, children, ref, ...props }) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  >
    {children}
  </div>
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
