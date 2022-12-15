import React from "react";

interface Props {
    children: JSX.Element
}

const PageWeapper: React.FC<Props> = ({ children }) => {
    return <div className="flex flex-col tablet:flex-row justify-center items-center gap-5 w-full h-full mt-32 relative px-5 flex-shrink ">
        {children}
    </div>;
};

export default PageWeapper;
