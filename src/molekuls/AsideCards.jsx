import React from "react";
import { FaClock } from "react-icons/fa";
import { asideCardsData } from "../static/mockdb";

const AsideCards = () => {
  return (
    <div>
      {asideCardsData &&
        asideCardsData.map((data, index) => (
          <div
            key={index}
            className="my-3 border-b-[1px] border-gray-300  pb-2"
          >
            <h3 className="text-[#3C3FDE] font-bold">{data.type}</h3>
            <div className="flex gap-2">
              <div>
                <p className="w-[200px] font-bold hover:text-[#3C3FDE] duration-300 cursor-pointer">
                  {data.title}
                </p>
              </div>
              <img
                src={data.image}
                alt=""
                className="w-[100px] h-[100px] rounded-full object-cover cursor-pointer hover:opacity-80 duration-300"
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
