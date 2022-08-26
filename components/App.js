import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const App = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default App;
