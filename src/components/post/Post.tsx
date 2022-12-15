import React from "react";
import user from "../../recoil/user";
import { IoPersonAddOutline } from 'react-icons/io5';
import { HiOutlineHeart } from "react-icons/hi2"
import { GoComment } from "react-icons/go"
import { Anchorme, LinkComponentProps } from 'react-anchorme'
import PostVideo from "../../assets/videos/playstation.mp4";

const CustomLink = (props: LinkComponentProps) => {
    return (
        <i>
            <a className="text-blue-500" {...props} />
        </i>
    )
}


const Post = () => {
    return <div className="duration-200  p-4 bg-white border dark:border-none dark:bg-[#1A1A1A] rounded-lg mb-10 w-full self-start">
        <div className="flex justify-between">
            <div className="flex gap-3">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img className="h-full w-full object-cover" src="https://media.istockphoto.com/id/459368695/photo/young-black-beauty-with-afro-hairstyle.jpg?s=612x612&w=0&k=20&c=5wJEThtNBqNY3c748Fl6Sg-gKH4dJuv8d8mRUCHs6DQ=" alt="" />
                </div>
                <div className="relative top-2">
                    <h4 className="text-[15px] text-gray-600 font-semibold dark:text-gray-200">Djibril mug</h4>
                    <p className="text-[12px] text-gray-500 dark:text-gray-400">New York dc</p>
                </div>

            </div>

            <div className="w-[40px] h-[40px] rounded-full bg-[#33ddfb56] flex items-center justify-center cursor-pointer">
                <IoPersonAddOutline className=" dark:text-gray-100" />
            </div>
        </div>

        <div className="mt-10">
            <p className="text-gray-600 dark:text-gray-200">
                <Anchorme linkComponent={CustomLink} target="_blank" rel="noreferrer noopener">
                    Lorem ipsum  dolor sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit praesentium illum iste veritatis omnis deserunt itaque fugit voluptatem ad! Id.
                    https://www.youtube.com/results?search_query=maybach
                </Anchorme>
            </p>
        </div>

        <div className="mt-5 w-full h-full ">
            {/* <video src={PostVideo} className="rounded-lg"  controls></video> */}
            <img className="w-full h-[100%] object-center object-cover rounded-lg max-h-[500px]" src="https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>

        <div className="flex mt-8 gap-10">
            <div className="flex items-center justify-center gap-1">
                <HiOutlineHeart className="text-gray-500 dark:text-gray-100 text-[20px] cursor-pointer" />
                <p className="text-gray-500 text-[13px] dark:text-gray-100 font-bold">40</p>
            </div>

            <div className="flex items-center gap-1 ">
                <GoComment className="text-gray-500 dark:text-gray-100 cursor-pointer" />
                <p className="text-gray-500 text-[13px] dark:text-gray-100" >10</p>
            </div>
        </div>
    </div>
};



export default Post