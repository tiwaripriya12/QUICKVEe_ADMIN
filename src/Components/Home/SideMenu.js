import React, { useState, useEffect } from 'react';
import { FaHome, FaShoppingCart, FaTags, FaBox, FaSlidersH, FaShoppingBag, FaDownload, FaTruck, FaClock, FaChevronDown } from 'react-icons/fa';

import LeftSide from './LeftSide';



const SideMenu = () => {
  return (
    <>
      <div className='flex h-full'>
        {/* Left Side Menu */}
        <div className='flex-1 bg-black text-white p-4 w-1/5'>
          {/* Add your left side menu content here */}
          {menuItems.map((item) => (
            <div key={item.id} className='mb-4 ml-16 text-base'>
              {item.dropdownItems ? (
                <DropdownMenuItem item={item} />
              ) : (
                <div className='flex items-center'>
                  {item.icon}
                  <p className='ml-2 menu-item text-gray-500'>{item.text}</p> {/* Apply text-gray-500 class for the specified color */}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Dashboard Menu */}
        <div className='w-4/5 h-full'>
        <div className='relative'>
        <h1 className='text-xl text-black mx-9 mt-5 font-sans font-bold top-111 left-274 w-198 h-20 leading-28'>
          Welcome to the Dashboard
        </h1>
   
      </div>

        <LeftSide />
      
    
        </div>
      </div>
    </>
  );
};

// Dropdown menu item component
const DropdownMenuItem = ({ item }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='flex items-center'>
      {item.icon}
      <p className='ml-2 cursor-pointer menu-item text-gray-500' onClick={toggleDropdown}> {/* Apply text-gray-500 class for the specified color */}
        {item.text}
        <FaChevronDown className='ml-1' />
      </p>
      {isDropdownOpen && (
        <div className='ml-4 bg-white p-2'>
          {/* Dropdown items go here */}
          {item.dropdownItems.map((dropdownItem) => (
            <p key={dropdownItem.id} className='flex items-center submenu-item text-gray-500'> {/* Apply text-gray-500 class for the specified color */}
              {dropdownItem.text}
              <FaChevronDown className='ml-1' />
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
// Define menu items with icons and text
const menuItems = [
  { id: 1, icon: <FaHome />, text: 'Dashboard' },
  { id: 2, icon: <FaShoppingCart />, text: 'Order' },
  { id: 3, icon: <FaTags />, text: 'Category' },
  { id: 4, icon: <FaBox />, text: 'Product' },
  { id: 5, icon: <FaSlidersH />, text: 'Attributes' },
  { id: 6, icon: <FaShoppingBag />, text: 'Purchase' },
  { id: 7, icon: <FaDownload />, text: 'Import Data' },
  { id: 8, icon: <FaDownload />, text: 'Coupons' },
  { id: 9, icon: <FaTruck />, text: 'Vendors' },
  { id: 10, icon: <FaClock />, text: 'Timesheet' },
  { id: 11, icon: <FaShoppingBag />, text: 'Store Settings', dropdownItems: [{ id: 61, text: 'Submenu 1' }, { id: 62, text: 'Submenu 2' }] },
  { id: 12, icon: <FaShoppingBag />, text: 'Reporting', dropdownItems: [{ id: 61, text: 'Submenu 1' }, { id: 62, text: 'Submenu 2' }] },
];

export default SideMenu;
