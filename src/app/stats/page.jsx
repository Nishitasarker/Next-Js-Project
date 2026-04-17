"use client";
import React, { useEffect, useState } from 'react';
import { Legend, Pie, PieChart, Tooltip,Cell, ResponsiveContainer} from 'recharts';

const StatsPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const savedData = JSON.parse(sessionStorage.getItem("userTimeline")) || [];

        const counts = savedData.reduce((acc, item) => {
            acc[item.type] = (acc[item.type] || 0) + 1;
            return acc;
        }, {});

       
        const chartData = [
          { name: 'Text', value: counts.text || 0, color: '#8427F5' }, 
            { name: 'Call', value: counts.call || 0, color: '#1D5223' }, 
            { name: 'Video', value: counts.video || 0, color: '#18701A' },
        ];

        setData(chartData);
    }, []);

    const totalInteractions = data.reduce((sum, entry) => sum + entry.value, 0);

    return (
        <div className='p-6 sm:p-10  mx-0 sm:mx-5 md:mx-35'>
            <h1 className='text-4xl font-bold mb-10'>Friendship Analytics</h1>
 
            <div className='bg-gray-50  rounded-2xl shadow-sm  '>
                <p className='text-green-600 font-bold text-xl mb-2 pl-4 pt-4'>By Interaction Type</p>
                
               <div className='flex justify-center items-center'>
                 {totalInteractions > 0 ? (
                    <div style={{ width: '300px', height: '300px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    innerRadius="60%"
                                    outerRadius="80%"
                                    paddingAngle={5}
                                    dataKey="value"
                                    cornerRadius={10}
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend verticalAlign="bottom"  iconType="circle"/>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                ) : (
                    <p className="text-gray-400 py-20">No interaction data yet!</p>
                )}
               </div>
                
                <div className=" text-center">
                    <p className="text-gray-600 pb-6">Total Interactions: <strong>{totalInteractions}</strong></p>
                </div>
            </div>
        </div>
    );
};

export default StatsPage;