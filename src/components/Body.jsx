import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";
import { func } from "../utils/fakeStore.js";

const Body = () => {
  useEffect(() => {
    func();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
