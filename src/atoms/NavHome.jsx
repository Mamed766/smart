import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavHome = () => {
  return (
    <Link to={"/"} className="cursor-pointer flex items-center gap-1 relative">
      <p className="text-[15px] font-bold hover-underline">Home</p>
      <FaAngleDown className="text-[10px]" />
    </Link>
  );
};

export default NavHome;
