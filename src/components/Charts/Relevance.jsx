import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const RelevanceBySectorChart = ({data=[]}) => {


  return (
    <div style={{ width: '100%', height: '400px', padding:'20px', backgroundColor:'white', borderRadius:'20px'}}>
      <ResponsiveContainer width="100%" height={250}>
      <h2 style={{marginBottom:'40px'}} >Average Relevance by Sector</h2>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="sector" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="avgRelevance" stroke='black' fill="#9BEC00" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RelevanceBySectorChart;
