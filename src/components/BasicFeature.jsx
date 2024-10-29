import React from "react";
import AppDemo from "./AppDemo";
import ComingSoon1 from "./ComingSoon1";

const BasicFeature = () => {
  return (
    <div>
      <div className="lg:my-24 justify-center">
        <div className="w-full mb-5 lg:flex gap-5">
          <div className="w-full mb-8 lg:mb-0">
            <AppDemo />
          </div>
          <div className="lg:w-2/3 lg:mb-0 md:p-16 lg:p-0 mb-8 w-full rounded-3xl bg-gradient-to-br from-blue-100 to-blue-200 flex align-middle items-center">
            <div>
              <h1 className="text-center px-8 text-2xl mt-20 mb-10 font-bold">
                AI ENC (Environmental Noise Cancellation)
              </h1>
              <ul className="px-10 mb-20">
                <li className="mb-3 flex gap-1">
                  <div>
                    <i className="fa-solid pe-3 text-blue-800 fa-gem"></i>
                  </div>
                  <div>
                    Reduces background noise during calls using advanced AI
                    algorithms.
                  </div>
                </li>
                <li className="mb-3 flex gap-1">
                  <div>
                    <i className="fa-solid pe-3 text-blue-800 fa-gem"></i>
                  </div>
                  <div>
                    Ensures crystal-clear communication even in noisy
                    environments.
                  </div>
                </li>
                <li className="mb-3 flex gap-1">
                  <div>
                    <i className="fa-solid pe-3 text-blue-800 fa-gem"></i>
                  </div>
                  <div>
                    Superior performance compared to any TWS ENC for Indian
                    noises.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full lg:flex gap-5 mb-5">
          <div className="border lg:hidden mb-8 lg:mb-0 w-full rounded-3xl">
            <img
              src="https://images.pexels.com/photos/3755919/pexels-photo-3755919.jpeg?auto=compress&cs=tinysrgb&w=4000&lazy=load"
              alt=""
              className="w-full rounded-3xl"
            />
          </div>
          <div className="border  md:p-16 lg:p-0 mb-8 lg:mb-0 lg:w-2/3 w-full flex items-center bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl">
            <div>
              <h1 className="text-center px-8 text-2xl mt-20 mb-10 font-bold">
                Brand Wake Word
              </h1>
              <ul className="px-10 mb-20">
                <li className="mb-3 flex gap-1">
                  <div>
                    <i className="fa-solid pe-3 text-blue-800 fa-gem"></i>
                  </div>
                  <div>
                    Activate the voice assistant by saying a specific wake word.
                  </div>
                </li>
                <li className="mb-3 flex gap-1">
                  <div>
                    <i className="fa-solid pe-3 text-blue-800 fa-gem"></i>
                  </div>
                  <div>
                    Seamless hands-free experience for controlling various
                    functions through Google/Siri voice assistants (when online)
                    or offline commands built into TWS like volume up, play next
                    song, answer/reject calls, etc.
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border hidden lg:block mb-8 lg:mb-0 w-full rounded-3xl">
            <img
              src="https://images.pexels.com/photos/3755919/pexels-photo-3755919.jpeg?auto=compress&cs=tinysrgb&w=4000&lazy=load"
              alt=""
              className="w-full rounded-3xl"
            />
          </div>
        </div>
        <div className="w-full mb-5 lg:flex gap-5">
          <div className="border w-full rounded-3xl mb-8 lg:mb-0">
            <img
              src="https://images.pexels.com/photos/10958687/pexels-photo-10958687.jpeg?auto=compress&cs=tinysrgb&w=4000&lazy=load"
              alt=""
              className="w-full rounded-3xl"
            />
          </div>
          <div className="border flex items-center md:p-16 lg:p-0 mb-8 lg:mb-0 lg:w-2/3 w-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl">
            <div>
              <h1 className="text-center px-8 text-2xl mt-20 mb-10 font-bold">
                Auto Volume (ANC Alternative) with Conversation Sensor
              </h1>
              <ul className="px-10  mb-20">
                <li className="mb-3 flex gap-1">
                  <div>
                    <i className="fa-solid pe-3 text-blue-800 fa-gem"></i>
                  </div>
                  <div>
                    Automatically adjusts the volume based on background noise
                    levels.
                  </div>
                </li>
                <li className="mb-3 flex gap-1">
                  <div>
                    <i className="fa-solid pe-3 text-blue-800 fa-gem"></i>
                  </div>
                  <div>
                    Lowers the volume when a conversation is detected, ensuring
                    a consistent listening experience.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full lg:flex gap-5 mb-5">
          <div className="border lg:hidden mb-8 lg:mb-0 w-full rounded-3xl">
            <img
              src="https://images.pexels.com/photos/7129056/pexels-photo-7129056.jpeg?auto=compress&cs=tinysrgb&w=4000&lazy=load"
              alt=""
              className="w-full rounded-3xl"
            />
          </div>
          <div className="border flex items-center md:p-16 lg:p-0 mb-8 lg:mb-0 lg:w-2/3 w-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl">
            <div>
              <h1 className="text-center px-8 text-2xl mt-20 mb-10 font-bold">
                Safety Feature (Transparency Mode Alternative)
              </h1>
              <ul className="px-10 mb-20">
                <li className="mb-3 flex gap-1">
                  <div>
                    <i className="fa-solid pe-3 text-blue-800 fa-gem"></i>
                  </div>
                  <div>
                    Alerts users in emergency situations like loud horns, police
                    sirens, ambulance sirens, and indoor fire alarms.
                  </div>
                </li>
                <li className="mb-3 flex gap-1">
                  <div>
                    <i className="fa-solid pe-3 text-blue-800 fa-gem"></i>
                  </div>
                  <div>Keeps users safe while listening to loud music.</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border hidden lg:block mb-8 lg:mb-0 w-full rounded-3xl">
            <img
              src="https://images.pexels.com/photos/7129056/pexels-photo-7129056.jpeg?auto=compress&cs=tinysrgb&w=4000&lazy=load"
              alt=""
              className="w-full rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="lg:pt-20">
        <ComingSoon1 />
      </div>
    </div>
  );
};

export default BasicFeature;
