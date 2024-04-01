import React from "react";
import Icon from "../Icon/Icon";
import { Cardcontainer, Cardcontent, Cardtextwrapper, Footertextwrapper, Maincontainer } from "./Footer.styles";

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

    const instaHandler = () =>{
        window.open("https://www.instagram.com/a_r_a_v_i_n_d_h_0_5/", "_blank");
    }

    const dribbbleHandler = () =>{
        window.open("https://dribbble.com/aravindh_nagarajan", "_blank");
    }

    const List = [
        {name: "Gmail", text: "Gmail", onclick : gmailHandler},
        {name: "Linkedin", text: "Linkedin", onclick : linkedinHandler},
        {name: "Instagram", text: "Instagram", onclick : instaHandler},
        {name: "Github", text: "Github", onclick : gitHandler},
        {name: "Dribbble", text: "Dribbble", onclick : dribbbleHandler },
    ]

    return(
        <Maincontainer>
            <Footertextwrapper>Feel free to reach out to me chat further 😀</Footertextwrapper>
            <Cardcontainer>
                {List?.map((e,i) => (
                <Cardtextwrapper key={i} >
                    <Cardcontent onClick={e?.onclick}>
                        <Icon name={e?.name} />
                        {e?.text}
                    </Cardcontent>
                </Cardtextwrapper>)
                )}
            </Cardcontainer>            
        </Maincontainer>
    )
}

export default Footer;
