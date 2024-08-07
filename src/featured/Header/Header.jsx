import React from "react";
import "./header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearch, FaRegMoon } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { featuresDropdownData } from "../../static/mockdb";
import Dropdown from "../../molekuls/Dropdown";
import NavList from "../../molekuls/NavList";

const Header = () => {
  return (
    <div className="w-full border pb-4">
      <div className="container__default mt-5">
        <nav className="flex justify-between bg-white px-2">
          <div className="flex items-center gap-3">
            <RxHamburgerMenu className="cursor-pointer font-bold text-[23px]" />
            <img
              className="object-cover cursor-pointer"
              src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/1techblog-logo.png"
              alt=""
            />
            <div>
              <NavList />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <button className="bg-[#3C3FDE] py-2 px-3 text-white rounded-lg text-[12px] hover:bg-black duration-300">
              SUBSCRIBE
            </button>
            <FaRegMoon className="cursor-pointer hover:text-blue-600 duration-300" />
            <FaSearch className="cursor-pointer hover:text-blue-600 duration-300" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
