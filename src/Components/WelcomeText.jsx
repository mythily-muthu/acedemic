import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const WelcomeText = () => {
  return (
    <div className="flex flex-col w-[92%] mx-auto text-white gap-y-5 mt-[70px]">
      <div className="w-full flex flex-col gap-y-4">
        <p className="flex font-bold text-xl uppercase">Welcome to academia</p>
        <div className="flex w-full flex-col font-bold text-5xl leading-[55px]">
          <p>Best Online Education</p>
          <p className="">Expertise</p>
        </div>
      </div>
      <div className="flex flex-col w-full leading-8 font-normal text-xl">
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and
        </p>
        <p>Consonantia, there lives the blind texts.</p>
      </div>
      <div className="flex gap-x-3">
        <div className="flex relative bg-primary rounded-[4px]">
          <button className="flex  text-white font-semibold px-14 py-3 ">
            get started now{" "}
          </button>
          <span className="absolute flex right-3 items-center h-full ">
            <FaLongArrowAltRight className="flex text-white" />
          </span>
        </div>
        <div className="flex relative">
          <button className="flex bg-white text-primary font-semibold px-12 py-3 rounded-[4px]">
            view course
          </button>
          <span className="absolute flex right-3 items-center h-full">
            <FaLongArrowAltRight className="flex text-primary text-sm" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeText;
