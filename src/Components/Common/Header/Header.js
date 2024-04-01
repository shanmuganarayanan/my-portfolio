import React, { useState } from "react";
import { Link as ScrollLink } from "react-router-dom";

const Header = ({
  aboutScroll,
  workScroll,
  resumeScroll,
  ProfileScroll
}) => {

  const [isValue,setIsValue] = useState("");
  const [ViewButtons,setViewButtons] = useState(false);

  const AnchorLink = ({ to, text, onClick }) => {
    return (
      <ScrollLink to={to} smooth={true} duration={500} className={isValue === text ?  "text-[#00A8CC]  font-medium text-xl underline underline-offset-4" : "text-gray-400 font-medium text-xl hover:text-[#00A8CC] hover:underline hover:underline-offset-4" } onClick={onClick}>
          {text}
      </ScrollLink>
    );    
  }

  console.log(isValue);
  
    return(
      <>
       {ViewButtons && 
       <div className="p-10 fixed flex flex-col justify-center gap-10 bg-white w-full top-0 h-full lg:hidden">
           <AnchorLink  text="Works" onClick={() => {
                  workScroll();
                  setIsValue("Works");
                  setViewButtons(false);
                }}/> 
                <AnchorLink  text="Skills" onClick={() => {
                  resumeScroll();
                  setIsValue("Skill");
                  setViewButtons(false);
                }}/> 
                <AnchorLink  text="About Me" 
                onClick={() => {
                  ProfileScroll();
                  setIsValue("About Me");
                  setViewButtons(false);
                }}/>      
       </div>}
        <div className="flex justify-between items-center px-5 lg:px-10 py-6 fixed w-full bg-white">
            <div className="flex items-center gap-5 select-none">
                <div>
                  <ScrollLink  className="text-xl font-bold text-[#FF6464] cursor-pointer"
                   onClick={() => {
                    aboutScroll();
                    setIsValue("");
                    setViewButtons(false);
                  }}>
                    Shanmuganarayanan
                  </ScrollLink>
                </div>
            </div>            
            <div className="hidden lg:block lg:flex gap-5">
                <AnchorLink  text="Works" onClick={() => {
                  workScroll();
                  setIsValue("Works");
                }}/> 
                <AnchorLink  text="Skills" onClick={() => {
                  resumeScroll();
                  setIsValue("Skills");
                }}/> 
                <AnchorLink text="About Me" 
                onClick={() => {
                  ProfileScroll();
                  setIsValue("About Me");
                }}/>           
            </div>
            <div className={`lg:hidden cursor-pointer ${ViewButtons? "text-[#FF6464]" : "text-gray-400"}`} onClick={() => setViewButtons(!ViewButtons)}>
              {ViewButtons ?
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              :
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg> 
               }

            </div>
        </div>
      </>
    )
}

export default Header;