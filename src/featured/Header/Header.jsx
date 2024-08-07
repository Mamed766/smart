import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearch, FaRegMoon } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="w-full border pb-5">
      <div className="container__default mt-5   ">
        <nav className="flex justify-between bg-white ">
          <div className="flex items-center gap-3">
            <RxHamburgerMenu className="cursor-pointer font-bold text-[23px]" />
            <img
              className="object-cover cursor-pointer"
              src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/1techblog-logo.png"
              alt=""
            />
            <div>
              <ul className="flex items-center gap-3 ">
                <li className="cursor-pointer">
                  {" "}
                  <p className="text-[15px] font-bold">Home</p>
                </li>
                <li className="flex items-center ] gap-1 cursor-pointer">
                  <p className="text-[15px] font-bold">Features</p>{" "}
                  <FaAngleDown className="text-[10px]" />
                </li>
                <li className="flex items-center  gap-1 cursor-pointer">
                  <p className="text-[15px] font-bold">Technology</p>{" "}
                  <FaAngleDown className="text-[10px]" />
                </li>
                <li className="cursor-pointer">
                  {" "}
                  <p className="text-[15px] font-bold">Gadgets</p>
                </li>
                <li className="flex items-center  gap-1 cursor-pointer">
                  <p className="text-[15px] font-bold">Phones</p>{" "}
                  <FaAngleDown className="text-[10px]" />
                </li>
                <li className="cursor-pointer">
                  {" "}
                  <p className="text-[15px] font-bold">Buy Theme</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <button className="bg-[#3C3FDE] py-2 px-3 text-white rounded-lg text-[12px]">
              SUBSCRIBE
            </button>
            <FaRegMoon className="cursor-pointer" />
            <FaSearch className="cursor-pointer" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
