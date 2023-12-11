import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import DashboardIcon from "../../Assests/Dashboard/dashboard.svg";
import ShoppingCartIcon from "../../Assests/Dashboard/orders.svg";
import CategoryIcon from "../../Assests/Dashboard/category.svg";
import CouponIcon from "../../Assests/Dashboard/coupanb.svg";
import AttributesIcon from "../../Assests/Dashboard/attributesadmin.svg";
import PurchaseIcon from "../../Assests/Dashboard/purchesb.svg";
import ProductIcon from "../../Assests/Dashboard/productb.svg";
import VenderIcon from "../../Assests/Dashboard/vender.svg";
import TimesheetIcon from "../../Assests/Dashboard/TimesheetB.svg";
import TimesheetsIcon from "../../Assests/Dashboard/timesheets.svg";
import StoreIcon from "../../Assests/Dashboard/store.svg";
import ReportIcon from "../../Assests/Dashboard/reporting.svg";
import DashIcon from "../../Assests/Dashboard/dashIcon.svg";
import OrderYellow from "../../Assests/Dashboard/ordery.svg";
import CatIcon from "../../Assests/Dashboard/categoryd.svg";
import AtriIcon from "../../Assests/Dashboard/attributesy.svg";
import ProdIcon from "../../Assests/Dashboard/productY.svg";
import VenIcon from "../../Assests/Dashboard/venderb.svg";
import VenIcons from "../../Assests/Dashboard/vendery.svg";
import DataIcons from "../../Assests/Dashboard/importy.svg";
import CouIcon from "../../Assests/Dashboard/coupony.svg";
import PurIcon from "../../Assests/Dashboard/purchaseY.svg";
import SettingIcon from "../../Assests/Dashboard/settingY.svg";
import ResportIcons from "../../Assests/Dashboard/reports.svg";


  const SideMenu = ({ isMenuOpen, setIsMenuToggle }) => {
    const [activeItem, setActiveItem] = useState(1); // Set Dashboard as the default active item
    const navigate = useNavigate();
  
    const handleItemClick = (id, link) => {
      setActiveItem(id);
      navigate(link);
    };
  

  return (
    <>
      <div
        className="sidebar-menu"
        style={isMenuOpen ? { width: "16rem" } : { width: "6rem" }}
      >
        {/* Left Side Menu */}
        <div className="flex-1 bg-[#253338] text-[#9E9E9E]">
          {isMenuOpen
            ? menuItems.map((item) => (
                <div
                  key={item.id}
                  className={`mb-4 text-base ${
                    activeItem === item.id ? "active" : ""
                  }`}
                >
                  {item.dropdownItems ? (
                    <DropdownMenuItem item={item} />
                  ) : (
                    <div
                    className={`flex items-center ${
                      activeItem === item.id ? "bg-[#414F54] text-[#FFC400]" : ""
                        ? "text-[#FFC400] active:bg-[#414F54] hover:bg-[#414F54] px-0"
                        : ""
                    }`}
                  >
                    {activeItem === item.id ? item.activeIcon : item.icon}
                    <Link
                      onClick={() => handleItemClick(item.id)}
                      className={`ml-2 menu-item text-[18px] Admin_std ${
                        activeItem === item.id ? "bg-[#414F54]" : ""
                      }`}
                      to={item.link}
                    >
                      {item.text}
                    </Link>
                  </div>
                  )}
                </div>
              ))
            : menuItems.map((item) => (
                <div
                  key={item.id}
                  
                  className={`mb-4 text-base cursor-pointer ${
                    activeItem === item.id ? "active" : ""
                  }`}
                >
                  {item.dropdownItems ? (
                    <DropdownMenuItem item={item} />
                  ) : (
                    <div
                      className={`flex flex-col items-center ${
                        activeItem === item.id 
                          ? "text-[#FFC400] active"
                          : "text-gray-400 hover-text-yellow"
                      }`}
                      onClick={() => {
                        handleItemClick(item.id);
                        navigate(item.link);
                      }}
                    >
                      {activeItem === item.id ? item.activeIcon : item.icon}
                    </div>
                  )}
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

// Dropdown menu item component
const DropdownMenuItem = ({ item, isDropdownOpen, setIsDropdownOpen }) => {
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center">
      {item.icon}
      <p
        className="ml-2 cursor-pointer menu-item text-gray-400"
        onClick={toggleDropdown}
      >
        {item.text}
        <FaChevronDown className="ml-1" />
      </p>
      {isDropdownOpen && (
        <div className="ml-4 bg-white p-2">
          {item.dropdownItems.map((dropdownItem) => (
            <p
              key={dropdownItem.id}
              className="flex items-center submenu-item text-gray-400 none"
            >
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
      <img
        src={DashIcon}
        alt="Dashboard"
        className="h-6 w-10 mt-4 mb-4 "
      />
    ),
    activeIcon: (
      <img
        src={DashboardIcon}
        alt="Dashboard"
        className="h-6 w-10 mt-4 mb-4"
      />
    ),
    text: "Dashboard",
    link: "/dashboard",
  },

  {
    id: 2,
    icon: (
      <img src={ShoppingCartIcon} alt="Order" className="h-6 w-10 mt-4 mb-4" />
    ),
    activeIcon: (
      <img src={OrderYellow} alt="Dashboard" className="h-6 w-10 mt-4 mb-4 " />
    ),
    text: "Order",
    link: "/order",
  },
  {
    id: 3,
    icon: (
      <img src={CategoryIcon} alt="Category" className="h-6 w-10 mt-4 mb-4" />
    ),
    activeIcon: (
      <img src={CatIcon} alt="Dashboard" className="h-6 w-10 mt-4 mb-4 " />
    ),
    text: "Category",
    link: "/category",
  },
  {
    id: 4,
    icon: (
      <img src={ProductIcon} alt="Products" className="h-6 w-10 mt-4 mb-4" />
    ),
    activeIcon: (
      <img src={ProdIcon} alt="Dashboard" className="h-6 w-10 mt-4 mb-4 " />
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
        className="h-6 w-10 mt-4 mb-4"
      />
    ),
    activeIcon: (
      <img
        src={AtriIcon}
        alt="atributes"
        className="h-6 w-10 mt-4 mb-4"
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
        className="h-6 w-10 mt-4 mb-4"
      />
    ),
    activeIcon: (
      <img src={PurIcon} alt="Dashboard" className="h-6 w-10 mt-4 mb-4 " />
    ),
    text: "Purchase Orders",
    link: "/purchase-data",
  },
  {
    id: 7,
    icon: (
      <img src={VenderIcon} alt="Import Data" className="h-6 w-10 mt-4 mb-4" />
    ),

    text: "Import Data",
    link: "/import-data",
    activeIcon: (
      <img src={DataIcons} alt="Dashboard" className="h-6 w-10 mt-4 mb-4 " />
    ),
    text: "Import Data",
    link: "/import-data",
  },
  {
    id: 8,
    icon: <img src={CouponIcon} alt="Coupons" className="h-6 w-10 mt-4 mb-4" />,
    text: "Coupons",
    link: "/coupons",
    activeIcon: (
      <img src={CouIcon} alt="Dashboard" className="h-6 w-10 mt-4 mb-4 " />
    ),
    text: "Coupons",
    link: "/coupons",
  },
  {
    id: 9,
    icon: <img src={VenIcon} alt="Vendors" className="h-6 w-10 mt-4 mb-4" />,
    text: "Vendors",
    link: "/vendors",
    activeIcon: (
      <img src={VenIcons} alt="Dashboard" className="h-6 w-10 mt-4 mb-4 " />
    ),
    text: "Vendors",
    link: "/vendors",
  },
  {
    id: 10,
    icon: (
      <img src={TimesheetIcon} alt="Timesheet" className="h-6 w-10 mt-4 mb-4" />
    ),
    text: "Timesheet",
    link: "/timesheet",
    activeIcon: (
      <img
        src={TimesheetsIcon}
        alt="Dashboard"
        className="h-6 w-10 mt-4 mb-4 "
      />
    ),
    text: "Timesheet",
    link: "/timesheet",
  },
  {
    id: 11,
    icon: <img src={StoreIcon} alt="store" className="h-6 w-10 mt-4 mb-4" />,
    activeIcon: (
      <img src={SettingIcon} alt="active store" className="h-6 w-10 mt-4 mb-4" />
    ),
    text: "Store Settings",
    className: "flex items-center gap-2",
    dropdownItems: [
      // { id: 61, text: "Submenu 1", link: "/store-settings/submenu1" },
      // { id: 62, text: "Submenu 2", link: "/store-settings/submenu2" },
    ],
  },
  {
    id: 12,
    icon: <img src={ReportIcon} alt="Report" className="h-6 w-10 mt- mb-4" />,
    activeIcon: (
      <img
        src={ResportIcons}
        alt="active report"
        className="h-6 w-10 mt- mb-4"
      />
    ),
    text: "Reporting",
    className: "flex items-center gap-2",
    dropdownItems: [
      // { id: 61, text: "Submenu 1", link: "/reporting/submenu1" },
      // { id: 62, text: "Submenu 2", link: "/reporting/submenu2" },
    ],
  },
];

export default SideMenu;
