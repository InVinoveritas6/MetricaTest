import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import "./LayoutStyled.css"

const Layout = () => {
  return (
    <div>
      <div className="header">
        <div className="some-logo">
          <div className="logo">
            <Link to="/MetricaTest/">Logo</Link>
          </div>
        </div>
        <div className="menu">
          <div className="page">
            <NavLink to="/MetricaTest/page1">page1</NavLink>
          </div>
          <div className="page">
            <NavLink to="/MetricaTest/page2">page2</NavLink>
          </div>
          <div className="page">
            <NavLink to="/MetricaTest/page3">page3</NavLink>
          </div>
        </div>
      </div>
      <Outlet/>
      <footer>Footer</footer>
    </div>
  );
};

export {Layout};
