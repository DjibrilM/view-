import React, { useState } from "react";
import { IoMdClose } from 'react-icons/io'
import { useRecoilValue } from "recoil";
import user from "../recoil/user";

interface Props {
    source: string,
}

const Image: React.FC<Props> = ({ source }): JSX.Element => {
    const [show, setShow] = useState<boolean>(false);
    const [loaded, setLoaded] = useState<boolean>(false);
    const theme = useRecoilValue(user);


    return (
        <>
            <section className="duration-[1s] transition w-full h-full fixed top-0 left-0 right-0 z-50 bg-[#60a5faa6] flex justify-center items-center px-3 " style={show ? { display: "flex", opacity: 1, transition: '5s' } : { display: "none", opacity: 0, transition: '5s' }}>
                <div className="w-[50px] h-[50px] border-2 border-white absolute top-10 left-10 rounded-full flex items-center justify-center cursor-pointer" onClick={() => setShow(false)}>
                    <IoMdClose className="text-white" />
                </div>
                <img onLoad={() => {
                    setTimeout(() => {
                        setLoaded(true)
                    }, 1000);      
                }} className="max-w-[600px] mt-5 min-w-[200px] w-full" src={source} alt="" />
            </section>

            {loaded &&
                <img onClick={() =>
                    setShow(true)}
                    className="h-full w-full max-[500px] object-cover"
                    src={source}
                    onLoad={() => {
                        setLoaded(true)
                        console.log(loaded);
                    }} />}
            {!loaded &&
                <div className={theme.mode === 'dark' ? "darkCard" : 'card'}>
                    <h1></h1>
                    <p></p>
                </div>
            }

        </>);
};

export default Image;
