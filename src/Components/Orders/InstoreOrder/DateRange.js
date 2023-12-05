import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiCalendar } from 'react-icons/fi';

const DateRange = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const startDateRef = React.useRef(null);
  const endDateRef = React.useRef(null);

  const handleStartDateIconClick = () => {
    startDateRef.current.setOpen(true);
  };

  const handleEndDateIconClick = () => {
    endDateRef.current.setOpen(true);
  };

  const handleSearch = () => {
    // Perform search logic here
    console.log('Selected Start Date:', startDate);
    console.log('Selected End Date:', endDate);
  };

  const [activeOption, setActiveOption] = useState('Today');

  // Function to set the active option
  const setActive = (option) => {
    setActiveOption(option);
  };

  // Function to check if an option is active
  const isActive = (option) => {
    return option === activeOption;
  };

  return (
    <>
      <div className="mx-2 my-2">
        <div className="box-content h-[250px] w-full p-4 border-4 border-white bg-white rounded-xl opacity-100" style={{ boxShadow: "0px 3px 6px #0000001F" }}>
          <div className="flex flex-col sm:flex-row mb-9">
            <div className="sm:w-full">
              <h3 className="text-black text-[18px] font-semibold leading-none mt-2">Date Range</h3>
            </div>
            <div className="sm:w-full mt-4 sm:mt-0">
              <div className="flex flex-row text-gray-600 space-x-4 py-2 bg-[#F5F5F5]">
                {['Today', 'Yesterday', 'Last 7 Days', 'Last 30 days'].map((option) => (
                  <div
                    key={option}
                    className={`flex items-center px-4 py-2 rounded cursor-pointer ${isActive(option) ? 'text-blue-500' : 'text-gray-600'}`}
                    onClick={() => setActive(option)}
                  >
                    {isActive(option) && <div className="w-2 h-2 rounded-full bg-blue-500 mr-2" />}
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-start mt-4">
            {/* Start Date */}
            <div className="relative">
              <div className="mb-2">Start Date</div>
              <div className='w-full'>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="border border-blue-500 rounded px-3 py-2 pr-10 mt-1 focus:outline-none focus:border-blue-500 w-[350px]"
                  ref={startDateRef}
                />
                <span className="absolute right-3 top-14 transform -translate-y-1/2 text-gray-400 cursor-pointer" onClick={handleStartDateIconClick}>
                  <FiCalendar className='text-black' />
                </span>
              </div>
            </div>

            {/* End Date */}
            <div className="relative mt-4 sm:mt-0">
              <div className="mb-2">End Date</div>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="MMMM d, yyyy h:mm aa"
                className="border border-blue-500 rounded px-3 py-2 pr-10 mt-1 focus:outline-none focus:border-blue-500 w-[350px]"
                ref={endDateRef}
              />
              <span className="absolute right-3 top-14 transform -translate-y-1/2 text-gray-400 cursor-pointer" onClick={handleEndDateIconClick}>
                <FiCalendar className='text-black' />
              </span>
            </div>

            <div className='mt-4'>
              {/* Search Button */}
              <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline self-start mt-4 sm:mt-0">
    Search
  </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DateRange;
