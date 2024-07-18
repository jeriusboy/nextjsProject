import React from "react";
import Image from "next/image";
import Employee from "../../assets/stats-info-icon-1.png";
import Offices from "../../assets/stats-info-icon-2.png";
import Volume from "../../assets/stats-info-icon-3.png";

function Component2() {
  return (
    <div className="py-16 w-full px-7  lg:px-36 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
      <div className=" p-3   rounded-xl  flex flex-col items-center justify-center">
        <span className="bg-cyan-600 text-slate-100 p-5 rounded-full">
          <Image src={Employee} alt="Employee" />
        </span>
        <h3 className="text-lg font-semibold py-4 text-center text-cyan-800">
          2000+ employees & 100+ nationalities
        </h3>
      </div>
      <div className="p-6  rounded-xl lg:px-12  flex flex-col items-center justify-center">
        <span className="bg-cyan-600 text-slate-100 p-5 rounded-full">
          <Image src={Offices} alt="Employee" />
        </span>
        <h3 className="text-lg   font-semibold py-4 text-center text-cyan-800">
        27+ offices around the world
        </h3>
      </div>
      <div className="p-6  rounded-xl flex flex-col items-center justify-center">
        <span className="bg-cyan-600 text-slate-100 p-5 rounded-full">
          <Image src={Employee} alt="Employee" />
        </span>
        <h3 className="text-lg font-semibold py-4 text-center text-cyan-800 ">
        €303.6 BN billion in processed volume in 2020
        </h3>
      </div>
    </div>
  );
}

export default Component2;
