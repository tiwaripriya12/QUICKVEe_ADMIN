import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { ProgressBar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import SalesTenders from "../Saletender/TopTenders";
// import ProgressBar from "@ramonak/react-progress-bar";

const SellItems = () => {
  const progressValue = 60; // Assuming the first progress bar value is 60%
  const progressValue1 = 40; // Assuming the second progress bar value is 40%
  const column1Data = [
    { product: "T2 3000-4500 Single 19.99", price: "$179.18" },
    { product: "Hemp Product", price: "$179.18" },
    { product: "Misc Taxable", price: "$79.19" },
    { product: "Product 4", price: "$49.99" },
    { product: "Product 5", price: "$19.99" },
  ];

  const column2Data = [
    // Add more data for column 2 if needed
  ];

  return (
    <div className="mx-4 py-7 h-[100]">
      <div className="box-content h-[100] w-[50] p-4 border-4 border-white bg-white shadow-2xl rounded-2xl opacity-100 flex justify-between items-center relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <div className="flex items-center gap-2 py-4 cursor-pointer">
                <div className="flex items-center gap-2">
                  <div className="py-2 mx-2 text-xl font-bold adminstdbook">
                    Top Selling Items
                  </div>
                  <FaAngleRight color="black" />
                </div>
              </div>
              <table className="min-w-full bg-white border rounded-lg">
                <thead>
                  <tr className="bg-white uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Product</th>
                    <th className="py-3 px-6 text-left">Price</th>
                  </tr>
                </thead>
                <tbody className="text-black text-base bg-[#F5F9FF]">
                  {column1Data.map((item, index) => (
                    <tr
                      key={index}
                      className={
                        (index % 2 === 0 ? "bg-[#F5F9FF ]" : "bg-white") +
                        " border-b"
                      }
                    >
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        {item.product}
                      </td>
                      <td className="py-3 px-6 text-left">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
            <table className="min-w-full bg-white mt-2">
           <thead>
           <tr className="bg-white text-black  text-base leading-normal">
          <div className="flex items-center gap-2">
          <th className="py-2 mx-2 text-xl font-bold adminstdbook text-left">
         Sales Tenders</th>
          <FaAngleRight color="black" />
          </div>
          <th className="py-2 mx-2 text-xl font-bold adminstdbook text-right">Total: 578.92</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light ">
        <tr>
        <td colSpan="2">
            <div className="text-[18px] font-normal font-[Circular Std Book] text-[#707070] leading-3 mt-8">
              External Credit
            </div>
            <div className="w-full bg-[#438AFF] rounded h-8 overflow-hidden my-3">
              {/* First Progress Bar */}
              <ProgressBar
                completed={progressValue}
                bgColor="#10B981"
                height="100%"
                borderRadius="0px"
              />
            </div>
            <div className="text-[18px] font-normal font-[Circular Std Book] text-[#707070] leading-3 mt-2">
              Cash
            </div>
            <div className="w-96 bg-[#438AFF] rounded h-8 overflow-hidden my-3">
              {/* Second Progress Bar */}
              <ProgressBar
                // completed={progressValue1}
                bgColor="#10B981"
                height="100%"
                borderRadius="0px"
              />
            </div>
          </td>
          
        </tr>
      </tbody>
    </table>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellItems;