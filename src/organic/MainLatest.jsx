import React from "react";
import NewThings from "../molekuls/NewThings";
import Shane from "../molekuls/Shane";
import CustomCard from "../molekuls/CustomCard";
import {
  mainLatestArticlesDataBottom,
  mainLatestArticlesDataTop,
} from "../static/mockdb";
import getTypeBgColor from "../helper/helper";
import MainLatestTop from "../molekuls/MainLatestTop";
import MainLatestBottom from "../molekuls/MainLatestBottom";
const MainLatest = () => {
  return (
    <div className="container__default">
      <div>
        <NewThings title={"Latest Articles"} button={false} />
        <div>
          <div>
            <div className="flex ">
              <div className="w-[60rem]  flex flex-col lg:w-[67%]">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLatest;
