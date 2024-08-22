import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from 'recharts';

const BarChartComponent = ({ data = [] , topic}) => {
    return (
        < >
        <div style={{ width: '100%', height: '400px', padding:'20px', backgroundColor:'white', borderRadius:'20px'}}>
            <ResponsiveContainer  width='100%' height={250}>
                <h2>{topic} Distribution</h2>
                <p> ( quantities less than 10 are displayed ) </p> 
                <BarChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{color:'black'}} />
                    <Bar dataKey="total" stroke='#071952' fill="#36C2CE" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </>
    );
};

export default BarChartComponent;
