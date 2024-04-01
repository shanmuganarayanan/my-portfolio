import React, { useRef } from "react";
import Header from "../../Components/Common/Header/Header";
import Button from "../../Components/Common/Buttons/Button"
import CaseStudy from "../../Components/Assets/Images/Ux-casestudy.png";
import Productimg from "../../Components/Assets/Images/Product.png";
import Profilepic from "../../Components/Assets/Images/Shanmuganarayanan.png"
import Footer from "../../Components/Common/Footer/Footer";
import Resume from "../../Components/Assets/Shanmuganarayanan-resume_compressed.pdf";

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
                <div ref={aboutref} id="about" className="flex flex-col justify-center items-center h-full p-10">
                    <p className="text-6xl font-bold text-center">Hi 👋  I’m Shanmuganaryanan</p>
                    <p className="text-3xl text-center w-3/4 mt-4">A product designer & frontend developer with 2+ years of experience in crafting beautiful and intuitive products. Currently building 0 ➡  1 product at Klickflow.</p>
                    <div className="mt-10">
                        <Button title={"Download Resume"} onClick={onButtonClick}/>
                    </div>
                </div>
                <div ref={workref} id="works" className="flex flex-col px-10 py-20 bg-[#F6F9FA]">
                    <div  className="flex flex-col justify-center items-center flex-grow mb-10 ">
                        <div className="flex flex-col w-10/12">
                            <div>
                                <p className="text-4xl font-bold">Works</p>
                            </div>
                            <div className="flex flex-col gap-2.5 mt-3">
                                <div className="w-4/12 border-2 border-[#FF6464]"/>
                                <div className="w-3/12 border-2 border-[#FF6464]"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center flex-grow mb-[32px]">
                        <div className="flex flex-rows-2 bg-white w-10/12 h-[395px] items-center border border-[#D5EDF4] rounded-lg">
                            <div className="h-full w-full">
                                <img src={Productimg} className="h-full w-full"/>
                            </div>
                            <div className="flex flex-col  rounded-lg mt-5 p-10">
                                <p className="text-3xl font-bold text-gray-800">Huddlenow</p>
                                <div className="mt-2 flex gap-1">
                                    <span className="text-[#064E3B] bg-[#E4FCFA] py-1 px-1.5 rounded font-medium text-sm">Website & Product Development</span>
                                    <span className="text-[#064E3B] bg-[#E4FCFA] py-1 px-1.5 rounded font-medium text-sm">March 2023 - Present</span>
                                </div>
                                <p className="mt-3 text-gray-500">Brainstormed along with the team to build the initial version of the product. Conducted competitive analysis and was responsible for designing the end to end design of the product and website</p>
                                <div className="mt-10 flex items-center gap-3">
                                    <button className="px-3.5 py-2 bg-[#FF6464] rounded-lg text-white font-medium">
                                        View Product
                                    </button>
                                    <button className="px-3.5 py-2 bg-white rounded-lg text-[#FF6464] font-medium">
                                        View Website
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center flex-grow">
                        <div className="flex flex-rows-2 bg-white w-10/12 h-[395px] items-center border border-[#D5EDF4] rounded-lg">
                            <div className="h-full w-full">
                                <img src={CaseStudy} className="h-full w-full"/>
                            </div>
                            <div className="flex flex-col rounded-lg mt-5 p-10">
                                <p className="text-3xl font-bold text-gray-800">Huddlenow - UX Case Study</p>
                                <div className="mt-2">
                                    <span className="text-[#064E3B] bg-[#E4FCFA] py-1 px-1.5 rounded font-medium text-sm">March 2022 </span>
                                </div>
                                <p className="mt-3 text-gray-500">Brainstormed along with the team to build the initial version of the product. Conducted competitive analysis and was responsible for designing the end to end design of the product and website</p>
                                <div className="mt-10">
                                    <button className="px-3.5 py-2 bg-[#FF6464] rounded-lg text-white font-medium">
                                        View Case Study
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={resumeRef} id="works" className="flex flex-col h-full px-10 py-20 gap-10">
                    <div  className="flex flex-col justify-center items-center">
                        <div className="flex flex-col w-10/12">
                            <div>
                                <p className="text-4xl font-bold">My Tech Stack</p>
                            </div>
                            <div className="flex flex-col gap-2.5 mt-3">
                                <div className="w-4/12 border-2 border-[#FF6464]"/>
                                <div className="w-3/12 border-2 border-[#FF6464]"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-10 h-full">
                        <div className="flex flex-wrap justify-center w-10/12 gap-20">
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex flex-col justify-center w-24">
                                    <svg width="92" height="93" viewBox="0 0 92 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_610_338)">
                                        <path d="M45.9943 0.783691C20.5965 0.783691 2.65447e-05 21.4607 2.65447e-05 46.9677C-0.01035 56.6481 3.02173 66.087 8.66776 73.9503C14.3138 81.8137 22.2882 87.7039 31.464 90.7884C33.764 91.2139 34.6035 89.7879 34.6035 88.5632C34.6035 87.4649 34.5633 84.5612 34.5403 80.7087C21.7465 83.4974 19.044 74.5159 19.044 74.5159C16.9568 69.1799 13.938 67.7597 13.938 67.7597C9.75778 64.8962 14.2485 64.9537 14.2485 64.9537C18.8658 65.2814 21.2923 69.7147 21.2923 69.7147C25.3978 76.7699 32.062 74.7344 34.684 73.5499C35.098 70.5657 36.2883 68.5302 37.605 67.3744C27.393 66.2072 16.652 62.2454 16.652 44.5527C16.652 39.5099 18.446 35.3872 21.39 32.1557C20.9128 30.9884 19.3373 26.2907 21.8385 19.9369C21.8385 19.9369 25.7025 18.6949 34.4885 24.6692C38.2418 23.6435 42.1149 23.1214 46.0058 23.1167C49.8969 23.1244 53.7698 23.6484 57.523 24.6749C66.3033 18.7007 70.1615 19.9427 70.1615 19.9427C72.6685 26.3022 71.093 30.9942 70.6215 32.1614C73.5713 35.3929 75.348 39.5157 75.348 44.5584C75.348 62.2972 64.5955 66.2014 54.349 67.3457C55.9993 68.7717 57.4713 71.5892 57.4713 75.8959C57.4713 82.0714 57.4138 87.0509 57.4138 88.5632C57.4138 89.7994 58.2418 91.237 60.5763 90.7827C69.7432 87.6908 77.7077 81.7984 83.3459 73.9369C88.9841 66.0755 92.0112 56.642 92 46.9677C92 21.4607 71.4035 0.783691 45.9943 0.783691Z" fill="black"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_610_338">
                                        <rect width="92" height="92" fill="white" transform="translate(0 0.783691)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <p className="text-lg">Github</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex flex-col justify-center w-24">
                                    <svg width="92" height="93" viewBox="0 0 92 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M29.4388 0.783691C27.0966 0.783691 24.9243 1.36529 23 2.59413C16.986 6.44557 14.6969 15.8312 15.9098 27.5167C6.18202 32.1943 0 39.0818 0 46.7837C0 54.4855 6.18202 61.3731 15.9098 66.0507C14.6975 77.7357 16.986 87.1218 23 90.9733C24.9205 92.2021 27.0928 92.7837 29.4388 92.7837C34.4322 92.7837 40.2034 90.0038 46 85.2347C51.7971 90.0038 57.5753 92.7837 62.5687 92.7837C64.9109 92.7837 67.0832 92.2021 69.0075 90.9733C75.0215 87.1218 77.3106 77.7361 76.0977 66.0507C85.8218 61.3732 92 54.4839 92 46.7837C92 39.0818 85.818 32.1943 76.0902 27.5167C77.3025 15.8317 75.014 6.44557 69 2.59413C67.0795 1.36104 64.9072 0.783691 62.5612 0.783691C57.5678 0.783691 51.7966 3.56354 46 8.33271C40.2031 3.56354 34.4305 0.783691 29.4388 0.783691ZM29.4388 8.22475C32.4351 8.22475 36.3973 9.99192 40.6992 13.2657C38.1699 15.9134 35.6928 18.9241 33.3096 22.2764C29.4441 22.8912 25.7997 23.7874 22.4235 24.909C22.4054 24.6493 22.3624 24.3768 22.3486 24.12C21.9385 16.5514 23.437 10.9095 26.3542 9.03861C27.2167 8.48585 28.2236 8.22475 29.4388 8.22475ZM62.5612 8.22475C63.7725 8.22475 64.7833 8.48585 65.6458 9.03861C68.563 10.9053 70.0615 16.5514 69.6514 24.12C69.6375 24.3768 69.5947 24.6493 69.5765 24.909C66.1982 23.7867 62.5511 22.8912 58.6829 22.2764C56.2998 18.9246 53.83 15.9131 51.3008 13.2657C55.6024 9.99247 59.5665 8.22475 62.5612 8.22475ZM46 17.9911C47.0391 19.0403 48.071 20.1491 49.1146 21.3629C48.0804 21.3243 47.0518 21.2715 46 21.2715C44.9508 21.2715 43.9246 21.3245 42.8929 21.3629C43.9355 20.1504 44.9618 19.0393 46 17.9911ZM46 28.7126C49.1766 28.7126 52.1875 28.9095 55.0443 29.2524C56.7865 31.879 58.5035 34.6561 60.113 37.7481C61.6556 40.7119 63.0198 43.7456 64.2233 46.7837C63.0196 49.8236 61.6565 52.862 60.113 55.8276C58.5085 58.9107 56.7957 61.6698 55.0592 64.2901C52.1016 64.649 49.0675 64.8548 46 64.8548C42.8234 64.8548 39.8125 64.6579 36.9557 64.315C35.2135 61.6883 33.4965 58.9196 31.887 55.8276C30.3435 52.862 28.9807 49.8236 27.7767 46.7837C28.9799 43.7456 30.3444 40.7119 31.887 37.7481C33.4922 34.665 35.2038 31.8975 36.9408 29.2773C39.8984 28.9183 42.9325 28.7126 46 28.7126ZM64.1934 31.013C65.7142 31.4203 67.1763 31.8599 68.5508 32.35C68.2394 33.9107 67.8586 35.5014 67.4277 37.1087C66.9345 36.0819 66.4561 35.0519 65.9229 34.0276C65.3742 32.9739 64.7651 32.0273 64.1934 31.013ZM27.7992 31.0213C27.2293 32.0324 26.624 32.9773 26.0771 34.0276C25.5441 35.0521 25.0654 36.0818 24.5723 37.1087C24.1405 35.4981 23.7534 33.9055 23.4417 32.3417C24.8414 31.8512 26.2998 31.4168 27.7992 31.0213ZM17.1302 35.074C17.9379 38.8567 19.0583 42.7779 20.4993 46.7754C19.0614 50.7633 17.9456 54.6774 17.1377 58.4519C10.4621 54.8762 6.70833 50.425 6.70833 46.7837C6.70833 43.0462 10.3572 38.7867 16.4714 35.3979C16.68 35.2821 16.917 35.1871 17.1302 35.074ZM74.8623 35.1155C81.5379 38.6912 85.2917 43.1424 85.2917 46.7837C85.2917 50.5212 81.6428 54.7806 75.5286 58.1695C75.3199 58.2853 75.083 58.3803 74.8698 58.4934C74.0616 54.7085 72.9504 50.7836 71.5081 46.7837C72.9444 42.7992 74.055 38.8868 74.8623 35.1155ZM46 38.2796C41.7642 38.2796 38.3333 42.0852 38.3333 46.7837C38.3333 51.4822 41.7642 55.2878 46 55.2878C50.2358 55.2878 53.6667 51.4822 53.6667 46.7837C53.6667 42.0852 50.2358 38.2796 46 38.2796ZM24.5723 56.4587C25.0657 57.4858 25.5512 58.5151 26.0846 59.5398C26.6327 60.5927 27.2355 61.5408 27.8066 62.5544C26.2858 62.1471 24.8237 61.7074 23.4492 61.2173C23.7608 59.6557 24.1411 58.067 24.5723 56.4587ZM67.4277 56.467C67.8591 58.0761 68.2468 59.6633 68.5583 61.2256C67.1586 61.7162 65.7001 62.1506 64.2008 62.5461C64.7707 61.5349 65.376 60.5901 65.9229 59.5398C66.4548 58.5174 66.9356 57.4918 67.4277 56.467ZM22.4235 68.6584C25.8018 69.7807 29.4489 70.6762 33.3171 71.291C35.7009 74.6445 38.1688 77.6617 40.6992 80.31C36.3977 83.5828 32.4349 85.3509 29.4388 85.3509C28.2275 85.3509 27.2167 85.0815 26.3542 84.5288C23.437 82.6621 21.9385 77.0243 22.3486 69.4557C22.3627 69.1962 22.405 68.9208 22.4235 68.6584ZM69.5765 68.6584C69.5949 68.9208 69.6374 69.1962 69.6514 69.4557C70.0615 77.0243 68.563 82.6579 65.6458 84.5288C64.7833 85.0815 63.7764 85.3509 62.5612 85.3509C59.5651 85.3509 55.6023 83.5834 51.3008 80.31C53.8314 77.6614 56.3061 74.6449 58.6904 71.291C62.5559 70.6762 66.2003 69.78 69.5765 68.6584ZM42.8854 72.2045C43.9196 72.2431 44.9482 72.2959 46 72.2959C47.0518 72.2959 48.0804 72.2431 49.1146 72.2045C48.071 73.4183 47.0391 74.5272 46 75.5762C44.9609 74.5271 43.929 73.4183 42.8854 72.2045Z" fill="#053C64"/>
                                    </svg>
                                </div>
                                <p className="text-lg">React.js</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex flex-col justify-center w-24">
                                    <svg width="92" height="93" viewBox="0 0 92 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.9682 78.9866L10.5081 6.53369H81.4918L75.023 78.9751L45.9568 87.0337L16.9682 78.9866Z" fill="#E44F26"/>
                                        <path d="M46 80.8754L69.4888 74.3635L75.0145 12.459H46V80.8754Z" fill="#F1662A"/>
                                        <path d="M46 39.3288H34.2412L33.4305 30.2294H46V21.3428H45.9684H23.7188L23.9315 23.729L26.1136 48.2154H46V39.3288Z" fill="#EBEBEB"/>
                                        <path d="M45.9999 62.4064L45.9596 62.4179L36.0639 59.747L35.4314 52.6602H30.6215H26.5103L27.7551 66.6097L45.9596 71.6639L45.9999 71.6524V62.4064Z" fill="#EBEBEB"/>
                                        <path d="M45.9683 39.3286V48.2152H56.9105L55.8813 59.7411L45.9683 62.4149V71.6609L64.1871 66.6095L64.3194 65.1087L66.4066 41.7149L66.6251 39.3286H64.2303H45.9683Z" fill="white"/>
                                        <path d="M45.9683 21.3428V26.8628V30.2093V30.2294H67.4043H67.433L67.6113 28.2341L68.0166 23.729L68.2294 21.3428H45.9683Z" fill="white"/>
                                    </svg>
                                </div>
                                <p className="text-lg">HTML</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex flex-col justify-center w-24">
                                    <svg width="92" height="93" viewBox="0 0 92 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.9682 78.9866L10.511 6.53369H81.489L75.0231 78.9751L45.9569 87.0337L16.9682 78.9866Z" fill="#1572B6"/>
                                        <path d="M46 80.8754L69.4888 74.3635L75.0145 12.459H46V80.8754Z" fill="#33A9DC"/>
                                        <path d="M46 38.7077H57.7588L58.5695 29.6083H46V20.7217H46.0316H68.2812L68.0685 23.1051L65.8864 47.5943H46V38.7077Z" fill="white"/>
                                        <path d="M46.0546 61.7853L46.0143 61.7968L36.1186 59.123L35.4861 52.0361H30.6762H26.5649L27.8098 65.9885L46.0114 71.0428L46.0546 71.0313V61.7853Z" fill="#EBEBEB"/>
                                        <path d="M57.0026 47.2178L55.9331 59.1174L46.0229 61.7911V71.0372L64.239 65.9887L64.3741 64.4879L65.9179 47.2178H57.0026Z" fill="white"/>
                                        <path d="M46.0316 20.7217V26.2417V29.5853V29.6083H24.5956H24.5669L24.3886 27.6102L23.9833 23.1051L23.7705 20.7217H46.0316Z" fill="#EBEBEB"/>
                                        <path d="M46 38.7075V44.2275V47.5711V47.5941H36.2566H36.2278L36.0496 45.596L35.6471 41.0909L35.4343 38.7075H46Z" fill="#EBEBEB"/>
                                    </svg>
                                </div>
                                <p className="text-lg">CSS</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex flex-col justify-center w-24">
                                    <svg width="92" height="93" viewBox="0 0 92 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_610_428)">
                                        <path d="M78.2 0.783691H13.8C6.17847 0.783691 0 6.96216 0 14.5837V78.9837C0 86.6052 6.17847 92.7837 13.8 92.7837H78.2C85.8215 92.7837 92 86.6052 92 78.9837V14.5837C92 6.96216 85.8215 0.783691 78.2 0.783691Z" fill="#F7DF1E"/>
                                        <path d="M58.2188 67.2681C60.0156 70.3228 62.5312 72.479 66.6641 72.479C70.2578 72.479 72.5938 70.6821 72.5938 68.1665C72.5938 65.2915 70.2578 64.2134 66.3047 62.4165L64.1484 61.5181C57.8594 58.8228 53.7266 55.5884 53.7266 48.5806C53.7266 42.1118 58.5781 37.0806 66.3047 37.0806C71.875 37.0806 75.8281 39.0571 78.5234 44.0884L71.875 48.4009C70.4375 45.7056 68.8203 44.6274 66.3047 44.6274C63.7891 44.6274 62.1719 46.2446 62.1719 48.4009C62.1719 50.9165 63.7891 51.9946 67.5625 53.6118L69.7188 54.5103C77.0859 57.7446 81.2188 60.7993 81.2188 68.1665C81.2188 75.8931 75.1094 80.2056 66.8438 80.2056C58.7578 80.2056 53.5469 76.4321 51.0312 71.4009L58.2188 67.2681ZM27.6719 67.9868C29.1094 70.3228 30.1875 72.479 33.2422 72.479C36.1172 72.479 37.9141 71.4009 37.9141 67.0884V37.2603H46.5391V66.729C46.5391 75.7134 41.3281 79.6665 33.6016 79.6665C26.5938 79.6665 22.6406 76.0728 20.6641 71.7603L27.6719 67.9868Z" fill="#313131"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_610_428">
                                        <rect width="92" height="92" fill="white" transform="translate(0 0.783691)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <p className="text-lg">Javascript</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex flex-col justify-center w-24">
                                    <svg width="92" height="93" viewBox="0 0 92 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_610_442)">
                                        <rect width="92" height="92" transform="translate(0 0.783691)" fill="white"/>
                                        <g clip-path="url(#clip1_610_442)">
                                        <path d="M44.5 18.7837C32.6333 18.7837 25.2167 24.7681 22.25 36.7369C26.7 30.7525 31.8917 28.5084 37.825 30.0045C41.2103 30.8581 43.6299 33.3351 46.3082 36.0772C50.6712 40.5439 55.7208 45.7136 66.75 45.7136C78.6167 45.7136 86.0333 39.7291 89 27.7603C84.55 33.7447 79.3583 35.9889 73.425 34.4928C70.0397 33.6392 67.6201 31.1621 64.9418 28.4201C60.5788 23.9534 55.5292 18.7837 44.5 18.7837ZM22.25 45.7136C10.3833 45.7136 2.96667 51.698 0 63.6668C4.45 57.6824 9.64167 55.4382 15.575 56.9343C18.9603 57.788 21.3799 60.265 24.0582 63.007C28.4212 67.4737 33.4708 72.6434 44.5 72.6434C56.3667 72.6434 63.7833 66.659 66.75 54.6902C62.3 60.6746 57.1083 62.9188 51.175 61.4227C47.7897 60.569 45.3701 58.092 42.6918 55.35C38.3288 50.8833 33.2792 45.7136 22.25 45.7136Z" fill="url(#paint0_linear_610_442)"/>
                                        </g>
                                        </g>
                                        <defs>
                                        <linearGradient id="paint0_linear_610_442" x1="-632.889" y1="2672.99" x2="21214.5" y2="10186" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#2298BD"/>
                                        <stop offset="1" stop-color="#0ED7B5"/>
                                        </linearGradient>
                                        <clipPath id="clip0_610_442">
                                        <rect width="92" height="92" fill="white" transform="translate(0 0.783691)"/>
                                        </clipPath>
                                        <clipPath id="clip1_610_442">
                                        <rect width="89" height="54" fill="white" transform="translate(0 18.7837)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <p className="text-lg">Tailwind CSS</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex flex-col justify-center w-24">
                                    <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M61.3333 61.3332C69.8017 61.3332 76.6667 54.4682 76.6667 45.9998C76.6667 37.5315 69.8017 30.6665 61.3333 30.6665C52.865 30.6665 46 37.5315 46 45.9998C46 54.4682 52.865 61.3332 61.3333 61.3332Z" fill="#19BCFE"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6666 92.0002C39.135 92.0002 45.9999 85.1352 45.9999 76.6668C45.9999 74.3551 45.9999 69.244 45.9999 61.3335C39.1116 61.3335 34.0005 61.3335 30.6666 61.3335C22.1982 61.3335 15.3333 68.1985 15.3333 76.6668C15.3333 85.1352 22.1982 92.0002 30.6666 92.0002Z" fill="#09CF83"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6666 61.3332H45.9999V30.6665C38.6005 30.6665 33.4894 30.6665 30.6666 30.6665C22.1982 30.6665 15.3333 37.5315 15.3333 45.9998C15.3333 54.4682 22.1982 61.3332 30.6666 61.3332Z" fill="#A259FF"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.6666 30.6667H45.9999V0C38.6005 0 33.4894 0 30.6666 0C22.1982 0 15.3333 6.86497 15.3333 15.3333C15.3333 23.8017 22.1982 30.6667 30.6666 30.6667Z" fill="#F24E1E"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M61.3333 30.6667H46V0H61.3333C69.8017 0 76.6667 6.86497 76.6667 15.3333C76.6667 23.8017 69.8017 30.6667 61.3333 30.6667Z" fill="#FF7262"/>
                                    </svg>
                                </div>
                                <p className="text-lg">Figma</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex flex-col justify-center w-24">
                                    <svg width="92" height="94" viewBox="0 0 92 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_610_500)">
                                        <path d="M32.7513 57.3603L9.94631 75.1302L0 70.1771V23.8614L9.90816 18.8701L32.5548 36.68L68.4111 0.783691L92 10.1807V83.6632L68.5294 93.2166L32.7513 57.3603ZM67.7074 63.6123V30.3899L46.2413 47.0211L67.7074 63.6123ZM10.734 57.635L22.0173 47.374L10.734 36.1212V57.635Z" fill="#0179CB"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_610_500">
                                        <rect width="92" height="92.433" fill="white" transform="translate(0 0.783691)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <p className="text-lg">Visual Studio Code</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex flex-col justify-center w-24">
                                    <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_610_502"  maskUnits="userSpaceOnUse" x="0" y="0" width="92" height="92">
                                        <path d="M0 0H92V92H0V0Z" fill="white"/>
                                        </mask>
                                        <g mask="url(#mask0_610_502)">
                                        <path d="M6.53907 45.9963C6.53907 61.6169 15.6165 75.1147 28.7796 81.5122L9.9556 29.9365C7.69904 34.9897 6.5348 40.4623 6.53907 45.9963ZM72.641 44.005C72.641 39.1281 70.8892 35.7506 69.3867 33.1218C67.3863 29.8712 65.5121 27.1185 65.5121 23.8679C65.5121 20.2404 68.2626 16.8637 72.1379 16.8637C72.3129 16.8637 72.4788 16.8855 72.65 16.8953C65.6285 10.4632 56.2747 6.53613 46.0011 6.53613C32.2149 6.53613 20.0858 13.6094 13.0297 24.323C13.9556 24.3507 14.8288 24.3695 15.5692 24.3695C19.6968 24.3695 26.0861 23.8687 26.0861 23.8687C28.2134 23.7433 28.4642 26.8677 26.3399 27.1192C26.3399 27.1192 24.2014 27.3708 21.8226 27.4954L36.193 70.2392L44.8297 44.3392L38.6807 27.4947C36.5557 27.37 34.5426 27.1185 34.5426 27.1185C32.4161 26.9938 32.6654 23.7425 34.7919 23.8679C34.7919 23.8679 41.3088 24.3688 45.1864 24.3688C49.3133 24.3688 55.7033 23.8679 55.7033 23.8679C57.8321 23.7425 58.0821 26.8669 55.9564 27.1185C55.9564 27.1185 53.8141 27.37 51.4398 27.4947L65.7006 69.9149L69.636 56.7617C71.3428 51.3036 72.641 47.3832 72.641 44.005Z" fill="#00749A"/>
                                        <path d="M46.694 49.4499L34.854 83.8537C38.4738 84.9205 42.228 85.4621 46.0017 85.4621C50.5971 85.4621 55.004 84.6669 59.1061 83.2252C58.9961 83.053 58.9021 82.871 58.8253 82.6816L46.694 49.4499ZM80.628 27.0654C80.7977 28.3224 80.8938 29.6725 80.8938 31.1232C80.8938 35.1276 80.1459 39.6291 77.8933 45.2577L65.8393 80.1083C77.5711 73.267 85.4622 60.5569 85.4622 45.9981C85.4727 39.3806 83.8098 32.8678 80.628 27.0654Z" fill="#00749A"/>
                                        <path d="M46.0008 0C20.6366 0 0 20.6349 0 45.9989C0 71.3658 20.6358 92.0007 46.0008 92.0007C71.3642 92.0007 92.0038 71.3666 92.0038 45.9989C92.003 20.6349 71.3642 0 46.0008 0ZM46.0008 89.8915C21.7997 89.8915 2.10924 70.2012 2.10924 45.9989C2.10924 21.7988 21.799 2.10997 46.0008 2.10997C70.201 2.10997 89.89 21.7988 89.89 45.9989C89.89 70.2012 70.2003 89.8915 46.0008 89.8915Z" fill="#00749A"/>
                                        </g>
                                    </svg>
                                </div>
                                <p className="text-lg">Wordpress</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex flex-col justify-center w-24">
                                    <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_610_515)">
                                        <path d="M72.2774 23.1879C72.1847 23.256 72.1153 23.3512 72.0789 23.4603C72.0425 23.5695 72.0409 23.6873 72.0743 23.7974V23.7936C72.2122 24.0699 72.2661 24.3805 72.2293 24.6871C72.1925 24.9937 72.0666 25.2828 71.8673 25.5186L71.8711 25.5148C71.796 25.6096 71.7555 25.7273 71.7561 25.8483C71.7561 26.0169 71.8366 26.1703 71.9593 26.2699C72.0516 26.3416 72.1644 26.3819 72.2813 26.3849C72.4423 26.3849 72.5879 26.3083 72.6876 26.1933C73.0175 25.7972 73.2244 25.3133 73.283 24.8012C73.3416 24.289 73.2492 23.7709 73.0173 23.3106C72.9769 23.2538 72.9256 23.2056 72.8665 23.1687C72.8074 23.1318 72.7416 23.1069 72.6729 23.0955C72.6041 23.0841 72.5338 23.0864 72.4659 23.1023C72.3981 23.1181 72.334 23.1472 72.2774 23.1879ZM73.0211 23.3144L73.0134 23.2991L73.0173 23.3106L73.0211 23.3144Z" fill="#F36933"/>
                                        <path d="M51.8529 0.378782C26.6602 -2.85272 3.61035 14.9493 0.378849 40.1458C-2.85265 65.3384 14.9455 88.3844 40.142 91.6198C65.3385 94.8513 88.396 77.0493 91.6199 51.8528C94.8552 26.6601 77.057 3.61411 51.8529 0.378782ZM61.325 29.0713C60.4711 29.0809 59.6549 29.4249 59.0518 30.0296L41.982 47.0994L38.3404 43.4578C55.1649 26.6831 58.2009 26.5221 61.325 29.0713ZM42.6835 47.7051L59.7035 30.6851C59.9263 30.4507 60.1945 30.2641 60.4919 30.137C60.7892 30.0098 61.1094 29.9446 61.4328 29.9455C61.7562 29.9463 62.076 30.0132 62.3727 30.1419C62.6693 30.2706 62.9366 30.4586 63.1581 30.6942C63.3796 30.9298 63.5507 31.2082 63.6609 31.5122C63.7711 31.8162 63.8181 32.1396 63.799 32.4624C63.78 32.7853 63.6952 33.1008 63.5499 33.3897C63.4046 33.6787 63.2019 33.9349 62.9542 34.1428L62.9504 34.1466L44.9375 49.9591L42.6835 47.7051ZM43.9485 50.3654L39.7318 51.2778C39.7154 51.281 39.6987 51.2822 39.682 51.2816C39.6392 51.2819 39.5971 51.2702 39.5605 51.2479C39.5239 51.2255 39.4943 51.1934 39.475 51.1551C39.4494 51.1108 39.4392 51.0593 39.4462 51.0086C39.4531 50.9579 39.4767 50.911 39.5133 50.8753L41.9859 48.4028L43.9485 50.3654ZM33.2037 48.6059L37.6964 44.1133L41.0659 47.4789L33.4797 49.1119C33.4557 49.1166 33.4313 49.1192 33.4069 49.1196C33.3543 49.1194 33.3027 49.1047 33.2581 49.0769C33.2134 49.0492 33.1773 49.0095 33.1539 48.9624C33.1256 48.9178 33.1109 48.8658 33.1117 48.8129C33.1117 48.7324 33.1462 48.6558 33.2037 48.6059ZM19.2274 71.8244C19.1548 71.8195 19.0869 71.787 19.0377 71.7335C18.9885 71.68 18.9617 71.6096 18.9629 71.5369V71.5063C18.9701 71.4396 18.9999 71.3774 19.0472 71.3299H19.0549L22.6812 67.7036L27.3655 72.388L19.2274 71.8244ZM28.527 67.0136C28.3512 67.1032 28.2111 67.2499 28.1296 67.4296C28.0481 67.6093 28.0301 67.8113 28.0785 68.0026V67.9949L28.8567 71.3108C28.8818 71.4129 28.8726 71.5205 28.8305 71.617C28.7884 71.7134 28.7158 71.7933 28.6238 71.8443C28.5317 71.8953 28.4255 71.9146 28.3214 71.8993C28.2173 71.8839 28.1212 71.8347 28.0478 71.7593H28.0364L23.329 67.0481L37.75 52.6424L44.7267 51.1359L48.077 54.4863C43.2662 58.7106 36.6882 62.9235 28.527 67.0136ZM48.7594 53.8729H48.7517L45.5355 50.6568L63.5483 34.8443C63.7115 34.6979 63.8615 34.5376 63.9968 34.3651L64.0045 34.3574C63.441 39.5133 56.2267 46.7966 48.7594 53.8729ZM67.7037 31.1489C66.7887 31.1506 65.8825 30.9713 65.0371 30.6213C64.1917 30.2713 63.4239 29.7575 62.7779 29.1096L62.7702 29.1019C61.5143 27.8253 60.7968 26.1151 60.7659 24.3246C60.735 22.5341 61.3929 20.8001 62.6039 19.4809C63.8149 18.1617 65.4864 17.358 67.273 17.2359C69.0596 17.1138 70.8248 17.6826 72.204 18.8248L72.1925 18.8171L66.0209 25.0003C65.9781 25.0423 65.9442 25.0924 65.9212 25.1477C65.8981 25.203 65.8864 25.2624 65.8867 25.3223C65.8867 25.4488 65.9365 25.5638 66.0209 25.6443L70.801 30.4244C69.839 30.9037 68.7785 31.1518 67.7037 31.1489ZM72.664 29.1096C72.3535 29.4163 72.0162 29.6884 71.6482 29.9299L71.6252 29.9453L66.9945 25.3184L72.871 19.4419C75.4049 22.2019 75.3129 26.4646 72.664 29.1096Z" fill="#F36933"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_610_515">
                                        <rect width="92" height="92" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <p className="text-lg">Postman</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={profileRef} id="aboutme" className="flex flex-col h-full items-center w-full px-10 py-20 gap-10 bg-[#F6F9FA]">
                    <div  className="flex flex-col justify-center items-center w-full">
                        <div className="flex flex-col w-10/12">
                            <div>
                                <p className="text-4xl font-bold">About Me</p>
                            </div>
                            <div className="flex flex-col gap-2.5 mt-3">
                                <div className="w-4/12 border-2 border-[#FF6464]"/>
                                <div className="w-3/12 border-2 border-[#FF6464]"/>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 items-center w-8/12 mt-10 h-full" style={{gridTemplateColumns: "400px auto"}}>
                        <div className="">
                            <img src={Profilepic}/>
                        </div>
                        <div className=" flex flex-col">
                            <p className="text-2xl mb-5">Hello! I’m Shanmuganarayanan. Currently working as developer & designer at Wiqly for the past 2 years. I am currently working in remote from my hometown Kumbakonam, Tamil Nadu.</p>

                            <p className="text-2xl mb-5">I completed my master’s in computer applications from Sastra University in 2022. I specialize in front end development and have full understanding on technologies like react.js, Java script etc. I started my career as UX Engineer where I was responsible for designing and development of their product and website.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </article>
        </main>
    )
}

export default Home;
