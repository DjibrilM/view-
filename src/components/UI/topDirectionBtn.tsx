import React, { useState } from "react";
import { AiOutlineArrowUp } from 'react-icons/ai'
import { useRef, useEffect } from "react";

const TopDirectionBtn = () => {
    const box = useRef<any>();
    const [fixed, setFixed] = useState<boolean>(false)


    useEffect(() => {
        window.addEventListener('scroll', (e: any) => {
            if (window.scrollY >= 526.4000244140625) {
                setFixed(true);
            } else {
                setFixed(false);
            }
        })
    }, []);


    return <div
        onClick={() => {
            const scrollRef: any = document.querySelector('.scrollRef');
            scrollRef.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        }}
        style={fixed ? {
            left: '100px'
        } : {
            left: '-100px'
        }}
        className="duration-500 hidden  fixed dark:bg-[#1A1A1A] dark:border-none dark:text-gray-100 left-10 top-[20rem] rounded-full cursor-pointer bg-white border w-[60px] h-[60px] md:flex items-center justify-center">
        <AiOutlineArrowUp />

    </div>;
};

export default TopDirectionBtn;
