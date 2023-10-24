import React from "react";
import CourseCard from "./CourseCard";

const OurCourses = () => {
  return (
    <div className="flex bg-[#F8F8F8] py-5 min-h-screen">
      <div className="flex flex-col w-[90%] h-full mx-auto justify-center items-center ">
        <div className="flex flex-col w-full h-full items-center gap-y-5">
          <p className="flex uppercase text-primary font-bold tracking-wider text-xl">
            our courses
          </p>
          <p className="flex text-5xl font-bold">
            Explore Our Popular Online Courses
          </p>
        </div>
        <div className="flex gap-y-20">
          <CourseCard />
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
