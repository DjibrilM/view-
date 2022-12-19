import iphonePublicity from "../../assets/videos/iphone14.mp4";
import SonnyPublicity from "../../assets/videos/playstation.mp4";
import applewatch from "../../assets/videos/Apple Watch Ultra _ Call To The Wild _ Apple.mp4";

import React, { useState } from "react";
import { BsApple } from "react-icons/bs"
import { Swiper, SwiperSlide } from "swiper/react";
import { SiNike } from "react-icons/si"
import { FaPlaystation } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, } from "swiper";



interface props {
    classes: string,
}

interface Add {
    name: string,
    type: string,
    link: string,
    icon: Function,
    price?: number | null,
    description: string,
    website: string
}

const adds: {
    name: string,
    type: string,
    link: string,
    icon: Function,
    price?: number | null,
    description: string,
    website: string,
    descriptiveLink: string
}[] = [
        {
            name: "apple watch ultra",
            type: "video",
            link: applewatch,
            icon: () => <div><BsApple className="text-white" /></div>,
            price: 949.39,
            description: "Lorem ipsum dolor Lorem  ipsum dolor ipsum dolor sit amet consectetur adipisicing elit. Error, alias? sit amet consectetur adipisicing elit. Ducimus, voluptate?",
            website: "https://www.apple.com",
            descriptiveLink: "apple.com"
        },
        {
            name: "iphone 14",
            type: "video",
            link: iphonePublicity,
            icon: () => <div><BsApple className="text-white" /></div>,
            price: 999.99,
            description: "Lorem ipsum dolor Lorem ipsum dolor sit  adipisicing elit. Error, alias? sit amet consectetur adipisicing elit. Ducimus, voluptate?",
            website: "https://www.apple.com",
            descriptiveLink: "apple.com"
        },
        {
            name: "play station plus",
            type: "video",
            link: SonnyPublicity,
            icon: () => <div><FaPlaystation className="text-2xl text-white" /></div>,
            description: "dolor sit amet consectetur adipisicing elit. Error, alias? sit amet consectetur adipisicing elit. Ducimus, voluptate?",
            website: "https://www.playstation.com/en-us/ps5/",
            descriptiveLink: "sony.com"
        },
        {
            name: "Iphone 14",
            type: "picture",
            link: "https://bgr.com/wp-content/uploads/2022/03/iphone-14-pro-3d-renders-2.jpg?quality=82&strip=all",
            icon: () => <div><BsApple className="text-white" /></div>,
            price: 999.99,
            description: "Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, alias? sit amet consectetur adipisicing elit. Ducimus, voluptate?",
            website: "https://www.apple.com",
            descriptiveLink: "apple.com",
        },
        {
            name: "jordan 11",
            type: "picture",
            link: "https://media.blackandwhite-ff.com/10000/11cad6bc-4c7e-4d8a-8aca-95b8dd6a1e92_02-aj11-colourways.jpg",
            icon: () => <div><SiNike className="text-white text-2xl" /></div>,
            price: 420,
            description: " ipsum dolor sit amet consectetur adipisicing elit. Error, alias? sit amet consectetur adipisicing elit. Ducimus, voluptate?",
            website: "https://www.apple.com",
            descriptiveLink: "jordan.com",
        },
        {
            name: "playstation 5",
            type: "picture",
            link: "https://www.geeknewsnow.net/wp-content/uploads/2021/12/PS5.jpg",
            icon: () => <div><FaPlaystation className="text-2xl text-white" /></div>,
            price: 499.9,
            description: "Lorem ipsum dolor Lorem  consectetur adipisicing elit. Error, alias? sit amet consectetur adipisicing elit. Ducimus, voluptate?",
            website: "https://www.playstation.com/en-us/ps5/",
            descriptiveLink: "sony.com"

        },
        {
            name: "Dualsense Age",
            type: "picture",
            link: "https://azcd.harveynorman.com.au/media/catalog/product/1/6/164588-ps5-dualsense-edge-wireless-controller.jpg",
            icon: () => <div><FaPlaystation className="text-2xl text-white" /></div>,
            price: 298.9,
            description: "Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, alias? sit amet consectetur Ducimus, voluptate?",
            website: "https://www.playstation.com/en-us/ps5/",
            descriptiveLink: "sony.com"
        },

    ]




const Adds: React.FC<props> = ({ classes }) => {
    const [activeIndex, setActiveIndex] = useState<any>(adds[0]);
    return (
        <>
            <aside className={`${classes} w-full pc:max-w-[400px] min-w-[300px] duration-200  p-4 bg-white border dark:border-none dark:bg-[#1A1A1A] rounded-lg   top-32 `}>
                <p className="mb-2 dark:text-gray-200 text-gray-700">Add</p>
                <Swiper
                    direction="vertical"
                    allowTouchMove={false}
                    onSlideChange={(arg) => {
                        setActiveIndex({ ...adds[arg.activeIndex] })
                    }}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: false,
                    }}

                    navigation={false}
                    modules={[Autoplay]}
                    className={"mySwiper" + " w-full h-[320px] pc:h-[250px]"}
                >

                    {
                        adds.map((add) => {
                            if (add.type === 'picture') {
                                return (
                                    <SwiperSlide className="rounded overflow-hidden relative cursor-pointer">
                                        <img src={add.link}
                                            className="h-full w-full object-cover"
                                            alt="" />
                                        <div className="band flex justify-between">
                                            <div className="flex items-center gap-2">
                                                {add.icon()}
                                                <h1 className="text-gray-200 font-bold">{add.name}</h1>
                                            </div>
                                            <p className="text-white">${add.price}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            } else {
                                return (
                                    <SwiperSlide className="rounded overflow-hidden relative cursor-pointer">
                                        <video src={add.link} autoPlay={true} controls={false} muted className={'h-full w-full object-cover'} onEnded={(event: any) => {
                                            event.target.play();
                                        }} />
                                        <div className="band flex justify-between">
                                            <div className="flex items-center gap-2">
                                                {add.icon()}
                                                <h1 className="text-gray-200 font-bold">{add.name}</h1>
                                            </div>
                                            <p className="text-white">{add.price && `$ ${add.price}`}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            }

                        })
                    }
                </Swiper>
                <div className="flex justify-between mt-3">
                    <h4 className="text-gray-500 font-semibold">{activeIndex.name}</h4>
                    <a href={activeIndex.link} className="text-gray-300 hover:text-gray-800 duration-200">{activeIndex.descriptiveLink}</a>
                </div>
                <p className="mt-4 text-gray-400">{activeIndex.description}</p>
            </aside>
        </>)
};

export default Adds;
