import React, { Suspense, lazy } from 'react';
import { m } from 'framer-motion';
import CountUp from 'react-countup';
import { Users, DollarSign, Activity, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/common/Card';
import { staggerContainerVariants, staggerItemVariants, fadeVariants } from '../../motion/variants';

const RevenueChart = lazy(() => import('./RevenueChart'));

const data = [
  { name: 'Jan', revenue: 4000, users: 2400 },
  { name: 'Feb', revenue: 3000, users: 1398 },
  { name: 'Mar', revenue: 2000, users: 9800 },
  { name: 'Apr', revenue: 2780, users: 3908 },
  { name: 'May', revenue: 1890, users: 4800 },
  { name: 'Jun', revenue: 2390, users: 3800 },
  { name: 'Jul', revenue: 3490, users: 4300 },
];

const stats = [
  { title: 'Total Revenue', value: 45231.89, prefix: '$', icon: DollarSign, trend: '+20.1%' },
  { title: 'Active Users', value: 2350, prefix: '', icon: Users, trend: '+15.2%' },
  { title: 'Conversion Rate', value: 4.3, prefix: '', suffix: '%', icon: Activity, trend: '+2.1%' },
  { title: 'Growth', value: 12.5, prefix: '', suffix: '%', icon: TrendingUp, trend: '+4.1%' },
];

export const Overview = () => {
  return (
    <m.div
      variants={fadeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-6"
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary dark:text-white">Overview</h1>
        <p className="text-text-secondary dark:text-slate-400">Here's what's happening with your projects today.</p>
      </div>

      <m.div 
        variants={staggerContainerVariants}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
      >
        {stats.map((stat, i) => (
          <m.div key={stat.title} variants={staggerItemVariants}>
            <Card className="hover:border-accent-primary/50 transition-colors duration-300">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-text-secondary dark:text-slate-400">{stat.title}</CardTitle>
                <div className="h-8 w-8 rounded-full bg-warm-hover text-accent-primary dark:bg-blue-500/10 flex items-center justify-center dark:text-blue-500">
                  <stat.icon size={16} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-text-primary dark:text-white">
                  {stat.prefix}
                  {typeof CountUp === 'object' && CountUp.default ? (
                    <CountUp.default end={stat.value} decimals={stat.value % 1 !== 0 ? 2 : 0} duration={2.5} separator="," />
                  ) : (
                    <CountUp end={stat.value} decimals={stat.value % 1 !== 0 ? 2 : 0} duration={2.5} separator="," />
                  )}
                  {stat.suffix}
                </div>
                <p className="text-xs text-emerald-500 mt-1 flex items-center gap-1 font-medium">
                  {stat.trend} from last month
                </p>
              </CardContent>
            </Card>
          </m.div>
        ))}
      </m.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle className="text-text-primary dark:text-white">Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent className="h-[350px]">
            <Suspense fallback={<div className="h-full w-full flex items-center justify-center text-text-secondary">Loading chart...</div>}>
              <RevenueChart data={data} />
            </Suspense>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle className="text-text-primary dark:text-white">Recent Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-warm-hover border-warm-border text-text-secondary dark:bg-slate-800 flex items-center justify-center border dark:border-slate-700">
                    <span className="text-sm font-medium dark:text-slate-300">U{i}</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none text-text-primary dark:text-slate-200">User Name {item}</p>
                    <p className="text-sm text-text-secondary dark:text-slate-400">user{item}@example.com</p>
                  </div>
                  <div className="text-sm font-bold text-text-primary dark:text-white">+$299.00</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </m.div>
  );
};
