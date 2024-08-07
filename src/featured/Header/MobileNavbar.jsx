import React from "react";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileNavbar = ({ toggleMobileSidebar }) => {
  return (
    <div className="mobile__nav mx-auto">
      <div className="flex p-3 bg-black text-white items-center justify-between">
        <div>
          <RxHamburgerMenu
            onClick={() => {
              console.log("Hamburger menu clicked");
              toggleMobileSidebar();
            }}
            className="text-[20px] cursor-pointer"
          />
        </div>
        <div>
          <img
            className="w-[15rem]"
            src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/techblog-logo-dark@2x.png"
            alt="Tech Blog Logo"
          />
        </div>
        <div>
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
