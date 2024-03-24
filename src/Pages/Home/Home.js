import React from "react";
import Icon from "../../Components/Common/Icon/Icon";

const Home = () => {
    return (
        <div className="flex flex-col h-full pt-10">
            <div>
                <div className="text-gray-600 text-8xl font-normal select-none">
                    <p>Hello 👋</p>
                    <p>This is Shanmuganarayanan</p>
                    <p>design and developer</p>
                    <p>based in Chennai, India.</p>
                </div>
            </div>
            <div className="mt-auto">
                <div className="flex gap-5">
                    <p className="cursor-pointer flex items-center gap-1 text-gray-400 hover:text-gray-600">
                        <Icon name="LinkedIn" layoutClass={'h-4 w-4'}/>
                        LinkedIn
                    </p>
                    <p className="cursor-pointer flex items-center gap-1 text-gray-400 hover:text-gray-600">
                        <Icon name="Github" layoutClass={'h-4 w-4'}/>
                        Github
                    </p>                    
                </div>
            </div>
        </div>
    )
}

export default Home;
