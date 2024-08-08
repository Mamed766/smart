import React from "react";
import Shane from "../molekuls/Shane";
import CustomMiniCard from "../molekuls/CustomMiniCard";

const Reviews = () => {
  return (
    <div className="container__default">
      <div className="mt-10">
        <div>
          <div className="flex items-center gap-5">
            <div className="border-t-2 border-b-2 h-2 w-[40%]"></div>
            <div className="font-bold text-[20px]">Featured Reviews</div>
            <div className="border-t-2 border-b-2 h-2 w-[45%]"></div>
          </div>
          <div className="bg-[#0D0D25] rounded-lg mt-10 overflow-hidden flex review__main--card sm:h-[50rem] md:h-[45rem] lg:h-[25rem] text-white">
            <div className="flex flex-col gap-2 justify-center p-5  ">
              <div>
                <button className="bg-[#F80061] text-[12px] p-1 font-bold  rounded-lg ">
                  GAMING
                </button>
              </div>
              <h2 className="md:w-[500px]  text-[30px] font-bold">
                Pico 4 Review: Should You Actually Buy One Instead Of Quest 2?
              </h2>
              <Shane Author={"Shane Doe"} date={"Jan 15,2021"} />
              <p className="text-gray-400 md:w-[600px]">
                To understand the new smart watched and other pro devices of
                recent focus, we should look to…
              </p>
            </div>
            <div className="relative">
              <img
                className="cursor-pointer object-cover w-[70rem] sm:h-[40rem] md:h-[50rem] lg:h-[25rem] review__main--image"
                src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/woman-in-3d-virtual-reality-glasses_t20_WQVvL4.jpg"
                alt=""
              />

              <div className=" absolute  flex justify-center items-center border border-blue-600 rounded-full top-0 right-0 mr-5 mt-5 h-[50px] w-[50px]">
                <p>85%</p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[100%] flex  justify-between review__cards  flex-wrap">
              <CustomMiniCard
                image={
                  "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-leon-3636001-2-450x300.jpg"
                }
                title={
                  "A Review of the Venus Optics Argus 18mm f/0.95 MFT APO Lens"
                }
                cardWidth={22}
                type={"TECHNOLOGY"}
                rating={"8.5"}
                author={"Shane Doe"}
                date={"Jan 15,2021"}
              />
              <CustomMiniCard
                image={
                  "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/surya-devarakonda-lnEM5jOu-mc-unsplash-450x300.jpg"
                }
                title={
                  "DJI Avata Review: Immersive FPV Flying For Drone Enthusiasts"
                }
                cardWidth={22}
                type={"GADGETS"}
                rating={"8.9"}
                author={"Shane Doe"}
                date={"Jan 15,2021"}
              />

              <CustomMiniCard
                image={
                  "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-gSZCLsE7ysc-unsplash-450x300.jpg"
                }
                title={
                  "Bose QuietComfort Earbuds II: Noise-Cancellation Kings Reviewed"
                }
                cardWidth={22}
                type={"GADGETS"}
                rating={"8.9"}
                author={"Shane Doe"}
                date={"Jan 15,2021"}
              />
              <CustomMiniCard
                image={
                  "https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/42996726655_0df7830ab6_b-1-450x253.jpg"
                }
                title={
                  "A Review of the Venus Optics Argus 18mm f/0.95 MFT APO Lens"
                }
                cardWidth={22}
                imageHeight={14.7}
                type={"TECHNOLOGY"}
                rating={"81%"}
                author={"Shane Doe"}
                date={"Jan 15,2021"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
