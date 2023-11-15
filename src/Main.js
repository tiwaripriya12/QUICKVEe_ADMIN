import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainHome from './Components/Home/MainHome';
import Home from './Components/Home/Home';

const Main = () => {
  return (
      <Routes>
       
        <Route path="/" element={<MainHome />} />
        <Route path="/dashboard" element={<MainHome visible={"dashboard"} />} />
        <Route path="/order" element={<MainHome visible={"order"} />} />
      </Routes>
  );
};

export default Main;