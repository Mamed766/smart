import React from "react";
import "./card.style.scss";
import CustomCard from "../molekuls/CustomCard";
import { TbSquareRotatedFilled } from "react-icons/tb";
import CustomMiniCard from "../molekuls/CustomMiniCard";

const Cards = () => {
  return (
    <>
      <div className="container__default mt-5">
        <div>
          <div>
            <CustomCard
              type={"GADGETS"}
              descUp={"Save $25 on Philips Wired Headphone For A"}
              descDown={" Great Sounding Over-Ear Headphone"}
              author={"Shane Doe"}
              date={"Jan 12,2020"}
              image={
                "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_29247013_xl-2015-2-1024x683.jpg"
              }
              cardWidth={56}
            />

            <div className="flex gap-[2rem] w-[56%]">
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
                cardWidth={24}
                imageHeight={13}
                imageWidth={24}
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
                cardWidth={24}
                imageHeight={13}
                imageWidth={24}
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Cards;
