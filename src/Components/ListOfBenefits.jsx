import React from "react";

const ListOfBenefits = () => {
  const benefits = [
    {
      img: "https://img.icons8.com/dotty/80/000000/storytelling.png",
      title: "Online Courses",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,there lives the blind texts.",
    },
    {
      img: "https://img.icons8.com/ios/80/000000/diploma.png",
      title: "Earn A Certificates",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,there lives the blind texts.",
    },
    {
      img: "https://img.icons8.com/ios/80/000000/athlete.png",
      title: "Learn with Expert",
      desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,there lives the blind texts.",
    },
  ];

  return (
    <div className="flex w-full h-full bg-[#F8F8F8]">
      <div className="flex flex-col gap-y-7 w-full">
        {benefits.map((benefit) => {
          return (
            <div
              className="flex w-[530px] gap-x-5 bg-white px-5 py-2 h-[160px] items-center hover:bg-primary hover:text-white"
              key={benefit.title}
            >
              <div className="w-[30%] h-[85px] flex items-start p-1 ">
                <img
                  src={benefit.img}
                  alt={benefit.title}
                  className="flex object-fill w-full h-full "
                />
              </div>
              <div className="flex flex-col gap-y-3  hover:text-white">
                <p className="flex text-xl font-bold ">{benefit.title}</p>
                <p className="flex text-lg text-gray-400 ">{benefit.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListOfBenefits;
