import React from "react";
import Icon from "../Icon/Icon";

const Footer = () => {

    const gitHandler = () => {
        window.open("https://github.com/shanmuganarayanan", "_blank")
    }

    const linkedinHandler = () => {
        window.open("https://www.linkedin.com/in/shanmuganarayanan-nagarajan/", "_blank")
    }

    const gmailHandler = () => {
        window.open("mailto:shanmuga05111999@gmail.com", "_blank");
    }

    const instaHanlder = () =>{
        window.open("https://www.instagram.com/a_r_a_v_i_n_d_h_0_5/", "_blank");
    }

    const dribbbleHandler = () =>{
        window.open("https://dribbble.com/aravindh_nagarajan", "_blank");
    }

    const List = [
        {name: "Gmail", text: "Gmail", onclick : gmailHandler},
        {name: "Linkedin", text: "Linkedin", onclick : linkedinHandler},
        {name: "Instagram", text: "Instagram", onclick : instaHanlder},
        {name: "Github", text: "Github", onclick : gitHandler},
        {name: "Dribbble", text: "Dribbble", onclick : dribbbleHandler },

    ]


    return(
        <div className="mt-auto flex flex-col justify-center items-center gap-10 bg-[#F6F9FA] py-10">
            <p className="text-2xl font-semibold">Feel free to reach out to me chat further 😀</p>
            <div className="flex flex-wrap items-center gap-16">
                {List?.map((e,i) => (
                <div className="flex items-center text-2xl gap-2.5 cursor-pointer select-none" key={i} >
                    <Icon name={e?.name} onClick={e?.onclick}/>
                    {e?.text}
                </div>)
                )}
            </div>            
        </div>
    )
}

export default Footer;