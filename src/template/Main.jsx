import React from "react";
import Editors from "../organic/Editors";
import Videos from "../organic/Videos";
import Hero from "../organic/Hero";
import Reviews from "../organic/Reviews";
import Cards from "../organic/Cards";
import MainLatest from "../organic/MainLatest";

const Main = () => {
  return (
    <div>
      <Cards />
      <Editors />
      <Videos />
      <Hero />
      <Reviews />
      <MainLatest />
    </div>
  );
};

export default Main;
