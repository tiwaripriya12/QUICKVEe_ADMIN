import React from "react";
import { BiCaretUp } from "react-icons/bi";



const Welcome = () => {
  // Prevent scrolling on the entire page

  return (
    <>
      <div className="">
        <div className="relative">
          <div className="text-xl text-black mx-9 mt-5 font-sans font-bold top-111 left-274 w-198 h-20 leading-28 Admin_std flex">
            Welcome Malik Saleh
          </div>
          {/* <div className="text-xl text-black mx-9 mt-5 font-sans font-bold top-111 left-274 w-198 h-20 leading-28 Admin_std">
          <DateFilterPage />
          </div> */}
        </div>
      </div>

      <div className="mx-4">
        <div
          className="box-content h-32 w-70 p-4 border-4 border-white bg-white  rounded-2xl opacity-100"
          style={{ boxShadow: "0px 3px 6px #0000001F" }}
        >
          <table className="w-full">
            <thead>
              <tr>
                <th className="">
                    <div className="text-gray-700 font-normal text-base  text-[16px] Admin_std">Gross salse</div>
                <div className="text-black text-[33px] font-normal  Admin_std mt-1 mb-1">462.00</div>
                <div className="text-green-400 text-[12px]  Admin_std  mt-1 mb-1">+21.00%</div>
                </th>
                <div className="mt-5 text-[50px]">-</div>
                <th>
                  <div className="text-gray-700 font-normal text-base  text-[16px] Admin_std">Return</div>
                <div className="text-black text-[33px] font-normal  Admin_std  mt-1 mb-1">462.00</div>
                <div className="text-green-400 text-[12px]  mt-1 mb-1 Admin_std">+21.00%</div>
                </th>
                <div className="mt-5 text-[50px]">-</div>
                <th>  
                  <div className="text-gray-700 font-normal text-base  text-[16px] Admin_std">Discount</div>
                <div className="text-black text-[33px] font-normal Admin_std mt-1 mb-1">462.00</div>
                <div className="text-green-400 text-[12px]  Admin_std  mt-1 mb-1">+21.00%</div>
                </th>
                <div className="mt-5 text-[50px]">=</div>
                <th>
                  <div className="text-gray-700 font-normal text-base  text-[16px] Admin_std">Net Sales</div>
                <div className="text-black text-[33px] font-normal  Admin_std  mt-1 mb-1">462.00</div>
                <div className="text-green-400 text-[12px]  Admin_std  mt-1 mb-1">+21.00%</div>
                </th>
              
                <th>
                  <div className="text-gray-700 font-normal text-base  text-[16px] Admin_std">Sales Tax</div>
                <div className="text-black text-[33px] font-normal  Admin_std  mt-1 mb-1">462.00</div>
                <div className="text-green-400 text-[12px]  Admin_std  mt-1 mb-1">+21.00%</div>
                </th>
               
               
              </tr>
            </thead>
         
          </table>
        </div>
      </div>

      <div className="mx-4 my-9">
        <div className="grid gap-4 grid-cols-4">
          <div
            className="box-content h-32 w-70 p-4 border-4 border-white bg-white  rounded-2xl opacity-100"
            style={{ boxShadow: "0px 3px 6px #0000001F" }}
          >
            <div className="text-gray-700 font-normal text-base tracking-normal opacity-100 Admin_std">
              Transactions
            </div>

            <div className="text-black text-[33px] font-normal Admin_std mt-1 mb-1">20</div>
            <div className="text-green-500 flex">
              <BiCaretUp className="text-green-500 mt-0.5" />
              <span className="text-green-500  Admin_std">+21.00%</span>
            </div>
          </div>
          <div
            className="box-content h-32 w-70 p-4 border-4 border-white bg-white  rounded-2xl opacity-100"
            style={{ boxShadow: "0px 3px 6px #0000001F" }}
          >
            <div className="text-gray-700 font-normal text-base tracking-normal opacity-100 Admin_std">
              Average Sale Value
            </div>
            <div className="text-black text-[33px] font-normal  mt-1 mb-1  Admin_std">21.79</div>
            <div className="text-green-500 flex">
              <BiCaretUp className="text-green-500 mt-0.5" />
              <span className="text-green-500  Admin_std">+21.00%</span>
            </div>
          </div>
          <div
            className="box-content h-32 w-70 p-4 border-4 border-white bg-white  rounded-2xl opacity-100"
            style={{ boxShadow: "0px 3px 6px #0000001F" }}
          >
            <div className="text-gray-700 font-normal text-base tracking-normal opacity-100 Admin_std">
              Average Item Sale
            </div>
            <div className="text-black text-[33px] font-normal  Admin_std mt-1 mb-1">1.5</div>
            <div className="text-green-500 flex">
              <BiCaretUp className="text-green-500 mt-0.5" />
              <span className="text-green-500  Admin_std">+21.00%</span>
            </div>
          </div>
          <div
            className="box-content h-32 w-70 p-4 border-4 border-white bg-white  rounded-2xl opacity-100"
            style={{ boxShadow: "0px 3px 6px #0000001F" }}
          >
            <div className="text-gray-700 font-normal text-base tracking-normal opacity-100 Admin_std">
              Net COGS
            </div>
            <div className="text-black text-[33px] font-normal  Admin_std  mt-1 mb-1">116.50</div>
            <div className="text-green-500 flex">
              <BiCaretUp className="text-green-500 mt-0.5" />
              <span className="text-green-500  Admin_std">+21.00%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add next detail */}
      <div className="mx-4 my-4">
        <div className="grid gap-4 grid-cols-4">
          <div
            className="box-content h-32 w-70 p-4 border-4 border-white bg-white  rounded-2xl opacity-100"
            style={{ boxShadow: "0px 3px 6px #0000001F" }}
          >
            <div className="text-gray-700 font-normal text-base tracking-normal opacity-100 Admin_std">
              Gross Margin
            </div>
            <div className="text-black text-[33px] font-normal  Admin_std  mt-1 mb-1">76.55%</div>
            <div className="text-green-500 flex">
              <BiCaretUp className="text-green-500 mt-0.5" />
              <span className="text-green-500  Admin_std">+21.00%</span>
            </div>
          </div>
          <div
            className="box-content h-32 w-70 p-4 border-4 border-white bg-white  rounded-2xl opacity-100"
            style={{ boxShadow: "0px 3px 6px #0000001F" }}
          >
            <div className="text-gray-700 font-normal text-base tracking-normal opacity-100 Admin_std">
              Gross Profit
            </div>
            <div className="text-black text-[33px] font-normal  mt-1 mb-1  Admin_std">319.00</div>
            <div className="text-green-500 flex">
              <BiCaretUp className="text-green-500 mt-0.5" />
              <span className="text-green-500  Admin_std">+21.00%</span>
            </div>
          </div>
          <div
            className="box-content h-32 w-70 p-4 border-4 border-white bg-white  rounded-2xl opacity-100"
            style={{ boxShadow: "0px 3px 6px #0000001F" }}
          >
            <div className="text-gray-700 font-normal text-base tracking-normal opacity-100 Admin_std">
              Non-cash Gratuity
            </div>
            <div className="text-black text-[33px] font-normal Admin_std  mt-1 mb-1">0.00</div>
            <div className="text-green-500 flex">
              <BiCaretUp className="text-green-500 mt-0.5" />
              <span className="text-green-500  Admin_std">+21.00%</span>
            </div>
          </div>
          <div
            className="box-content h-32 w-70 p-4 border-4 border-white bg-white  rounded-2xl opacity-100"
            style={{ boxShadow: "0px 3px 6px #0000001F" }}
          >
            <div className="text-gray-700 font-normal text-base tracking-normal opacity-100 Admin_std">
              # of Saved Sales
            </div>
            <div className="text-black text-[33px] font-normal Admin_std mt-1 mb-1">0</div>
            <div className="text-green-500 flex">
              <BiCaretUp className="text-green-500 mt-0.5" />
              <span className="text-green-500 Admin_std">+21.00%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
