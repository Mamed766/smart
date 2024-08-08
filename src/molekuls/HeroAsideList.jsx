import React from "react";
import { heroAsideList } from "../static/mockdb";
import { FaFireAlt } from "react-icons/fa";

const HeroAsideList = () => {
  return (
    <div className="flex flex-col hero__aside--justify gap-5 mt-5">
      {heroAsideList &&
        heroAsideList.map((data, index) => {
          return (
            <div className="flex gap-2">
              <div className="bg-[#3C3FDE] w-[30px] h-[30px] p-2 flex justify-center items-center mt-5 text-white rounded-full">
                {index + 1}
              </div>
              <div className="">
                <p className="text-[14px] font-bold cursor-pointer w-[300px] hover:text-blue-700 duration-300">
                  {data.title}
                </p>
                <p className="flex items-center gap-1 mt-2 text-[12px]">
                  <span>{data.author}</span> • <span>{data.date}</span>{" "}
                  <span className="flex items-center gap-1 text-orange-600">
                    <FaFireAlt />
                    {data.views}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default HeroAsideList;
