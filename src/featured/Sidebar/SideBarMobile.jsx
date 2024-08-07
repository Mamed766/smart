import React from "react";
import Sidebar from "./Sidebar";

const SideBarMobile = ({ isOpen, setIsOpen, children }) => {
  return (
    isOpen && (
      <div className="sidebar__mobile">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}>
          {children}
        </Sidebar>
      </div>
    )
  );
};

export default SideBarMobile;
