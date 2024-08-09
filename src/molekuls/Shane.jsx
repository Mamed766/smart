import React from "react";
import { TbSquareRotatedFilled } from "react-icons/tb";

const Shane = ({ Author, date, image }) => {
  return (
    <div className="flex justify-start  items-center">
      <div className={`${image ? "mr-1" : ""}`}>
        {image ? (
          <img
            className="w-5 rounded-full"
            src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
            alt=""
          />
        ) : (
          ""
        )}
      </div>
      <div className="flex items-center gap-1">
        <div className="text-[10px]">
          <h3>{Author}</h3>
        </div>
        <div className="text-[5px]">
          <TbSquareRotatedFilled />
        </div>
        <div className="text-[10px]">
          <h3>{date}</h3>
        </div>
      </div>
    </div>
  );
};

export default Shane;
