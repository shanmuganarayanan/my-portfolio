import React from "react";
import Icon from "../Icon/Icon";

const Footer = () => {

    const gitHandler = () => {
        window.open("https://github.com/shanmuganarayanan", "_blank")
    }

    const linkedinHandler = () => {
        window.open("https://www.linkedin.com/in/shanmuganarayanan-nagarajan/", "_blank")
    }


    return(
        <div className="mt-auto flex justify-between">
            <div className="flex gap-5">
                <p className="cursor-pointer flex items-center gap-1 text-gray-400 hover:text-gray-600" onClick={linkedinHandler}>
                    <Icon name="LinkedIn" layoutClass={'h-4 w-4'}/>
                </p>
                <p className="cursor-pointer flex items-center gap-1 text-gray-400 hover:text-gray-600" onClick={gitHandler}>
                    <Icon name="Github" layoutClass={'h-4 w-4'}/>
                </p>                    
            </div>
            <div>
                <p className="text-sm text-gray-600">By Shanmuganarayanan ❤️</p>
            </div>
        </div>
    )
}

export default Footer;