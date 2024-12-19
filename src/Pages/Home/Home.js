import React, { useRef } from "react";
import Header from "../../Components/Common/Header/Header";
import Footer from "../../Components/Common/Footer/Footer";
import Resume from "../../Components/Assets/Shanmuga-resume.pdf";
import Works from "../Works/Works";
import Skills from "../Skills/Skills";
import About from "../About/About";
import Hero from "../Hero/Hero";

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
                <Hero aboutref={aboutref} onClick={onButtonClick}/>
                <Works workref={workref}/>
                <Skills resumeRef={resumeRef}/>
                <About profileRef={profileRef}/>
                <Footer />
            </article>
        </main>
    )
}

export default Home;
