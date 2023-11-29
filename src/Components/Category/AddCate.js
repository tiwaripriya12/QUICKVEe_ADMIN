import { FaAngleLeft } from "react-icons/fa";
import React, { useState } from "react";

const AddCategory = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [file, setFile] = useState();

	const handleAdd = () => {
		console.log("Add button clicked");
		console.log("Title:", title);
		console.log("Description:", description);
		console.log("file:", file);
		closeModal(); // Close the modal after adding
	};

	const closeModal = () => {
		console.log("Closing modal");
		setIsModalOpen(false);
		setTitle("");
		setDescription("");
		setFile("");
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		if (name === "title") {
			setTitle(value);
		} else if (name === "description") {
			setDescription(value);
		}
	};

	const handlePhotoChange = (e) => {
		const selectedFile = e.target.files[0];
	
		if (selectedFile) {
		  const reader = new FileReader();
	
		  reader.onloadend = () => {
			setFile(reader.result);
		  };
	
		  reader.readAsDataURL(selectedFile);
		}
	  };
	const navigateToCategoryPage = () => {
		window.location.href = "/category"; // Replace "/category" with the actual path of your category page
	};

	return (
		<div className="mx-2 mt-2">
			<div
				className="box-content h-[100] p-4 border-4 border-white bg-white rounded-2xl opacity-100 relative mt-9 mx-8"
				style={{ boxShadow: "0px 3px 6px #0000001F" }}
			>
				<div className="flex items-center gap-2 py-4 cursor-pointer">
					<div className="flex items-center gap-2">
						<FaAngleLeft color="black" size={18}
            	onClick={() => {
                closeModal();
                navigateToCategoryPage();
              }} />
						<div className="py-2 mx-2 text-[18px] admin_medium">
							Add New Category
						</div>
					</div>
				</div>
				<div className="mt-2 bg-[#000] border-b-2 w-full mb-4"></div>
				<div className="mb-4">
					<div className="text-[14px] text-[#818181] Admin_std mb-2">Title</div>
					<input
						type="text"
						placeholder="Enter title"
						name="title"
						value={title}
						className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-gray-500"
						onChange={handleInputChange}
					/>
				</div>
				<div className="mb-4">
					<div className="text-[14px] text-[#818181] Admin_std mb-2">
						Description
					</div>
					<textarea
						placeholder="Enter description"
						name="description"
						value={description}
						className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-gray-500 h-40"
						onChange={handleInputChange}
					/>
				</div>
				 <div className="mb-4">
      <div className="text-[14px] text-[#818181] Admin_std mb-2">
        Update Photo
      </div>
      <input
        type="file"
        accept="*"
        name="photo"
        onChange={handlePhotoChange}
        className="w-full border-2 border-dashed rounded px-4 py-2 focus:outline-none focus:border-gray-500 h-20 bg-[#F9F9F9] opacity-100"
      />

      {file && (
        <div className="mt-2">
          <p>Preview:</p>
          <img src={file} alt="Preview" className="max-w-full h-auto" />
        </div>
      )}
    </div>
				<div className="flex justify-end">
					<button
						type="button"
						onClick={handleAdd}
						className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded mr-2"
					>
						Add
					</button>
					<button
						type="button"
						onClick={() => {
							closeModal();
							navigateToCategoryPage();
						}}
						className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded ml-2"
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddCategory;
