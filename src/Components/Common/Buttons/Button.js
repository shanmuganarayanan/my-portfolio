import React from "react";
import Icon from "../Icon/Icon";

const Button = ({title,onClick}) => {
    return(
        <button className="px-5 py-5 bg-emerald-800 rounded-xl text-white font-medium flex items-center gap-2.5" onClick={onClick}>
            {title}
            <Icon name="Rightarrow"/>
        </button>
    )
}

export default Button;