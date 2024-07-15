import React from 'react';
import image from "../../assets/global-payment-2.png"
import Image from "next/image";

const Component1 = () => {
	return (
		<div className="w-full flex py-20 px-20">
			<div className="w-1/2">
				<Image src={image} alt={"LOSPAY"}
					className=" h-auto -translate-x-52"
				/>
			</div>
			<div className="w-1/2">
				<h2 className="text-xl font-bold text-amber-500">Everything You Need to Accept Online Payments</h2>
				<p
					className="text-5xl font-black tracking-wider text-cyan-700 leading-relaxed"
				>
					One Platform. Every Payment Possibility
				</p>
				<p className="text-slate-700">Making international payments and receivables, easy and efficient.</p>
			</div>
		</div>
	);
};

export default Component1;
