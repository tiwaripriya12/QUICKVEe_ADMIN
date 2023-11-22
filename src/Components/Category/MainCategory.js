import React from "react";

import CategoryList from "./CategoryList";
import CategoryDataSort from "./CategoryDataSort";

const MainCategory = () => {
  return (
    <>
      <div className="">
        <CategoryList />
      </div>

      <div className="">
        <CategoryDataSort />
      </div>
    </>
  );
};

export default MainCategory;
