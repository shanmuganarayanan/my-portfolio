import React from "react";
import Icon from "../../Components/Common/Icon/Icon";
import Button from "../../Components/Common/Buttons/Button";
import Myimage from "../../Components/Assets/Images/Shanmuganarayanan.JPG"
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const workHandler = () => {
        navigate('/works')
    }

    return (
        <div className="grid h-full">
            <div className="flex items-center justify-center h-full">
                <div className="w-3/4">
                    <div className="flex items-center justify-center h-full">
                        <div className="w-2/4">
                            <div className="mt-5 flex flex-col gap-2.5 text-gray-500">
                                <p className="text-4xl font-semibold">Hello 👋, Welcome to my digital living room.</p>
                                <p className="text-xl">I'm Shanmuganarayanan, a product design and developer based in Chennai with over 2 years of experience.</p>
                                <div className="mt-5">
                                <Button title={"View works"} onClick={workHandler}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-2/4 h-full rounded-2xl">
                            <div className="flex justify-center">
                                <img src={Myimage} className="h-96 w-96 p-2.5 rounded-2xl border border-gray-200 bg-gray-50"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;
