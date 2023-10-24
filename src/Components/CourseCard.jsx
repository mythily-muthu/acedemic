import React from "react";
import { BiSolidStar } from "react-icons/bi";

const CourseCard = () => {
  const courseCards = [
    {
      logo: "https://www.pngmart.com/files/22/Design-Engineering-PNG-File.png",
      title: "Introducing to Software Engineering",
      rating: "(5.0)",
      profile:
        "https://scintillating-smakager-860376.netlify.app/images/back.webp",
      name: "by John Smith",
      lectures: "50 lectures (190 hrs)",
      fees: "$100 All Course / $15 per month",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/1076/1076147.png",
      title: "Enhancing Adobe Photoshop CC 2020 Skills",
      rating: "(5.0)",
      profile:
        "https://scintillating-smakager-860376.netlify.app/images/back.webp",
      name: "by Ram Gurung",
      lectures: "30 lectures (125 hrs)",
      fees: "$200 All Course / $25 per month",
    },
    {
      logo: "https://saperemarketing.com/wp-content/uploads/2023/03/sapere-custom-design-1.svg",
      title: "HTML, CSS, and Javascript for Web Developers",
      rating: "(5.0)",
      profile:
        "https://scintillating-smakager-860376.netlify.app/images/back.webp",
      name: "by Saroj Nepal",
      lectures: "50 lectures (50 hrs)",
      fees: "$50 All Course / $5 per month",
    },
  ];

  return (
    <div className="flex gap-y-5 w-[95%] mx-auto h-full mt-24">
      <div className="flex w-full h-full gap-x-7">
        {courseCards.map((card) => {
          return (
            <div className="flex flex-col p-7 bg-white gap-y-7 w-full h-max">
              <div className="flex gap-x-4 ">
                <div className="flex w-[25%]">
                  <div className="flex w-full h-full">
                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                      <img
                        src={card.logo}
                        alt="logo"
                        className="flex w-13 h-13 object-fill rounded-full items-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-[75%] h-full ">
                  <p className="flex font-semibold text-3xl">{card.title}</p>
                </div>
              </div>
              <div className="flex gap-x-1 justify-center text-primary items-center ">
                <div className="flex gap-x-1 ">
                  <BiSolidStar />
                  <BiSolidStar />
                  <BiSolidStar />
                  <BiSolidStar />
                  <BiSolidStar />
                </div>
                <p className="flex ">{card.rating}</p>
              </div>
              <div className="flex flex-col w-full justify-center items-center">
                <div className="flex justify-center items-center gap-x-5 gap-y-2">
                  <div className="flex w-14 h-14">
                    <img
                      src={card.profile}
                      alt="pic"
                      className="flex object-cover w-14 h-14 rounded-full"
                    />
                  </div>
                  <p className="flex text-base font-bold text-gray-500">
                    {card.name}
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex text-sm text-primary font-semibold">
                    {card.lectures}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center bg-[#F8F8F8] p-2 cursor-pointer">
                <p className="flex text-primary text-lg font-medium">
                  {card.fees}
                </p>
              </div>
              <div className="flex border-2 text-primary border-primary p-4 items-center justify-center rounded-sm cursor-pointer hover:bg-primary hover:text-white">
                <p className="flex  text-sm font-semibold">ENROLL NOW !</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseCard;
