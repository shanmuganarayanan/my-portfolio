import React from "react";
import CaseStudy from "../../Components/Assets/Images/Ux-casestudy.png";
import Productimg from "../../Components/Assets/Images/Product.png";
import Title from "../../Components/Common/Title/Title";
import { Buttonprimary, Buttonsecontary, Buttonwrapper, Cardinnerwrapper, Descriptioncontainer, Descriptiontext, Firstcard, Imagecontainer, Imagewrapper, Maincontainer, Secondcard, Subtitletext, Subtitlewrapper, Titlewrapper } from "./Works.styles";

const Works = ({
    workref
}) => {

    const productHandler = () => {
        window.open("https://app.huddlenow.ai","_blank");
    }

    const websiteHandler = () => {
        window.open("https://huddlenow.ai","_blank");
    }

    const CasestudyHandler = () => {
        window.open("https://tinyurl.com/yb8yxvzt","_blank");
    }

    return(
        <Maincontainer ref={workref}>
            <Title text={"Works"}/>
            <Firstcard>
                <Cardinnerwrapper>
                    <Imagecontainer>
                        <Imagewrapper src={Productimg} />
                    </Imagecontainer>
                    <Descriptioncontainer>
                        <Titlewrapper>Huddlenow</Titlewrapper>
                        <Subtitlewrapper>
                            <Subtitletext>Website & Product Development</Subtitletext>
                            <Subtitletext>March 2023 - Present</Subtitletext>
                        </Subtitlewrapper>
                        <Descriptiontext>I am responsible the end to end development of Huddlenow product and website along with another developer. Working closely with the Co-founders and cross functional teams in building the beta version of the application for the customers and investors.</Descriptiontext>
                        <Buttonwrapper>
                            <Buttonprimary onClick={productHandler}>
                                View Product
                            </Buttonprimary>
                            <Buttonsecontary onClick={websiteHandler}>
                                View Website
                            </Buttonsecontary>
                        </Buttonwrapper>
                    </Descriptioncontainer>
                </Cardinnerwrapper>
            </Firstcard>

            <Secondcard>
                <Cardinnerwrapper>
                    <Imagecontainer>
                        <Imagewrapper src={CaseStudy} />
                    </Imagecontainer>
                    <Descriptioncontainer>
                        <Titlewrapper>Huddlenow - UX Case Study</Titlewrapper>
                        <Subtitlewrapper>
                            <Subtitletext>March 2022 </Subtitletext>
                        </Subtitlewrapper>
                        <Descriptiontext>Brainstormed along with the team to build the initial version of the product. Conducted competitive analysis and was responsible for designing the end to end design of the product and website</Descriptiontext>
                        <Buttonwrapper>
                            <Buttonprimary onClick={CasestudyHandler}>
                                View Case Study
                            </Buttonprimary>
                        </Buttonwrapper>
                    </Descriptioncontainer>
                </Cardinnerwrapper>
            </Secondcard>
        </Maincontainer>
    )
}

export default Works;