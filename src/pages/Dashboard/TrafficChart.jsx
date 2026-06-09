import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function TrafficChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
      <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
        <XAxis dataKey="name" stroke="#64748b" axisLine={false} tickLine={false} />
        <YAxis stroke="#64748b" axisLine={false} tickLine={false} />
        <Tooltip 
          cursor={{ fill: '#1e293b', opacity: 0.4 }}
          contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px', color: '#f8fafc' }}
        />
        <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }}/>
        <Bar dataKey="direct" stackId="a" fill="#3b82f6" radius={[0, 0, 4, 4]} />
        <Bar dataKey="organic" stackId="a" fill="#8b5cf6" />
        <Bar dataKey="social" stackId="a" fill="#10b981" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
