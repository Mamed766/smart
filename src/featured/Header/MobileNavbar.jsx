import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileNavbar = ({ toggleMobileSidebar }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    <div
      className={` mx-auto z-40   w-full ${
        isVisible ? "fixed mobile__nav" : "hidden"
      }`}
    >
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
