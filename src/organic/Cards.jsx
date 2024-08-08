import React from "react";
import "./card.style.scss";
import CustomCard from "../molekuls/CustomCard";
import CustomMiniCard from "../molekuls/CustomMiniCard";
import AsideCards from "../molekuls/AsideCards";
import Sponsored from "../molekuls/Sponsored";

const Cards = () => {
  return (
    <>
      <div className="container__default marginMb md:mt-[10rem]">
        <div className="flex justify-between aside__container  gap-10">
          <div className="w-[70%] cards__container  header__cards ">
            <CustomCard
              type={"GADGETS"}
              descUp={"Save $25 on Philips Wired Headphone For A"}
              descDown={" Great Sounding Over-Ear Headphone"}
              author={"Shane Doe"}
              date={"Jan 12,2020"}
              image={
                "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_29247013_xl-2015-2-1024x683.jpg"
              }
              textsize={"22px"}
              cardWidth={100}
            />

            <div className="flex gap-[2rem] w-[100%]">
              <CustomMiniCard
                type={"TECHNOLOGY"}
                image={
                  "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/daniel-korpai-seLBnDRB6_M-unsplash-1-1-450x563.jpg"
                }
                title={
                  " Tablet PC Market to Witness Exponential Growth by 2028, Sources Say"
                }
                author={"Shane Doe"}
                date={"Jan 11,2020"}
                cardHeight={30}
                cardWidth={50}
                imageHeight={13}
                imageWidth={30}
              />
              <CustomMiniCard
                type={"TECHNOLOGY"}
                image={
                  "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_245244020_xl-2015-2-450x332.jpg"
                }
                title={
                  "Microsoft Co-Founder Bill Gates Visits EU, Steers Clean Energy Talks"
                }
                author={"Shane Doe"}
                date={"Jan 11,2020"}
                cardHeight={30}
                cardWidth={50}
                imageHeight={13}
                imageWidth={60}
              />
            </div>
          </div>
          <div className="aside__section flex ml-5 flex-col w-full max-w-[100%] md:max-w-[80%] lg:max-w-[60%]">
            <div>
              <h2 className="border-b-[1px] w-full border-gray-300 font-bold">
                People's Favorite
              </h2>
              <div className="flex flex-col">
                <AsideCards />
              </div>
            </div>
          </div>
        </div>
        <Sponsored />
      </div>
    </>
  );
};

export default Cards;
