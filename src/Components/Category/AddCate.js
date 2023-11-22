import { FaAngleLeft } from "react-icons/fa";
import React from "react";
import SideMenu from "../Home/SideMenu";

const AddCategory = ({ onFilterChange, handlePhotoChange }) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    onFilterChange(inputValue);
  };

  const handleAdd = () => {
    console.log("Add button clicked");
  };



  // const [formData, setFormData] = useState({
  

  // const handleAdd = () => {
   
  // setFormData({ ...formData, newField: 'newValue' });
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  
  //   axios.post('/submit-url', formData)
  //     .then(response => {
       
  //     })
  //     .catch(error => {
        
  //     });
  // };
  return (
    <div>
   
      <div className="mx-2 mt-2">
        <div
          className="box-content h-[100] p-2 border-4 border-white bg-white rounded-2xl opacity-100 relative "
          style={{ boxShadow: "0px 3px 6px #0000001F" }}
        >
          {/* Title */}
          <div className="flex items-center gap-2 py-4 cursor-pointer">
            <div className="flex items-center gap-2">
              <FaAngleLeft color="black" size={18} />
              <div className="py-2 mx-2 text-[18px] admin_medium">
                Add New Category
              </div>
            </div>
          </div>
          <div class="mt-2 bg-[#000] border-b-2 w-full mb-4"></div>
          {/* Input fields */}
          <div className="">
            <div className="text-[14px] text-[#818181] Admin_std mb-5">
              Title
            </div>

            <div className="w-full">
              <input
                type="text"
                placeholder=""
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-gray-500"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mt-3">
            <div className="text-[14px] text-[#818181] Admin_std  mb-5">
              Description
            </div>

            <div className="w-full">
              <textarea
                placeholder=""
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-gray-500 h-40"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mt-2">
            <div className="text-[14px] text-[#818181] Admin_std mb-5">
            
            </div>
            <div className="w-full">
              <input
                type="file"
                accept="image/*"
                className="w-full border-2 border-dashed rounded px-4 py-2 focus:outline-none focus:border-gray-500 h-64 bg-[#F9F9F9] opacity-100"
                onChange={handlePhotoChange}
              />
            </div>
          </div>
          <div className="flex ml-auto mt-10 justify-end">
        <button
          type="button"
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded mr-2"
        >
          Add
        </button>
        <button
          type="submit"
          className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Cancel
        </button>
      </div>

        </div>
      </div>
    </div>
  );
};

export default AddCategory
