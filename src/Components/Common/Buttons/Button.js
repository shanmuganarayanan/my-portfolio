import React from "react";
import Icon from "../Icon/Icon";

const Button = ({ title, onClick }) => {
    return (
        <button className="px-5 py-2.5 bg-[#FF6464] rounded-lg text-white font-medium flex items-center gap-2.5" onClick={onClick}>
            {title}
            <Icon name={"Download"}/>
        </button>
    );
}

export default Button;