import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Category A', value: 400 },
  { name: 'Category B', value: 300 },
  { name: 'Category C', value: 300 },
  { name: 'Category D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CustomPieChart = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <div style={{ textAlign: 'center' }}>
        {/* <h2 style={{ color: '#333', marginBottom: '20px' }}>Distribution of Categories</h2> */}
        <PieChart width={400} height={295}>
          <Pie
            data={data}
            cx={200}
            cy={150}
            innerRadius={0} // Set innerRadius to 0 for a circular pie chart
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label
            isAnimationActive={false} // Disable hover effect
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend align="right" verticalAlign="middle" layout="vertical" />
        </PieChart>
      </div>
    </div>
  );
};

export default CustomPieChart;
