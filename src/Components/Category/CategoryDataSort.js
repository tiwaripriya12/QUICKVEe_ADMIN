import React, { useState } from "react";
import { Link } from "react-router-dom";
import CrossIcon from "../../Assests/Dashboard/cross.svg";
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
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setIsModalOpen(true);
    setModalContent(content);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <>
      <div className="mx-2 my-7">
        <div
          className="box-content h-[100] p-4 border-4 border-white bg-white rounded-lg shadow-md opacity-100 relative mt-9 mx-8"
        >
          <div>
            <div className="flex justify-between gap-2 mx-6 my-6">
              <div className="text-[20px] font-normal opacity-100 text-black ml-4 admin_medium">
                Category
              </div>
              <div>
                <Link
                  to="/addCategory"
                  className="text-[20px] font-normal opacity-100 text-blue-500 ml-4 admin_medium"
                >
                  Add Category
                  <span className="text-[20px] text-blue-500"> + </span>
                </Link>
              </div>
            </div>
          </div>

          <table className="w-full">
            <thead>
              <tr className="bg-[#253338] text-[white] adminstdbook">
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
                  className="bg-white admin_medium text-[#000000] text-[18px]"
                >
                  <td className="p-4">{item.id}</td>
                  <td className="p-4">{item.title}</td>
                  <td className="p-4">
                    <button
                      className="text-[#0A64F9] underline"
                      onClick={() => openModal(item.items)}
                    >
                      View Items
                    </button>
                  </td>
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
                        className="h-6 w-6 mt-4 mb-4 text-2xl"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="absolute left-1/6 w-2/3 h-2/3 bg-white rounded-lg shadow-md p-6">
            <div className="flex">
              <div className="text-[18px] leading-3 ">Electronics</div>
              <div className="flex ml-auto my-4">
                <div className="flex items-center space-x-4">
                  <select
                    className="border rounded px-2 py-1 mr-7 bg-white border-[#9E9E9E] text-[#9E9E9E]"
                  >
                    <option value="day">Recently Added</option>
                    <option value="month">Closed</option>
                    <option value="time">Open</option>
                  </select>
                </div>
                <img
                  src={CrossIcon}
                  alt="icon"
                  className="ml-auto mb-4"
                  onClick={closeModal}
                />
              </div>
            </div>

            <div class="mt-2 bg-[#000] border-b-2 w-full mb-4"></div>

            <button className="px-4 py-2 bg-white border text-[16px] text-black opacity-100 Admin_bold leading-0 rounded-md mx-4 my-2">
              Cameras & Photography
            </button>

            <button className="px-4 py-2 bg-white border text-[16px] text-black opacity-100 Admin_bold leading-0 rounded-md">
              Home Audio
            </button>

            <button
              className="px-4 py-2 bg-white border text-[16px] text-black opacity-100 Admin_bold leading-0 rounded-md mx-4 my-2"
              onClick={handleClick}
            >
              Home Theater, TV & Video
            </button>
            
            <button
              className="px-4 py-2 bg-white border text-[16px] text-black opacity-100 Admin_bold leading-0 rounded-md mx-4 my-2"
              onClick={handleClick}
            >
              Home Theater, TV & Video
            </button>
            <button className="px-4 py-2 bg-white border text-[16px] text-black opacity-100 Admin_bold leading-0 rounded-md">
              Home Audio
            </button>



            <button className="px-4 py-2 bg-white border text-[16px] text-black opacity-100 Admin_bold leading-0 rounded-md mx-4 my-2">
              Cameras & Photography
            </button>


            {/* Add more buttons as needed */}

            <div class="mt-2 bg-[#000] border-b-2 w-full mb-4"></div>

            <button
              className="px-8 py-2 bg-blue-500 rounded-md text-white ml-auto"
              onClick={closeModal}
            >
              ok
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryDataSort;
