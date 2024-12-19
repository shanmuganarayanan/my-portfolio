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
            Hello! I’m Shanmuganarayanan. Currently working as developer &
            designer at Wiqly for the past 2 years. I am currently working in
            remote from my hometown Kumbakonam, Tamil Nadu.
          </p>

          <p className="text-2xl mb-5">
            I completed my master’s in computer applications from Sastra
            University in 2022. I specialize in front end development and have
            full understanding on technologies like react.js, JavaScript etc. I
            started my career as UX Engineer where I was responsible for
            designing and development of their product and website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
