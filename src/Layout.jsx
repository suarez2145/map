import React from 'react';
import  "./sass/style.scss";
import Footer from "./components/Footer";

const Layout = ({children}) => {
  return (
    <>
      <div className="layout footer-spacer lay-cover container-fluid g-0">
        {children}
        <Footer/>
      </div>
    </>
  )
}

export default Layout;

