import React from "react";
import TeamMembersCard from "./TeamMembersCard";
import { BiSolidMessage } from "react-icons/bi";
import { getCookieValue } from "../services/cookie";
import img_logo from "../img/logo.png";

const Profile = () => {
  const tags = ["Technology", "Startup", "Innovation", "San Francisco"];
  const teamMembersData = [
    { Name: 'John Doe', Position: 'Co-founder' },
    { Name: 'Hari Dhakal', Position: 'Member' },
    { Name: 'Ram Doe', Position: 'Co-founder' },
    { Name: 'Sita Paudel', Position: 'Member' },
    { Name: 'Shyam Doe', Position: 'Co-founder' },
    // Add more team members as needed
  ];
  const teamSize = parseInt(getCookieValue('team_size')) || 1;
  return (
    <div className="bg-gray-100 min-h-screen p-8 w-full">
      {/* Venture Details */}
      <section className="mb-8 flex w-full ">
        <div className="venture-basic-info flex flex-col w-full bg-white py-5 px-2 rounded-lg">
          <div
            className="venture-heading w-full "
            style={{
              backgroundImage: `url("https://e0.pxfuel.com/wallpapers/751/651/desktop-wallpaper-new-york-buildings-city-night-minimalism-artist-background-and-minimalist-city.jpg")`,
            }}
          >
            <div className="venture-logo ml-5">
              <img
                src={img_logo}
                className="h-24 object-cover mb-4 rounded-md"
              />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-white ml-5">
              {getCookieValue("name")}
            </h1>
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 ml-5">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-500 text-white px-2 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="other-info mt-6">
            <h3 className="text-lg font-bold mb-2">Other Information</h3>
            <div className="text-gray-700">
              <p>
                Industry: <span className="font-bold">{getCookieValue("industry")}</span>
              </p>
              <p>
                Address: <span className="font-bold">{getCookieValue("address")}</span>
              </p>
              <p>
                Product Status: <span className="font-bold">{getCookieValue("product_status")}</span>
              </p>
            </div>
            <span className={`${getCookieValue("is_verified") ? "bg-green-500" : "bg-red-500"} text-white px-4 py-2 rounded-md w-40 mt-6 flex items-center justify-center cursor-pointer hover:${getCookieValue("is_verified") ? "bg-green-600" : "bg-red-600"} transition duration-300`}>
              {getCookieValue("is_verified") ? "Verified" : "Not Verified"}
            </span>

          </div>
          <span className="bg-blue-500 text-white px-4 py-2 rounded-md w-40 mt-6 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition duration-300">
            <BiSolidMessage className="mr-2" />
            Message
          </span>

        </div>
      </section>

      {/* Venture Description */}
      <section className="mb-8 bg-white py-5 px-2 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <p className="text-gray-700">
          {getCookieValue('description')}
        </p>
      </section>


      <div className="container mx-auto mt-8 p-4">
        {/* Team Members */}
        <h2 className="text-2xl font-bold mb-4">Other Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembersData.slice(0, teamSize).map((member, index) => (
            <TeamMembersCard key={index} Name={member.Name} Position={member.Position} />
          ))}
        </div>
      </div>

      <div className="contact-us mb-8 mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-700 mb-2">
              Mobile number: <span className="font-bold">{getCookieValue('contact_no')}</span>
            </p>
            <p className="text-gray-700 mb-2">
              Email: <span className="font-bold">{getCookieValue('email')}</span>
            </p>
            <p className="text-gray-700 mb-2">
              Website: <span className="font-bold">www.{getCookieValue('name')}.com</span>
            </p>
          </div>
          <div>
            <div className="mb-2">
              <h3 className="text-xl font-bold mb-1">Pitch to Investor</h3>
              <p className="text-gray-700">{getCookieValue('pitch_to_investor')}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Profile;
