import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex w-[85%] h-14 justify-between py-4 bg-transparent">
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col w-full h-full text-white">
          <p className="flex text-4xl font-bold">ACADEMIA</p>
          <p className=" flex uppercase ">Online Education & Learning</p>
        </div>
        <div className="flex h-full gap-x-3 text-xl text-primary">
          <span className="flex rounded-full bg-[#D3E5EB] items-center justify-center w-10 h-10">
            <BiLogoFacebook />
          </span>
          <span className="flex rounded-full bg-[#D3E5EB] items-center justify-center w-10 h-10">
            <AiOutlineInstagram />
          </span>
          <span className="flex rounded-full bg-[#D3E5EB] items-center justify-center w-10 h-10">
            <AiOutlineTwitter />
          </span>
          <span className="flex rounded-full bg-[#D3E5EB] items-center justify-center w-10 h-10">
            <AiFillYoutube />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
