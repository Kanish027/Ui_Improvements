import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Overview from "./pages/Overview";
import Compare from "./pages/Compare";
import Features from "./pages/Features";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex justify-center">
      <div>
        <div className="sticky top-0 mb-3" style={{ zIndex: 100 }}>
          <Navbar />
        </div>
        <div className="max-w-screen-xl">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/features" element={<Features />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <Toaster />
    </div>
  );
};

export default App;
