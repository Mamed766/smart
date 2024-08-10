import React, { useState } from "react";
import Shane from "../molekuls/Shane";
import "../template/gadget.style.scss";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import fetchGadgets from "../services/fetchGadget";
import urlFor from "../services/imageUrl";

const Gadgets = () => {
  const [page, setPage] = useState(1);
  const limit = 10;

  const {
    data: { gadgets: gadgetsCardsData = [], total = 0 } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["gadgetCards", page],
    queryFn: () => fetchGadgets(page, limit),
  });

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
      <div className="flex  flex-col gap-2">
        <div className="border-l-[3px] flex flex-col justify-center border-[#3C3FDE]">
          <h2 className="pl-2 text-[1.2rem] font-bold">BROWSING:GADGETS</h2>
        </div>
        <div className="h-[135rem]">
          <div className="flex flex-wrap w-[70%] gadgets__direction gap-5">
            {gadgetsCardsData.length > 0 ? (
              gadgetsCardsData.map((data, index) => (
                <div
                  key={data._id}
                  className="w-[40%] gadgets__width h-auto rounded-[1rem] border border-t-0 border-l-0 border-r-0 border-gray-200 shadow-lg"
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
        <div className="flex gap-1">
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
    </div>
  );
};

export default Gadgets;
