import React from "react";
import { FaClock } from "react-icons/fa";
import { asideCardsData } from "../static/mockdb";
import getTypeTextColor from "../helper/textColor";

const AsideCards = () => {
  return (
    <div>
      {asideCardsData &&
        asideCardsData.map((data, index) => (
          <div key={index} className="my-3 border-b-[1px] border-gray-300 pb-2">
            <h3 className={`${getTypeTextColor(data.type)} font-bold`}>
              {data.type}
            </h3>
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="w-[200px] sm:w-[150px] md:w-[180px] lg:w-[200px] xl:w-[200px] font-bold hover:text-[#3C3FDE] duration-300 cursor-pointer">
                  {data.title}
                </p>
              </div>
              <img
                src={data.image}
                alt=""
                className="w-[100px] sm:w-[80px] md:w-[90px] lg:w-[100px] xl:w-[100px] h-[100px] sm:h-[80px] md:h-[90px] lg:h-[100px] xl:h-[100px] rounded-full object-cover cursor-pointer hover:opacity-80 duration-300"
              />
            </div>
            <div className="flex items-center gap-2 text-[12px] ">
              <p className="text-gray-700">{data.author}</p>
              <p className="flex items-center gap-2 text-gray-400">
                <FaClock />
                {data.time}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AsideCards;
