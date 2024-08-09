import React from "react";
import { socialData } from "../static/mockdb";
import getTypeTextColor from "../helper/textColor";

const SocialCard = () => {
  return (
    <div className="flex  w-[100%] p-2 justify-between flex-wrap items-center gap-2">
      {socialData &&
        socialData.map((data, index) => {
          return (
            <div className="flex border rounded-sm w-[48%] h-[3rem] p-1 items-center gap-2">
              <div className={`${getTypeTextColor(data.platform)}`}>
                {data.icon}
              </div>
              <div className="flex text-[12px] flex-col">
                <h2 className="font-bold">{data.follower}</h2>
                <p>{data.platform}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SocialCard;
