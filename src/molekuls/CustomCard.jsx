import React from "react";
import { TbSquareRotatedFilled } from "react-icons/tb";
import getTypeBgColor from "../helper/helper";

const CustomCard = ({
  type,
  descUp,
  descDown,
  author,
  date,
  image,
  cardWidth,
  cardHeight,
  children,
}) => {
  return (
    <div
      className="relative overflow-hidden group rounded-lg"
      style={{ width: `${cardWidth}%`, height: `${cardHeight}rem` }}
    >
      <img
        className=" w-[100%] h-[27rem]  group-hover:scale-110 custom__card--img "
        src={image}
        alt=""
      />

      <div className="absolute inset-0  text-white cursor-pointer  flex justify-center items-center text-[5rem]">
        {" "}
        {children}
      </div>

      <div className="absolute bottom-0  p-3 flex flex-col gap-2 text-white">
        <button
          className={`flex   justify-center items-center w-[70px] rounded-lg text-[10px] p-1 
            ${getTypeBgColor(type)}
          `}
        >
          {type}
        </button>
        <div className="bg-black text-[14px]  sm:text-[22px] font-bold h-[50px] p-2 flex items-center">
          <h2>{descUp}</h2>
        </div>
        <div className="bg-black  text-[14px]  sm:text-[22px] font-bold h-[50px] p-2 flex  items-center">
          {descDown}
        </div>
        <div className="flex justify-start gap-2 items-center">
          <div>
            <img
              className="w-5 rounded-full"
              src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
              alt=""
            />
          </div>
          <div className="text-[10px]">
            <h3>{author}</h3>
          </div>
          <div className="text-[5px]">
            <TbSquareRotatedFilled />
          </div>
          <div className="text-[10px]">
            <h3>{date}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
