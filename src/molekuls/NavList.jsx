import React from "react";
import { FaAngleDown } from "react-icons/fa";
import Dropdown from "./Dropdown";
import NavHome from "../atoms/NavHome";
import NavFeature from "../atoms/NavFeature";
import NavTechnology from "../atoms/NavTechnology";
import NavGadgets from "../atoms/NavGadgets";
import NavTheme from "../atoms/NavTheme";

const NavList = () => {
  return (
    <ul className="flex items-center gap-3">
      <NavHome />
      <li className="flex items-center gap-1 cursor-pointer relative  p-2 group">
        <ul className="flex items-center gap-3">
          <li className="flex items-center gap-1 cursor-pointer relative p-2 group">
            <NavFeature />
            <FaAngleDown className="text-[10px]" />
            <Dropdown />
          </li>
        </ul>
      </li>
      <li className="flex items-center gap-1 cursor-pointer relative">
        <NavTechnology />
        <FaAngleDown className="text-[10px]" />
      </li>
      <li className="cursor-pointer relative">
        <NavGadgets />
      </li>
      <li className="flex items-center gap-1 cursor-pointer relative">
        <p className="text-[15px] font-bold hover-underline">Phones</p>
        <FaAngleDown className="text-[10px]" />
      </li>
      <li className="cursor-pointer relative">
        <NavTheme />
      </li>
    </ul>
  );
};

export default NavList;
