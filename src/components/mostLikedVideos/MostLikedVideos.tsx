import React from "react";
import PlayButton from "../UI/playButton";
import { BsRecordCircleFill } from 'react-icons/bs'

const MostLikedVideos = () => {
    return <section className="w-full h-[15rem] p-3 mb-5 bg-white border rounded-lg relative">
        <h1 className="font-semi-bold text-gray-500 text-sm my-2 flex items-center gap-2 ">Current top live <BsRecordCircleFill className="text-red-500" /></h1>

        <div className="w-full  h-[80%] mt-2  flex-row gap-2 max-w-none overflow-auto flex">
            <div className="h-full border flex items-center justify-center  max-w-none min-w-none w-52 rounded-lg bg-gray-100 overflow-hidden relative ">
                <img src="https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/0d82f3ef175e.jpg" className="w-full h-full object-cover" alt="" />
            </div>


            <div className="h-full border flex items-center justify-center  max-w-none min-w-none w-52 rounded-lg bg-gray-100 overflow-hidden relative ">
                <img src=" https://i.ytimg.com/vi/0DpZEiC9qV8/maxresdefault.jpg
" className="w-full h-full object-cover" alt="" />
            </div>
        </div>

    </section>;

};



export default MostLikedVideos;
