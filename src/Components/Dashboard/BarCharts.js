import React from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

const data1 = [
  { name: "9:00AM", pv: 2400, amt: 0 },
  { name: "10:00AM", pv: 1398, amt: 100 },
  { name: "11:00AM", pv: 20000, amt: 50 },
  { name: "11:00AM", pv: 5000, amt: 50 },
  { name: "11:00AM", pv: 10000, amt: 50 },
  { name: "12:00PM", pv: 9800, amt: 200 },
  { name: "01:00PM", pv: 5000, amt: 0 },
  { name: "02:00PM", pv: 5000, amt: 0 },
  { name: "03:00PM", pv: 6800, amt: 0 },
];


  

const BarCharts= () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-[18px] font-semibold Admin_std ">Hourly Net Sales</h2>
       
      
      

        <div className="flex items-center space-x-4">
          {/* Add your filter component here */}
          {/* Example: */}
          <select className="border rounded px-2 py-1 mr-7 border-[#438AFF]">
            <option value="day">Days</option>
            <option value="week">Weeks</option>
            <option value="month">Months</option>
            <option value="month">Open</option>
            <option value="month">Hours</option>
            <option value="month">Hours of Day</option>
            <option value="month">Years</option>
            <option value="month">Closed</option>
            <option value="month">Days of Week</option>
          </select>
        </div>
      </div>
      <div className='text-[16px] text-[#848484] admin_medium mb-6'><span className=''></span>Oct 4, 2023 - Oct 4, 2023</div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data1}>
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar width={10} dataKey="pv" fill="#438AFF" />
            <Bar dataKey="" fill="" />
            <Bar dataKey="" fill="" />
            <Bar dataKey="" fill="" />


          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarCharts;