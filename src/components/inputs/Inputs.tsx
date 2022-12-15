
import { TextField, Box } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";

interface Props {
    inputType: string,
    label: string,
    onChange: Function,
    valid: boolean,
    errorMessage: string,
    disabled: boolean
}


const Inputs: React.FC<Props> = ({ inputType, label, onChange, valid, errorMessage, disabled }): JSX.Element => {
    const [inputFocus, setInputFocused] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>();
    const inputElement = useRef<any>();
    const [Error, SetError] = useState<boolean>(false);
    const [inputTouched, setInputTouched] = useState<boolean>(false)


    const focus = () => {
        setInputTouched(true)
        if (!inputFocus) setInputFocused(true);
        if (valid === false) {
            SetError(true)
        }
    }

    const blur = () => {
        if (inputValue) return
        setInputFocused(false);
    }

    useEffect(() => {
        if (inputTouched) {
            if (valid) SetError(false);
            if (!valid) SetError(true);
        }
    }, [valid])

    return (
        <div className="w-full">
            <div className={`w-full relative  h-[50px]  rounded-sm bg-transparent my-2 border`} style={
                Error ? {
                    "borderColor": "red"
                } : { borderColor: inputFocus ? "#33DDFB" : "#ddd" }}>
                <label
                    style={inputFocus === true ? {
                        bottom: "2.5rem",
                        color: Error ? "red" : "#33DDFB"
                    } : {
                        bottom: "0.8rem",
                        color: Error ? "red" : ""
                    }}
                    htmlFor=""
                    className="text-[#1A1A1A]  ml-4  duration-200 mt-3 dark:text-gray-100 bg-white dark:bg-[#1A1A1A] px-2 absolute">{label}</label>
                <input
                    disabled={disabled}
                    autoComplete="off"
                    onChange={(e: any) => {
                        setInputValue(e.target.value);
                        onChange(e.target.value)
                    }}
                    onBlur={() => blur()}
                    onFocus={() => {
                        focus();
                    }} className="dark:text-gray-100 p-4 bg-transparent h-full outline-none w-full disabled:cursor-not-allowed" type={inputType} ref={inputElement} required />
            </div>
            <p className={`text-[10px] text-red-400  ${Error ? '' : "opacity-0"} `}>{errorMessage}</p>
        </div>
    )
};

export default Inputs;
