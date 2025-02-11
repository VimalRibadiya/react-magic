import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Routes, Route, HashRouter } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";
import Shows from "./components/Shows";
import Contact from "./components/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components/About" element={<About />} />
        <Route path="/components/Services" element={<Services />} />
        <Route path="/components/Shows" element={<Shows />} />
        <Route path="/components/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  </>
);
