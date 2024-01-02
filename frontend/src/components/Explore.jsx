import React from "react";
import img_logo from "../img/logo.png";


const Explore = () => {
  return (
    <>
    <div className="explore-container flex flex-col">
    <header className="text-5xl font-bold text-center mt-5 mb-10">
      Explore New Startups
    </header>
    <hr/>
    <div className="w-full flex mx-5 mt-10">
      <div className="h-24">
        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img class="object-cover w-full rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={img_logo} alt="" />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
              </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </div>
        </a>
      </div>
    </div>

    </div>
    </>
  );
};

export default Explore;