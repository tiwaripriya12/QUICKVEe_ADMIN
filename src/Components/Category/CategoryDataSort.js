import React, { useState } from "react";
import { Link } from "react-router-dom";

//import { v4 as uuid } from 'uuid';
import DeleteIcon from "../../Assests/Dashboard/sdfdf.svg";

const CategoryDataSort = ({ isOpen, onClose }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Electronics",
      items: "View Items",
      enabled: "Online",
      disable: "Register",
    },
    {
      id: 2,
      title: "Music",
      items: "View Items",
      enabled: "Online",
      disable: "Register",
    },
    {
      id: 3,
      title: "Furniture",
      items: "View Items",
      enabled: "Online",
      disable: "Register",
    },
    {
      id: 4,
      title: "Gardening",
      items: "View Items",
      enabled: "Online",
      disable: "Register",
    },
    {
      id: 5,
      title: "Furniture",
      items: "View Items",
      enabled: "Online",
      disable: "Register",
    },
    {
      id: 6,
      title: "Music",
      items: "View Items",
      enabled: "Online",
      disable: "Register",
    },
    // Add more items as needed
  ]);

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleCheckboxChange = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, enabled: !item.enabled } : item
    );
    setItems(updatedItems);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mx-2 mt-2">
      <div
        className="box-content h-[100] p-2 border-4 border-white bg-white rounded-2xl opacity-100 relative"
        style={{
          boxShadow: "0px 3px 6px #0000001F",
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        <div>
          <div className="flex justify-between gap-2 mx-6 my-6">
            <div className="text-[18px] Admin_std leading-0 text-black admin_medium font-semibold opacity-100">
              Category
            </div>
            <div>
              <Link
                to="/addCategory"
                className="text-[18px] Admin_std leading-0 text-blue-500 admin_medium font-semibold opacity-100"
              >
                Add Category
                <span className="text-[18px] text-blue-500"> + </span>
                
              </Link>
            </div>
          </div>
        </div>

          <table className="w-full">
            <thead>
              <tr className="bg-black text-[white] adminstdbook">
                <th className="p-4 text-left ">Sort</th>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Items</th>
                <th className="p-4 text-left">Enable</th>
                <th className="p-4 text-left">Disable</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr
                  key={item.id}
                  className="bg-white admin_medium text-[#000000] text-[16px]"
                >
                  <td className="p-4">{item.id}</td>
                  <td className="p-4">{item.title}</td>
                  <td className="p-4 text-[#0A64F9]">{item.items}</td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <input
                        className={`text-xl ${
                          item.status === "Online" ? "bg-[#1EC26B]" : ""
                        }`}
                        type="checkbox"
                        checked={item.enabled}
                        onChange={() => handleCheckboxChange(item.id)}
                      />
                      <span className="ml-2">Online</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <input
                      className={`text-xl ${
                        item.status === "Register" ? "bg-[#1EC26B]" : ""
                      }`}
                      type="checkbox"
                      checked={item.disable}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                    <span className="ml-2">Register</span>
                  </td>
                  <td className="p-4">
                    <button onClick={() => handleDelete(item.id)}>
                      <img
                        src={DeleteIcon}
                        alt="delete"
                        className="h-6 w-6 mt-4 mb-4"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      
      </div>
    </div>

    
  );
};

export default CategoryDataSort;
