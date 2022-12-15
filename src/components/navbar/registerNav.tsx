import React from "react";
import { IoIosSunny } from "react-icons/io"
import { useRecoilState } from "recoil";
import user from "../../recoil/user";
import Buttons from "../UI/Button";

const RegisterNav = () => {
    const [colorTheme, setColorTheme] = useRecoilState(user);

    const changeColorTheme = () => {
        const newTheme = colorTheme.mode === "light" ? "dark" : "light"
        setColorTheme({ ...colorTheme, mode: newTheme });
    }

    return <div className="w-full h-20 bg-white dark:bg-[#1A1A1A] flex items-center justify-center relative ">
        <h1 className="md:text-2xl font-bold text-[#33DDFB] cursor-pointer dark:text-[#33DDFB]">View Media</h1>
        <div className="text-2xl  cursor-pointer absolute right-5">
            <Buttons
                click={changeColorTheme}
            >
                <IoIosSunny className="dark:text-[#eee]" />
            </Buttons>
        </div>
    </div>;
};

export default RegisterNav;
