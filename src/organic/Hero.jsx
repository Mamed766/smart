import React from "react";
import NewThings from "../molekuls/NewThings";
import CustomCard from "../molekuls/CustomCard";
import HeroAsideList from "../molekuls/HeroAsideList";
import HeroLetter from "../molekuls/HeroLetter";
import PhoneArticle from "../molekuls/PhoneArticle";
import HeroHead from "../molekuls/HeroHead";

const Hero = () => {
  return (
    <div className="container__default flex hero__aside">
      <div className="w-full max-w-full">
        <HeroHead />
        <div className="w-full max-w-full  ">
          <NewThings title={"Phones&Tech"} />
          <div className="flex gap-[5rem] mt-5 hero__aside  items-center flex-wrap ">
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
          <PhoneArticle />
        </div>
      </div>

      <div>
        <HeroLetter />
        <div className="flex flex-col mt-3">
          <h2 className=" border-b-[1px] fonb">Popular Now</h2>
          <HeroAsideList />
        </div>
      </div>
    </div>
  );
};

export default Hero;
