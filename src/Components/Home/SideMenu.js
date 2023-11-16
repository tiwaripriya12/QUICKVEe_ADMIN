import React, { useState, useEffect } from 'react';
import { FaHome, FaShoppingCart, FaTags, FaBox, FaSlidersH, FaShoppingBag, FaDownload, FaTruck, FaClock, FaChevronDown } from 'react-icons/fa';
import { FaChevronCircleDown, FaTachometerAlt, FaRegSun } from "react-icons/fa";

import { Link } from 'react-router-dom';

import DashboardIcon from '../../Assests/Dashboard/dashboard.svg';
import ShoppingCartIcon from '../../Assests/Dashboard/orders.svg';
import CategoryIcon from '../../Assests/Dashboard/category.svg';
import  CouponIcon from '../../Assests/Dashboard/product.svg';
import AttributesIcon from '../../Assests/Dashboard/attributesadmin.svg';
import PurchaseIcon from '../../Assests/Dashboard/attributes.svg';
import DataIcon from '../../Assests/Dashboard/importdata.svg';
import ProductIcon from '../../Assests/Dashboard/coupon.svg';
import VenderIcon from '../../Assests/Dashboard/vender.svg';
import TimesheetIcon from '../../Assests/Dashboard/timesheet.svg';
import StoreIcon from '../../Assests/Dashboard/store.svg';
import ReportIcon from '../../Assests/Dashboard/reporting.svg';




const SideMenu = () => {
  return (
    <>
      <div className='flex'>
        {/* Left Side Menu */}
        <div className='flex-1 bg-black text-white p-4 w-[239px] h-[120vh]'>
          <div className=''>
          {/* Add your left side menu content here */}
          {menuItems.map((item) => (
            <div key={item.id} className='mb-4  text-base'>
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
    icon: <img src={DashboardIcon} alt="Dashboard" className="h-6 w-6" />,
    text: 'Dashboard',
    link: '/dashboard',
  },
  {
    id: 2,
    icon: <img src={ShoppingCartIcon} alt="Order" className="h-6 w-6 text-white" />,
    text: 'Order',
    link: '/order',
  },
  {
    id: 3,
    icon: <img src={CategoryIcon} alt="Category" className='h-6 w-6' />,
    text: 'Category',
    link: '/category',
  },
  {
    id: 4,
    icon: <img src={ProductIcon} alt="Products" className='h-6 w-6' />,
    text: 'Products',
    link: '/products',
  },
  {
    id: 5,
    icon: <img src={AttributesIcon} alt="Attributes" className='h-6 w-6' />,
    text: 'Attributes',
    link: '/attributes',
  },
  {
    id: 6,
    icon: <img src={PurchaseIcon} alt="Purchase Data" className='h-6 w-6' />,
    text: 'Purchase Data',
    link: '/purchase-data',
  },
  {
    id: 7,
    icon: <img src={DataIcon} alt="Import Data" className='h-6 w-6' />,
    text: 'Import Data',
    link: '/import-data',
  },
  {
    id: 8,
    icon: <img src={CouponIcon} alt="Coupons" className='h-6 w-6' />,
    text: 'Coupons',
    link: '/coupons',
  },
  {
    id: 9,
    icon: <img src={VenderIcon} alt="Vendors" className='h-6 w-6' />,
    text: 'Vendors',
    link: '/vendors',
  },
  {
    id: 10,
    icon: <img src={TimesheetIcon} alt="Timesheet" className='h-6 w-6' />,
    text: 'Timesheet',
    link: '/timesheet',
  },

  {
    id: 11,
   icon: <img src={StoreIcon} alt="store" className="h-6 w-6" />,
    text: 'Store Settings',
    className: 'flex items-center gap-2',
    dropdownItems: [
      { id: 61, text: 'Submenu 1', link: '/store-settings/submenu1' },
      { id: 62, text: 'Submenu 2', link: '/store-settings/submenu2' }
    ]
  },
  {
    id: 12,
   icon: <img src={ReportIcon} alt="Report" className="h-6 w-6" />,
    text: 'Reporting',
    className: 'flex items-center gap-2',
    dropdownItems: [
      { id: 61, text: 'Submenu 1', link: '/reporting/submenu1' },
      { id: 62, text: 'Submenu 2', link: '/reporting/submenu2' }
    ]
  }
];

export default SideMenu;
