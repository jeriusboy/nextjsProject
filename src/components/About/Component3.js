import { dataCard7 } from "@/data";
import React from "react";
import Card7 from "../card/card7";

function Component3() {
  return (
    <div className="w-full flex justify-center items-center flex-col px-3 py-10 lg:px-40 bg-[#F5F6FC]">
      <div className=" w-full lg:w-2/3 text-center pt-10 ">
        <h2 className="text-lg font-semibold text-cyan-500">Our values</h2>
        <p className="text-3xl lg:text-5xl leading-10 lg:leading-[65px] font-bold text-cyan-800">
          The values that drive everything we do
        </p>
        <p className="text-sm font-light text-cyan-800">
          Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo
          aliquet elit sed
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 w-full py-4  mt-16">
        {dataCard7.map((card) => (
          <Card7 key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Component3;
