import React from "react";
import { mainLatestArticlesDataBottom } from "../static/mockdb";
import getTypeBgColor from "../helper/helper";
import Shane from "./Shane";

const MainLatestBottom = () => {
  return (
    <div className="flex flex-col mt-5 gap-2">
      {mainLatestArticlesDataBottom &&
        mainLatestArticlesDataBottom.map((data, index) => {
          return (
            <div className="flex flex-wrap lg:flex-nowrap latest__bottom border shadow-lg rounded-lg gap-2 items-center">
              <div className="relative w-full lg:w-auto">
                <img
                  src={data.image}
                  alt=""
                  className="object-cover w-full lg:w-[20rem] cursor-pointer hover:opacity-80 duration-300 sm:h-[25rem] lg:h-[15rem] rounded-lg"
                />
                <p
                  className={`absolute bottom-0 left-0 font-bold text-white text-[12px] rounded-lg ${getTypeBgColor(
                    data.type
                  )}  p-2`}
                >
                  {data.type}
                </p>
              </div>

              <div className="flex flex-col  gap-2 w-full lg:w-auto">
                <h2 className="text-[16px] md:text-[20px] cursor-pointer hover:text-blue-700 duration-300 font-bold md:w-full lg:w-[400px]">
                  {data.title}
                </h2>
                <Shane image={true} Author={data.author} date={data.date} />
                <p className="text-gray-500 text-[12px] md:text-[13px] w-full md:w-[80%] lg:w-[500px]">
                  {data.desc}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MainLatestBottom;
