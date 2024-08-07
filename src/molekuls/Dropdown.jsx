import React from "react";
import { featuresDropdownData } from "../static/mockdb";

const Dropdown = () => {
  return (
    <ul className="dropdown absolute top-[40px] left-[-250%] z-50 fade-in bg-white p-3 shadow-lg border border-t-0 rounded hidden group-hover:flex custom-width flex-wrap">
      {featuresDropdownData.map((item, index) => (
        <li className="menu-item w-[20%] p-2" key={index}>
          <div className="flex flex-col gap-2">
            <img
              className="menu-image object-cover rounded-[10px] h-[100px] shadow-lg"
              src={item.image}
              alt={item.title}
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-[12px] font-bold">{item.title}</h2>
              <p className="text-[10px] text-gray-400">{item.date}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
