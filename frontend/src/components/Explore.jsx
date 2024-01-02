import React from "react";
import img_logo from "../img/logo.png";


const Explore = () => {
  return (
    <>
      <div className="explore-container flex flex-col">
        <header className="text-4xl md:text-5xl font-bold text-center mt-5 mb-10">
          Explore New Startups
        </header>
        <hr className="mx-auto w-full  border-gray-500 mb-10" />
        <div className="grid gap-8 mx-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="h-auto">
              <a href="#" className="flex flex-col items-center bg-white border-2 border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:border-black  dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg md:h-48 md:w-full md:rounded-none md:rounded-t-none" src={img_logo} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy Technology Acquisitions 2021
                  </h5>
                  <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>

  );
};

export default Explore;