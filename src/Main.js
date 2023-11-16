import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainHome from './Components/Home/MainHome';
import Home from './Components/Home/Home';

const Main = () => {
  return (
      <Routes>
       
        <Route path="/" element={<MainHome  visible ={"dashboard"}/>} />
        <Route path="/dashboard" element={<MainHome visible={"dashboard"} />} />
        <Route path="/order" element={<MainHome visible={"order"} />} />
        <Route path="/category" element={<MainHome visible={"category"} />} />
        <Route path="/purchase-data" element={<MainHome visible={"purchase-data"} />} />
        <Route path="/products" element={<MainHome visible={"products"} />} />
        <Route path="/attributes" element={<MainHome visible={"attributes"} />} />
        <Route path="/import-data" element={<MainHome visible={"import-data"} />} />
        <Route path="/coupons" element={<MainHome visible={"coupons"} />} />
        <Route path="/vendors" element={<MainHome visible={"vendors"} />} />
      </Routes>
      
  );
};

export default Main;