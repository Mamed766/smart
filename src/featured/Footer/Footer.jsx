import React from "react";
import { FaFire } from "react-icons/fa";
import {
  footerPicksCardsData,
  footerPopularCardsData,
} from "../../static/mockdb";

const Footer = () => {
  return (
    <footer className=" mt-10">
      <div className="bg-[#0F0F11]">
        <div className="container__default">
          <div className="flex gap-5 ">
            <div>
              <h2 className="text-white pb-5">Most Popular</h2>
              <div className="flex  flex-col gap-3">
                {footerPopularCardsData &&
                  footerPopularCardsData.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className={`flex gap-2 ${
                          index === 1
                            ? "border-t border-b border-gray-500 py-2"
                            : ""
                        }`}
                      >
                        <div>
                          <img
                            src={data.image}
                            alt=""
                            className="w-[7rem] h-[5rem] object-cover rounded-lg
                                cursor-pointer
                                hover:opacity-80
                                duration-300
                            "
                          />
                        </div>
                        <div className="text-white flex flex-col gap-2 justify-center">
                          <h2 className="w-[300px] text-[13px] cursor-pointer hover:text-blue-700 duration-300">
                            {data.title}
                          </h2>

                          <div className="flex items-center gap-1 text-[10px] ">
                            <p>{data.date}</p>
                            <p className="flex items-center gap-1 text-red-600 ">
                              <FaFire /> {data.views}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div>
              <h2 className="text-white pb-5">Our Picks</h2>
              <div className="flex flex-col gap-3">
                {footerPicksCardsData &&
                  footerPicksCardsData.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className={`flex gap-2 ${
                          index === 1
                            ? "border-t border-b border-gray-500 py-2"
                            : ""
                        }`}
                      >
                        <div>
                          <img
                            src={data.image}
                            alt=""
                            className="w-[7rem] h-[5rem] object-cover rounded-lg
                               cursor-pointer
                                hover:opacity-80
                                duration-300
                            "
                          />
                        </div>
                        <div className="text-white flex flex-col gap-2 justify-center">
                          <h2
                            className="w-[300px] text-[13px] 
                          cursor-pointer hover:text-blue-700 duration-300
                          "
                          >
                            {data.title}
                          </h2>

                          <div className="flex items-center gap-1 text-[10px] ">
                            <p>{data.date}</p>
                            <p className="flex items-center gap-1 text-red-600 ">
                              {data.views}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#040404]"></div>
    </footer>
  );
};

export default Footer;
