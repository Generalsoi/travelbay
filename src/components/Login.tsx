import React, { FC } from "react";
import Logo from "../assets/Logo.png";

export const Login: FC = () => {
  return (
    <div className="font-dmsans md:flex items-start md:h-screen w-full">
      <div className="w-full md:w-[50%] bg-[#F7F7F8] px-4 md:px-20">
        <div>
          <img src={Logo} alt="TravelBay-Logo" />
        </div>
      </div>
      <div className="w-full md:w-[50%]"></div>
    </div>
  );
};
