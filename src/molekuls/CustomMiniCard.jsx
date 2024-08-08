import React from "react";
import { TbSquareRotatedFilled } from "react-icons/tb";
import getTypeBgColor from "../helper/helper";

const CustomMiniCard = ({
  type,
  image,
  title,
  author,
  date,
  rating,
  cardWidth,
  cardHeight,
  imageWidth,
  imageHeight,
}) => {
  return (
    <div
      className="overflow-hidden mt-5"
      style={{ height: `${cardHeight}rem`, width: `${cardWidth}rem` }}
    >
      <div className="relative">
        <img
          src={image}
          alt=""
          className="object-cover rounded-lg cursor-pointer hover:opacity-85 duration-300"
          style={{ height: `${imageHeight}rem`, width: `${imageWidth}rem` }}
        />
        {rating && (
          <div className="absolute flex justify-center items-center top-0 right-0 p-2 m-2 border-[2px] h-[40px] w-[40px] border-blue-700 text-white rounded-full">
            <p>{rating}</p>
          </div>
        )}
        <button
          className={`absolute bottom-0 w-[130px] rounded text-[13px] text-white ml-5 flex items-center justify-center text-center ${getTypeBgColor(
            type
          )}`}
        >
          {type}
        </button>
      </div>

      <div className="flex flex-col border shadow-lg rounded p-3">
        <h2 className="font-bold">{title}</h2>

        <p className="flex items-center gap-1 mt-2 text-[10px]">
          <span>{author}</span>
          <TbSquareRotatedFilled />
          <span>{date}</span>
        </p>
      </div>
    </div>
  );
};

export default CustomMiniCard;
