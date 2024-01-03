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
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">User Profile</h2>
          <p>Your personal information and settings.</p>
        </div>

        {/* Card 2: Latest Messages */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Latest Messages</h2>
          <p>Check and respond to your latest messages.</p>
        </div>

        {/* Card 3: Notifications */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Notifications</h2>
          <p>Stay updated with important notifications.</p>
        </div>

        {/* Card 4: Resources */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Resources</h2>
          <p>Access helpful resources and documentation.</p>
        </div>

        {/* Card 5: Explore */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Explore</h2>
          <p>Discover new features and functionalities.</p>
        </div>

        {/* Card 6: Investor Information */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Investor Information</h2>
          <p>Details about your investors and funding.</p>
        </div>
        {/* Card 7: GrowAI Assistant */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h2 className="text-xl font-semibold mb-4">GrowAI Assistant</h2>
              <p>An AI assistant for business discussions.</p>
            </div>

            {/* Card 8: Subscribe & Verify */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <h2 className="text-xl font-semibold mb-4">Subscribe & Verify</h2>
              <p>Subscribe to receive updates and verify your account.</p>
            </div>
      </div>
    </main>
  </div>
  );
};

export default Dashboard;
