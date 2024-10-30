import React from "react";

function About() {
  return (
    <div className="lg:mx-5 mb-20">
      <div className="container lg:bg-blue-50 rounded-3xl lg:mb-28 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 py-8 lg:py-24">
          <div className="w-full lg:w-auto mt-8 lg:mt-0">
            <div className="flex gap-5">
              <div className="flex flex-col gap-5">
                <img
                  src="https://images.pexels.com/photos/4606333/pexels-photo-4606333.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt="AI-powered earbuds"
                  className="w-48 object-cover rounded-lg"
                />
                <img
                  src="https://images.pexels.com/photos/8512457/pexels-photo-8512457.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="AI-powered earbuds"
                  className="w-48  object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-5">
                <img
                  src="https://images.pexels.com/photos/4945069/pexels-photo-4945069.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="AI-powered earbuds"
                  className="w-48 mt-14 object-cover rounded-lg"
                />
                <img
                  src="https://images.pexels.com/photos/5588376/pexels-photo-5588376.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="AI-powered earbuds"
                  className="w-48 object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/4049454/pexels-photo-4049454.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="AI-powered earbuds"
                  className="w-48 mt-40 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-3xl banner-heading sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
              <span className="text-blue-800">IPHIPI Technologies</span> To
              Elevate Your{" "}
              <span className="text-blue-800">Audio Experience</span>
            </h1>
            <p className="text-base sm:text-lg">
              As we advance into the era of intelligent devices, our focus is on
              making AI an integral part of everyday life. By miniaturizing AI,
              we’re transforming how technology interacts with us — bringing
              intelligence to compact devices like wearables, earbuds, and IoT
              sensors. This approach empowers these devices to process data
              instantly, safeguarding privacy, enhancing speed, and reducing
              reliance on cloud infrastructure. Through local data processing,
              these devices seamlessly adapt to user preferences, anticipate
              needs, and deliver highly personalized experiences. With AI
              embedded in compact forms, we’re creating a future where
              intelligence is seamlessly woven into the fabric of daily life,
              enhancing every interaction.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-start">
          <h1 className="max-w-2xl heading text-center mb-16">Directors</h1>
        </div>
        <div className="flex justify-center">
          <div className="group w-full lg:w-11/12 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500">
            <div className="flex flex-col lg:flex-row">
              <div className="relative w-full lg:w-1/2 overflow-hidden aspect-square">
                <img
                  src="pankajCopy.jpeg"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Pankaj Joshi"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8 w-full lg:w-1/2 space-y-4">
                <h1 className="text-gray-900 text-2xl font-semibold tracking-tight relative">
                  Pankaj Joshi
                  <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-blue-600 transform origin-left transition-all duration-500"></span>
                </h1>
                <h2 className="text-blue-800 font-medium text-sm">
                  B. Tech IIT Kharagpur, MSEE Univ of Hawaii USA, MBA INSEAD.
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  In the last 20 years, Pankaj has been a part of 6 startups as
                  an early employee, leadership team member, and founder CEO. He
                  most recently led the product team at Meeamitech, focusing on
                  deep learning-based Audio AI for voice and speech enhancement.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-start">
          <h1
            className="max-w-2xl heading my-28 text-center mb-16"
            // style={{ color: "#3c4043", fontWeight: "600", fontSize: "32px" }}
          >
            Advisors
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 mx-5">
          {/* First Card */}
          <div className="group w-full lg:w-1/2 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500">
            <div className="flex flex-col lg:flex-row">
              <div className="relative w-full lg:w-1/2 overflow-hidden aspect-square">
                <img
                  src="sumita.jpeg"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Sumita Thakur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8 w-full lg:w-1/2 space-y-4">
                <h1 className="text-gray-900 text-2xl font-semibold tracking-tight relative">
                  Sumita Thakur
                  <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-blue-600 transform origin-left transition-all duration-500"></span>
                </h1>
                <h2 className="text-blue-800 font-medium text-sm">
                  B.Tech NIT Durgapur, MS University of Hawaii, USA
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sumita is currently head of Head - Programs & Outreach, School
                  of Innovation & Entrepreneurship, IIT Hyderabad. Successfully
                  launched multiple new products (programs), customer
                  acquisition in new markets and categories.
                </p>
              </div>
            </div>
          </div>

          {/* Second Card */}
          <div className="group w-full lg:w-1/2 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500">
            <div className="flex flex-col lg:flex-row">
              <div className="relative w-full lg:w-1/2 overflow-hidden aspect-square">
                <img
                  src="makishima.png"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt="Doug Makishima"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8 w-full lg:w-1/2 space-y-4">
                <h1 className="text-gray-900 text-2xl font-semibold tracking-tight relative">
                  Doug Makishima
                  <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-blue-600 transform origin-left transition-all duration-500"></span>
                </h1>
                <h2 className="text-blue-800 font-medium text-sm">
                  CSMO & MD / President of Ecoblox Inc. USA
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Doug Makishima is a seasoned C-level executive, startup
                  adviser, and angel investor with expertise in cloud-edge
                  computing, AI, wireless mobile communications, IoT, networking
                  & storage, e-commerce, and blockchain technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
