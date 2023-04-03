import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1/Page1";
import Page2 from "./pages/Page2/Page2";
import Page3 from "./pages/page3";
import Homepage from "./pages/Homepage/HomePage";
import { Layout } from "./components/Layout/Layout";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/MetricaTest/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
