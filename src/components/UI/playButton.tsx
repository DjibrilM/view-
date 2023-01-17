import React from "react";
import {BsFillPlayFill} from 'react-icons/bs'

const playButton = () => {
    return <button className="w-16 h-16 bg-[#70e7fc] z-40 relative rounded-full m-auto flex items-center justify-center ">
      <BsFillPlayFill className="text-4xl text-white" />
  </button>;
};

export default playButton;
