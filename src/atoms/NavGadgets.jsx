import React from "react";
import { Link } from "react-router-dom";

const NavGadgets = () => {
  return (
    <Link to={"/gadgets"} className="text-[15px] font-bold hover-underline">
      Gadgets
    </Link>
  );
};

export default NavGadgets;
