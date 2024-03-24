import React, { useState } from "react";
import Header from "../Components/Common/Header/Header";
import { Routes } from "react-router-dom";
import Routers from "../Routes/Routes";

const Appcontroler = () => {


    return(
        <div className="p-10 flex flex-col h-screen">
            <Header/>
            <div className="flex-grow pt-10">
                <Routers/>
            </div>
        </div>
    )
}

export default Appcontroler;