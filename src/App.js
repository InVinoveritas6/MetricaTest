import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Page1 from "./pages/Page1/Page1";
import Page2 from "./pages/Page2/Page2";
import Page3 from "./pages/page3";
import Homepage from "./pages/Homepage/HomePage";

// import logo from "../public/logo192.png"

class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.ym(93025937,'hit', window.location.href);
      console.log(this.props.location.pathname);
    }
  }

render() {
  return (
    <div className="App">
      <div>
        <div className="header">
          <div className="some-logo">
            <div className="logo">
              <Link to="/MetricaTest">Logo</Link>
            </div>
          </div>
          <div className="menu">
            <div className="page">
              <Link to="/MetricaTest/page1">page1</Link>
            </div>
            <div className="page">
              <Link to="/MetricaTest/page2">page2</Link>
            </div>
            <div className="page">
              <Link to="/MetricaTest/page3">page3</Link>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/MetricaTest/" element={<Homepage />} />
        <Route path="/MetricaTest/page1" element={<Page1 />} />
        <Route path="/MetricaTest/page2" element={<Page2 />} />
        <Route path="/MetricaTest/page3" element={<Page3 />} />
      </Routes>
    </div>
  );

}
}

export default App;
