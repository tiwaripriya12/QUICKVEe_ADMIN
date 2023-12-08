import React from "react";

import { Link } from "react-router-dom";
import RightIcon from "../../Assests/Dashboard/Right.svg";
// import ProgressBar from "@ramonak/react-progress-bar";
import ProgressBar from "./ProgressBar";

const SellItems = () => {
  const progressValue = 50; // Set your progress values accordingly
  const progressValue1 = 75; // Set your second progress value

  const column1Data = [
    { product: "T2 3000-4500 Single 19.99", price: "$179.18" },
    { product: "Hemp Product", price: "$179.18" },
    { product: "Misc Taxable", price: "$79.19" },
    { product: "Product 4", price: "$49.99" },
    { product: "Product 5", price: "$19.99" },
  ];

  return (
    <div className="mx-10 my-5">
      <div className="">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mx-auto sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto">
            <div className="gap-2 py-4 cursor-pointer bg-grayopacity bg-white px-0 mt-4 mx-0 shadow-md rounded-lg opacity-100 h-auto">
              <div className="flex items-center gap-2 py-1 cursor-pointer">
                <div className="flex items-center gap-2">
                  <div>
                    <Link
                      to="/toptraders"
                      className="py-2 mx-4 text-[20px] admin_medium flex items-center"
                    >
                      Top Selling Items
                      <div className="ml-3">
                        <img src={RightIcon} alt="down" className="w-8" />{" "}
                        
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <table className="w-full bg-white rounded-lg">
                <thead></thead>
                <tbody className="text-black Admin_std bg-[#F5F9FF]">
                  {column1Data.map((item, index) => (
                    <tr
                      key={index}
                      className={
                        (index % 2 === 0 ? "bg-[#F5F9FF ]" : "bg-white") + ""
                      }
                    >
                      <td
                        colSpan="2"
                        className="py-3 px-6 text-left text-[14px] w-full"
                      >
                        {item.product}
                      </td>
                      <td className="py-3 px-6 text-left text-[14px]">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="gap-2 py-4 cursor-pointer bg-grayopacity bg-white px-0 mt-4 mx-0 shadow-md rounded-lg opacity-100 h-auto">
              <table className="w-full bg-white mt-2">
                <thead className="border-b-2">
                  <tr className="bg-white text-black  text-base leading-normal">
                    <div className="flex items-center gap-2">
                      <div>
                        <Link
                          to="/toptraders"
                          className="py-2 mx-4 text-[20px] admin_medium flex items-center"
                        >
                          Sales Tenders
                          <div className="ml-3">
                            <img src={RightIcon} alt="down" className="w-8" />{" "}
                            {/* Adjust width and height as needed */}
                          </div>
                        </Link>
                      </div>
                    </div>

                    <th class="py-2 text-[20px] admin_medium sales">
                      Total: 578.92
                    </th>
                  </tr>
                  {/* <div class="mt-2 bg-[#000] border-b-2 w-[160%] mb-4"></div> */}
                </thead>
                <tbody>
                 {/* <ProgressBar /> */}
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
