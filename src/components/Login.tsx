import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TravelbayInfo } from "./TravelbayInfo";
import { gql, useMutation } from "@apollo/client";

export const Login: FC = () => {
  const LOGIN = gql`
    mutation login($email: Email!, $password: String!) {
      login(email: $email, password: $password) {
        email
        password
      }
    }
  `;

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const [Login, { loading }] = useMutation(LOGIN);

  const handleLogin = (e: any) => {
    e.preventDefault();

    Login({
      variables: { email, password },
    });

    if (loading) {
      navigate("/userdetails");
    }
  };

  return (
    <div className="font-dmsans md:flex items-start w-full">
      <TravelbayInfo />
      <div
        className="w-full md:w-[50%] px-4 md:px-20 md:h-screen py-6 md:py-10"
        id="form"
      >
        <div className="flex items-center justify-end ">
          <Link to="/createaccount">
            <h2 className="font-bold text-sm md:text-md hover:opacity-80">
              Create an account
            </h2>
          </Link>
        </div>
        <div className="mt-20 md:mt-32">
          <h2 className="font-bold text-xl md:text-2xl">Welcome back</h2>
          <p className="text-xs md:text-sm text-[#093549] mt-3">
            Login your travelbay account
          </p>

          <form className="mt-6" onSubmit={handleLogin}>
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
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-full outline-none px-4 rounded-lg"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {error && (
                <div className="w-full p-3">
                  <p className="text-red-500 font-bold text-xs">{error}</p>
                </div>
              )}
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
                  onChange={(e) => setPassword(e.target.value)}
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
              <button
                type="submit"
                className="bg-[#1C9FDA] text-white border-none rounded-md w-full h-full font-bold hover:opacity-90"
              >
                Log in
              </button>
            </div>
          </form>

          <div className="mt-4 text-center">
            <p className="text-[#667085] text-sm md:text-md font-bold">
              Forgot your password?{" "}
              <span className="text-[#093549] underline">
                <Link to="/resetpassword"> Reset it here</Link>
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
