import React from 'react'
// import TeamMembersCard from "./TeamMembersCard";
import { BiSolidMessage } from "react-icons/bi";
import img_blankUser from "../img/blankUser.jpg";
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
                                <img src={img_blankUser} alt="Team Member 1" className="w-full h-32 object-cover mb-4 rounded-md" />
                            </div>
                            <h1 className="text-3xl font-bold mb-4 text-white ml-5">Name</h1>
                        </div>
                        <div className="other-info mt-6">
                            <p className="text-gray-800 font-bold mb-2">Company Information</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                                <p className="mb-2">
                                    <span className="font-bold">Email:</span> technology@example.com
                                </p>
                                <p className="mb-2">
                                    <span className="font-bold">Address:</span> San Francisco, CA
                                </p>
                            </div>
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

                <div className="contact-us mb-8 mt-8 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
                        <div className="mb-4">
                            <p className="mb-2">
                                Mobile number: <span className="font-bold">{/* Add mobile number here */}</span>
                            </p>
                            <p className="mb-2">
                                Email: <span className="font-bold">{/* Add email address here */}</span>
                            </p>
                            <p className="mb-2">
                                Website: <span className="font-bold">{/* Add website URL here */}</span>
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="mb-2">
                                Linkedin: <span className="font-bold">{/* Add Linkedin URL here */}</span>
                            </p>
                            <p className="mb-2">
                                Facebook: <span className="font-bold">{/* Add Facebook URL here */}</span>
                            </p>
                            <p className="mb-2">
                                Twitter: <span className="font-bold">{/* Add Twitter URL here */}</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default VCProfile