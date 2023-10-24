import React from "react";
import ListOfBenefits from "./ListOfBenefits";

const Benefits = () => {
  return (
    <div className="flex w-full h-screen  bg-[#F8F8F8] relative py-10">
      <div className="flex w-[90%] mx-auto justify-between bg-[#F8F8F8]">
        <div className="flex w-[50%] h-full justify-center">
          <img
            src="https://scintillating-smakager-860376.netlify.app/images/about.webp"
            alt="bg_image"
            className="w-[90%] h-full object-cover mb-10 "
          />
        </div>
        <div className="flex w-[50%] h-full px-10 py-10 bg-[#F8F8F8]">
          <div className="flex flex-col w-full gap-y-3">
            <p className="flex uppercase text-primary font-bold tracking-wider text-xl">
              learn anything
            </p>
            <p className="flex font-bold text-[44px]">
              Benefits About Online Learning Expertise
            </p>
            <div className="flex ">
              <ListOfBenefits />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
