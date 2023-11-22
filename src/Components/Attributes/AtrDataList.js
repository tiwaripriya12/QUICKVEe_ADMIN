import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

const AtrDataList = () => {
  const [items, setItems] = useState([
    { id: "1", sort: "1", title: "Color", action: <FaPencilAlt /> },
    { id: "2", sort: "2", title: "Size", action: <FaPencilAlt /> },
    { id: "3", sort: "3", title: "Flavor", action: <FaPencilAlt /> },
    { id: "4", sort: "4", title: "Material", action: <FaPencilAlt /> },
    { id: "5", sort: "5", title: "Size", action: <FaPencilAlt /> },
    { id: "6", sort: "6", title: "Flavor", action: <FaPencilAlt /> },
    // Add more data as needed
  ]);

  const sortBy = (key) => {
    const sortedItems = [...items].sort((a, b) => {
      return a[key].localeCompare(b[key], undefined, { numeric: true });
    });
    setItems(sortedItems);
  };

  return (
    <>
      <div className="mx-2 my-4">
        <div className="box-content h-[450px] w-70 p-2 border-4 border-white bg-white rounded-xl opacity-100 mt-9" style={{ boxShadow: "0px 3px 6px #0000001F" }}>
          <div>
            <div className="flex justify-between gap-2 mx-6 my-6">
              <div className="text-[18px] Admin_std leading-0 text-black admin_medium font-semibold opacity-100">
                Attributes
              </div>
              <div>
                <div className="text-[18px] Admin_std leading-0 text-blue-500 admin_medium font-semibold opacity-100">
                  Add New Attributes
                  <span className="text-[18px] text-blue-500"> + </span>
                </div>
              </div>
            </div>
          </div>

          <table className="w-full">
            <thead>
              <tr className="bg-black text-white">
                <th className="p-0 ml-2 cursor-pointer" onClick={() => sortBy("sort")}>Sort</th>
                <th className="p-3">Title</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="text-black text-[16px] admin_medium border-b">
                  <td className="p-3">{item.sort}</td>
                  <td className="p-3">{item.title}</td>
                  <td className="p-3 text-right">{item.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AtrDataList;
