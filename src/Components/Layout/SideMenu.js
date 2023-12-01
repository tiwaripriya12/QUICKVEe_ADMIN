import React, { useState } from "react";

import { FaChevronDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import DashboardIcon from "../../Assests/Dashboard/dashboard.svg";
import ShoppingCartIcon from "../../Assests/Dashboard/orders.svg";
import CategoryIcon from "../../Assests/Dashboard/category.svg";
import CouponIcon from "../../Assests/Dashboard/product.svg";
import AttributesIcon from "../../Assests/Dashboard/attributesadmin.svg";
import PurchaseIcon from "../../Assests/Dashboard/attributes.svg";
import DataIcon from "../../Assests/Dashboard/importdata.svg";
import ProductIcon from "../../Assests/Dashboard/coupon.svg";
import VenderIcon from "../../Assests/Dashboard/vender.svg";
import TimesheetIcon from "../../Assests/Dashboard/timesheet.svg";
import StoreIcon from "../../Assests/Dashboard/store.svg";
import ReportIcon from "../../Assests/Dashboard/reporting.svg";


const SideMenu = ({ isMenuOpen, setIsMenuToggle }) => {
  const [clickedItem, setClickedItem] = useState(null);
  const navigate = useNavigate();
  const handleItemClick = (id) => {
    setClickedItem(id);
  };

  return (
    <>
      <div
        className="sidebar-menu"
        style={isMenuOpen ? { width: "16rem" } : { width: "6rem" }}
      >
        {/* Left Side Menu */}
        <div className="flex-1 bg-black text-white p-4">
          {/* <div className=""> */}
          {isMenuOpen
            ? menuItems.map((item) => (
                <div key={item.id} className="mb-4 text-base">
                  {item.dropdownItems ? (
                    <DropdownMenuItem item={item} />
                  ) : (
                    <div
                      className={`flex items-center ${
                        clickedItem === item.id
                          ? "text-[#FFC400]"
                          : "text-gray-400 hover-text-yellow"
                      }`}
                    >
                      {item.icon}
                      <Link
                        onClick={() => handleItemClick(item.id)}
                        className="ml-2 menu-item text-[16px] Admin_std"
                        to={item.link}
                      >
                        {item.text}
                      </Link>
                    </div>
                  )}
                </div>
              ))
              
            : menuItems.map((item) => (
                <div key={item.id} className="mb-4 text-base cursor-pointer">
                  {item.dropdownItems ? (
                    <DropdownMenuItem item={item} />
                  ) : (
                    <div
                      className={`flex flex-col items-center ${
                        clickedItem === item.id
                          ? "text-[#FFC400]"
                          : "text-gray-400 hover-text-yellow"
                      }`}
                      onClick={() => {
                        handleItemClick(item.id);
                        navigate(item.link);
                      }}
                    >
                      {item.icon}
                    </div>
                  )}
                </div>
              ))}
          {/* </div> */}
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
    <div className="flex items-center">
      
      {" "}
      {/* mt-4 and mb-4 apply equal top and bottom margins */}
      {/* Your existing menu code */}
      {item.icon}
      <p
        className="ml-2 cursor-pointer menu-item text-gray-400  "
        onClick={toggleDropdown}
      >
        {/* Apply text-gray-400 class for the specified color */}
        {item.text}
        <FaChevronDown className="ml-1" />
      </p>
      {isDropdownOpen && (
        <div className="ml-4 bg-white p-2">
          {/* Dropdown items go here */}
          {item.dropdownItems.map((dropdownItem) => (
            <p
              key={dropdownItem.id}
              className="flex items-center submenu-item text-gray-400"
            >
              {/* Apply text-gray-400 class for the specified color */}
              {dropdownItem.text}
              <FaChevronDown className="ml-1" />
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
    icon: (
      <img src={DashboardIcon} alt="Dashboard" className="h-6 w-6 mt-4 mb-4" />
    ),
    text: "Dashboard",
    link: "/dashboard",
  },
  {
    id: 2,
    icon: (
      <img src={ShoppingCartIcon} alt="Order" className="h-6 w-6 mt-4 mb-4" />
    ),
    text: "Order",
    link: "/order",
  },
  {
    id: 3,
    icon: (
      <img src={CategoryIcon} alt="Category" className="h-6 w-6 mt-4 mb-4" />
    ),
    text: "Category",
    link: "/category",
  },
  {
    id: 4,
    icon: (
      <img src={ProductIcon} alt="Products" className="h-6 w-6 mt-4 mb-4" />
    ),
    text: "Products",
    link: "/products",
  },
  {
    id: 5,
    icon: (
      <img
        src={AttributesIcon}
        alt="Attributes"
        className="h-6 w-6 mt-4 mb-4"
      />
    ),
    text: "Attributes",
    link: "/attributes",
  },
  {
    id: 6,
    icon: (
      <img
        src={PurchaseIcon}
        alt="Purchase Data"
        className="h-6 w-6 mt-4 mb-4"
      />
    ),
    text: "Purchase Orders",
    link: "/purchase-data",
  },
  {
    id: 7,
    icon: (
      <img src={DataIcon} alt="Import Data" className="h-6 w-6 mt-4 mb-4" />
    ),
    text: "Import Data",
    link: "/import-data",
  },
  {
    id: 4,
    icon: <img src={CouponIcon} alt="Coupons" className="h-6 w-6 mt-4 mb-4" />,
    text: "Coupons",
    link: "/coupons",
  },
  {
    id: 9,
    icon: <img src={VenderIcon} alt="Vendors" className="h-6 w-6 mt-4 mb-4" />,
    text: "Vendors",
    link: "/vendors",
  },
  {
    id: 10,
    icon: (
      <img src={TimesheetIcon} alt="Timesheet" className="h-6 w-6 mt-4 mb-4" />
    ),
    text: "Timesheet",
    link: "/timesheet",
  },

  {
    id: 11,
    icon: <img src={StoreIcon} alt="store" className="h-6 w-6 mt-4 mb-4" />,
    text: "Store Settings",
    className: "flex items-center gap-2",
    dropdownItems: [
      { id: 61, text: "Submenu 1", link: "/store-settings/submenu1" },
      { id: 62, text: "Submenu 2", link: "/store-settings/submenu2" },
    ],
  },
  {
    id: 12,
    icon: <img src={ReportIcon} alt="Report" className="h-6 w-6 mt- mb-4" />,
    text: "Reporting",
    className: "flex items-center gap-2",
    dropdownItems: [
      { id: 61, text: "Submenu 1", link: "/reporting/submenu1" },
      { id: 62, text: "Submenu 2", link: "/reporting/submenu2" },
    ],
  },
];

export default SideMenu;
