import React from "react";
import { dataCard5 } from "@/data";
import Card5 from "../card/Card5";

function Component5() {
  return (
    <div className="w-full h-auto mb-7">
      <div className="w-full lg:h-[600px] md:h-[490px] h-[710px] lg:py-10 md:py-6 py-4  bg-cyan-700 ">
        <div className="flex pt-16  items-center flex-col w-full ">
          <div className="lg:w-[41%]  w-full px-4 lg:px-0">
            <h2 className="text-lg  text-[#00fe83] text-center">
              Solutions built for your business model
            </h2>
            <p className="text-slate-100 text-4xl md:text-5xl lg:text-5xl py-4 lg:py-0 leading-[40px] lg:leading-[65px] text-center">
              All-in-one finance for growing businesses
            </p>
            <p className="text-slate-100 text-sm font-light lg:py-4 lg:leading-7 leading-7  text-center">
              Save time and money with borderless payments, corporate cards,
              expense management, and more. All in one account.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-4 lg:px-40 grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-cols-2 pb-5 bg-transparent lg:-mt-44 -mt-[380px] md:-mt-32">
        {dataCard5.map((card) => (
          <Card5 key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Component5;
