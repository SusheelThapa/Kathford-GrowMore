import React from 'react'
import img_blankUser from "../img/blankUser.jpg";

const TeamMembersCard = ({ Name, Position }) => {
    return (
        <section>

            <div className=" w-52">
                {/* Team Member Card */}
                <div className="bg-white p-4 rounded-md shadow-md lg:w-80 h-72">
                    <img src={img_blankUser} alt="Team Member 1" className="w-full h-48 object-cover mb-4 rounded-md" />
                    <h3 className="text-xl font-bold mb-2">{Name}</h3>
                    <p className="text-gray-600">{Position}</p>
                </div>

            </div>
        </section>

    )
}

export default TeamMembersCard