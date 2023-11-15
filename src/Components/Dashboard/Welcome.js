import React from "react";
import { BiCaretUp } from "react-icons/bi";

const Welcome = () => {
  // Prevent scrolling on the entire page


  return (
    <>
     <div className=''>
        <div className='relative'>
        <h1 className='text-xl text-black mx-9 mt-5 font-sans font-bold top-111 left-274 w-198 h-20 leading-28'>
        Welcome Malik Saleh
        </h1>
   
      </div>

      
    
        </div>
  
      <div className="mx-4">
        <div className="box-content h-32 w-70 p-4 border-4 border-white bg-white shadow-2xl rounded-2xl opacity-100">
          <table className="w-full">
            <thead>
              <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mx-4 my-4">
        <div className="grid gap-4 grid-cols-4">
          <div className="box-content h-32 w-70 p-4 border-4 border-white bg-white shadow-2xl rounded-2xl opacity-100">
          <div className="text-gray-700 font-normal text-base md:text-xl lg:text-2xl">
  Transactions
</div>

            <div className="mt-7 text-3xl text-black">20</div>
         <div className="text-green-500 flex">
  <BiCaretUp className="text-green-500 mt-0.5" />
  <span className="text-green-500">+21.00%</span>
</div>
            
          </div>
          <div className="box-content h-32 w-70 p-4 border-4 border-white bg-white shadow-2xl rounded-2xl opacity-100">
          <div className="text-gray-700 font-normal text-base md:text-xl lg:text-2xl">Average Sale Value</div>
            <div className="mt-7 text-3xl text-black">20</div>
          <div className="text-green-500 flex">
  <BiCaretUp className="text-green-500 mt-0.5" />
  <span className="text-green-500">+21.00%</span>
</div>
          </div>
          <div className="box-content h-32 w-70 p-4 border-4 border-white bg-white shadow-2xl rounded-2xl opacity-100">
          <div className="text-gray-700 font-normal text-base md:text-xl lg:text-2xl">Average Item Sale</div>
            <div className="mt-7 text-3xl text-black">20</div>
          <div className="text-green-500 flex">
  <BiCaretUp className="text-green-500 mt-0.5" />
  <span className="text-green-500">+21.00%</span>
</div>
          </div>
          <div className="box-content h-32 w-70 p-4 border-4 border-white bg-white shadow-2xl rounded-2xl opacity-100">
          <div className="text-gray-700 font-normal text-base md:text-xl lg:text-2xl">Net COGS</div>
            <div className="mt-7 text-3xl text-black">20</div>
          <div className="text-green-500 flex">
  <BiCaretUp className="text-green-500 mt-0.5" />
  <span className="text-green-500">+21.00%</span>
</div>
          </div>
        </div>
      </div>

      {/* Add next detail */}
      <div className="mx-4 my-4">
        <div className="grid gap-4 grid-cols-4">
          <div className="box-content h-32 w-70 p-4 border-4 border-white bg-white shadow-2xl rounded-2xl opacity-100">
          <div className="text-gray-700 font-normal text-base md:text-xl lg:text-2xl">Gross Margin</div>
            <div className="mt-7 text-3xl text-black">76.55%</div>
          <div className="text-green-500 flex">
  <BiCaretUp className="text-green-500 mt-0.5" />
  <span className="text-green-500">+21.00%</span>
</div>
          </div>
          <div className="box-content h-32 w-70 p-4 border-4 border-white bg-white shadow-2xl rounded-2xl opacity-100">
          <div className="text-gray-700 font-normal text-base md:text-xl lg:text-2xl">Gross Profit</div>
            <div className="mt-7 text-3xl text-black">319.00</div>
          <div className="text-green-500 flex">
  <BiCaretUp className="text-green-500 mt-0.5" />
  <span className="text-green-500">+21.00%</span>
</div>
          </div>
          <div className="box-content h-32 w-70 p-4 border-4 border-white bg-white shadow-2xl rounded-2xl opacity-100">
          <div className="text-gray-700 font-normal text-base md:text-xl lg:text-2xl">Non-cash Gratuity</div>
            <div className="mt-7 text-3xl text-black">0.00</div>
          <div className="text-green-500 flex">
  <BiCaretUp className="text-green-500 mt-0.5" />
  <span className="text-green-500">+21.00%</span>
</div>
          </div>
          <div className="box-content h-32 w-70 p-4 border-4 border-white bg-white shadow-2xl rounded-2xl opacity-100">
          <div className="text-gray-700 font-normal text-base md:text-xl lg:text-2xl"># of Saved Sales</div>
            <div className="mt-7 text-3xl text-black">0</div>
          <div className="text-green-500 flex">
  <BiCaretUp className="text-green-500 mt-0.5" />
  <span className="text-green-500">+21.00%</span>
</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
