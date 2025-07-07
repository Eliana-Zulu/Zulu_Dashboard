
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', profit: 145000, margin: 7.2 },
  { month: 'Feb', profit: 168000, margin: 7.8 },
  { month: 'Mar', profit: 192000, margin: 8.1 },
  { month: 'Apr', profit: 175000, margin: 7.9 },
  { month: 'May', profit: 205000, margin: 8.3 },
  { month: 'Jun', profit: 225000, margin: 8.6 },
];

export const ProfitabilityChart = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="month" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <YAxis 
            yAxisId="profit"
            orientation="left"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
          />
          <YAxis 
            yAxisId="margin"
            orientation="right"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickFormatter={(value) => `${value}%`}
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
          <Bar 
            yAxisId="profit"
            dataKey="profit" 
            fill="hsl(328 100% 63%)" 
            name="Monthly Profit"
            radius={[4, 4, 0, 0]}
          />
          <Line 
            yAxisId="margin"
            type="monotone" 
            dataKey="margin" 
            stroke="hsl(219 100% 53%)" 
            strokeWidth={3}
            name="Profit Margin %"
            dot={{ fill: 'hsl(219 100% 53%)', strokeWidth: 2, r: 4 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
