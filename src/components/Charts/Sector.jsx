import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from 'recharts';

const AreaChartComponent = ({ data = [], topic }) => {
    return (
        <>
        <div style={{ width: '100%', height: '400px', backgroundColor:'white', padding:'20px', borderRadius:'20px'
         }}>
            <ResponsiveContainer width='100%' height={250} >
            <h2 >{topic} Distribution </h2> 
            <p>( quantities less than 150 are displayed ) </p>
                <AreaChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#FF6500" stopOpacity={0.9}/>
                     <stop offset="95%" stopColor="#FFC100" stopOpacity={0.6}/>
                   </linearGradient>
  
                   </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip   contentStyle={{ color: '#000', border: '1px solid #ccc' }}  itemStyle={{ color: '#00215E' }}/>
                    <Area type="monotone" dataKey="number" stroke="#FF0000"  fillOpacity={1} fill="url(#colorUv)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
        </>
    );
};

export default AreaChartComponent;
