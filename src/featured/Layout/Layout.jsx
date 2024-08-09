import React, { useState } from "react";
import Header from "../Header/Header";
import MobileNavbar from "../Header/MobileNavbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <MobileNavbar
        isSidebarOpen={isSidebarOpen}
        toggleMobileSidebar={toggleSidebar}
      />
      <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
