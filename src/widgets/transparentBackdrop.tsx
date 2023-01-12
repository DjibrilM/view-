import React from "react";
interface Props {
    onClick: Function
}

const transparentBackdrop: React.FC<Props> = ({ onClick }) => {
    return <div onClick={() => onClick()} className="w-full h-full fixed top-0 left-0 right-0 bottom-0 z-[1000]"></div>;
};

export default transparentBackdrop;
