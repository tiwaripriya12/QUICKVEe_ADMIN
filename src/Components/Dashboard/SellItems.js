import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { ProgressBar } from "react-bootstrap";



// import ProgressBar from "@ramonak/react-progress-bar";

const SellItems = () => {
  const progressValue = 60; // Assuming the first progress bar value is 60%
  
  const column1Data = [
    { product: "T2 3000-4500 Single 19.99", price: "$179.18" },
    { product: "Hemp Product", price: "$179.18" },
    { product: "Misc Taxable", price: "$79.19" },
    { product: "Product 4", price: "$49.99" },
    { product: "Product 5", price: "$19.99" },
  ];



  return (
    <div className="mx-4 py-7 h-[100] my-9">
      <div className="">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-4 ">
            <div className="gap-2 py-4 cursor-pointer bg-gray rounded-2xl opacity bg-white" style={{boxShadow: "0px 3px 6px #0000001F"}}>
              <div className="flex items-center gap-2 py-4 cursor-pointer">
                <div className="flex items-center gap-2">
                  <div className="py-2 mx-2 text-[18px] admin_medium">
                    Top Selling Items
                  </div>
                  <FaAngleRight color="black" />
                </div>
              </div>
              <table className="min-w-full bg-white border rounded-lg">
                <thead>
                  {/* <tr className="bg-white uppercase text-[14px] leading-normal">
                    <th className="py-3 px-6 text-left">Product</th>
                    <th className="py-3 px-6 text-left">Price</th>
                  </tr> */}
                </thead>
                <tbody className="text-black Admin_std bg-[#F5F9FF]">
                  {column1Data.map((item, index) => (
                    <tr
                      key={index}
                      className={
                        (index % 2 === 0 ? "bg-[#F5F9FF ]" : "bg-white") +
                        " border-b"
                      }
                    >
                      <td className="py-3 px-6 text-left whitespace-nowrap text-[14px]">
                        {item.product}
                      </td>
                      <td className="py-3 px-6 text-left text-[14px]">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
         <div className="gap-2 py-4 cursor-pointer bg-gray rounded-2xl opacity bg-white" style={{boxShadow: "0px 3px 6px #0000001F"}}>
              
            <table className="min-w-full bg-white mt-2">
           <thead>
           <tr className="bg-white text-black  text-base leading-normal">
          <div className="flex items-center gap-2">
          <div class="py-2 mx-2 text-[18px] admin_medium text-left">Sales Tenders</div>
          <th className="py-2 mx-2 text-[18px]    admin_medium">
         </th>
          <FaAngleRight color="black" />
          </div>
          <th class="py-2 mx-2 text-[18px] admin_medium sales text-right">Total: 578.92</th>
        
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light ">
        <tr>
        <td colSpan="2">
            <div className="text-[18px] font-normal Admin_std text-[#707070] leading-3 mt-8 ml-6">
              External Credit
            </div>
            <div className="w-96 bg-[#438AFF] rounded h-8 overflow-hidden my-3 ml-6">
              {/* First Progress Bar */}
              <ProgressBar
                completed={progressValue}
                bgColor="#10B981"
                height="100%"
                borderRadius="0px"
              />
            </div>
            <div className="text-[18px] font-normal Admin_std text-[#707070] leading-3 mt-2 ml-6">
              Cash
            </div>
            <div className="w-64 bg-[#438AFF] rounded h-8 overflow-hidden my-3 ml-6">
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