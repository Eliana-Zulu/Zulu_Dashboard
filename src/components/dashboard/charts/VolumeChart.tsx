
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2024-01', cashIn: 1800000, cashOut: 1650000, usdc: 1200000 },
  { date: '2024-02', cashIn: 2100000, cashOut: 1950000, usdc: 1450000 },
  { date: '2024-03', cashIn: 2400000, cashOut: 2200000, usdc: 1800000 },
  { date: '2024-04', cashIn: 2200000, cashOut: 2000000, usdc: 1600000 },
  { date: '2024-05', cashIn: 2600000, cashOut: 2400000, usdc: 1900000 },
  { date: '2024-06', cashIn: 2800000, cashOut: 2550000, usdc: 2100000 },
];

export const VolumeChart = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="date" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              color: 'hsl(var(--foreground))'
            }}
            formatter={(value: number) => [`$${(value / 1000000).toFixed(2)}M`, '']}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="cashIn" 
            stroke="hsl(328 100% 63%)" 
            strokeWidth={3}
            name="Cash-In Volume"
            dot={{ fill: 'hsl(328 100% 63%)', strokeWidth: 2, r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="cashOut" 
            stroke="hsl(39 100% 50%)" 
            strokeWidth={3}
            name="Cash-Out Volume"
            dot={{ fill: 'hsl(39 100% 50%)', strokeWidth: 2, r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="usdc" 
            stroke="hsl(219 100% 53%)" 
            strokeWidth={3}
            name="USDC Volume"
            dot={{ fill: 'hsl(219 100% 53%)', strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
