import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiCalendar } from 'react-icons/fi';


const DateRange = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const startDateRef = useRef(null);
  const endDateRef = useRef(null);

  const handleStartDateIconClick = () => {
    startDateRef.current.setFocus(true);
  };

  const handleEndDateIconClick = () => {
    endDateRef.current.setFocus(true);
  };

  const handleSearch = () => {

    console.log('Searching...');
  };
  return (
    <>
      <div className='mx-2 my-2'>
        <div className="box-content h-[200px] w-70 p-4 border-4 border-white bg-white rounded-xl opacity-100" style={{ boxShadow: "0px 3px 6px #0000001F" }}>


          <div className="mb-4">
            <h3 className="text-black text-[18px] font-semibold leading-none">Date Range</h3>


            <div className="flex flex-row text-gray-600 justify-end space-x-4 py-2">
              <div className="px-4 py-2 rounded hover:bg-gray-200 cursor-pointer">Today</div>
              <div className="px-4 py-2 rounded hover:bg-gray-200 cursor-pointer">Yesterday</div>
              <div className="px-4 py-2 rounded hover:bg-gray-200 cursor-pointer">Last 7 Days</div>
              <div className="px-4 py-2 rounded hover:bg-gray-200 cursor-pointer">Last 30 days</div>
            </div>


          </div>


          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-start">
            {/* Start Date */}
            <div className="relative">
              <div className="">Start Date</div>
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
                  className="border border-blue-500 rounded px-3 py-2 pr-10 mt-1 focus:outline-none focus:border-blue-500 w-80" // w-80 sets width to 20rem (80/4 = 20)
                  ref={startDateRef}
                />
                <span className="absolute right-3 top-12 transform -translate-y-1/2 text-gray-400 cursor-pointer" onClick={handleStartDateIconClick}>
                  <FiCalendar className='text-black' />
                </span>
              </div>
            </div>

            {/* End Date */}
            <div className="relative">
              <div className="">End Date</div>
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
                className="border border-blue-500 rounded px-3 py-2 pr-10 mt-1 focus:outline-none focus:border-blue-500 w-80" // w-80 sets width to 20rem (80/4 = 20)
                ref={endDateRef}
              />
              <span className="absolute right-3 top-12 transform -translate-y-1/2 text-gray-400 cursor-pointer" onClick={handleEndDateIconClick}>
                <FiCalendar className='text-black' />
              </span>
            </div>

               <div className='mt-6'>
            {/* Search Button */}
            <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline self-start mt-6">
              Search
            </button>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default DateRange