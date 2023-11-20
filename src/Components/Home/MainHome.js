import React from 'react';
import Home from './Home';
import SideMenu from './SideMenu';
import LeftSide from './LeftSide';

const MainHome = ({ visible }) => {
  return (
    <div className="home-container" style={{ overflow: 'hidden' }}>
      <Home />
      <div className="flex">
      <div className="w-1/6">
        <SideMenu />
     </div>
        <div className="w-5/6 bg-[#F9F9F9] mx-4 my-4">
         <LeftSide visible={visible} /> 
        </div>
      </div>
    </div>
  );
};

export default MainHome;