import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import Quick from '../../Assests/Images/qiocklogo.jpg';
import { BiMenu, BiChevronDown, BiDownArrowAlt, BiShow, BiSync } from 'react-icons/bi';

const Home = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 h-24 ${
          isSticky ? 'shadow-md border-b-4 border-black' : ''
        }`}
      >
        <div className='flex items-center m-2 p-2'>
          <BiMenu className='text-black text-2xl' />
          <img src={Quick} alt="Logo" className='w-24 ml-6' />

          <div className='flex items-center ml-6 px-3 py-1 text-black text-base font-circular font-semibold'>
            Vape Store
            <BiChevronDown className='ml-1' />
          </div>

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
          <div className='border-t-3 border-b-2 border-black bg-black mb-16'></div>
        </div>
      </div>

      <div className="container mt-20">
        {/* Content Below the Sticky Header */}
      </div>
    </>
  );
};

export default Home;
