import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Body */}
      <div className="main">{children}</div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
