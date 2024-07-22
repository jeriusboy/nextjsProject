import React from "react";
import Image from "next/image";

const Card8 = ({ ...props }) => {
  return (
    <div className="px-14 py-4 shadow-lg flex flex-col rounded-lg  ">
      <Image src={props.img} />
      <p className="text-center py-4 font-semibold text-cyan-700">
        {props.names}
      </p>
      <p className="text-sm text-center text-cyan-500">{props.position}</p>
      <div className="flex py-4 justify-center items-center">
        <Image src={props.facebook} className="px-[3px]"/>
        <Image src={props.Linkedin} className="px-[3px]"/>
        <Image src={props.ig} className="px-[3px]"/>
        <Image src={props.twitter} className="px-[3px]"/>
      </div>
    </div>
  );
};

export default Card8;
