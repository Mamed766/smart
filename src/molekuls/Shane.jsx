import React from "react";
import { TbSquareRotatedFilled } from "react-icons/tb";

const Shane = ({ Author, date }) => {
  return (
    <div className="flex justify-start gap-2 items-center">
      <div>
        <img
          className="w-5 rounded-full"
          src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
          alt=""
        />
      </div>
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
  );
};

export default Shane;
