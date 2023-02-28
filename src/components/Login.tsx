import React, { FC, useState } from "react";
import Logo from "../assets/Logo.png";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Login: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

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
        <div className="mt-20 md:mt-32">
          <h2 className="font-bold text-xl md:text-2xl">Welcome back</h2>
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
                className="w-full h-12 mb-8 mt-2 rounded-md"
                style={{ border: "1px solid rgba(18, 18, 18, 0.12)" }}
              >
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="w-full h-full outline-none px-4 rounded-lg"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-[#093549] font-bold text-sm md:text-md"
              >
                Password
              </label>

              <div
                className="w-full h-12 flex justify-between mb-3 relative mt-2 rounded-md"
                style={{ border: "1px solid rgba(18, 18, 18, 0.12)" }}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password (min of 8 characters)"
                  className="w-full h-full outline-none px-4 "
                />
                {showPassword ? (
                  <p
                    className="place-self-center absolute right-4 text-[#1C9FDA] text-sm cursor-pointer font-bold "
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    Hide
                  </p>
                ) : (
                  <p
                    className="place-self-center absolute right-4 text-[#1C9FDA] text-sm cursor-pointer font-bold"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    Show
                  </p>
                )}
              </div>
            </div>

            <div className="mt-10 w-full h-12">
              <button className="bg-[#1C9FDA] text-white border-none rounded-md w-full h-full font-bold hover:opacity-90">
                Log in
              </button>
            </div>
          </form>

          <div className="mt-4 text-center">
            <p className="text-[#667085] text-sm md:text-md font-bold">
              Forgot your password?{" "}
              <span className="text-[#093549] underline">
                <Link to="/"> Reset it here</Link>
              </span>
            </p>
          </div>

          <div className="w-full flex items-center justify-center mt-8">
            <div className="flex items-center justify-center w-fit px-6 py-3 bg-[#EDF8FC] rounded-lg">
              <p className="text-[#667085] text-sm md:text-md font-bold">
                Having problems logging in?{" "}
                <span className="text-[#093549] underline">
                  <Link to="/"> Chat with us</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
