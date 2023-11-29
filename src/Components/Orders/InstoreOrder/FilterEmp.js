import React, { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';

const FilterEmp = () => {
  const [searchId, setSearchId] = useState(""); // State to track search ID

  const handleFilter = (filterType) => {
    console.log('Selected filter:', filterType);
   
  };

  const handleSearch = () => {
    console.log("Search ID:", searchId);
   
  };

  return (
    <>
      <div className="bg-white p-4 mb-3 rounded-md">
        <div className="flex border border-gray-300 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search orders by order ID, last 4 digits on payment card, or invoice ID"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className="w-full px-4 py-2 border-none focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="text-black px-4 py-2 focus:outline-none text-xl"
          >
            <AiOutlineSearch className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-md">
        <div className="mb-4">
          <h3 className="text-black text-[18px] font-semibold leading-none">Filter By</h3>
        </div>

        <div className="flex flex-col sm:flex-row justify-between text-gray-600 mb-1">
          <div>Transaction</div>
          <div>Employees</div>
          <div>Order Status</div>
        </div>

        <div className="flex flex-col sm:flex-row">
          <button
            onClick={() => handleFilter('allEmployees')}
            className="flex-1 bg-white text-gray-600 px-4 py-2 rounded-t-md sm:rounded-l-md border border-gray-300 mb-2 sm:mb-0 sm:mr-2 focus:outline-none flex items-center justify-between"
          >
            <span className="text-black text-[15px]">All Employees</span>
            <BsChevronDown className="ml-1 text-black" />
          </button>
          <button
            onClick={() => handleFilter('allTransactions')}
            className="flex-1 bg-white text-gray-600 px-4 py-2 border border-gray-300 mb-2 sm:mb-0 sm:mr-2 focus:outline-none flex items-center justify-between"
          >
            <span className="text-black text-[15px]">All Transactions</span>
            <BsChevronDown className="ml-1 text-black" />
          </button>
          <button
            onClick={() => handleFilter('orderStatus')}
            className="flex-1 bg-white text-gray-600 px-4 py-2 rounded-b-md sm:rounded-r-md border border-gray-300 focus:outline-none flex items-center justify-between"
          >
            <span className="text-black text-[15px]">Order Status</span>
            <BsChevronDown className="ml-1 text-black" />
          </button>
        </div>
      </div>

      <div>
        
      </div>
    </>
  );
};

export default FilterEmp;
