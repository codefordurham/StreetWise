import React from "react";

import "./style.scss";
import Helmet from "./helmet";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => (
  <div className="layout">
    <Helmet />
    <Header />
    <div className="container-wrapper">
      <div className="container">{children}</div>
    </div>
    <Footer />
  </div>
);

export default Layout;
