import React from "react";
import { IoMdClose } from "react-icons/io";
import { sideBarData } from "../../static/mockdb";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Sidebar = ({ isOpen, setIsOpen, children }) => {
  return (
    <>
      <div
        className={`sidebar w-[400px] flex flex-col h-screen bg-black fixed top-0 z-50 ${
          isOpen ? "sidebar-open" : "sidebar-close"
        }`}
      >
        <div className="flex flex-col fixed bg-black w-[383px]">
          <div className="flex justify-end">
            <IoMdClose
              onClick={() => setIsOpen(false)}
              className="text-white bg-gray-600 cursor-pointer text-[20px]"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/techblog-logo-dark@2x.png"
              className="w-[200px]"
              alt=""
            />
          </div>
        </div>
        <div className="overflow-y-auto">
          <div className="mt-[100px] p-3">
            <div>{children}</div>

            <div className="border-[10px] border-[#111111] rounded flex flex-col gap-3 p-5">
              <div className="text-white text-[25px] flex flex-col items-center justify-center">
                <h2>Subscribe to</h2>
                <h2>Updates</h2>
              </div>
              <div className="text-white flex justify-center items-center ">
                <p className="flex justify-center text-center text-[14px] text-gray-300 w-[250px]">
                  Get the latest creative news from FooBar about art, design and
                  business.
                </p>
              </div>
              <form
                className="flex flex-col gap-3 justify-center items-center text-white"
                action=""
              >
                <input
                  className="w-[200px] flex justify-center p-2 rounded-sm items-center border border-gray-800 outline-none bg-[#1A1A1A]"
                  type="text"
                  placeholder="Your email address..."
                />
                <button className="bg-[#3C3FDE] w-[200px] rounded-sm p-2 hover:bg-black duration-300">
                  SUBSCRIBE
                </button>
                <div className="flex items-center">
                  <input type="checkbox" className="mb-[43px] bg-[#1A1A1A1]" />
                  <p className="flex justify-center text-center w-[250px] text-gray-300 text-[14px]">
                    By signing up, you agree to the our terms and our Privacy
                    Policy agreement.
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-white p-2">
            <h3>WHAT'S HOT</h3>
            {sideBarData &&
              sideBarData.map((data, index) => (
                <div
                  key={index}
                  className="flex gap-2 border-b border-gray-800 pb-3"
                >
                  <img
                    className="w-[100px] rounded-lg object-cover"
                    src={data.image}
                    alt=""
                  />
                  <div>
                    <h3 className="w-[200px] text-[14px] hover:text-[#3C3FDE] cursor-pointer duration-300">
                      {data.title}
                    </h3>
                    <p className="text-gray-400 text-[10px]">{data.date}</p>
                  </div>
                </div>
              ))}
          </div>
          <div>
            <ul className="flex justify-center mt-3 gap-2">
              <li className="p-2 bg-gray-800 w-[30px] cursor-pointer text-white duration-300 hover:text-[#3C3FDE] h-[30px] flex items-center rounded-full">
                <FaFacebookF />
              </li>
              <li className="p-2 bg-gray-800 w-[30px] cursor-pointer text-white duration-300 h-[30px] flex items-center rounded-full">
                <FaXTwitter />
              </li>
              <li className="p-2 bg-gray-800 w-[30px] cursor-pointer text-white hover:text-[#3C3FDE] duration-300 h-[30px] flex items-center rounded-full">
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isOpen ? (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="overlay z-40 opacity-50  top-0 fixed h-screen w-screen bg-gray-900"
        ></div>
      ) : (
        ""
      )}
    </>
  );
};

export default Sidebar;
