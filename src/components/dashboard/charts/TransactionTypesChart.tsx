
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'P2P', value: 45, color: 'hsl(217 91% 60%)' },
  { name: 'B2B', value: 30, color: 'hsl(262 83% 58%)' },
  { name: 'Remittance', value: 20, color: 'hsl(142 76% 36%)' },
  { name: 'Trade', value: 5, color: 'hsl(38 92% 50%)' },
];

export const TransactionTypesChart = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              color: 'hsl(var(--foreground))'
            }}
            formatter={(value: number) => [`${value}%`, 'Share']}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
