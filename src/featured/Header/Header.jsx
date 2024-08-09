import React, { useState, useEffect } from "react";
import "./header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSearch, FaRegMoon } from "react-icons/fa";
import NavList from "../../molekuls/NavList";
import Sidebar from "../Sidebar/Sidebar";
import Cards from "../../organic/Cards";
import SideBarMobile from "../Sidebar/SideBarMobile";
import { useTheme } from "../../context/DarkModeContext";
import { CiSun } from "react-icons/ci";

const Header = ({ isSidebarOpen, toggleSidebar }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { isDarkMode, toggleDarkMode } = useTheme();

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`w-full header__nav border pb-4 z-30 bg-white top-0 ${
          isVisible ? "fixed" : "hidden"
        } transition-all duration-300`}
      >
        <div className="container__default mt-5">
          <nav className="flex justify-between">
            <div className="flex items-center gap-3">
              <RxHamburgerMenu
                onClick={() => toggleSidebar()}
                className="cursor-pointer font-bold text-[23px]"
              />
              {!isDarkMode ? (
                <img
                  className="object-cover cursor-pointer"
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/1techblog-logo.png"
                  alt=""
                />
              ) : (
                <img
                  className="object-cover cursor-pointer w-[11rem]"
                  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/techblog-logo-dark@2x.png"
                  alt=""
                />
              )}
              <div>
                <NavList />
              </div>
            </div>

            <div className="flex items-center gap-5">
              <button className="bg-[#3C3FDE] py-2 px-3 text-white rounded-lg text-[12px] hover:bg-black duration-300">
                SUBSCRIBE
              </button>
              {!isDarkMode ? (
                <FaRegMoon
                  onClick={toggleDarkMode}
                  className="cursor-pointer hover:text-blue-600 duration-300"
                />
              ) : (
                <CiSun
                  className="text-[30px] cursor-pointer hover:text-yellow-400 duration-300"
                  onClick={toggleDarkMode}
                />
              )}

              <FaSearch className="cursor-pointer hover:text-blue-600 duration-300" />
            </div>
          </nav>
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={toggleSidebar} />
      <SideBarMobile isOpen={isSidebarOpen} setIsOpen={toggleSidebar}>
        <div className="text-white pb-5">
          <ul className="flex flex-col gap-2">
            <li className="border-b-[1px] border-gray-700 pb-3">Home</li>
            <li className="border-b-[1px] border-gray-700 pb-3">Features</li>
            <li className="border-b-[1px] border-gray-700 pb-3">Technology</li>
            <li className="border-b-[1px] border-gray-700 pb-3">Gadgets</li>
            <li className="border-b-[1px] border-gray-700 pb-3">Phones</li>
            <li className="border-b-[1px] border-gray-700 pb-3">Buy Theme</li>
          </ul>
        </div>
      </SideBarMobile>
    </>
  );
};

export default Header;
