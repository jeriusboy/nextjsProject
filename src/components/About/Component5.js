import React from "react";
import Image from "next/image";
import location from "../../assets/house-icon.png";
import mail from "../../assets/message.png"
import phone from "../../assets/call-48.png"

function Component5() {
  return (
    <div className=" w-full my-14 lg:px-40 px-3 ">
      <div className="background-image w-full h-96 flex items-center flex-col">
        <div className="flex items-center flex-col w-full lg:w-2/3">
          <h2 className="text-lg font-semibold text-cyan-500">Our offices</h2>
          <p className="text-3xl lg:text-[45px] text-center leading-10 lg:leading-[60px] font-bold text-cyan-800">
            Come and visit our offices around the world
          </p>
          <p className="text-xs font-light text-center text-cyan-800 py-5 lg:px-28 px-14">
            Lorem ipsum dolor sit amet consectetur adipiscing elit diam
            malesuada nisl enim phasellus condimentum.
          </p>
          <div className="bg-white shadow-2xl p-6 w-full rounded-lg mt-4 ">
            <div className="flex items-center">
              <Image src={location}  className="w-14 h-10"/>
              <h3 className="px-6 text-2xl font-bold text-cyan-800"> Douala - Cameroon</h3>
              
            </div>
            <div className="flex items-center pt-4 px-4">
              <Image  src={mail} className="h-5 w-5"/>
              <p className="px-4 text-cyan-800">webdevg@landofstudies.com</p>
            </div>
            <div className="flex items-center pt-3 px-4">
              <Image  src={phone} className="h-7 w-7"/>
              <div>
              <p className="px-4 text-cyan-800 font-semibold">+237 675 601 877</p>
              <p className="px-4 text-cyan-800 font-semibold">+237 694 804 754</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component5;
