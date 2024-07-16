import React from "react";
import Image from "next/image";
import moreFeature1 from "../../assets/more-features-icon-1.png";
import moreFeature2 from "../../assets/more-features-icon-2.png";
import moreFeature3 from "../../assets/more-features-icon-3.png";

function Component3() {
  return (
    <div className="w-full h-auto bg-cyan-800 py-20">
      <div className="text-2xl font-bold  py-3 w-full">
        <div className="flex justify-center    w-full">
          <div className="lg:w-2/5 w-full px-4 lg:px-0">
            <h2 className="text-lg  text-[#00fe83] text-center">
              Easy, Fast, and powerful
            </h2>
            <p className="text-slate-100 text-4xl md:text-5xl lg:text-5xl py-4 lg:py-0 leading-[40px] lg:leading-[65px] text-center">
              The platform to help your business grow
            </p>
            <p className="text-slate-100 text-sm font-light py-4 lg:leading-10 leading-7  text-center">
              One platform to accept payments, protect revenue, and control your
              finances.
            </p>
          </div>
        </div>
        <div className="w-full lg:px-24 px-8 xs:p-6  grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2">
          <div className=" py-7 lg:py-4 flex flex-col items-center text-slate-100 ">
            <Image src={moreFeature1} alt="LOSPAY" />
            <h3 className="text-xl font-semibold py-4">Global Coverage</h3>
            <p className="text-xs lg:text-sm font-light text-center">
              Grow into international markets by accepting payments wherever
              your customers are - via their preferred...
            </p>
          </div>
          <div className="py-7 lg:py-4  px-8 xs:p-6 flex flex-col items-center text-slate-100 ">
            <Image src={moreFeature2} alt="LOSPAY" />
            <h3 className="text-xl font-semibold py-4 xs:text-center">Simple integration</h3>
            <p className="text-xs lg:text-sm font-light text-center">
              Access our payments platform via an easy API integration, through
              your chosen shopping cart or...
            </p>
          </div>
          <div className=" py-7 lg:py-4 px-8 xs:p-6 flex flex-col items-center text-slate-100 ">
            <Image src={moreFeature3} alt="LOSPAY" />
            <h3 className="text-xl font-semibold py-4">Scalable</h3>
            <p className="text-xs lg:text-sm font-light text-center">
              We've built highly scalable infrastructure from the ground up for
              security, stability, velocity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component3;
