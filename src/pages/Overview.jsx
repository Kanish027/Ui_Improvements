import React from "react";
import ComingSoon from "../components/ComingSoon";
import Features from "../components/Features";
import FinalCall from "../components/FinalCall";
import Landing from "../components/Landing";

const Overview = () => {
  return (
    <div>
      <div className="lg:mx-5 mb-20">
        <Landing />
      </div>
      <Features />
      <FinalCall />
    </div>
  );
};

export default Overview;
