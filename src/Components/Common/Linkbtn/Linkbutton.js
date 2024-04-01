import React from "react";
import Icon from "../Icon/Icon";

const Linkbutton = ({Text, onClick}) => {

    return(
            <button className="text-[#FF6464] flex mt-auto items-center gap-2.5 w-fit" onClick={onClick}>
                {Text}
                <Icon name={"Goto"} layoutClass={"h-4 w-4"}/>
            </button>
    )

}

export default Linkbutton;