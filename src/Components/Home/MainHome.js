import React from 'react';
import Home from './Home';
import SideMenu from './SideMenu';
import LeftSide from './LeftSide';

const MainHome = ({ visible }) => {
  return (
    <div className="home-container" style={{ overflow: 'hidden' }}>
      <Home />
      <div className="flex">
      <div className="w-1/5">
  <SideMenu />
</div>
        <div className="w-4/5 my-8 mx-16">
         <LeftSide visible={visible} /> 
        </div>
      </div>
    </div>
  );
};

export default MainHome;