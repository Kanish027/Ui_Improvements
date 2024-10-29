"use client";
import { useState } from "react";
import BikePlayerDemo from "./BikePlayerDemo";
import BabblePlayerDemo from "./BabblePlayerDemo";
import ClickPlayerDemo from "./ClickPlayerDemo";
import BabyPlayerDemo from "./BabyPlayerDemo";
import SirenPlayerDemo from "./SirenPlayerDemo";
import "./AppDemo.css";

const AppDemo = () => {
  const [activeAudio, setActiveAudio] = useState("bike");

  const handlePlayBikeAudio = () => {
    setActiveAudio("bike");
  };

  const handlePlayBabbleAudio = () => {
    setActiveAudio("babble");
  };

  const handlePlaySirenAudio = () => {
    setActiveAudio("siren");
  };

  const handlePlayBabyAudio = () => {
    setActiveAudio("baby");
  };

  const handlePlayClickAudio = () => {
    setActiveAudio("click");
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl px-4 py-10 md:px-8 ">
      <div className="max-w-screen-lx mx-auto md:py-20">
        <h1 className="benefits-heading text-center font-bold pb-8">
          IPHIPI Crystal Clear ENC Demo
        </h1>
        <div className="demo_outer mx-auto">
          <div className="mb-6">
            <h6 className="text-center benefit_subtitle">
              Play and toggle Crystal Clear on and off
            </h6>
          </div>
          {activeAudio === "bike" && <BikePlayerDemo />}
          {activeAudio === "babble" && <BabblePlayerDemo />}
          {activeAudio === "click" && <ClickPlayerDemo />}
          {activeAudio === "baby" && <BabyPlayerDemo />}
          {activeAudio === "siren" && <SirenPlayerDemo />}
          <div className="list_wrapper mt-12">
            <div className="mb-6 text-center">
              <strong className="app_demo_subtitle">
                Try different noise types
              </strong>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 app_demo_audio_list">
              {[
                {
                  id: "bike",
                  label: "Wind",
                  handler: handlePlayBikeAudio,
                },
                {
                  id: "babble",
                  label: "Babble",
                  handler: handlePlayBabbleAudio,
                },
                {
                  id: "click",
                  label: "Click",
                  handler: handlePlayClickAudio,
                },
                {
                  id: "baby",
                  label: "Baby",
                  handler: handlePlayBabyAudio,
                },
                {
                  id: "siren",
                  label: "Siren",
                  handler: handlePlaySirenAudio,
                },
              ].map(({ id, label, handler }) => (
                <li
                  key={id}
                  className={`
        ${
          activeAudio === id
            ? "bg-blue-800 text-white"
            : "bg-gray-50 text-gray-800"
        }
        text-center px-4 py-2.5 rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue-700 hover:text-white
      `}
                  onClick={handler}
                >
                  <span className="text-center app_demo_list_text">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDemo;
