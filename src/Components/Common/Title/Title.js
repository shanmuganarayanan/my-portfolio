import React from "react";
import {Decorewrapper, Innerwrapper, Maincontainer, Textcontainer, Textwrapper, Underlinebig, Underlinesmall } from "./Title.styles"

const Title = ({text}) => {
    return(
            <Maincontainer>
                <Innerwrapper>
                    <Textcontainer>
                        <Textwrapper>{text}</Textwrapper>
                    </Textcontainer>
                    <Decorewrapper>
                        <Underlinebig/>
                        <Underlinesmall/>
                    </Decorewrapper>
                </Innerwrapper>
            </Maincontainer>
    )
}

export default Title;