import React from "react";
import { Link } from "react-router-dom";

const FinalCall = () => {
  return (
    <div className="py-20 bg-blue-100">
      <div className="mx-12">
        <h2 className="benefits-last-heading text-center font-bold pb-10">
          You’re only one click away to make your TWS smart
        </h2>
        <div className="flex items-center md:items-start justify-center gap-4 flex-col md:flex-row">
          {/* <div>
            <button className="text-white bg-red-500 hover:bg-red-600 w-52 h-12 font-semibold rounded-lg text-md mb-2">
              Contact us
            </button>
          </div> */}
          <div>
            <Link to={"/contact"}>
              <button className="text-white bg-blue-800 hover:bg-blue-700 font-semibold w-52 h-12 rounded-lg text-md mb-2">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCall;
