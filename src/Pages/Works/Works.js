import React from "react";
import Icon from "../../Components/Common/Icon/Icon";
import Button from "../../Components/Common/Buttons/Button";
import Integration from "../../Components/Assets/Images/Integration.png"


const Works = () => {

    const appHandler = () => {
        window.open("https://app.huddlenow.ai/", "_blank")
    }

    return (
        <div className="grid h-full">
            <div className="flex items-center justify-center h-full">
                <div className="w-3/4">
                    <div className="flex items-center justify-center h-full">
                        <div className="w-2/4">
                            <div className="mt-5 flex flex-col gap-2.5 text-gray-500">
                                <h1 className="text-4xl font-bold text-emerald-800">Huddlenow</h1>
                                <p className="text-xl">
                                Huddlenow is a meeting integration application.
                                </p>
                                <p className="text-xl">
                                Users can also schedule meetings for different applications like Google Meet, Microsoft Teams, and Zoom.
                                </p>
                                <p className="text-xl">
                                It provides Insights, Transcripts, Individual summary, Overview, Highlights, and Tasks. 
                                </p>
                                <p className="text-xl">
                                Users can able to rejoin at any time. 
                                </p>
                                <p className="text-xl">
                                Revisit the details at any time. 
                                </p>
                                <div className="mt-5">
                                <Button title={"View product"} onClick={appHandler}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-2/4 h-full rounded-2xl">
                            <div className="flex justify-center">
                                <img src={Integration} className="h-96 w-96"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Works;
