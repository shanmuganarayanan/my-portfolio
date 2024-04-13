import React, { useRef } from "react";
import Header from "../../Components/Common/Header/Header";
import Button from "../../Components/Common/Buttons/Button"
import Footer from "../../Components/Common/Footer/Footer";
import Resume from "../../Components/Assets/Shanmuganarayanan-resume_compressed.pdf";
import Works from "../Works/Works";
import Skills from "../Skills/Skills";
import About from "../About/About";

const Home = () => {
    
    const aboutref = useRef(null);

    const workref = useRef(null);

    const resumeRef = useRef(null);

    const profileRef = useRef(null);

    const aboutScroll = () => {
        aboutref.current.scrollIntoView({ behavior : "smooth"});
    }

    const workScroll = () => {
        workref.current.scrollIntoView({ behavior : "smooth"});
    }

    const resumeScroll = () => {
        resumeRef.current.scrollIntoView({behavior : "smooth"});
    }

    const ProfileScroll = () => {
        profileRef.current.scrollIntoView({behavior : "smooth"});
    }

    const onButtonClick = () => {
        const pdfUrl = Resume;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Shanmuganarayanan_resume.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <main className="h-screen">
            <article className="h-full">
                <Header aboutScroll={aboutScroll} workScroll={workScroll} resumeScroll={resumeScroll} ProfileScroll={ProfileScroll}/>
                <div ref={aboutref} id="about" className="flex flex-col justify-center h-full lg:items-center px-5 md:p-10">
                    <p className="text-4xl md:text-6xl text-left lg:text-center font-bold ">Hi 👋</p>
                    <p className="text-4xl md:text-6xl text-left lg:text-center font-bold "> I’m Shanmuganaryanan</p>
                    <p className="text-3xl md:text-3xl text-left lg:text-center md:w-3/4 mt-2 md:mt-4">A product designer & frontend developer with 2+ years of experience in crafting beautiful and intuitive products. Currently building 0 ➡ 1 product at Klickflow.</p>
                    <div className="mt-20 md:mt-10">
                        <Button title={"Download Resume"} onClick={onButtonClick}/>
                    </div>
                </div>
                <Works workref={workref}/>
                <Skills resumeRef={resumeRef}/>
                <About profileRef={profileRef}/>
                <Footer />
            </article>
        </main>
    )
}

export default Home;
