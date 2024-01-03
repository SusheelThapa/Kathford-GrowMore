import React from "react";
import img_user from "../img/blankUser.jpg";

const Investors = () => {
  const investorInfo = [
    { Name: 'John Doe', Expertise: 'Fintech' },
    { Name: 'Hari Dhakal', Expertise: 'Agriculture' },
    { Name: 'Ram Doe', Expertise: 'Banking' },
    { Name: 'Sita Paudel', Expertise: 'Fintech' },
    { Name: 'Shyam Doe', Expertise: 'Education' },
    { Name: 'Jane Smith', Expertise: 'Healthcare' },
    { Name: 'Michael Johnson', Expertise: 'Technology' },
    { Name: 'Emily White', Expertise: 'Real Estate' },
    { Name: 'Robert Brown', Expertise: 'Energy' },
    { Name: 'Sophia Lee', Expertise: 'Artificial Intelligence' },
    { Name: 'Alex Miller', Expertise: 'E-commerce' },
    { Name: 'Olivia Davis', Expertise: 'Marketing' },
    { Name: 'William Taylor', Expertise: 'Environmental Science' },
    { Name: 'Ella Garcia', Expertise: 'Retail' },
    { Name: 'Daniel Clark', Expertise: 'Blockchain' },
    // Add more members as needed
  ];

  // Now, the investorInfo array contains 15 members.

  return (<>
    <div className="explore-container flex flex-col">
      <header className="text-4xl md:text-5xl font-bold text-center mt-5 mb-10">
        Find Investors
      </header>
      <hr className="mx-auto w-full  border-gray-500 mb-10" />
      <div className="grid gap-8 mx-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {investorInfo.map((investor, index) => (
          <div key={index} className="h-auto">
            <a href="#" className="flex flex-col items-center h-80  shadow-md rounded-md   border-green-50  bg-green-900  hover:bg-green-700">
              {/* Replace 'img_user' with the actual image URL or use a default image */}
              <img className="object-cover w-full rounded-t-lg md:h-48 md:w-full md:rounded-none md:rounded-t-none" src={img_user} alt="" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-lg md:text-xl lg:text-2xl font-bold tracking-tight  text-white">
                  {investor.Name}
                </h5>
                <p className="mb-3 text-sm md:text-base font-normal   text-gray-300">
                  Expertise: {investor.Expertise}
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  </>);
};

export default Investors;
