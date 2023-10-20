import React from "react";
import Header from "../Components/Header";

const Home = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className=" flex w-full h-full">
        <img
          src="https://scintillating-smakager-860376.netlify.app/static/media/bg.baa1024a4ae092566a75.webp"
          alt="bg_image"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="flex w-full justify-center absolute ">
        <Header />
      </div>
    </div>
  );
};

export default Home;
