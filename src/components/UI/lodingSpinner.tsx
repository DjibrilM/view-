import React from "react";
import spinner from "../../assets/vectors/loading-gif.gif"

const Loading = () => {
    return <div>
        <img className="w-10" src={spinner} alt="" />
    </div>;
};

export default Loading;
