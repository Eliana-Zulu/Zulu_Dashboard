
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: 'Jan 2024', volume: 3500000, newUsers: 245, growth: 5.2 },
  { month: 'Feb 2024', volume: 4050000, newUsers: 318, growth: 15.7 },
  { month: 'Mar 2024', volume: 4600000, newUsers: 389, growth: 13.6 },
  { month: 'Apr 2024', volume: 4200000, newUsers: 356, growth: -8.7 },
  { month: 'May 2024', volume: 5000000, newUsers: 425, growth: 19.0 },
  { month: 'Jun 2024', volume: 5350000, newUsers: 468, growth: 7.0 },
  { month: 'Jul 2024', volume: 5800000, newUsers: 512, growth: 8.4 },
];

export const TrendsChart = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(219 100% 53%)" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="hsl(219 100% 53%)" stopOpacity={0.1}/>
            </linearGradient>
            <linearGradient id="usersGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(291 65% 61%)" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="hsl(291 65% 61%)" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="month" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <YAxis 
            yAxisId="volume"
            orientation="left"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
          />
          <YAxis 
            yAxisId="users"
            orientation="right"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              color: 'hsl(var(--foreground))'
            }}
          />
          <Legend />
          <Area
            yAxisId="volume"
            type="monotone"
            dataKey="volume"
            stroke="hsl(219 100% 53%)"
            fillOpacity={1}
            fill="url(#volumeGradient)"
            name="Total Volume"
            strokeWidth={2}
          />
          <Area
            yAxisId="users"
            type="monotone"
            dataKey="newUsers"
            stroke="hsl(291 65% 61%)"
            fillOpacity={1}
            fill="url(#usersGradient)"
            name="New Users"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
