import React, { useState, useEffect } from "react";
import { MdOutlinePersonRemove } from 'react-icons/md'

const FriendList = () => {
    const [fixed, setFixed] = useState<boolean>(false)

    useEffect(() => {
        const getScrollPosition = () => {
            window.addEventListener('scroll', () => {
                if (window.scrollY >= 490.3999938964844) {
                    setFixed(true)
                } else {
                    setFixed(false)
                }
            })
        }
        getScrollPosition()

    }, []);



    return <div className="max-w-[400px] w-full min-w-[300px] bg-white border p-4 rounded-md mt-5 dark:bg-[#1A1A1A] dark:border-none hidden pc:block " style={
        fixed ? { position: "fixed", top: 65, } : { position: "relative" }}>
        <h1 className="text-gray-700 font-bold mb-5 dark:text-gray-100">Friend List</h1>
        <div className="w-full flex  justify-between mb-5 pb-4 border-b border-[#ffffff18]">
            <div className="flex gap-2">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyeodLgyYB96yVNKGktQBlyIKmbRro3I4-Wg&usqp=CAU" alt="" className="w-full h-full object-cover object-center" />
                </div>
                <div className="">
                    <h3 className="font-bold text-gray-500 dark:text-gray-100">Djibril</h3>
                    <p className="text-[13px] text-gray-400 mb-2">hacker</p>
                </div>

            </div>

            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#33ddfb56] hover:bg-[#33ddfbaa] text-gray-600 cursor-pointer ">
                <MdOutlinePersonRemove className="dark:text-gray-100" />
            </div>

        </div>
    </div>;
};

export default FriendList;
