import * as React from 'react';
import { useState } from 'react';
import Quick from '../../Assests/Images/qiocklogo.jpg';
import { BiMenu, BiChevronDown, BiDownArrowAlt, BiShow, BiSync } from 'react-icons/bi';

const Home = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className='flex items-center m-2 p-2 bg-white'>
        <BiMenu className='text-black text-2xl' />
        <img src={Quick} alt="Logo" className='w-24 ml-6' />

        {/* Dropdown Button */}
        <div
          onClick={toggleDropdown}
          className='flex items-center ml-6 px-3 py-1 text-black text-base font-circular font-semibold'
        >
          Vape Store
          <BiChevronDown className='ml-1' />
        </div>

        {/* Dropdown Content */}
        {isDropdownOpen && (
          <div className='mt-2 bg-white'>
            {/* Dropdown items go here */}
            {/* <p className='p-2 hover:bg-gray-200 cursor-pointer'>Item 1</p>
            <p className='p-2 hover:bg-gray-200 cursor-pointer'>Item 2</p>
            <p className='p-2 hover:bg-gray-200 cursor-pointer'>Item 3</p> */}
          </div>
        )}

        {/* Three Menu Items on the Right */}
        
      <div className='ml-auto font-circular flex items-center text-base text-black'>
  <BiDownArrowAlt className='ml-2' />
  <p className='cursor-pointer ml-2 mr-4 font-semibold'>Download App</p>
</div>

<div className='ml-8 font-circular flex items-center text-base text-black'>
  <BiShow className='ml-2' />
  <p className='cursor-pointer ml-2 mr-4 font-semibold'>Online Store</p>
  <BiSync className='ml-2' />
  <p className='cursor-pointer ml-2 font-semibold'>Sync Data</p>
</div>

</div>
<div className='border-t-[3px] border-b-2 border-black bg-black'>
  {/* Your content goes here */}
</div>

    </>
  );
};

export default Home;