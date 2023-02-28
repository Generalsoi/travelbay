import React, { FC } from "react";
import Logo from "../assets/Logo.png";

export const Login: FC = () => {
  return (
    <div className="font-dmsans md:flex items-start w-full">
      <div className="w-full md:w-[50%] bg-[#F7F7F8] px-4 md:px-20 h-screen md:py-10">
        <div>
          <img src={Logo} alt="TravelBay-Logo" />
        </div>
        <div className="md:h-[80%] md:flex items-end justify-center">
          <div className="text-center">
            <h3 className="text-[#093549] font-bold text-xl">
              Customize a payment plan for your dream trip
            </h3>
            <span>
              <p className="text-[#475467] text-sm mt-3">
                Choose a payment frequency that works for you to make your
              </p>
              <p className="text-[#475467] text-sm">
                dream trip happen. You can pay in installments before the
              </p>
              <p className="text-[#475467] text-sm">departure date is close.</p>
            </span>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="w-20 h-2 border rounded-lg bg-[#D4DFE4]"></div>
              <div className="w-20 h-2 border rounded-lg bg-[#1C9FDA]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[50%]"></div>
    </div>
  );
};
