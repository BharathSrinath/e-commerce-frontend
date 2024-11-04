import React from "react";
import Header from "./Header";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";

const Body = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
