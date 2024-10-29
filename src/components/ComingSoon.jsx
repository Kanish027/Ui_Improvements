import React from "react";
import "./styles.css";

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="heading-container">
        <h1 className="heading mb-10 lg:mb-20">
          Introducing our new TWS Upcoming Features
        </h1>
      </div>
      <div className="slider-container">
        <div className="slider">
          <div className="slide">
            <div className="slide-content back flex items-center lg:px-20 px-4 sm:px-6 h-full rounded-3xl">
              <div>
                <h2
                  className="lg:text-3xl mb-4 text-red-500 font-bold"
                  // style={{ color: "#423f3f" }}
                >
                  Two-Way Conversation Sensor
                </h2>
                <p
                  className="text-sm lg:text-md text-red-500 font-medium"
                  // style={{ color: "#423f3f" }}
                >
                  Detects conversation when the user starts speaking and when
                  someone calls the user with a registered name. Pauses music
                  and switches on transparency mode with vocal boost to ensure
                  the user never misses important interactions.
                </p>
              </div>
            </div>
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/6000101/pexels-photo-6000101.jpeg?auto=compress&cs=tinysrgb&w=4000"
              alt=""
            />
          </div>
          <div className="slide">
            <div
              className="slide-content back flex items-center  lg:px-20 px-4 sm:px-6 h-full rounded-3xl"
              // style={{ backgroundColor: "#F0E8DF" }}
            >
              <div>
                <h2
                  className="lg:text-3xl mb-4 text-red-500 font-bold"
                  // style={{ color: "#423f3f" }}
                >
                  AI Spatial Audio
                </h2>
                <p
                  className="text-sm lg:text-md text-red-500 font-medium"
                  // style={{ color: "#423f3f" }}
                >
                  {/* Utilizes HRTF-based algorithms to create a 3D audio
                  effect.Provides an immersive experience for movies and music
                  recorded in spatial audio formats. */}
                  Utilizes HRTF based algorithms to create a 3D audio effect.
                  Provides an immersive{" "}
                  <span className="text-xs lg:text-sm">experience</span> for
                  movies and music recorded in spatial audio formats.
                </p>
              </div>
            </div>
          </div>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/4050214/pexels-photo-4050214.jpeg?auto=compress&cs=tinysrgb&w=4000"
              alt=""
            />
          </div>
          {/* <div className="slide">
          <div
            className="slide-content flex items-center lg:px-20 px-7 h-full rounded-3xl"
            style={{ backgroundColor: "#DAE0E2" }}
          >
            <div>
              <h2
                className="lg:text-3xl mb-4 font-bold"
                style={{ color: "#3c4043" }}
              >
                AI Spatial Audio
              </h2>
              <p className="text-sm lg:text-md" style={{ color: "#3c4043" }}>
                Utilizes HRTF-based algorithms to create a 3D audio effect.
                Provides an immersive experience for movies and music recorded
                in spatial audio formats.
              </p>
            </div>
          </div>
        </div>
        <div className="slide">
          <img
            src="https://images.pexels.com/photos/4050214/pexels-photo-4050214.jpeg?auto=compress&cs=tinysrgb&w=4000"
            alt=""
          />
        </div>
        <div className="slide">
          <div
            className="slide-content flex items-center lg:px-20 px-7 h-full rounded-3xl"
            style={{ background: "#FAC7B4" }}
          >
            <div>
              <h2
                className="lg:text-3xl mb-4 font-bold"
                style={{ color: "#3c4043" }}
              >
                AI ANC (Active Noise Cancellation)
              </h2>
              <p className="text-sm lg:text-md" style={{ color: "#3c4043" }}>
                Employs AI to adaptively cancel out ambient noise. Offers
                superior noise reduction by adjusting in real-time to
                different environments.
              </p>
            </div>
          </div>
        </div>
        <div className="slide">
          <img
            src="https://images.pexels.com/photos/8053704/pexels-photo-8053704.jpeg?auto=compress&cs=tinysrgb&w=4000"
            alt=""
          />
        </div>
        <div className="slide">
          <div className="slide-content flex items-center lg:px-20 px-7 h-full rounded-3xl bg-emerald-100">
            <div>
              <h2
                className="lg:text-3xl mb-4 font-bold"
                style={{ color: "#3c4043" }}
              >
                AI Advanced Transparency
              </h2>
              <p className="text-sm lg:text-md" style={{ color: "#3c4043" }}>
                Enhances transparency mode by using AI to selectively allow
                important sounds through.Ensures user safety and awareness
                while maintaining audio immersion.
              </p>
            </div>
          </div>
        </div>
        <div className="slide">
          <img
            src="https://images.pexels.com/photos/7243011/pexels-photo-7243011.jpeg?auto=compress&cs=tinysrgb&w=4000&lazy=load"
            alt=""
          />
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
