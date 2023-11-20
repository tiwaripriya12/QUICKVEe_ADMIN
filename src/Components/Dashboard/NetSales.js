import React, { useState } from "react";
import BarCharts from "./BarCharts";

const NetSales = () => {
  // const [selectedOption, setSelectedOption] = useState("Days");
  // const [showOptions, setShowOptions] = useState(false);

  const options = [
    "Days",
    "Hours",
    "Hours of Days",
    "Days of Week",
    "Weeks",
    "Months",
    "Years",
  ];

  // const handleOptionSelect = (option) => {
  //   setSelectedOption(option);
  //   setShowOptions(false);
  // };

  return (
    <>
      <div className="mx-4 my-9">
        <div
          className="box-content h-[100]  p-2 border-4 border-white bg-white rounded-2xl opacity-100 flex justify-between items-center relative"
          style={{ boxShadow: "0px 3px 6px #0000001F" }}
        >
          <BarCharts />
        </div>
      </div>
    </>
  );
};

export default NetSales;
