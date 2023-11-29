// import * as React from "react";
import { useState, useEffect } from "react";
import Quick from "../../Assests/Images/qiocklogo.jpg";
import {
  BiMenu,
  BiChevronDown,
 
} from "react-icons/bi";

import DownlIcon from '../../Assests/Dashboard/download.svg';
import OnlineData from '../../Assests/Dashboard/online.svg';
import SynkData from '../../Assests/Dashboard/sync.svg';



export default function Header({ isMenuOpen, setIsMenuOpen }) {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`sticky top-0 left-0 right-0 z-50 bg-white transition-all duration-300 h-24 shadow-md border-b-4 border-black ${
          isSticky ? "" : ""
        }`}
      >
        <div className="flex items-center p-2">
          <BiMenu
            className="text-black text-2xl"
            onClick={(e) => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
          <img src={Quick} alt="Logo" className="w-24 ml-6" />

          <div className="flex items-center ml-6 px-3 py-1 text-black text-base font-circular font-semibold  Admin_std">
            Vape Store
            <BiChevronDown className="ml-1" />
          </div>

          <div className="ml-auto font-circular flex items-center text-base text-black">
          <img src={DownlIcon} alt="icon"  className='ml-2'/>
            <p className="cursor-pointer ml-2 mr-4 font-semibold Admin_std">
              Download App
            </p>
          </div>

          <div className="ml-8 font-circular flex items-center text-base text-black">
          <img src={OnlineData} alt="icon"  className='ml-2'/>
            <p className="cursor-pointer ml-2 mr-4 font-semibold Admin_std">
              Online Store
            </p>
           <img src={SynkData} alt="icon"  className='ml-2'/>
            <p className="cursor-pointer ml-2 font-semibold Admin_std">
              Sync Data
            </p>
          </div>
          <div className="border-t-3 border-b-2 border-black bg-black mb-16"></div>
        </div>
      </div>
    </>
  );
}
