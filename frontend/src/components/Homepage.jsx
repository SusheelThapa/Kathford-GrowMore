import Sidebar from "./Sidebar";

import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Messages from "./Messages";
import Notification from "./Notification";
import Resources from "./Resources";
import Explore from "./Explore";
import Settings from "./Settings";
import Investors from "./Investors";
import GrowAI from "./GrowAI";

const Homepage = ({ active_page, pages }) => {
  return (
    <div className="flex">
      <Sidebar />
      {active_page == pages[0] && <Dashboard />}
      {active_page == pages[1] && <Profile />}
      {active_page == pages[2] && <Messages />}
      {active_page == pages[3] && <Notification />}
      {active_page == pages[4] && <Resources />}
      {active_page == pages[5] && <Explore />}
      {active_page == pages[6] && <Investors />}
      {active_page == pages[7] && <GrowAI />}
      {active_page == pages[8] && <Settings />}
    </div>
  );
};

export default Homepage;
