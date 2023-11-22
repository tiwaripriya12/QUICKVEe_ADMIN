import React, { useState } from "react";
import FilterEmp from "./FilterEmp";
import DateRange from "./DateRange";
import ContentList from "./ContentList";
import TableViewData from "./TableViewData";

const MainInStore = () => {
  const [activeTab, setActiveTab] = useState("online");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderInStoreContent = () => {
    if (activeTab === "online") {
      return (
        <div className="bg-white p-4">
          {/* Content for the Online Store tab */}
          <p>This is the Online Store content.</p>
        </div>
      );
    } else if (activeTab === "offline") {
      return (
        <>
          <div className="bg-white w-70 my-7">
            <FilterEmp />
          </div>
          <DateRange />
          <div className="">
            <ContentList />
          </div>
          <div className="">
            <TableViewData />
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div className="box-content h-[300px] w-70 p-4 border-4 border-white bg-white rounded-xl opacity-100 mt-7 " style={{ boxShadow: "0px 3px 6px #0000001F" }}>
      <div className="">
        <button
          onClick={() => handleTabClick("offline")}
          className={`${
            activeTab === "offline"
              ? "bg-[#EBF2FF] text-[#A64F9]"
              : "bg-white text-gray-600"
          } px-12  py-2 font-semibold text-[16px] rounded-r-md focus:outline-none`}
        >
          In-Store Orders
        </button>
        <button
          onClick={() => handleTabClick("online")}
          className={`${
            activeTab === "online"
              ? "bg-[#EBF2FF] text-[#0A64F9]"
              : "bg-white text-gray-600"
          } px-12 py-2 rounded-l-md focus:outline-none font-semibold text-[16px]`}
        >
          Online Orders
        </button>
        <div className="border-t-[3px] border-b border-[#EBF2FF] bg-[#EBF2FF]"></div>
      </div>

      <div className="bg-white-100 p-4">
        <div className="mb-4 w-full">
          {renderInStoreContent()}
        </div>
      </div>
    </div>
  );
};

export default MainInStore;
