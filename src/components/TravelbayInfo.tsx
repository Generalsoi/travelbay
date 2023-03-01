import React, { FC } from "react";
import Logo from "../assets/Logo.png";
import { AiOutlineArrowDown } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";

export const TravelbayInfo: FC = () => {
  return (
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
            <HashLink to="#form" smooth={true}>
              <div className="w-10 h-10 bg-white border-none rounded-full flex items-center justify-center animate-bounce">
                <AiOutlineArrowDown className="text-xl" />
              </div>
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
};
