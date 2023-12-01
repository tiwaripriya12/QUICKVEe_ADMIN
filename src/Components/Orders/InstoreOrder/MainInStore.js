import React, { useState } from "react";
import FilterEmp from "./FilterEmp";
//import { DateRange } from "@mui/icons-material";
import DateRange from "./DateRange";
import { ContentCopy } from "@mui/icons-material";
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
        <div className="">
          <div className="">
            <FilterEmp />
          </div>
          <div className="w-full mt-24">
            <DateRange />
          </div>
          <div className="w-full">
            <ContentList />
          </div>
          <div className="">
            <TableViewData />
          </div>
        </div>
      );
    } else if (activeTab === "offline") {
      return (
        <>
          <div className="">
            <FilterEmp />
          </div>
          <div className="w-full mt-24">
            <DateRange />
          </div>
          <div className="w-full">
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
    <div className="mx-8 my-2">
      <div
        className="box-content h-[300px] w-70 p-4 border-4 border-white bg-white rounded-xl opacity-100 mt-9 mx-12"
        style={{ boxShadow: "0px 3px 6px #0000001F" }}
      >
        <div className="">
          <button
            onClick={() => handleTabClick("offline")}
            className={`${
              activeTab === "offline"
                ? "bg-[#EBF2FF] text-[#A64F9]"
                : "bg-white text-gray-600"
            } px-12 py-2 font-semibold text-[16px] rounded-r-md focus:outline-none`}
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
          <div className="mb-4 w-full">{renderInStoreContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default MainInStore;
