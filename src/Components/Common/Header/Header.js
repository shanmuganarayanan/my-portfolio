import React, { useState } from "react";
import { Link as ScrollLink } from "react-router-dom";

const Header = ({
  aboutScroll,
  workScroll,
  resumeScroll,
  ProfileScroll
}) => {

  const [isValue,setIsValue] = useState("");

  const AnchorLink = ({ to, text, onClick }) => {
    return (
      <ScrollLink to={to} smooth={true} duration={500} className={isValue === to ?  "text-[#00A8CC] font-medium text-xl underline underline-offset-4" : "text-gray-400 font-medium text-xl hover:text-[#00A8CC] hover:underline hover:underline-offset-4" } onClick={onClick}>
          {text}
      </ScrollLink>
    );    
  }

  console.log(isValue);
  
    return(
        <div className="flex justify-between items-center px-10 py-6 fixed w-full bg-white">
            <div className="flex items-center gap-5 select-none">
                <div>
                  <ScrollLink to="/" className="text-xl font-bold text-[#FF6464] cursor-pointer"
                   onClick={() => {
                    aboutScroll();
                    setIsValue("");
                  }}>
                    Shanmuganarayanan
                  </ScrollLink>
                </div>
            </div>            
            <div className="flex gap-5">
                <AnchorLink to="works" text="Works" onClick={() => {
                  workScroll();
                  setIsValue("works");
                }}/> 
                <AnchorLink to="skills" text="Skills" onClick={() => {
                  resumeScroll();
                  setIsValue("skills");
                }}/> 
                <AnchorLink to="aboutme" text="About Me" 
                onClick={() => {
                  ProfileScroll();
                  setIsValue("aboutme");
                }}/>           
            </div>
        </div>
    )
}

export default Header;