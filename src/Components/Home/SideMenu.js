import React, { useState, useEffect } from 'react';
import { FaHome, FaShoppingCart, FaTags, FaBox, FaSlidersH, FaShoppingBag, FaDownload, FaTruck, FaClock, FaChevronDown } from 'react-icons/fa';
import { FaChevronCircleDown, FaTachometerAlt, FaRegSun } from "react-icons/fa";

import { Link } from 'react-router-dom';

import { ReactComponent as DashboardIcon } from '../../Assests/Dashboard/dashboard.svg';
// import { ReactComponent as ShopingCart } from '../../Assests/Dashboard/orders.svg';
// import { ReactComponent as CateIcon } from '../../Assests/Dashboard/category.svg';
// import { ReactComponent as ProductIcon } from '../../Assests/Dashboard/product.svg';
// import { ReactComponent as AttributesIcon } from '../../Assests/Dashboard/attributes.svg';
// import { ReactComponent as PurchaseIcon } from '../../Assests/Dashboard/product.svg';
// import { ReactComponent as ProductIcon } from '../../Assests/Dashboard/product.svg';
// import { ReactComponent as ProductIcon } from '../../Assests/Dashboard/product.svg';
// import { ReactComponent as ProductIcon } from '../../Assests/Dashboard/product.svg';




const SideMenu = () => {
  return (
    <>
      <div className='flex'>
        {/* Left Side Menu */}
        <div className='flex-1 bg-black text-white p-4 w-[40%] h-[120vh]'>
          <div className=''>
          {/* Add your left side menu content here */}
          {menuItems.map((item) => (
            <div key={item.id} className='mb-4 ml-16 text-base'>
              {item.dropdownItems ? (
                <DropdownMenuItem item={item} />
              ) : (
                <div className='flex items-center'>
                  {item.icon}
                  <Link className='ml-2 menu-item text-[16px] text-gray-500 adminmedium font-semibold' to={item.link}>{item.text}</Link> {/* Apply text-gray-500 class for the specified color */}
                </div>
              )}
            </div>
          ))}
        </div>
        </div>

        {/* Right Dashboard Menu */}
       
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
  {
    id: 1,
    icon: <DashboardIcon className="h-6 w-6" />, // Use the imported SVG component here
    text: 'Dashboard',
    link: '/dashboard',
  },
  {
    id: 2,
    icon: <FaShoppingCart className="h-6 w-6 text-white" />, // Use the imported SVG component here
    text: 'Order',
    link: '/order',
  },
  { id: 3, icon: <FaShoppingCart className='h-6 w-6' />, text: 'Category', link: '/category' },
  { id: 4, icon: <FaShoppingCart className = 'h-6 w-6' />, text: 'Product', link: '/product' },
  { id: 5, icon: <FaShoppingCart className='h-6 w-6' />, text: 'Attributes', link: '/attributes' },
  { id: 6, icon: <FaShoppingCart className='h-6 w-6' />, text: 'Purchase', link: '/purchase' },
  { id: 7, icon: <FaDownload />, text: 'Import Data', link: '/import-data' },
  { id: 8, icon: <FaDownload />, text: 'Coupons', link: '/coupons' },
  { id: 9, icon: <FaTruck />, text: 'Vendors', link: '/vendors' },
  { id: 10, icon: <FaClock />, text: 'Timesheet', link: '/timesheet' },

  {
    id: 11,
    icon: <FaShoppingBag />,
    text: 'Store Settings',
    className: 'flex items-center gap-2',
    dropdownItems: [
      { id: 61, text: 'Submenu 1', link: '/store-settings/submenu1' },
      { id: 62, text: 'Submenu 2', link: '/store-settings/submenu2' }
    ]
  },
  {
    id: 12,
    icon: <FaShoppingBag />,
    text: 'Reporting',
    className: 'flex items-center gap-2',
    dropdownItems: [
      { id: 61, text: 'Submenu 1', link: '/reporting/submenu1' },
      { id: 62, text: 'Submenu 2', link: '/reporting/submenu2' }
    ]
  }
];

export default SideMenu;
