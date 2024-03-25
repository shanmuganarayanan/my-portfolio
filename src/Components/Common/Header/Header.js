import React from "react";
import Profilepic from "../../Assets/Images/Profile-pic.png"
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {

    const location = useLocation();

    const CustomNavLink = ({ to, text }) => {

        const isNavLinkActive = location.pathname === to;
      
        return (
          <NavLink to={to} className={isNavLinkActive ? 'text-emerald-800 underline underline-offset-4 text-xl font-medium' : 'text-gray-400 font-medium text-xl hover:text-emerald-800 hover:underline hover:underline-offset-4'}>
            {text}
          </NavLink>
        );
      };

    return(
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-5 select-none">
                <NavLink className="text-4xl font-bold text-emerald-800" to="/">
                  <img src={Profilepic} className="w-12 h-12"/>
                </NavLink>
                <div>
                  <p className="text-xl font-bold text-emerald-800">Shanmuganarayanan</p>
                  <p className="text-base text-gray-400">UI Developer & Product Designer</p>
                </div>
            </div>            
            <div className="flex gap-5">
                <CustomNavLink to="/works" text="Works"/>  
                <CustomNavLink to="/about" text="About"/> 
                <CustomNavLink to="/resume" text="Resume"/> 
                <CustomNavLink to="/contact" text="Contact"/>           
            </div>
        </div>
    )
}

export default Header;