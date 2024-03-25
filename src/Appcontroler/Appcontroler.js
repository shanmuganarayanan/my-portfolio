import React, { useState } from "react";
import Header from "../Components/Common/Header/Header";
import { Routes } from "react-router-dom";
import Routers from "../Routes/Routes";
import Footer from "../Components/Common/Footer/Footer";

const Appcontroler = () => {


    return(
        <div className="p-10 flex flex-col h-screen">
            <Header/>
            <div className="flex-grow">
                <Routers/>
                <Footer/>
            </div>
        </div>
    )
}

export default Appcontroler;