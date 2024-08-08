import React from "react";
import CustomCard from "../molekuls/CustomCard";
import { RiPlayCircleLine } from "react-icons/ri";
import Author from "../atoms/Author";
import { videosCardsData, videosData } from "../static/mockdb";

const Videos = () => {
  return (
    <div className="bg-[#101127] mt-10 p-2 pb-20">
      <div className="container__default mt-10 ">
        <div className="flex gap-2 justify-center items-center">
          <h1 className="text-white font-bold text-[20px]">Trending Videos</h1>
          <div className="border-gray-800 border-t-2 border-b-2 h-2 w-[88%]"></div>
        </div>
        <div>
          <div className="w-full gap-2 flex trending__videos ">
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] trending__videos--img">
              <CustomCard
                image={
                  "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/sajad-nori-CeyE899Q73Y-unsplash-768x512.jpg"
                }
                descUp={"Soundcore VR Gaming Earbuds Designed for"}
                descDown={" Meta Quest 2 Launched"}
                author={"Shane Doe"}
                date={"Sep 20,2020"}
                type={"GADGETS"}
              >
                <RiPlayCircleLine />
              </CustomCard>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-8">
                {videosData.map((data, index) => {
                  return (
                    <div className="flex gap-4 group">
                      <div className="flex gap-4 flex-col flex-grow">
                        <h2 className="text-white cursor-pointer hover:text-blue-600 duration-300">
                          {data.title}
                        </h2>
                        <Author
                          timeColor={"text-gray-400"}
                          authorColor={"text-white"}
                          author={"Shane Doe"}
                          time={"20 Sep, 2020"}
                        />
                      </div>
                      <div className="relative w-[100px]h-[60px] sm:w-[120px] sm:h-[80px] cursor-pointer overflow-hidden">
                        <img
                          src={data.image}
                          alt=""
                          className="w-full h-full object-cover rounded-lg  group-hover:opacity-80 duration-300 "
                        />
                        <div className="absolute top-0 inset-0 flex justify-center items-center text-white">
                          <RiPlayCircleLine />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="video__cards mt-10  flex  gap-4  w-[100%]  ">
              {videosCardsData &&
                videosCardsData.map((data, index) => {
                  return (
                    <div className="relative cursor-pointer group">
                      <img
                        src={data.image}
                        alt=""
                        className=" object-cover w-[22rem] h-[13rem] rounded-lg group-hover:opacity-80 duration-300"
                      />
                      <div className="text-[2rem] absolute  inset-0 flex justify-center items-center text-white">
                        <RiPlayCircleLine />
                      </div>
                      <div className="absolute flex flex-col gap-2 font-bold bottom-[-50px] left-[50px] bg-black text-white p-4 w-[250px]">
                        <h2>{data.title}</h2>
                        <Author
                          author={"Shane Doe"}
                          authorColor={"text-white"}
                          time={"Sep 17,2020"}
                          timeColor={"text-gray-500"}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
