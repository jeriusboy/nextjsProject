import React from "react";
import Image from "next/image";
import BannerImage from "../../assets/payment-banner.png";

function Component2() {
  return (
    <div className="bg-[#F2F3F9] w-full pl-5 lg:pb-20 lg:pl-32 flex pb-14">
      {/* Banner content */}
      <div className="pt-16 w-full lg:w-2/4">
        <p className="text-2xl  font-medium text-amber-400 py-3">
          International Payments
        </p>
        <h1 className="text-cyan-700 lg:text-7xl text-4xl md:text-7xl leading-normal lg:leading-[99px]  font-extrabold">
          Making Global Payments Simple
        </h1>
        <div className=" lg:pr-20 pt-4">
          <p className="text-cyan-700 lg:text-2xl  text-lg leading-8 font-light  ">
            Start growing your business with our innovative payment solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:flex lg:items-center grid-rows-4 md:flex md:items-center  md:grid-cols-2 pt-8">
          <div>
            <button className="bg-amber-500 leading-[30px] xs:text-sm hover:bg-transparent hover:ease-in hover:text-amber-500 mr-4 font-semibold text-slate-100 px-5 py-1 rounded border border-transparent hover:border hover:border-cyan-950">
              Open a free account
            </button>
          </div>
          <div>
            <button className="hover:bg-amber-500 leading-[30px] bg-transparent hover:ease-in text-amber-500 font-semibold hover:text-slate-100 px-5 py-1 rounded border border-cyan-950 hover:border-transparent hover:border">
             
              see How it works
            </button>
          </div>
        </div>
      </div>
      <div className="w-2/4 pt-10 hidden lg:block md:hidden">
        <Image
          src={BannerImage}
          width={1000}
          height={1000}
          alt="banner imgage"
        />
      </div>
    </div>
  );
}

export default Component2;
