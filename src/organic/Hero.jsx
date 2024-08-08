import React from "react";
import { FaAngleRight, FaFireAlt } from "react-icons/fa";
import Author from "../atoms/Author";
import { articles, phoneArticles } from "../static/mockdb";
import NewThings from "../molekuls/NewThings";
import CustomCard from "../molekuls/CustomCard";
import { MdLocalPostOffice } from "react-icons/md";

const Hero = () => {
  return (
    <div className="container__default flex">
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
      <div>
        <div className="border-[10px] mt-10 relative rounded-lg border-[#F7F7F7] p-3">
          <div className="flex flex-col justify-center items-center h-[25rem] ">
            <div className="absolute top-[-50px] border-[5px] border-white bg-[#3C3FDE] p-5 text-[50px] rounded-full text-white">
              <MdLocalPostOffice />
            </div>
            <h2 className="font-bold text-[22px]">Subscribe to Updates</h2>
            <p className="text-center text-[14px] text-gray-500 w-[250px]">
              Get the latest creative news from FooBar about art, design and
              business.
            </p>
            <form className="flex flex-col gap-2 justify-center mt-5" action="">
              <input
                className="outline-none border border-gray-300 p-2"
                placeholder="Your email address"
                type="text"
              />
              <button className="bg-blue-700 p-2 hover:bg-black duration-300 text-white">
                Subscribe
              </button>

              <div className="flex pt-10">
                <input
                  id="check"
                  name="check"
                  value="check"
                  type="checkbox"
                  className="mb-5"
                />
                <label
                  htmlFor="check"
                  value="check"
                  name="check"
                  className="text-[13px] text-center w-[300px] text-gray-400"
                >
                  By signing up, you agree to the our terms and our Privacy
                  Policy agreement.
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <h2 className=" border-b-[1px]">Popular Now</h2>
          <div className="flex gap-2">
            <div className="bg-[#3C3FDE] w-[30px] h-[30px] p-2 flex justify-center items-center mt-5 text-white rounded-full">
              1
            </div>
            <div className="">
              <p className="text-[14px] font-bold w-[300px]">
                Popular New Xbox Game Pass Game Being Review Bombed With “0s”
              </p>
              <p className="flex items-center gap-1 text-[12px]">
                <span>Shane Doe</span> • <span>Jan 14, 2021</span>{" "}
                <span className="flex items-center gap-1 text-orange-600">
                  <FaFireAlt />
                  6,914 Views
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
