import React, { FC } from "react";
import { TravelbayInfo } from "./TravelbayInfo";
import { Link } from "react-router-dom";

export const ResetPassword: FC = () => {
  return (
    <div className="font-dmsans md:flex items-start w-full">
      <TravelbayInfo />
      <div
        className="w-full md:w-[50%] px-4 md:px-20 md:h-screen py-6 md:py-10"
        id="form"
      >
        <div className="flex items-center justify-end ">
          <h2 className="font-bold text-sm md:text-md">Create an account</h2>
        </div>
        <div className="mt-20 md:mt-32">
          <h2 className="font-bold text-xl md:text-2xl">Reset your password</h2>
          <p className="hidden md:block text-xs md:text-sm text-[#093549] mt-3">
            Please enter the email address associated with your account. We will{" "}
            <br />
            send you an email with instructions on how to recover your password.
          </p>
          <p className="block md:hidden text-xs md:text-sm text-[#093549] mt-3">
            Please enter the email address associated with your account. We will
            send you an email with instructions on how to recover your password.
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

            <div className="mt-10 w-full h-12">
              <button className="bg-[#1C9FDA] text-white border-none rounded-md w-full h-full font-bold hover:opacity-90">
                Continue
              </button>
            </div>
          </form>

          <div className="mt-4 text-center">
            <Link to="/">
              <p className="text-[#1C9FDA] text-sm md:text-md font-bold">
                Return to Log in
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
