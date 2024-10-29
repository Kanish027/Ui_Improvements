import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const location = useLocation();

  return (
    <footer
      className={`w-full ${
        location.pathname === "/" ? "" : "border-t border-gray-200"
      } pt-16 mb-10 lg:h-64`}
    >
      <div className="flex flex-col lg:flex-row justify-between items-start px-10">
        <div className="max-w-md mb-6 lg:mb-0">
          <img src="IPHIPI Primary copy.png" className="w-64 h-auto" alt="Company Logo" />
          <div className="mt-4">
            Make your TWS smart with our IPHIPI solutions
          </div>
        </div>

        <div className="flex lg:gap-32 gap-28">
          <div className="pt-5 lg:pt-0">
            <div className="font-medium text-lg">Company</div>
            <ul className="my-3 flex text-md flex-col gap-2">
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Career</Link>
              </li>
              <li>
                <Link>Career</Link>
              </li>
              <li>
                <Link>Pricing</Link>
              </li>
            </ul>
          </div>

          <div className="pt-5 lg:pt-0">
            <div className="font-medium text-lg">Legal</div>
            <ul className="my-3 flex text-md flex-col gap-2">
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Licensing</Link>
              </li>
              <li>
                <Link>Terms</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-5 lg:pt-0 max-w-64">
          <div className="font-medium text-lg">Contact IPHIPI</div>
          <div className="my-3">
            <Link to={"mailto:Marketing@iphipi.com"}>Marketing@iphipi.com</Link>
          </div>
          <div className="">
            Office: C5-104, Center for Innovation and Entrepreneurship IIIT
            Hyderabad Gachibowli, Hyderabad Telangana - 500032
          </div>
        </div>
      </div>
      <hr className="mt-10 mx-10 border border-gray-200" />
      <div className="pt-7 mb-5 text-center text-gray-600">
        © {currentYear} IPHIPI Technologies, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
