import React from 'react'
import { BsDot } from 'react-icons/bs';

const CategoryList = () => {
  return (
 <>
 <div className="mx-2 my-7">
      <div
        className="box-content h-[100px] w-70 p-4 border-4 border-white bg-white rounded-xl opacity-100 mt-9"
        style={{ boxShadow: "0px 3px 6px #0000001F" }}
      >
        <div className="text-sm font-semibold  my-2 text-[#818181] flex">
        <BsDot  className="text-black text-sm mr-1"/>In order to use the Quickvee app one Category is required.
        </div>

        <div className="text-sm font-semibold my-2 text-[#818181] flex">
        <BsDot className="text-black text-sm mr-1" />If you make changes to the Category, the Category status will be pending until the admin approves it.
        </div>

        <div className="text-sm font-semibold my-2 text-[#818181] flex">
        <BsDot  className="text-black text-sm mr-1"/> After you've made changes to your menu, select the option "Click Here To Send For Approval To Admin" to get admin approval to update your website.
        </div>
      </div>
    </div>
 
 
 </>
  )
}

export default CategoryList