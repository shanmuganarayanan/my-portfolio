import React from "react";
import Button from "../../Components/Common/Buttons/Button";


const Hero = ({
    aboutref,
    onClick
}) => {
    return(
        <div ref={aboutref} id="about" className="flex flex-col justify-center h-full lg:items-center px-5 md:p-10">
            <p className="text-4xl md:text-6xl text-left lg:text-center font-bold ">Hi 👋</p>
            <p className="text-4xl md:text-6xl text-left lg:text-center font-bold "> I’m Shanmuganaryanan</p>
            <p className="text-3xl md:text-3xl text-left lg:text-center md:w-3/4 mt-2 md:mt-4">A product designer & frontend developer with 2+ years of experience in crafting beautiful and intuitive products. Currently building 0 ➡ 1 product at BerryBytes.</p>
            <div className="mt-20 md:mt-10">
                <Button title={"Download Resume"} onClick={onClick}/>
            </div>
        </div>
    )
}

export default Hero;