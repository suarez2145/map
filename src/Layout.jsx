import React from 'react';
import  "./sass/style.scss";

const Layout = ({children}) => {
  return (
    <div className="layout container-fluid vh-100 g-0">
      {children}
    </div>
  )
}

export default Layout;

