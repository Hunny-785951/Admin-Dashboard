import React, { Suspense, lazy } from 'react';
import { m } from 'framer-motion';
import { Globe, Clock, Smartphone, Monitor } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/common/Card';
import { staggerContainerVariants, staggerItemVariants, fadeVariants } from '../../motion/variants';

const TrafficChart = lazy(() => import('./TrafficChart'));
const DeviceChart = lazy(() => import('./DeviceChart'));

const trafficData = [
  { name: 'Mon', direct: 400, organic: 240, social: 150 },
  { name: 'Tue', direct: 300, organic: 139, social: 220 },
  { name: 'Wed', direct: 200, organic: 980, social: 180 },
  { name: 'Thu', direct: 278, organic: 390, social: 210 },
  { name: 'Fri', direct: 189, organic: 480, social: 290 },
  { name: 'Sat', direct: 239, organic: 380, social: 310 },
  { name: 'Sun', direct: 349, organic: 430, social: 410 },
];

const deviceData = [
  { name: 'Mobile', value: 55 },
  { name: 'Desktop', value: 35 },
  { name: 'Tablet', value: 10 },
];

const COLORS = ['#3b82f6', '#8b5cf6', '#10b981'];

const metrics = [
  { title: 'Avg. Session', value: '2m 34s', icon: Clock, trend: '+12%' },
  { title: 'Bounce Rate', value: '42.3%', icon: Globe, trend: '-2.1%' },
  { title: 'Mobile Users', value: '55%', icon: Smartphone, trend: '+5.4%' },
  { title: 'Desktop Users', value: '35%', icon: Monitor, trend: '-1.2%' },
];

export const Analytics = () => {
  return (
    <m.div
      variants={fadeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-6"
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary dark:text-white">Analytics</h1>
        <p className="text-text-secondary dark:text-slate-400">Deep dive into your traffic and audience data.</p>
      </div>

      <m.div 
        variants={staggerContainerVariants}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {metrics.map((metric) => (
          <m.div key={metric.title} variants={staggerItemVariants}>
            <Card className="hover:border-indigo-500/50 transition-colors duration-300">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-text-secondary dark:text-slate-400">{metric.title}</CardTitle>
                <div className="h-8 w-8 rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 flex items-center justify-center dark:text-indigo-500">
                  <metric.icon size={16} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-text-primary dark:text-white">{metric.value}</div>
                <p className={`text-xs mt-1 flex items-center gap-1 font-medium ${metric.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                  {metric.trend} from last week
                </p>
              </CardContent>
            </Card>
          </m.div>
        ))}
      </m.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="text-text-primary dark:text-white">Traffic Sources Overview</CardTitle>
          </CardHeader>
          <CardContent className="h-[350px]">
            <Suspense fallback={<div className="h-full w-full flex items-center justify-center text-text-secondary">Loading chart...</div>}>
              <TrafficChart data={trafficData} />
            </Suspense>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-text-primary dark:text-white">Device Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-[350px] flex items-center justify-center">
            <Suspense fallback={<div className="h-full w-full flex items-center justify-center text-text-secondary">Loading chart...</div>}>
              <DeviceChart data={deviceData} colors={COLORS} />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </m.div>
  );
};
