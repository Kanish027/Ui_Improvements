import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`nav-container flex justify-center ${
        isScrolled ? "nav-shadow" : ""
      }`}
    >
      <nav className="nav flex md:h-20 h-24 md:mx-0 mx-5 justify-between w-full items-start md:items-center">
        <div className="flex md:flex-row flex-col md:items-center items-start">
          <Link to={"/"} className="lg:mx-4 me-5 pe-1.5 mt-3">
            <img
              src="IPHIPI Primary.png"
              width={"140px"}
              height={"100px"}
              alt=""
            />
          </Link>
          <ul className="flex items-center mt-0.5 lg:mt-0 gap-5">
            <Link to={"/"}>
              <li
                className={
                  location.pathname === "/"
                    ? "text-md border-b-2 h-7 border-b-blue-800 p-0.5 font-semibold text-blue-800"
                    : "text-md  p-0.5 h-7 font-semibold"
                }
              >
                Overview
              </li>
            </Link>
            <Link className="lg:hidden" to={"/about"}>
              <li
                className={
                  location.pathname === "/about"
                    ? "text-md border-b-2 h-7 border-b-blue-800 p-0.5 font-semibold text-blue-800"
                    : "text-md p-0.5 h-7 font-semibold"
                }
              >
                About
              </li>
            </Link>
            <Link className="lg:hidden" to={"/contact"}>
              <li
                className={
                  location.pathname === "/contact"
                    ? "text-md border-b-2 h-7 border-b-blue-800 p-0.5 font-semibold text-blue-800"
                    : "text-md p-0.5 h-7 font-semibold"
                }
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="button-container hidden lg:block">
          {/* <button
            className="bg-blue-700 py-3 px-14 font-semibold text-white text-xl nav-button"
            style={{ borderRadius: "4px" }}
          >
            Find Retailers
          </button> */}
          <ul className="flex gap-6 pe-6">
            <Link to={"/about"}>
              <li
                className={
                  location.pathname === "/about"
                    ? "text-md border-b-2 h-7 border-b-blue-800 p-0.5 font-semibold text-blue-800"
                    : "text-md p-0.5 h-7 font-semibold"
                }
              >
                About
              </li>
            </Link>
            <Link to={"/contact"}>
              <li
                className={
                  location.pathname === "/contact"
                    ? "text-md border-b-2 h-7 border-b-blue-800 p-0.5 font-semibold text-blue-800"
                    : "text-md p-0.5 h-7 font-semibold"
                }
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
