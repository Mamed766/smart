import React from "react";
import getTypeBgColor from "../helper/helper";
import Shane from "./Shane";

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
  textsize,
  descDownWidth,
}) => {
  return (
    <div
      className="relative overflow-hidden group rounded-lg hero__aside--width"
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
        <div
          className={`bg-black text-[14px]  sm:text-[${textsize}] font-bold h-[50px] p-2 flex items-center`}
        >
          <h2>{descUp}</h2>
        </div>
        <div
          className={`bg-black text-[14px]  sm:text-[${textsize}] font-bold h-[50px]  p-2 flex items-center`}
          style={{ width: `${descDownWidth}px` }}
        >
          {descDown}
        </div>
        <Shane Author={"Shane Doe"} date={"Jan 14,2021"} />
      </div>
    </div>
  );
};

export default CustomCard;
