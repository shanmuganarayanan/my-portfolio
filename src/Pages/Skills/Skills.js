import React from "react";
import Title from "../../Components/Common/Title/Title";
import Icon from "../../Components/Common/Icon/Icon";

const Skills = ({
    resumeRef
}) => {

    const List = [
        {name: "Git" , title : "Github"},
        {name: "React" , title : "React.js"},
        {name: "Html" , title : "HTML"},
        {name: "Css" , title : "CSS"},
        {name: "Javascript" , title : "Javascript"},
        {name: "Tailwind" , title : "Tailwind CSS"},
        {name: "Figma" , title : "Figma"},
        {name: "Visualstudio" , title : "Visual Studio Code"},
        {name: "Wordpress" , title : "Wordpress"},
        {name: "Postman" , title : "Postman"},
    ]

    return(
        <div ref={resumeRef} id="works" className="flex flex-col 2xl:h-full px-5 py-24 md:px-10 gap-10">
            <Title text={"My Tech Stack"}/>
            <div className="flex flex-col justify-center items-center mt-10 h-full">
                <div className="flex flex-wrap justify-center w-10/12 gap-20">
                    {List?.map((e,i) => (
                    <div className="flex flex-col items-center gap-2" key={i}>
                        <div className="flex flex-col justify-center w-24">
                            <Icon name={e?.name} />
                        </div>
                        <p className="text-lg">{e?.title}</p>
                    </div>)
                    )}
                </div>
            </div>
        </div>
    )
}

export default Skills;