
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: 'Jan', flagged: 125, reviewed: 98, resolved: 92 },
  { month: 'Feb', flagged: 145, reviewed: 120, resolved: 115 },
  { month: 'Mar', flagged: 165, reviewed: 140, resolved: 135 },
  { month: 'Apr', flagged: 135, reviewed: 115, resolved: 110 },
  { month: 'May', flagged: 155, reviewed: 130, resolved: 125 },
  { month: 'Jun', flagged: 175, reviewed: 150, resolved: 145 },
];

export const OperationsChart = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="month" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <YAxis 
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
          <Bar dataKey="flagged" fill="hsl(39 100% 50%)" name="Flagged" radius={[2, 2, 0, 0]} />
          <Bar dataKey="reviewed" fill="hsl(219 100% 53%)" name="Reviewed" radius={[2, 2, 0, 0]} />
          <Bar dataKey="resolved" fill="hsl(328 100% 63%)" name="Resolved" radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
