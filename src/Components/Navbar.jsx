import React from "react";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "Courses",
      link: "/allcourses",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Team",
      link: "/team",
    },
    {
      title: "Pricing",
      link: "/pricing",
    },
    {
      title: "Journal",
      link: "/journal",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="flex mt-10 w-[95%] h-20 p-7 bg-white opacity-20 justify-between">
      <div className="w-[45%] flex text-black">
        {navItems.map((item) => {
          return (
            <div className="flex w-full font-bold ">
              <span className="">{item.title}</span>
            </div>
          );
        })}
      </div>
      <div>
        <button className="flex w-full uppercase flex-row px-16">
          get certificate
        </button>
      </div>
    </div>
  );
};

export default Navbar;
