import React from 'react';
import  "./sass/style.scss";
import Footer from "./components/Footer";
import Divider from "./components/Divider";

const Layout = ({children}) => {
  return (
    <>
      <div className="layout footer-spacer lay-cover container-fluid g-0">
        {children}
      </div>
      <Divider/>
      <Footer/>
    </>
  )
}

export default Layout;

