import React from "react";

//Import components
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};

export default Layout;
