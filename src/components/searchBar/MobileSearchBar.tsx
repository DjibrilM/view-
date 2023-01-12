import React from "react";
import { IoSearchOutline } from 'react-icons/io5';
import searchVector from '../../assets/vectors/webpage.png'
import { AiOutlineMore, AiOutlineHistory } from 'react-icons/ai';
import Buttons from "../UI/Button";
import TransparentBackdrop from "../../widgets/transparentBackdrop";
import { useState } from "react";
import searchBar from "../../recoil/searchBar";
import { useRecoilState } from "recoil";


const MobileSearchBar = () => {
    const [searchBatState, setSearchBarState] = useRecoilState<{ mobileMenuIsOpen: boolean }>(searchBar);
    const [showHistoryButton, setHistoryButton] = useState<boolean>(false);

    const showHistoryButtonFunc = () => {
        setHistoryButton(!showHistoryButton);
    }

    const openMobileSearchBar = () => {
        const previouseValue: any = { ...searchBatState };
        console.log(previouseValue.mobileMenuIsOpen);
        previouseValue.mobileMenuIsOpen = false;
        setSearchBarState({ ...previouseValue });
    }


    return (
        <>
            {showHistoryButton && <TransparentBackdrop onClick={() => { if (showHistoryButton) setHistoryButton(false) }} />}
            {searchBatState.mobileMenuIsOpen && <div className="w-full h-full bg-[#00000091] fixed left-0 right-0 top-0 bottom-0 md:hidden" onClick={() => openMobileSearchBar()}></div>}

            <div style={searchBatState.mobileMenuIsOpen ? { top: "0" } : { top: "-1000px" }} className="w-full h-full  absolute z-[2000]   bg-white left-0 right-0 flex items-center px-10 md:hidden">
                <input type="text" className="outline-none w-full h-full mr-2" placeholder="Search..." />
                <div className="flex gap-5 relative left-5">
                    <Buttons click={() => showHistoryButtonFunc()}>
                        <AiOutlineMore className="text-2xl cursor-pointer" />
                    </Buttons>


                    <div className='w-32 overflow-hidden bg-white gap-2 rounded shadow-lg h-10 right-4 absolute border top-10 flex items-center justify-center cursor-pointer z-[200] duration-200 ' style={showHistoryButton ? { opacity: 1 } : { opacity: 0 }}>
                        <AiOutlineHistory />
                        <p>History</p>
                    </div>
                </div>
            </div>


            <div style={searchBatState.mobileMenuIsOpen ? { opacity: 1, display: "flex", transition: "1s" } : { opacity: 0, display: "none", transition: "1s" }} className="w-full h-60 absolute border-t bg-white mt-[20rem] left-0 right-0 md:hidden flex flex-col items-center justify-center">
                <h1 className="font-bold mb-5 text-gray-600">Search Anything</h1>
                <img src={searchVector} className="w-10" alt="" />
            </div>

        </>
    );
};

export default MobileSearchBar;
