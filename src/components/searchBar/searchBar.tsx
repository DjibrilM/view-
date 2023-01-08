import React from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import searchImage from '../../assets/vectors/webpage.png'

const SearchBar = () => {
    const [focused, setFocused] = useState<boolean>();


    return (
        <>
            <div className="w-72 h-10 duration-100  bg-lightGray rounded-md relative dark:bg-[#4D4D4D] hidden md:block " style={focused ? { width: "500px", height: "3rem", borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" } : {}}>
                <AiOutlineSearch className="text-00D5FA absolute right-5 top-3 cursor-pointer dark:text-[#F6F6F6]" />
                {focused &&
                    <div className="w-full left-0 right-0 h-[16rem] bg-white  top-12 absolute border-b border-l border-r flex justify-center items-center flex-col gap-3 dark:bg-[#1A1A1A] dark:border-r-[#ffffff43] dark:border-l-[#ffffff43] dark:border-b-[#ffffff43]">
                        <h1 className="text-gray-500 dark:text-gray-300 font-semibold">Type Something 😁 </h1>
                        <img src={searchImage} className="w-20" alt="" />
                    </div>}
                <input onBlur={() => setFocused(false)} onFocus={() => setFocused(true)} type="text" className="bg-transparent w-[80%] outline-none h-full p-3 font-[12px] dark:text-gray-100" placeholder="search..." />
            </div>
        </>
    );
};

export default SearchBar;
