import React from "react";
import Profilepic from "../../Components/Assets/Images/Shanmuganarayanan.png";
import Title from "../../Components/Common/Title/Title";

const About = ({ profileRef }) => {
  return (
    <div
      ref={profileRef}
      id="aboutme"
      className="flex flex-col items-center w-full px-5 py-24 md:px-10 gap-10 2xl:h-full bg-[#F6F9FA]"
    >
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col w-10/12">
          <div>
            <p className="text-4xl font-bold">About Me</p>
          </div>
          <div className="flex flex-col gap-2.5 mt-3">
            <div className="w-4/12 border-2 border-[#FF6464]" />
            <div className="w-3/12 border-2 border-[#FF6464]" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 place-items-center items-center w-10/12 lg:w-8/12 mt-10 h-full">
        <div className="">
          <img src={Profilepic} className="" alt="Profile" />
        </div>
        <div className="flex flex-col">
          <p className="text-2xl mb-5">
          Hi, I’m Shanmuganarayanan, a passionate UI/UX designer and frontend developer with over 2 years of experience crafting seamless user experiences and responsive interfaces. I specialize in modern web technologies and design systems, staying ahead of industry trends. Currently, I work remotely from Kumbakonam, Tamil Nadu, delivering innovative solutions that bridge design and functionality.
          </p>

          <p className="text-2xl mb-5">
          I completed my Master’s in Computer Applications from SASTRA University in 2022 and specialize in UI/UX design and frontend development with expertise in React.js and JavaScript. I began my career as a UX Engineer, focusing on designing and developing user-centric products and websites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
