import React, { useRef, useState } from "react";
import Header from "../../Components/Common/Header/Header";
import Profilepic from "../../Components/Assets/Images/Shanmuganarayanan.JPG";
import Button from "../../Components/Common/Buttons/Button"

const Home = () => {
    
    const aboutref = useRef(null);

    const workref = useRef(null);

    const resumeRef = useRef(null);

    const aboutScroll = () => {
        aboutref.current.scrollIntoView({ behavior : "smooth"});
    }

    const workScroll = () => {
        workref.current.scrollIntoView({ behavior : "smooth"});
    }

    const resumeScroll = () => {
        resumeRef.current.scrollIntoView({behavior : "smooth"});
    }

    return (
        <main className="h-screen">
            <article className="h-full">
                <Header aboutScroll={aboutScroll} workScroll={workScroll} resumeScroll={resumeScroll}/>
                <div ref={aboutref} id="about" className="grid grid-cols-2 justify-center items-center h-full p-10">
                    <div className="flex justify-end flex-col flex-grow h-4/6">
                        <div>
                            <h1 className="text-gray-800 text-2xl font-bold">Hi, I am Shanmuganarayanan, Creative Technologist</h1>
                            <div className="flex flex-col gap-2.5">
                                <p className="text-gray-600 text-lg">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                                <p className="text-gray-600 text-lg">Velit officia consequat duis enim velit mollit.</p>
                                <p className="text-gray-600 text-lg">Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                        </div>
                        <div className="mt-auto">
                            <Button title={"Download resume"}/>
                        </div>
                    </div>
                    <div className="grid items-center justify-center">
                        <img src={Profilepic} className="h-96 w-96 p-2.5 rounded-2xl border border-gray-200"/>
                    </div>
                </div>
                <div ref={workref} id="works" className="grid grid-cols-2 gap-10 justify-center items-center h-full bg-[#EDF7FA] p-10">
                    <div className="flex flex-col justify-center items-end flex-grow h-4/6">
                        <div className="w-7/12 h-[360px]">
                            <p className="">Experience</p>
                            <div className="rounded-lg bg-white h-full mt-5">

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-start flex-grow h-4/6">
                        <div className="w-7/12 h-[360px]">
                            <p className="flex justify-end">Experience</p>
                            <div className="rounded-lg bg-white h-full mt-5">

                            </div>
                        </div>
                    </div>
                    
                </div>
                <div ref={resumeRef} id="works" className="grid grid-cols-2 justify-center items-center h-full p-10">
                    <div className="flex justify-end flex-col flex-grow h-4/6">
                        <div>
                            <h1 className="text-gray-800 text-2xl font-bold">Hi, I am Shanmuganarayanan, Creative Technologist</h1>
                            <p className="text-gray-600 text-lg">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>
                        <div className="mt-auto">
                            <Button title={"Download resume"}/>
                        </div>
                    </div>
                    <div className="grid items-center justify-center">
                        <img src={Profilepic} className="h-96 w-96 rounded-full"/>
                    </div>
                </div>
            </article>
        </main>
    )
}

export default Home;
