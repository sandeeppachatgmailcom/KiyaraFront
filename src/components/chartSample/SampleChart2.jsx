import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
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

  return (
    <ResponsiveContainer width="100%" height={1000}>
      <PieChart>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={chartData}
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SampleChart2;
