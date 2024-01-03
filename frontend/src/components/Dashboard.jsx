import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b-2 border-gray-200">
        <h1 className="text-2xl font-bold p-4">My Awesome Dashboard</h1>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1: User Profile */}
          <Link
            to="/profile"
            className="bg-white p-6 rounded-lg shadow-md hover:bg-green-50"
          >
            <h2 className="text-xl font-semibold mb-4">User Profile</h2>
            <p>Your personal information and settings.</p>
          </Link>

          {/* Card 2: Latest Messages */}
          <Link
            to="/messages"
            className="bg-white p-6 rounded-lg shadow-md hover:bg-green-50 "
          >
            <h2 className="text-xl font-semibold mb-4">Latest Messages</h2>
            <p>Check and respond to your latest messages.</p>
          </Link>

          {/* Card 3: Notifications */}
          <Link
            to="/notification"
            className="bg-white p-6 rounded-lg shadow-md hover:bg-green-50 "
          >
            <h2 className="text-xl font-semibold mb-4">Notifications</h2>
            <p>Stay updated with important notifications.</p>
          </Link>

          {/* Card 4: Resources */}
          <Link
            to="/resources"
            className="bg-white p-6 rounded-lg shadow-md hover:bg-green-50 "
          >
            <h2 className="text-xl font-semibold mb-4">Resources</h2>
            <p>Access helpful resources and documentation.</p>
          </Link>

          {/* Card 5: Explore */}
          <Link
            to="/explore"
            className="bg-white p-6 rounded-lg shadow-md hover:bg-green-50 "
          >
            <h2 className="text-xl font-semibold mb-4">Explore</h2>
            <p>Discover new features and functionalities.</p>
          </Link>

          {/* Card 6: Investor Information */}
          <Link
            to="/investors"
            className="bg-white p-6 rounded-lg shadow-md hover:bg-green-50 "
          >
            <h2 className="text-xl font-semibold mb-4">Investor Information</h2>
            <p>Details about your investors and funding.</p>
          </Link>
          {/* Card 7: GrowAI Assistant */}
          <Link
            to="/growAI"
            className="bg-white p-6 rounded-lg shadow-md  hover:bg-green-50"
          >
            <h2 className="text-xl font-semibold mb-4">GrowAI Assistant</h2>
            <p>An AI assistant for business discussions.</p>
          </Link>

          {/* Card 8: Subscribe & Verify */}
          <Link
            to="/subscribe"
            className="bg-white p-6 rounded-lg shadow-md  hover:bg-green-50"
          >
            <h2 className="text-xl font-semibold mb-4">Subscribe & Verify</h2>
            <p>Subscribe to receive updates and verify your account.</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
