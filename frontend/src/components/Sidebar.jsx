import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import UnHidden from "./UnHidden";

const Sidebar = () => {
  const [isSidebarHidden, setSidebarHidden] = useState(false);

  const toggleSidebar = () => {
    setSidebarHidden(!isSidebarHidden);
    console.log(isSidebarHidden);
  };

  return (
    <>
      <button onClick={toggleSidebar}>
        <FaBars className="text-green-500" />
      </button>
      {isSidebarHidden && <UnHidden />}
    </>
  );
};

export default Sidebar;
