import React, { FC, useState } from "react";
import Logo from "../assets/Logo.png";
import { AiOutlineArrowDown } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export const CreateAccount: FC = () => {
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
              Access packages & create custom trips
            </h3>
            <span>
              <p className="text-[#475467] text-xs md:text-sm mt-3">
                Explore ready made packages from the best deals in the market
              </p>
              <p className="text-[#475467] text-xs md:text-sm">
                for you. Tailor your perfect adventure with our customer trip
              </p>
              <p className="text-[#475467] text-xs md:text-sm">
                creation tool.
              </p>
            </span>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="w-20 h-2 border rounded-lg bg-[#D4DFE4]"></div>
              <div className="w-20 h-2 border rounded-lg bg-[#1C9FDA]"></div>
            </div>

            <div className="md:hidden flex items-center justify-center mt-6">
              <HashLink to="#form" smooth={true}>
                <div className="w-10 h-10 bg-white border-none rounded-full flex items-center justify-center animate-bounce">
                  <AiOutlineArrowDown className="text-xl" />
                </div>
              </HashLink>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full md:w-[50%] px-4 md:px-20 md:h-screen py-6 md:py-10"
        id="form"
      >
        <div className="flex items-center justify-end ">
          <Link to="/">
            <h2 className="font-bold text-sm md:text-md hover:opacity-80">
              Sign in
            </h2>
          </Link>
        </div>

        <div className="mt-4 md:mt-6">
          <h2 className="font-bold text-xl md:text-2xl">Let's get started</h2>
          <p className="text-xs md:text-sm text-[#093549] mt-3">
            Create an account and enjoy a seamless travel booking experience
          </p>

          <form className="mt-6">
            <div className="w-full md:flex gap-6 items-center">
              <div className="w-full md:w-[48%]">
                <label
                  htmlFor="firstName"
                  className="text-[#093549] font-bold text-sm md:text-md"
                >
                  First Name
                </label>
                <div
                  className="w-full h-10 mb-8 mt-2 rounded-md"
                  style={{ border: "1px solid rgba(18, 18, 18, 0.12)" }}
                >
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full h-full outline-none px-4 rounded-lg"
                  />
                </div>
              </div>
              <div className="w-full md:w-[48%]">
                <label
                  htmlFor="lastName"
                  className="text-[#093549] font-bold text-sm md:text-md"
                >
                  Last Name
                </label>
                <div
                  className="w-full h-10 mb-8 mt-2 rounded-md"
                  style={{ border: "1px solid rgba(18, 18, 18, 0.12)" }}
                >
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full h-full outline-none px-4 rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-[#093549] font-bold text-sm md:text-md"
              >
                Email Address
              </label>
              <div
                className="w-full h-10 mb-8 mt-2 rounded-md"
                style={{ border: "1px solid rgba(18, 18, 18, 0.12)" }}
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-full outline-none px-4 rounded-lg"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="text-[#093549] font-bold text-sm md:text-md"
              >
                Phone Number
              </label>
              <div
                className="w-full h-10 mb-8 mt-2 rounded-md relative"
                style={{ border: "1px solid rgba(18, 18, 18, 0.12)" }}
              >
                <input
                  type="tel"
                  className="w-[full - 18] md:w-[full - 32] h-full ml-32 outline-none px-4 rounded-lg"
                />
                <div
                  className="w-18 md:w-32 h-10 absolute top-0 left-0 rounded-tl-lg rounded-bl-lg flex items-center justify-center"
                  style={{ border: "1px solid rgba(18, 18, 18, 0.12)" }}
                >
                  <select
                    name="phone"
                    id="phone"
                    className="outline-none px-1 md:px-4 w-full h-full bg-[#F9F9F9]"
                  >
                    <option value="phone">+234</option>
                  </select>
                </div>
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
                className="w-full h-10 flex justify-between mb-3 relative mt-2 rounded-md"
                style={{ border: "1px solid rgba(18, 18, 18, 0.12)" }}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password (min of 8 characters and a number)"
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
            <div className="w-full mt-2 flex items-center gap-2">
              <input type="checkbox" id="check-box" />
              <label htmlFor="check-box" className="text-sm md:text-md">
                I have read and agree to Travelbay’s{" "}
                <Link to="/">
                  <span className="text-[#1C9FDA]"> Terms of Service </span>
                </Link>
                and{" "}
                <Link to="/">
                  <span className="text-[#1C9FDA]">Privacy Policy</span>
                </Link>{" "}
              </label>
            </div>
            <div className="w-full mt-2 flex items-center gap-2">
              <input checked type="checkbox" id="check-box" />
              <label htmlFor="check-box" className="text-sm md:text-md">
                Join Travelbay travel community for exclusive access to travel
                resources and events to help you grow.
              </label>
            </div>

            <div className="mt-10 w-full h-12">
              <button
                type="submit"
                className="bg-[#1C9FDA] text-white border-none rounded-md w-full h-full font-bold hover:opacity-90"
              >
                Create an account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
