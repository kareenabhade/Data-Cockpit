import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const InsightLikelihoodChart = ({data=[]}) => {

  return (
    <div  style={{
              display: "flex",
              flexDirection: "column", justifyContent:'center', alignItems:"center",
              width: "100%",  height: "100%",  padding:'20px', margin:'50px 20px',
              backgroundColor:'white', borderRadius:'20px', }}>
      <h2>Insight vs. Likelihood Chart</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="insight" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="avgLikelihood" stroke='transparent' fill="#5356FF" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InsightLikelihoodChart;
