import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import WelcomeText from "../Components/WelcomeText";
import Benefits from "../Components/Benefits";
import OurCourses from "../Components/OurCourses";
import ListOfCourses from "../Components/ListOfCourses";

const Home = () => {
  return (
    <div className="flex flex-col w-full  min-h-screen bg-[#F8F8F8]">
      <div className=" flex w-full h-screen">
        <img
          src="https://scintillating-smakager-860376.netlify.app/static/media/bg.baa1024a4ae092566a75.webp"
          alt="bg_image"
          className="w-full h-screen object-cover "
        />
      </div>
      <div className="flex flex-col w-full  justify-center absolute items-center">
        <Header />
        <Navbar />
        <div className="flex w-[92%] mx-auto">
          <WelcomeText />
        </div>
      </div>
      <div className="flex flex-col  w-full justify-center items-center">
        <Benefits />
        <OurCourses />
        <ListOfCourses />
      </div>
    </div>
  );
};

export default Home;
