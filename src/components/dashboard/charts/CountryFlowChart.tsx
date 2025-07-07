
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { country: 'USA', inflow: 850000, outflow: 780000 },
  { country: 'UK', inflow: 620000, outflow: 590000 },
  { country: 'Germany', inflow: 480000, outflow: 450000 },
  { country: 'Canada', inflow: 380000, outflow: 360000 },
  { country: 'France', inflow: 320000, outflow: 300000 },
  { country: 'Brazil', inflow: 280000, outflow: 270000 },
];

export const CountryFlowChart = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="horizontal">
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            type="number"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
          />
          <YAxis 
            type="category"
            dataKey="country"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            width={60}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              color: 'hsl(var(--foreground))'
            }}
            formatter={(value: number) => [`$${(value / 1000).toFixed(0)}K`, '']}
          />
          <Bar dataKey="inflow" fill="hsl(142 76% 36%)" name="Inflow" radius={[0, 4, 4, 0]} />
          <Bar dataKey="outflow" fill="hsl(38 92% 50%)" name="Outflow" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
