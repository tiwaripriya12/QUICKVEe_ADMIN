import React, { useState } from "react";
import FilterEmp from "./FilterEmp";
//import { DateRange } from "@mui/icons-material";
import DateRange from "./DateRange";
//import { ContentCopy } from "@mui/icons-material";
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
          <div className=" mt-24">
            <DateRange />
          </div>
          <div className="">
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
          <div className="">
            <FilterEmp />
          </div>
          <div className="mt-24">
            <DateRange />
          </div>
          <div className="">
            <ContentList />
          </div>
          <div className="">
            <TableViewData />
          </div>
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <>
    <div className="mx-8 my-2">
      <div
        className="box-content h-[300px] w-70 p-4 border-4 border-white bg-white rounded-xl opacity-100 mt-9 mx-12"
        style={{ boxShadow: "0px 3px 6px #0000001F" }}
      >
        <div className="mb-6">
          <button
            onClick={() => handleTabClick("offline")}
            className={`${
              activeTab === "offline"
                ? "bg-[#EBF2FF] text-[#0A64F9]"
                : "bg-white text-[#6A6A6A]"
            } px-12 py-2 rounded Admin_bold text-[16px]  focus:outline-none`}
          >
            In-Store Orders
          </button>
          <button
            onClick={() => handleTabClick("online")}
            className={`${
              activeTab === "online"
                ? "bg-[#EBF2FF] text-[#0A64F9]"
                : "bg-white text-[#6A6A6A]"
            } px-12 py-2 rounded focus:outline-none Admin_bold text-[16px]`}
          >
            Online Orders
          </button>
          <div className="border-t-[1px] border-b border-[#EBF2FF] bg-[#EBF2FF]"></div>
        </div>

        <div className="">
          <div className="">{renderInStoreContent()}</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MainInStore;
