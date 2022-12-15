import React from "react";
import RegisterNav from "../../components/navbar/registerNav";
import vector from "../../assets/vectors/errorIcon.svg"
import { HiOutlineArrowSmLeft } from "react-icons/hi"


const ErrorPage = () => {
    return <div className={"flex-col  h-full w-full"}>
        <RegisterNav />
        <div className="">
            <h1 className="text-gray-700 dark:text-white text-3xl sm:text-4xl text-center uppercase mt-32">Page not found</h1>
            <img className="w-52 m-auto mt-10" src={vector} alt="" />
        </div>

        <div className="w-full justify-center flex items-center">
            <button className="px-[30px] py-3 dark:text-white mt-10 rounded-md bg-blue-300 flex items-center justify-center gap-3 dark:bg-blue-500" onClick={() => {
                window.history.back();
            } }>
                <HiOutlineArrowSmLeft className=""  />
                Go Back
            </button>
        </div>
    </div>;
};

export default ErrorPage;
