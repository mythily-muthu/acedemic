import React from "react";

const ListOfCourses = () => {
  const courseLists = [
    {
      logo: "https://scintillating-smakager-860376.netlify.app/images/courses/online/o1.png",
      title: "UI/UX Design Courses",
      nos: "25",
    },
    {
      logo: "https://scintillating-smakager-860376.netlify.app/images/courses/online/o2.png",
      title: "Art & Design",
      nos: "25",
    },
    {
      logo: "https://scintillating-smakager-860376.netlify.app/images/courses/online/o3.png",
      title: "Computer Science",
      nos: "10",
    },
    {
      logo: "https://scintillating-smakager-860376.netlify.app/images/courses/online/o4.png",
      title: "History & Archeologic",
      nos: "15",
    },
    {
      logo: "https://scintillating-smakager-860376.netlify.app/images/courses/online/o5.png",
      title: "Software Engineering",
      nos: "30",
    },
    {
      logo: "https://scintillating-smakager-860376.netlify.app/images/courses/online/o6.png",
      title: "Information Software",
      nos: "60",
    },

    {
      logo: "https://scintillating-smakager-860376.netlify.app/images/courses/online/o7.png",
      title: "Health & Fitness",
      nos: "10",
    },
    {
      logo: "https://scintillating-smakager-860376.netlify.app/images/courses/online/o8.png",
      title: "Marketting",
      nos: "30",
    },
    {
      logo: "https://scintillating-smakager-860376.netlify.app/images/courses/online/o9.png",
      title: "Graphic Design",
      nos: "80",
    },
    {
      logo: "https://scintillating-smakager-860376.netlify.app/images/courses/online/o10.png",
      title: "Music",
      nos: "120",
    },
    {
      logo: "https://scintillating-smakager-860376.netlify.app/images/courses/online/o11.png",
      title: "Business Administration",
      nos: "17",
    },
    {
      logo: "https://scintillating-smakager-860376.netlify.app/images/courses/online/o12.png",
      title: "Web Management",
      nos: "17",
    },
  ];

  return (
    <div className="flex  bg-[#F8F8F8] w-full h-screen ">
      <div className="flex flex-col w-[90%] h-full mx-auto justify-center items-center ">
        <div className="flex flex-col w-full h-full items-center gap-y-5">
          <p className="flex uppercase text-primary font-bold tracking-wider text-xl">
            our courses
          </p>
          <p className="flex text-5xl font-bold">
            Explore Our Popular Online Courses
          </p>
        </div>
        <div className="flex gap-y-20"></div>
      </div>
    </div>
  );
};

export default ListOfCourses;
