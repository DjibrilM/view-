import React from "react";
import user from "../../recoil/user";
import { FaUserCog } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { MdOutlineWorkOutline, MdOutlineModeEditOutline } from "react-icons/md";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import Buttons from "../UI/Button";
import Image from "../../widgets/image";



const Profile = () => {
    return <aside className="w-full tablet:max-w-[320px] duration-200 h-[440px] p-4 bg-white border dark:border-none dark:bg-[#1A1A1A] rounded-lg self-start  top-32">
        <div className="flex justify-between border-b border-gray-200  dark:border-[#ffffff10] pb-5">
            <div className="flex gap-2">
                <div className="w-[40px] h-[40px]  rounded-full overflow-hidden bg-gray-300  dark:border">
                    <Image source="https://media.istockphoto.com/id/459368695/photo/young-black-beauty-with-afro-hairstyle.jpg?s=612x612&w=0&k=20&c=5wJEThtNBqNY3c748Fl6Sg-gKH4dJuv8d8mRUCHs6DQ=" />
                </div>
                <div className="relative top-1">
                    <h4 className="text-[14px] font-semibold dark:text-gray-50">Malcon kidman</h4>
                    <p className="text-gray-400 text-[12px]"> <strong className="text-black dark:text-white">100</strong>  friends</p>
                </div>
            </div>

            <div className="relative top-3 right-2">
                <Buttons click={() => { }}>
                    <FaUserCog className="text-gray-500 text-[18px] cursor-pointer dark:text-white" />
                </Buttons>
            </div>
        </div>
        <div className="mt-5">
            <div className="flex gap-4">
                <GoLocation className="font-bold text-[20px] text-gray-600 dark:text-gray-400" />
                <p className="text-[14px] dark:text-gray-400 text-gray-500">New York</p>
            </div>

            <div className="flex gap-4 mt-5">
                <MdOutlineWorkOutline className="font-bold text-[20px] text-gray-600 dark:text-gray-400" />
                <p className="text-[14px] dark:text-gray-400 text-gray-500">Designer</p>
            </div>
        </div>

        <div className="border-t mt-5 dark:border-t-[#ffffff10] dark:border-b-[#ffffff10] pt-3 border-b pb-3 ">
            <div className="flex justify-between items-center mt-3">
                <p className="text-[14px] text-gray-500 dark:text-gray-200">Who's viewed your profile</p>
                <p className="text-[12px] text-gray-500 dark:text-white font-bold">10948</p>
            </div>

            <div className="flex justify-between items-center mt-3">
                <p className="text-[14px] text-gray-500 dark:text-gray-200">Impression of your  posts</p>
                <p className="text-[12px] text-gray-500 dark:text-white font-bold">10948</p>
            </div>
        </div>

        <div className="mt-2">
            <h3 className="font-bold text-gray-600 dark:text-gray-200  text-[13px]">Social Profile</h3>
            <div className="mt-4 flex justify-between">
                <div className="flex gap-2">
                    <BsTwitter className="text-2xl dark:text-gray-100" />
                    <div className="relative bottom-2">
                        <h4 className="text-[15px] text-gray-700 dark:text-white">Twitter</h4>
                        <p className="text-[12px] text-gray-500">social Network</p>
                    </div>
                </div>

                <div className="">
                    <MdOutlineModeEditOutline className="dark:text-white text-gray-700" />
                </div>
            </div>

            <div className="mt-4 flex justify-between">
                <div className="flex gap-2">
                    <BsLinkedin className="text-2xl dark:text-gray-100" />
                    <div className="relative bottom-2">
                        <h4 className="text-[15px] text-gray-700 dark:text-white">Twitter</h4>
                        <p className="text-[12px] text-gray-500">Network platform</p>
                    </div>
                </div>

                <div className="">
                    <MdOutlineModeEditOutline className="dark:text-white text-gray-700" />
                </div>
            </div>
        </div>
    </aside>
};

export default Profile;
