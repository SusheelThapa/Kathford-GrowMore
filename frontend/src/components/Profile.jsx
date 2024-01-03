import React from "react";
import TeamMembersCard from "./TeamMembersCard";
import { BiSolidMessage } from "react-icons/bi";
import { getCookieValue } from "../services/cookie";

const Profile = () => {
  const tags = ["Technology", "Startup", "Innovation", "San Francisco"];

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
                src="team_member1.jpg"
                alt="Team Member 1"
                className="w-full h-32 object-cover mb-4 rounded-md"
              />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-black ml-5">
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
          <div className="other-info text-gray-800 mt-6 ">
            <p>Industry: {getCookieValue("industry")}</p>
            <p>Address: {getCookieValue("address")}</p>
            <p>Product Status:{getCookieValue("product_status")} </p>
            <p>Funding Type: </p>
          </div>
          <span className="bg-blue-500 text-white px-2 py-1 rounded-md w-40 mt-7 flex flex-row  text-start hover:cursor-pointer">
            <BiSolidMessage />
            &nbsp; Message
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
        <h2 className="text-2xl font-bold mb-4">Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMembersCard Name="John Doe" Position="Co-founder and CEO" />
          <TeamMembersCard Name="Ram Doe" Position="CEO" />
          <TeamMembersCard Name="Shyam Doe" Position="Co-founder" />
        </div>
      </div>

      <div className="contact-us mb-8 mt-8 bg-white py-5 px-2 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p>Mobile number: </p>
        <p>Office number: </p>
        <p>Email: </p>
        <p>Website url: </p>
        <p>Linkedin url: </p>
      </div>
    </div>
  );
};

export default Profile;
