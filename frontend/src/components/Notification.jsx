import React from 'react'

const Notification = () => {
    const notifications = [
        {
            topic: "Received Invitation",
            desc: "You have been invited to speak at the Global Tech Summit 2024. Check your inbox for details.",
        },
        {
            topic: "Upcoming Event",
            desc: "Tech Expo 2024 is just around the corner. Register now to showcase your latest innovations.",
        },
        {
            topic: "New Product Launch",
            desc: "Your competitor XYZ Corp has launched a new product. Stay informed about market trends.",
        },
        {
            topic: "Collaboration Opportunity",
            desc: "A potential partnership opportunity with Innovate Solutions has been identified. Explore synergies.",
        },
        {
            topic: "Industry Recognition",
            desc: "Congratulations! Your company has been nominated for the Best Tech Startup Award. Details to follow.",
        },
        {
            topic: "Tech Workshop Alert",
            desc: "A hands-on workshop on Artificial Intelligence is scheduled for next week. Secure your spot now.",
        },
        {
            topic: "Business Expansion",
            desc: "Market research indicates a favorable environment for expanding your business into emerging markets.",
        },
        {
            topic: "Innovation Challenge",
            desc: "Participate in the Tech Innovation Challenge and showcase your groundbreaking ideas to a global audience.",
        },
        {
            topic: "Industry Webinar",
            desc: "Join the upcoming webinar on cybersecurity trends in the tech industry. Enhance your knowledge.",
        },
        {
            topic: "Product Update",
            desc: "A new software update for your flagship product is ready. Notify your customers about the enhancements.",
        },
    ];
    const maxNotificationsToShow = 10;
    const displayedNotifications = notifications.slice(0, maxNotificationsToShow);
    return (
        <>

            <div className="flex flex-col space-y-4 w-10/12">
            <h2 className='text-5xl text-center my-5 font-bold'>Notifications</h2>
                {displayedNotifications.map((notification, index) => (
                    <div key={index} className="block w-full p-6 my-5 mx-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{notification.topic}</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">{notification.desc}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Notification