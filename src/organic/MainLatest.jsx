import React from "react";
import NewThings from "../molekuls/NewThings";
import CustomCard from "../molekuls/CustomCard";
import { GamingNews, socialData } from "../static/mockdb";
import MainLatestTop from "../molekuls/MainLatestTop";
import MainLatestBottom from "../molekuls/MainLatestBottom";
import getTypeTextColor from "../helper/textColor";
import SocialCard from "../molekuls/SocialCard";
import Shane from "../molekuls/Shane";
const MainLatest = () => {
  return (
    <div className="container__default">
      <div>
        <NewThings title={"Latest Articles"} button={false} />
        <div>
          <div className=" ">
            <div className="flex main__latest gap-2  justify-between ">
              <div className="  flex flex-col lg:w-[67%]">
                <MainLatestTop />
                <div className="mt-5">
                  <CustomCard
                    image={
                      "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/matias-islas-Nw0j-2YAnfI-unsplash-1-1024x683.jpg"
                    }
                    type={"GAMING"}
                    descUp={
                      "Riot Games Acquires a Wargaming Studio to Help With Live Game "
                    }
                    descDown={"Development"}
                    descDownWidth={110}
                  />
                </div>
                <MainLatestBottom />
              </div>
              <div className="flex  flex-col">
                <div className=" sticky top-10 flex flex-col">
                  <div className="border  shadow-lg rounded-lg w-[20rem] p-3">
                    <h2 className="flex flex-col gap-2 items-center justify-center font-bold -b-2  ">
                      We're Social
                      <div className="border border-blue-500 w-[50px]"></div>
                    </h2>
                    <SocialCard />
                  </div>
                  <div className="mt-5">
                    <h2 className="border-b-2 font-bold ">Gaming Zone</h2>
                    <div className="mt-5">
                      <div className="relative">
                        <img
                          src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_422755408_xl-2015-1-450x225.jpg"
                          alt=""
                          className="rounded-lg h-[10rem] cursor-pointer hover:opacity-80 duration-300"
                        />
                        <button className="absolute top-0 bg-[#EF4444] text-[12px] text-white p-1 font-bold rounded">
                          GAMING
                        </button>
                      </div>
                      <h2 className="w-[300px] font-bold mb-2 hover:text-blue-700 duration-300 cursor-pointer">
                        PS5 vs Xbox Series XS vs Switch Launch Sales Comparison
                      </h2>
                      <Shane Author={"Shane Doe"} date={"Sep 8,2020"} />
                    </div>
                    <div className=" ">
                      {GamingNews &&
                        GamingNews.map((data, index) => {
                          return (
                            <div className="flex items-center border-t-2 pt-2 mt-3 justify-between">
                              <div className="flex flex-col gap-2">
                                <h2 className="w-[170px] text-[13px] font-bold hover:text-blue-700 duration-300 cursor-pointer">
                                  {data.title}
                                </h2>
                                <Shane Author={data.author} date={data.date} />
                              </div>
                              <div>
                                <img
                                  src={data.image}
                                  alt=""
                                  className="w-[5rem] object-cover h-[4rem] rounded-lg cursor-pointer
                                hover:opacity-80 duration-300"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLatest;
