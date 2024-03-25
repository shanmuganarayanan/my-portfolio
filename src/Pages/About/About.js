import React, { useState } from "react";
import Button from "../../Components/Common/Buttons/Button";
import Integration from "../../Components/Assets/Images/Integration.png"
import Icon from "../../Components/Common/Icon/Icon";

const About = () => {
    const [showAbout,setShowAbout] = useState(true);
    const [showTechSkill,setShowTechSkill] = useState(false);

    return (
        <div className="grid h-full">
            <div className="flex items-center justify-center h-full">
                <div className="w-3/4">
                    <div className="h-full flex flex-col gap-5">
                        <div>
                            <div className={`border-b-2 flex items-center justify-between border-gray-200 select-none cursor-pointer ${showAbout ? "text-emerald-800" : "text-gray-500" }`} 
                            onClick={() => {
                                setShowAbout(!showAbout);
                                setShowTechSkill(false);
                            }
                            }>
                                <p className="text-lg font-semibold">About me</p>
                                <Icon name={`${showAbout ? "Arrowup" : "Arrowdown"}`}/>
                            </div>
                            {showAbout && 
                            <div className="p-5">
                                <h1>Hello</h1>
                            </div>}
                        </div>
                        <div>
                            <div className={`border-b-2 flex items-center justify-between border-gray-200 select-none cursor-pointer ${showTechSkill ? "text-emerald-800" : "text-gray-500" }`} 
                            onClick={() => {
                                setShowAbout(false);
                                setShowTechSkill(!showTechSkill);
                            }}>
                                <p className="text-lg font-semibold">Technical skills</p>
                                <Icon name={`${showTechSkill ? "Arrowup" : "Arrowdown"}`}/>
                            </div>
                            {showTechSkill && 
                            <div>
                                <h1>Technical skills</h1>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;