import React from "react";
import Integration from "../../Components/Assets/Images/Integration.png"
import Websiteimage from "../../Components/Assets/Images/Website.png"
import Button from "../../Components/Common/Buttons/Button";

const Works = () => {

    const appHandler = () => {
        window.open('https://app.huddlenow.ai/', '_blank');
    }

    const websiteHandler = () => {
        window.open('https://huddlenow.ai/', '_blank');
    }

    return(
        <div className="grid grid-rows-4 pt-10 justify-center gap-48" style={{ gridTemplateRows: "auto 0.10fr auto 0.10fr" }}>
            <div className="flex items-center justify-center">
                <div>
                    <h1 className="text-2xl font-bold text-emerald-800">Huddlenow</h1>
                    <div className="mt-5 flex flex-col gap-2.5 text-gray-500 text-xl">
                        <ul className="list-disc pl-5 flex flex-col gap-2.5">
                            <li>
                                Huddlenow is a meeting integration tool.
                            </li>
                            <li>
                                It helps to integrate with different applications like Google Meet, Microsoft Teams, and Zoom. And schedule a meeting.  
                            </li>
                            <li>
                                Provide a meeting assistant(bot) to capture your meeting.   
                            </li>
                            <li>
                                Provide transcripts, insights, overviews, highlights, tasks, and individual summaries.
                            </li>
                            <li>
                                Users can able to rejoin at any time with the same meeting link.
                            </li>
                            <li>
                                Revist the details at any time.
                            </li>
                        </ul>
                        <div className="mt-5">
                            <Button title="Visit application" onClick={appHandler}/>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center">
                    <img src={Integration} className="h-96 w-96"/>
                </div>
            </div>
            <div></div>
            <div className="flex items-center">
                <div className="w-full flex items-center justify-center">
                    <img src={Websiteimage} className="h-96 w-96"/>
                </div>
                <div className="">
                    <h1 className="text-2xl font-bold text-emerald-800">Huddlenow website</h1>
                    <div className="mt-5 flex flex-col gap-2.5 text-gray-500 text-xl">
                        <ul className="list-disc pl-5 flex flex-col gap-2.5">
                            <li>
                                Huddlenow is a meeting integration tool.
                            </li>
                            <li>
                                It helps to integrate with different applications like Google Meet, Microsoft Teams, and Zoom. And schedule a meeting.  
                            </li>
                            <li>
                                Provide a meeting assistant(bot) to capture your meeting.   
                            </li>
                            <li>
                                Provide transcripts, insights, overviews, highlights, tasks, and individual summaries.
                            </li>
                            <li>
                                Users can able to rejoin at any time with the same meeting link.
                            </li>
                            <li>
                                Revist the details at any time.
                            </li>
                        </ul>
                        <div className="mt-5">
                            <Button title="Visit website" onClick={websiteHandler}/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Works;