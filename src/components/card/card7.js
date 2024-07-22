import React from "react";
import Image from "next/image";

const Card7 = ({ ...props }) => {
  return (
    <div className="p-5 bg-white rounded-lg flex ">
      <div>
        <Image src={props.img} alt="values icons" className="h-[70px] w-[140px]"/>
      </div>
      <div className="pl-5">
        <h4 className="text-cyan-800 text-2xl font-semibold pb-5">{props.title}</h4>
        <p className="text-sm leading-6">{props.description}</p>
      </div>
    </div>
  );
};
export default Card7;
