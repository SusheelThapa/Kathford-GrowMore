import React from 'react'
import TeamMembersCard from "./TeamMembersCard";
import { BiSolidMessage } from "react-icons/bi";

const VCProfile = () => {
    const tags = ['Technology', 'Startup', 'Innovation', 'San Francisco'];
    return (
        <>
            <div className="bg-gray-100 min-h-screen p-8 w-full">
                {/* Venture Details */}
                <section className="mb-8 flex w-full ">
                    <div className="venture-basic-info flex flex-col w-full bg-white py-5 px-2 rounded-lg">
                        <div className="venture-heading w-full " style={{ backgroundImage: `url("https://e0.pxfuel.com/wallpapers/751/651/desktop-wallpaper-new-york-buildings-city-night-minimalism-artist-background-and-minimalist-city.jpg")` }}>
                            <div className="venture-logo ml-5">
                                <img src="team_member1.jpg" alt="Team Member 1" className="w-full h-32 object-cover mb-4 rounded-md" />
                            </div>
                            <h1 className="text-3xl font-bold mb-4 text-white ml-5">Name</h1>
                        </div>
                        <div className="other-info text-gray-600 mt-6 ">
                            <p>Email: Technology</p>
                            <p>Address: San Francisco, CA</p>

                        </div>
                        <span className="bg-blue-500 text-white px-2 py-1 rounded-md w-40 mt-7 flex flex-row  text-start hover:cursor-pointer">
                            <BiSolidMessage />&nbsp;  Message
                        </span>
                    </div>


                </section>

                {/* Venture Description */}
                <section className="mb-8 bg-white py-5 px-2 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Description</h2>
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget tortor nec purus bibendum ultricies sit amet vitae justo. Mauris facilisis risus ac massa fermentum, vel consectetur lacus bibendum.
                    </p>
                </section>

                <div className="contact-us mb-8 mt-8 bg-white py-5 px-2 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Contact</h2>
                    <p>Mobile number: </p>
                    <p>Email: </p>
                    <p>Website url: </p>
                    <p>Linkedin url: </p>
                    <p>Facebook url: </p>
                    <p>Twitter url: </p>
                </div>
            </div>

        </>
    )
}

export default VCProfile