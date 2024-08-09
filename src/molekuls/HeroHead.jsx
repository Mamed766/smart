import React from "react";
import Author from "../atoms/Author";
import GadgetArticle from "./GadgetArticle";
import NewThings from "./NewThings";

const HeroHead = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <NewThings title={"New Gadgets"} button={true} />
      <div className="flex gap-3 flex-wrap">
        <div className="relative">
          <img
            src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_286775054_xl-2015-1-768x334.jpg"
            alt=""
            className="rounded-lg object-cover w-full max-w-[25rem] h-[17rem] hover:opacity-80 duration-300 cursor-pointer"
          />
          <button className="absolute bg-[#AB07AB] text-white p-2 rounded-lg text-[12px] font-bold bottom-0">
            GADGETS
          </button>
        </div>
        <div className="flex justify-center w-full max-w-[300px] flex-col gap-2">
          <h2 className="font-bold text-[18px] cursor-pointer hover:text-blue-700 duration-300">
            Oculus Founder Makes a VR Headset That Can Literally Kill You
          </h2>
          <Author
            author={"Shane Doe"}
            authorColor={"text-gray-700"}
            time={"Jan 13,2021"}
            timeColor={"text-gray-400"}
          />
          <p className="text-[12px] text-gray-500">
            To understand the new smart watched and other pro devices of recent
            focus, we should…
          </p>
          <button className="border-b-[1px] pr-4 w-[100px] text-blue-700">
            Read More
          </button>
        </div>
      </div>
      <GadgetArticle />
    </div>
  );
};

export default HeroHead;
