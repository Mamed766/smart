import React from "react";
import { FaAngleRight } from "react-icons/fa";
import Author from "../atoms/Author";
import { articles, phoneArticles } from "../static/mockdb";
import NewThings from "../molekuls/NewThings";
import CustomCard from "../molekuls/CustomCard";
const Hero = () => {
  return (
    <div className="container__default">
      <div>
        <div className="flex flex-col gap-4 w-[90%]">
          <NewThings title={"New Gadgets"} />
          <div className="flex gap-3">
            <div className="relative">
              <img
                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_286775054_xl-2015-1-768x334.jpg"
                alt=""
                className="rounded-lg object-cover w-[25rem] h-[17rem] hover:opacity-80 duration-300 cursor-pointer"
              />
              <button className="absolute  bg-[#AB07AB] text-white p-2 rounded-lg  text-[12px] font-bold bottom-0">
                GADGETS
              </button>
            </div>

            <div className="display justify-center w-[300px]  flex flex-col gap-2">
              <h2 className="font-bold text-[18px]">
                Oculus Founder Makes a VR Headset That Can Literally Kill You
              </h2>
              <Author
                author={"Shane Doe"}
                authorColor={"text-gray-700"}
                time={"Jan 13,2021"}
                timeColor={"text-gray-400"}
              />
              <p className="text-[12px] text-gray-500">
                To understand the new smart watched and other pro devices of
                recent focus, we should…
              </p>

              <button className="border-b-[1px] pr-4 w-[100px] text-blue-700">
                Read More
              </button>
            </div>
          </div>
          <div className="grid w-[1000px] grid-cols-1 sm:grid-cols-2 gap-4">
            {articles &&
              articles.map((article, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <img
                    className="w-[7rem] h-[5rem] object-cover rounded-md hover:opacity-80 duration-300 cursor-pointer"
                    src={article.image}
                    alt={article.title}
                  />
                  <div>
                    <h2 className="text-[14px] font-semibold text-black hover:text-blue-600 duration-300 cursor-pointer">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 text-[12px]">
                      {article.author} • {article.date}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="w-[90%]">
          <NewThings title={"Phones&Tech"} />
          <div className="flex gap-[5rem] mt-5">
            <CustomCard
              type={"PHONES"}
              descUp={"Google Says Surveillance Vendor "}
              descDown={"Targeted Samsung Phones"}
              author={"Shane Doe"}
              date={"Jan 14,2021"}
              image={
                "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_352742574_xl-2015-1-1024x683.jpg"
              }
              cardWidth={35}
              cardHeight={20}
            />
            <CustomCard
              type={"PHONES"}
              descUp={"Why Are iPhones More Expensive  "}
              descDown={"Than Android Phones?"}
              author={"Shane Doe"}
              date={"Jan 14,2021"}
              image={
                "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/sahej-brar-6Pg2e3W1KDY-unsplash-1024x1024.jpg"
              }
              cardWidth={35}
              cardHeight={20}
            />
          </div>
          <div className="grid mt-5 w-[1000px] grid-cols-1 sm:grid-cols-2 gap-4">
            {phoneArticles &&
              phoneArticles.map((article, index) => (
                <div key={index} className="flex  items-center space-x-4">
                  <img
                    className="w-[7rem] h-[5rem] object-cover rounded-md hover:opacity-80 duration-300 cursor-pointer"
                    src={article.image}
                    alt={article.title}
                  />
                  <div>
                    <h2 className="text-[14px] font-semibold text-black hover:text-blue-600 duration-300 cursor-pointer">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 text-[12px]">
                      {article.author} • {article.date}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
