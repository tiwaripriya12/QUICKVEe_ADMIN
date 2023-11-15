import React from "react";
import Welcome from "./Welcome";
import NetSales from "./NetSales";
import SellItems from "./SellItems";

const DashboardMain = () => {
  return (
    <div>
      <Welcome />
      <NetSales />
      <SellItems />
    </div>
  );
};

export default DashboardMain;
