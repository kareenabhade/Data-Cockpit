import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Tooltip, Cell } from 'recharts';

const COLORS = [
    "#8884d8", "#8dd1e1", "#82ca9d", "#a4de6c", "#d0ed57", "#ffc658", 
    "#ff8042", "#ffbb28", "#ff6f61", "#ffcccb", "#c71585", "#db7093",
    "#ff4500", "#ff6347", "#cd5c5c", "#ffa07a", "#ffa500", "#ffd700",
    "#da70d6", "#ba55d3", "#9370db", "#8a2be2", "#7b68ee", "#6a5acd"
];

const Region = ({ data = [] }) => {
    return (
        <div style={{
              display: "flex",
              flexDirection: "column", justifyContent:'center', alignItems:"center",
              width: "100%",  height: "100%",  padding:'20px', margin:'50px 20px',
              backgroundColor:'white', borderRadius:'20px', 
        }}>
            <h2 style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "24px",
                    fontWeight: "bold",
                    marginBottom: "10px",

            }}>Region Distribution</h2> <p>Hover to see the numbers corresponding to its region.</p>
            <ResponsiveContainer width="100%" height={750}>
                <PieChart>
                    <Tooltip />
                    <Pie
                        data={data}
                        dataKey="number"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={350}
                        fill="#8884d8"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Region;
