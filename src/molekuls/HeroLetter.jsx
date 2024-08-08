import React from "react";
import { MdLocalPostOffice } from "react-icons/md";

const HeroLetter = () => {
  return (
    <div className="border-[10px] mt-[5rem] relative rounded-lg bg-white border-[#F7F7F7] p-3">
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
              By signing up, you agree to the our terms and our Privacy Policy
              agreement.
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroLetter;
