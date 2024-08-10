import React, { useState } from "react";
import Shane from "../molekuls/Shane";
import "../template/gadget.style.scss";
import { FaAngleRight, FaAngleLeft, FaFire } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import fetchGadgets from "../services/fetchGadget";
import urlFor from "../services/imageUrl";
import {
  asideGadgetData,
  gadgetAsideReviewData,
  gadgetAsideSocialData,
} from "../static/mockdb";
import getTypeBgColor from "../helper/helper";
import HeroLetter from "../molekuls/HeroLetter";
const Gadgets = () => {
  const [page, setPage] = useState(1);
  const limit = 10;

  const {
    data: { gadgets: gadgetsCardsData = [], total = 0 } = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["gadgetCards", page],
    queryFn: () => fetchGadgets(page, limit),
  });

  if (isLoading) {
    return (
      <h2 className="h-screen items-center flex justify-center"> Loading..</h2>
    );
  }

  if (isError) {
    return (
      <h2 className="h-screen items-center flex justify-center"> Error</h2>
    );
  }

  const totalPages = Math.ceil(total / limit);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="container__default pt-[7rem]">
      <div className="flex gadgets__direction gap-4">
        <div className="flex  w-[100%]  flex-col gap-2">
          <div className="border-l-[3px] flex flex-col justify-center border-[#3C3FDE]">
            <h2 className="pl-2 text-[1.2rem] font-bold">BROWSING:GADGETS</h2>
          </div>
          <div>
            <div className="flex flex-wrap w-[100%] gadgets__direction gap-[2rem]">
              {gadgetsCardsData.length > 0 ? (
                gadgetsCardsData.map((data, index) => (
                  <div
                    key={data._id}
                    className="w-[45%] gadgets__width h-auto rounded-[1rem] border border-t-0 border-l-0 border-r-0 border-gray-200 shadow-lg"
                  >
                    <div className="relative mt-5 overflow-hidden rounded-[1rem] h-[15rem]">
                      <img
                        className="object-cover w-full h-full rounded-[1rem] cursor-pointer hover:opacity-80 duration-300"
                        src={urlFor(data.mainImage).url()}
                        alt=""
                      />
                      <div className="absolute flex justify-between w-full top-0">
                        <button className="text-white text-[10px] font-bold rounded h-[25px] w-[60px] bg-[#B400B4]">
                          GADGETS
                        </button>
                        {data.rating && (
                          <div className="relative top-2 right-2 rounded-full border-2 w-[35px] h-[35px] border-[#3C3FDE] flex justify-center items-center">
                            <div className="absolute bg-black rounded-full h-full w-full opacity-50"></div>
                            <p className="text-white z-20 font-bold text-[12px]">
                              {data.rating}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-full p-4 flex flex-col gap-2">
                      <h2 className="font-bold text-[16px]">{data.title}</h2>
                      <Shane
                        Author={data.author}
                        date={new Date(data.publishedAt).toLocaleDateString()}
                      />
                      <p className="text-[12px] text-gray-500">{data.desc}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No gadgets found.</p>
              )}
            </div>
          </div>
          <div className="flex gadgets__direction gap-1">
            <button
              onClick={handlePreviousPage}
              className={`${
                page === 1 ? "bg-gray-300" : "bg-[#3C3FDE]"
              } w-[30px] h-[40px] border-2 flex justify-center items-center text-white`}
              disabled={page === 1}
            >
              <FaAngleLeft />
            </button>
            <button
              onClick={handleNextPage}
              className={`${
                page >= totalPages ? "bg-gray-300" : "bg-[#3C3FDE]"
              } w-[30px] h-[40px] border-2 flex justify-center items-center text-white`}
              disabled={page >= totalPages}
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
        <div className="w-[40%]">
          <div>
            <img
              src="https://smartmag.theme-sphere.com/news-bulletin/wp-content/uploads/sites/26/2021/11/Smart-Woman.jpg"
              className="w-[100%] cursor-pointer"
              alt=""
            />
          </div>
          <div className="mt-5">
            <h2 className="border-b-2 pb-2">Top Posts</h2>
            <div className="flex flex-col">
              {asideGadgetData &&
                asideGadgetData.map((data, index) => {
                  return (
                    <div className="flex mt-5 gap-2 items-center">
                      <div>
                        <img
                          className="w-[6rem] object-cover h-[5rem] rounded-lg cursor-pointer hover:opacity-80 duration-300"
                          src={data.image}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h2 className="font-bold w-[200px] text-[13px] hover:text-blue-600 duration-300 cursor-pointer">
                          {data.title}
                        </h2>
                        <div className="text-[12px] flex gap-1 items-center">
                          <p className="text-gray-400">{data.date}</p>
                          <p className="flex items-center text-red-500 justify-center gap-1">
                            <FaFire /> {data.views}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div>
            <div className="mt-5">
              <h2 className="text-xl font-semibold border-b-2 pb-2 mb-4">
                Stay In Touch
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {gadgetAsideSocialData.map((social, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 border rounded-md shadow-sm transition-transform transform hover:scale-105"
                  >
                    <div className={`text-2xl mr-3 ${social.color}`}>
                      {social.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{social.count}</p>
                      <p className="text-sm text-gray-500">{social.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-[1.5rem] border-b-2 mt-5">
                Reviews
              </h2>
              {gadgetAsideReviewData &&
                gadgetAsideReviewData.map((data, index) => {
                  return (
                    <div>
                      <div className="relative mt-5 overflow-hidden rounded-[1rem] h-[15rem]">
                        <img
                          className="object-cover w-full h-full rounded-[1rem] cursor-pointer hover:opacity-80 duration-300"
                          src={data.image}
                          alt=""
                        />
                        <div className="absolute flex justify-between w-full top-0">
                          <button
                            className={`text-white text-[10px] font-bold rounded h-[25px] w-[80px] ${getTypeBgColor(
                              data.type
                            )}`}
                          >
                            {data.type}
                          </button>

                          <div className="relative top-2 right-2 rounded-full border-2 w-[35px] h-[35px] border-[#3C3FDE] flex justify-center items-center">
                            <div className="absolute bg-black rounded-full h-full w-full opacity-50"></div>
                            <p className="text-white z-20 font-bold text-[12px]">
                              {data.rating}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex  gap-2">
                        <div className="pt-2">
                          <p className="text-[30px] text-gray-400">
                            {index + 1}
                          </p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h2 className="font-bold">{data.title}</h2>
                          <Shane Author="Shane Doe" date={"Jan 15,2021"} />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <HeroLetter />
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
