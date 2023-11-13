import React, { useState } from 'react';
import BarChart1 from '../Dashboard/BarChart';

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
        <div className="box-content h-32 w-full p-4 border-4 border-white bg-white shadow-2xl rounded-2xl opacity-100 flex justify-between items-center relative">
          {/* Left side content */}
          <div className='text-xl text-black font-sans font-bold'>
            Hourly Net Sales
          </div>

          {/* Right side content */}
          <div className='text-xl text-black font-sans font-bold'>
            {/* Add the day filter inside the "hello" div */}
            <div className="relative">
              <div
                className="cursor-pointer"
                onClick={() => setShowOptions(!showOptions)}
              >
                {selectedOption}
              </div>
              {showOptions && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded">
                  {options.map((option) => (
                    <div
                      key={option}
                      className={`p-2 cursor-pointer ${
                        selectedOption === option ? 'border-b' : ''
                      }`}
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
         
  
        </div>
        <BarChart1 /> 
      </div>

    </>
  );
};

export default NetSales;
