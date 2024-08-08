import React from "react";
import { TbSquareRotatedFilled } from "react-icons/tb";
import { editorCardsData } from "../static/mockdb";
import getTypeBgColor from "../helper/helper";
const Editors = () => {
  return (
    <>
      <div className="container__default mt-[5rem] flex items-center gap-3 justify-center">
        <div className="border-t-2 h-2 border-b-2 w-[40%]"></div>
        <h2 className="text-[30px] font-bold">Editor's Picks</h2>
        <div className="border-t-2 h-2 border-b-2 w-[40%]"></div>
      </div>
      <div className="container__default mt-5 flex flex-wrap justify-center gap-5">
        {editorCardsData &&
          editorCardsData.map((data, index) => {
            return (
              <div
                key={index}
                className="w-[17rem] rounded-[0.8rem] bg-white shadow-md"
              >
                <div className="relative">
                  <div className="">
                    <img
                      src={data.image}
                      alt={data.title}
                      className="rounded-[0.8rem] object-cover w-[17rem] h-[12rem] hover:opacity-80 cursor-pointer duration-300"
                    />
                  </div>

                  <div className="absolute w-full  flex justify-between top-0">
                    <button
                      className={`text-[12px] w-[100px] h-[20px] text-white font-bold rounded ${getTypeBgColor(
                        data.type
                      )}`}
                    >
                      {data.type}
                    </button>
                    {data.rating && (
                      <div className="h-[40px] w-[40px] border-2 border-blue-600 rounded-full flex justify-center items-center text-white">
                        <p>{data.rating}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-2 p-2">
                  <div className="">
                    <h3 className="text-[40px] text-gray-500">{index + 1}</h3>
                  </div>
                  <div>
                    <h2 className="font-bold text-sm">{data.title}</h2>
                    <p className="flex items-center gap-1 mt-2 text-[10px] text-gray-500">
                      <span>{data.author}</span>
                      <TbSquareRotatedFilled />
                      <span>{data.time}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Editors;
