// AreaChartComponent.jsx
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
        <div style={{ width: '100%', height: '400px',backgroundColor:'white', padding:'20px', borderRadius:'20px' }}>
            <ResponsiveContainer  width='100%' height={250}>
            <h2 >{topic} Distribution </h2>
            <h4>Aggregate Intensity Data by Country</h4> 
                <AreaChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >   <defs>
                       <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="5%" stopColor="#E90074" stopOpacity={0.9}/>
                         <stop offset="95%" stopColor="#FF4191" stopOpacity={0.7}/>
                       </linearGradient>
                     </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{color:'black'}} />
                    <Area type="monotone" dataKey="intensity" stroke="#000000" fill="url(#color)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
        </>
    );
};

export default AreaChartComponent;
