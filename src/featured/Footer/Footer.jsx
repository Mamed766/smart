import React from "react";
import { FaFacebookF, FaFire, FaInstagram, FaPinterest } from "react-icons/fa";
import {
  footerPicksCardsData,
  footerPopularCardsData,
} from "../../static/mockdb";
import { FaXTwitter } from "react-icons/fa6";

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
                className="flex justify-center mb-3 mt-4 items-center  h-[25rem] border-2 shadow-lg border-gray-900 w-[25rem] bg-black flex-col gap-2"
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
                  <input
                    id="check2"
                    type="checkbox"
                    className="mb-5 ml-5 w-[10px] "
                  />
                  <label
                    htmlFor="check2"
                    className=" w-[300px] text-gray-400  text-[12px] text-center"
                  >
                    By signing up, you agree to the our terms and our Privacy
                    Policy agreement.
                  </label>
                </div>
                <button className="bg-blue-600 p-3  w-[300px] text-[12px] font-bold hover:bg-black duration-300 text-white">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#040404]">
        <div className="container__default p-6">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex justify-center gap-2 items-center">
              <div className="flex items-center  justify-center rounded-full cursor-pointer hover:text-blue-700 duration-300 text-white h-[40px] w-[40px] bg-[#1D1D1D]">
                <FaFacebookF />
              </div>
              <div className="flex items-center  justify-center rounded-full  cursor-pointer hover:text-blue-700 duration-300 text-white h-[40px] w-[40px] bg-[#1D1D1D]">
                <FaXTwitter />
              </div>
              <div className="flex items-center  justify-center rounded-full  cursor-pointer hover:text-blue-700 duration-300 text-white h-[40px] w-[40px] bg-[#1D1D1D]">
                <FaInstagram />
              </div>
              <div className="flex items-center  justify-center rounded-full  cursor-pointer hover:text-blue-700 duration-300 text-white h-[40px] w-[40px] bg-[#1D1D1D]">
                <FaPinterest />
              </div>
            </div>
            <div>
              <ul className="flex gap-4  text-white">
                <li className="font-bold cursor-pointer hover:opacity-80 duration-300">
                  Home
                </li>
                <li className="font-bold cursor-pointer hover:opacity-80 duration-300">
                  Phone
                </li>
                <li className="font-bold cursor-pointer hover:opacity-80 duration-300">
                  About
                </li>
                <li className="font-bold cursor-pointer hover:opacity-80 duration-300">
                  Contact
                </li>
              </ul>
            </div>
            <div>
              <p className="flex gap-2 text-[12px]">
                <span className="text-[#232323] ]">
                  © 2024 ThemeSphere. Designed by
                </span>
                <span className="text-gray-400">ThemeSphere.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
