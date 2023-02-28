import React, { FC } from "react";
import Logo from "../assets/Logo.png";
import { AiOutlineArrowDown } from "react-icons/ai";

export const Login: FC = () => {
  return (
    <div className="font-dmsans md:flex items-start w-full">
      <div className="w-full md:w-[50%] bg-[#F7F7F8] px-4 md:px-20 md:h-screen py-6 md:py-10">
        <div>
          <img src={Logo} alt="TravelBay-Logo" />
        </div>
        <div className="md:h-[80%] md:flex items-end justify-center">
          <div className="md:hidden w-full h-96 bg-[#F7F7F8]"></div>
          <div className="text-center">
            <h3 className="text-[#093549] font-bold text-lg md:text-xl">
              Customize a payment plan for your dream trip
            </h3>
            <span>
              <p className="text-[#475467] text-xs md:text-sm mt-3">
                Choose a payment frequency that works for you to make your
              </p>
              <p className="text-[#475467] text-xs md:text-sm">
                dream trip happen. You can pay in installments before the
              </p>
              <p className="text-[#475467] text-xs md:text-sm">
                departure date is close.
              </p>
            </span>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="w-20 h-2 border rounded-lg bg-[#D4DFE4]"></div>
              <div className="w-20 h-2 border rounded-lg bg-[#1C9FDA]"></div>
            </div>

            <div className="md:hidden flex items-center justify-center mt-6">
              <div className="w-10 h-10 bg-white border-none rounded-full flex items-center justify-center animate-bounce">
                <AiOutlineArrowDown className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[50%] px-4 md:px-20 md:h-screen py-6 md:py-10">
        <div className="flex items-center justify-end ">
          <h2 className="font-bold text-sm md:text-md">Create an account</h2>
        </div>
        <div className="md:mt-32">
          <h2 className="font-bold text-lg md:text-2xl">Welcome back</h2>
          <p className="text-xs md:text-sm text-[#093549] mt-3">
            Login your travelbay account
          </p>

          <form className="mt-6">
            <div>
              <label
                htmlFor="email"
                className="text-[#093549] font-bold text-sm md:text-md"
              >
                Email Address
              </label>
              <div
                className="w-full h-12 mb-8 mt-2"
                style={{ border: "1px solid rgba(18, 18, 18, 0.12)" }}
              >
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="w-full h-full outline-none px-4 rounded-lg"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
