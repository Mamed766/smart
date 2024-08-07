import React from "react";
import { FaAngleDown } from "react-icons/fa";

const NavHome = () => {
  return (
    <li className="cursor-pointer flex items-center gap-1 relative">
      <p className="text-[15px] font-bold hover-underline">Home</p>
      <FaAngleDown className="text-[10px]" />
    </li>
  );
};

export default NavHome;
