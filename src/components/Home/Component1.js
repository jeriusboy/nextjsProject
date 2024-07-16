import React from 'react';
import image from "../../assets/global-payment-2.png"
import Image from "next/image";
import Card1 from "@/components/card/Card1";
import {dataCard1} from "@/data";

const Component1 = () => {
	return (
		<div className="w-full flex py-10 px-5 lg:p-20 flex-col-reverse lg:flex-row">
			<div className="lg:w-1/2 mt-20 lg:mt-0">
				<Image src={image} alt={"LOSPAY"}
					className=" h-auto lg:-translate-x-52"
				/>
			</div>
			<div className="w-full lg:w-1/2">
				<h2 className="text-xl font-bold text-amber-500">Everything You Need to Accept Online Payments</h2>
				<p
					className="text-3xl lg:text-5xl font-black tracking-wider text-cyan-700 leading-relaxed mt-5"
				>
					One Platform. Every Payment Possibility
				</p>
				<p className="text-slate-700 mt-10">Making international payments and receivables, easy and efficient.</p>
				<div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
					{
						dataCard1.map((card) => (
							<Card1 key={card.id} {...card} />
						))
					}
				</div>
			</div>
		</div>
	);
};

export default Component1;
