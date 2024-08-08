import React from "react";
import { FaAngleRight } from "react-icons/fa";

const NewThings = ({ title }) => {
  return (
    <div className="flex mt-10 gap-1 items-center">
      <h2 className="font-bold">{title}</h2>
      <div className="border-b-2 border-t-2 h-[5px]  border-gray-400 w-[60%]"></div>
      <div>
        <button
          className="flex items-center border border-gray-300 p-1 rounded-full text-gray-600 
      hover:text-black  duration-300
    text-[12px] gap-1"
        >
          See All <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default NewThings;
