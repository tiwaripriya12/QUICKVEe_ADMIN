import React, { useState } from 'react';
import BarChart1 from './BarCharts';
import BarCharts from './BarCharts';

const NetSales = () => {
  const [selectedOption, setSelectedOption] = useState('Days');
  const [showOptions, setShowOptions] = useState(false);

  const options = [
    'Days',
    'Hours',
    'Hours of Days',
    'Days of Week',
    'Weeks',
    'Months',
    'Years',
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  return (
    <>
      <div className="mx-4">
        <div className="box-content h-[100] w-full p-4 border-4 border-white bg-white shadow-2xl rounded-2xl opacity-100 flex justify-between items-center relative">
         
          
        <BarCharts />
  
        </div>
         
      </div>

    </>
  );
};

export default NetSales;
