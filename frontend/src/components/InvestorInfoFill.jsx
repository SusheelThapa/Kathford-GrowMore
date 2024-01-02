import React from 'react'
import { useState } from 'react';

const InvestorInfoFill = () => {
    const [formData, setFormData] = useState({
        user:'',
        name: '',
        email: '',
        address: '',
        phone_no: '',
        facebook_url: '',
        linkedin_url: '',
        // profilePic: null,
        // pan: null,
        twitter_url: '',
        website: '',
        description: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);

        setFormData({
            user:'',
            name: '',
            email: '',
            address: '',
            phone_no: '',
            facebook_url: '',
            linkedin_url: '',
            // profilePic: null,
            // pan: null,
            twitter_url: '',
            website: '',
            description: '',
        })
    };

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
            }} className="w-3/4 mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-4">Investor Information Fill</h2>

                {/* Text Fields */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>

                {/* Dropdown */}

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Contact Number
                    </label>
                    <input
                        type="text"
                        id="phone_no"
                        name="phone_no"
                        value={formData.phone_no}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Website Url
                    </label>
                    <input
                        type="text"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md"

                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Linkedin Url
                    </label>
                    <input
                        type="text"
                        id="linkedin_url"
                        name="linkedin_url"
                        value={formData.linkedin_url}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md"

                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Facebook Url
                    </label>
                    <input
                        type="text"
                        id="facebook_url"
                        name="facebook_url"
                        value={formData.facebook_url}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md"

                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Twitter Url
                    </label>
                    <input
                        type="text"
                        id="twitter_url"
                        name="twitter_url"
                        value={formData.twitter_url}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md"

                    />
                </div>

                {/* Other Text Fields */}
                {/* ... (Repeat similar structure for other text fields) */}

                {/* File Fields */}
                {/* <div className="mb-4">
                    <label htmlFor="profilePic" className="block text-sm font-medium text-gray-600">
                        Profile Picture
                    </label>
                    <input
                        type="file"
                        id="profilePic"
                        name="profilePic"
                        onChange={handleFileChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div> */}

                {/* <div className="mb-4">
                    <label htmlFor="pan" className="block text-sm font-medium text-gray-600">
                    Pan
                    </label>
                    <input
                        type="file"
                        id="pan"
                        name="pan"
                        onChange={handleFileChange}
                        className="mt-1 p-2 w-full border rounded-md"
                    />
                </div> */}

                {/* Textarea */}
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-600">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        rows="4"
                    />
                </div>

                {/* Submit Button */}
                <div className="mb-4">
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}

export default InvestorInfoFill