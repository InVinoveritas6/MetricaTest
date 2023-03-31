import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Page1 from "./pages/Page1/Page1";
import Page2 from "./pages/Page2/Page2";
import Page3 from "./pages/page3";
import Homepage from "./pages/Homepage/HomePage";

// import logo from "../public/logo192.png"

function App() {
  return (
    <div className="App">
      <div>
        <div className="header">
          <div className="some-logo">
            <div className="logo">
              <Link to="/">Logo</Link>
            </div>
          </div>
          <div className="menu">
            <div className="page">
              <Link to="/page1">page1</Link>
            </div>
            <div className="page">
              <Link to="/page2">page2</Link>
            </div>
            <div className="page">
              <Link to="/page3">page3</Link>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/MetricaTest/" element={<Homepage />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </div>
  );
}

export default App;
