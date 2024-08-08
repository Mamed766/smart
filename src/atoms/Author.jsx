import React from "react";
import { FaClock } from "react-icons/fa";

const Author = ({ author, time, timeColor, authorColor }) => {
  return (
    <div className="flex items-center gap-2 text-[12px] ">
      <p className={`${authorColor}`}>{author}</p>
      <p className={`flex items-center gap-2 ${timeColor}`}>
        <FaClock />
        {time}
      </p>
    </div>
  );
};

export default Author;
