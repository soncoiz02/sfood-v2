import React from "react";
import CategoryList from "./CategoryList";

const Sidebar = () => {
  return (
    <div className="sticky top-[60px] left-0 md:min-h-[60vh] md:w-[300px] w-full bg-white shadow-lg p-4 rounded-[20px]">
      <div className="flex flex-col w-full h-full items-center">
        <h2 className="text-secondary md:text-xl text-base font-bold">
          Category List
        </h2>
        <div className="w-full border-b-2 border-dashed mt-2"></div>
        <CategoryList />
      </div>
    </div>
  );
};

export default Sidebar;
