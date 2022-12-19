import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai"
import { IoIosSunny } from "react-icons/io"
import { MdMessage, MdClose } from "react-icons/md"
import { IoNotifications } from "react-icons/io5";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import DropDown from "../dropDown/dropDown";
import {RxVideo} from 'react-icons/rx'


import {
  useRecoilState,
} from 'recoil';
import userState from "../../recoil/user"
import Buttons from "../UI/Button";


const Navbar = (): JSX.Element => {
  const [colorTheme, setColorTheme] = useRecoilState(userState);
  const [toggleMenu, SetToggleMenu] = useState<boolean>(false)


  const changeColorTheme = () => {
    const newTheme = colorTheme.mode === "light" ? "dark" : "light";
    setColorTheme({ ...colorTheme, mode: newTheme });
  }

  const toggleMenufunc = () => {
    SetToggleMenu(!toggleMenu);
  }

  return <header className="fixed top-0 z-50 border-b dark:border-gray-800 h-20 w-full bg-white items-center flex justify-between px-10 dark:bg-[#1A1A1A] header">
    <div className="flex gap-5 items-center justify-center">
      <h1 className=" md:text-2xl font-bold text-[#33DDFB] cursor-pointer dark:text-[#33DDFB]"> View Media.</h1>
      <div className="w-72 h-10 bg-lightGray rounded-md relative dark:bg-[#4D4D4D] hidden md:block" >
        <AiOutlineSearch className="text-00D5FA absolute right-5 top-3 cursor-pointer dark:text-[#F6F6F6]" />
        <input type="text" className="bg-transparent w-[80%] outline-none h-full p-3 font-[12px] dark:text-gray-100" placeholder="search..." />
      </div>
    </div>


    {/* //menu for small screens  */}
    <div className="relative md:hidden">
      <div
        style={toggleMenu ? {
          height: "400px",
          width: "250px",
          opacity: "1"
        } : {
          width: "0",
          height: "0px",
          opacity: "0"
        }}
        className="duration-500 overflow-hidden fixed right-0 top-0 bg-gray-200 flex flex-col justify-center items-center gap-6 z-40">
        <div className="text-2xl  cursor-pointer absolute top-1 left-2">
          <Buttons
            click={() => toggleMenufunc()}
          >
            <MdClose className="dark:text-[#333]" />
          </Buttons>
        </div>
        <div className="text-2xl  cursor-pointer">
          <Buttons
            click={changeColorTheme}
          >
            <IoIosSunny className="dark:text-[#333]" />
          </Buttons>
        </div>



        <div className="">
          <Buttons
            click={() => { }}
          >
            <MdMessage className="dark:text-[#333]" />
          </Buttons>
        </div>
        <div className="">
          <Buttons
            click={() => { }}
          >
            <IoNotifications className="dark:text-[#333]" />
          </Buttons>
        </div>
        <div className="">
          <Buttons
            click={() => { }}
          >
            <BsFillQuestionCircleFill className="dark:text-[#333]" />
          </Buttons>
        </div>

        <div className="">
          <DropDown />
        </div>
      </div>
      <div className="">
        <Buttons
          click={() => toggleMenufunc()}
        >
          <AiOutlineMenu onClick={() => toggleMenufunc()} className="md:hidden text-[#333] cursor-pointer text-2xl dark:text-lightBackground" />
        </Buttons>
      </div>

    </div>

    <div className="hidden  md:flex items-center justify-center gap-6">
      <div className="text-2xl  cursor-pointer">
        <Buttons
          click={changeColorTheme}
        >
          <IoIosSunny className="dark:text-[#F6F6F6]" />
        </Buttons>
      </div>
      <div className="">
        <Buttons
          click={() => { }}
        >
          <MdMessage className="dark:text-[#F6F6F6]" />
        </Buttons>
      </div>
      <div className="">
        <Buttons
          click={() => { }}
        >
          <IoNotifications className="dark:text-[#F6F6F6]" />
        </Buttons>
      </div>
      <div className="">
        <Buttons
          click={() => { }}
        >
          <BsFillQuestionCircleFill className="dark:text-[#F6F6F6]" />
        </Buttons>
      </div>

      <div className="">
        <Buttons
          click={() => { }}
        >
          <RxVideo className="dark:text-[#F6F6F6]" />
        </Buttons>
      </div>


      <div className="">
        <DropDown />
      </div>
    </div>
  </header>;
};

export default Navbar;
