import React from "react";
import MainNavbar from "../components/Navbar/MainNavbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  );
};

export default Layout;
