import React, { useState } from "react";
import { Link as ScrollLink } from "react-router-dom";

const Header = ({
  aboutScroll,
  workScroll,
  resumeScroll
}) => {

  const [isHome,setIsHome] = useState(true);
  const [isWorks,setIsWorks] = useState(false);
  const [isResume,setIsResume] = useState(false);
  const [isCOntactus,setIsContactus] = useState(false);



  const AnchorLink = ({ to, text, onClick }) => {
    return (
      <ScrollLink to={to} smooth={true} duration={500} className={text === to ? "text-gray-400 font-medium text-xl hover:text-emerald-800 hover:underline hover:underline-offset-4" : "text-emerald-800 font-medium text-xl underline underline-offset-4" } onClick={onClick}>
          {text}
      </ScrollLink>
    );    
  }
  
    return(
        <div className="flex justify-between items-center px-10 py-6 fixed w-full bg-white">
            <div className="flex items-center gap-5 select-none">
                <div>
                  <ScrollLink to="/" className="text-xl font-bold text-emerald-800 cursor-pointer" onClick={aboutScroll}>Shanmuganarayanan</ScrollLink>
                </div>
            </div>            
            <div className="flex gap-5">
                <AnchorLink to="#works" text="Works" onClick={workScroll}/> 
                <AnchorLink to="#resume" text="Resume"onClick={resumeScroll}/> 
                <AnchorLink to="#contactus" text="Contact us"/>           
            </div>
        </div>
    )
}

export default Header;