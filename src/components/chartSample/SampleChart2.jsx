import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';
import nodeServer from '../../api/axios';
import { userApi } from '../../api/api';

const SampleChart2 = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await nodeServer.get(userApi.logstats);  
        const formattedData = response.data.map(item => ({
          name: item._id ? 'Success' : 'Failure',
          value: item.count,
        }));
        setChartData(formattedData);
      } catch (error) {
        console.error("Error fetching log data:", error);
      }
    };
    fetchData();
  }, []);  

  const COLORS = ['#4CAF50', '#FF5252']; // Green for Success, Red for Failure

  return (
    <div className="w-full max-w-md p-4 mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Log Stats Overview</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            dataKey="value"
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={130}
            innerRadius={60}
            fill="#8884d8"
            label={({ name, value }) => `${name}: ${value}`}
            labelLine={false}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: '#f5f5f5', borderRadius: '8px' }} />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SampleChart2;
