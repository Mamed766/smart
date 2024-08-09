import React from "react";
import { FaFire } from "react-icons/fa";
import {
  footerPicksCardsData,
  footerPopularCardsData,
} from "../../static/mockdb";

const Footer = () => {
  return (
    <footer className=" mt-10">
      <div className="bg-[#0F0F11] pt-5">
        <div className="container__default">
          <div className="flex items-center  footer__top justify-between w-full  flex-wrap ">
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
            <div className="">
              <form
                className="flex justify-center mt-4 items-center h-[20rem] border-2 shadow-lg border-gray-900 w-[25rem] bg-black flex-col gap-2"
                action=""
              >
                <h2 className="text-white text-[22px] font-bold">
                  Subscribe to Updates
                </h2>
                <p className="text-gray-400 text-center text-[12px] w-[300px]">
                  Get the latest creative news from FooBar about art, design and
                  business.
                </p>
                <input
                  className="bg-[#0F0F11] p-2 w-[300px] outline-none text-white"
                  placeholder="Your email address"
                  type="text"
                />

                <div className="flex relative justify-center  items-center  gap-2">
                  <input type="checkbox" className="mb-5 ml-5 w-[10px] " />
                  <label className=" w-[300px] text-gray-400  text-[12px] text-center">
                    By signing up, you agree to the our terms and our Privacy
                    Policy agreement.
                  </label>
                </div>
                <button className="bg-blue-600 p-3 w-[300px] text-[12px] text-white">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#040404]"></div>
    </footer>
  );
};

export default Footer;
