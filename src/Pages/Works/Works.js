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
        window.open("https://tinyurl.com/msdnhnmn","_blank");
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
                        <Descriptiontext>Brainstormed along with the team to build the initial version of the product. Conducted competitive analysis and was responsible for designing the end to end design of the product and website</Descriptiontext>
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