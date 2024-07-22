import { dataCard8 } from "@/data";
import React from "react";
import Card8 from "../card/card8";

function Component4() {
  return (
    <div className="w-full pt-24 lg:px-40  ">
      <div className="flex justify-end w-full flex-col items-center">
        <div className="flex items-center flex-col w-full lg:w-2/4">
          <h2 className="text-lg font-semibold text-cyan-500">Our team</h2>
          <p className="text-3xl lg:text-[45px] text-center leading-10 lg:leading-[60px] font-bold text-cyan-800">
            The amazing team behind our company
          </p>
          <p className="text-sm font-light text-center text-cyan-800">
            We are a team of entrepreneurs, payment specialists and blockchain
            enthusiasts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:px-6 xs:px-5 xxs:px-4 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:mt-14 md:mt-6 mt-4">
          {dataCard8.map((card) => (
            <Card8 key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Component4;
