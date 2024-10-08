import React from "react";
import { phoneArticles } from "../static/mockdb";

const PhoneArticle = () => {
  return (
    <div className="grid mt-5 phone__article w-full max-w-full grid-cols-1 sm:grid-cols-2 gap-4">
      {phoneArticles &&
        phoneArticles.map((article, index) => (
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
  );
};

export default PhoneArticle;
