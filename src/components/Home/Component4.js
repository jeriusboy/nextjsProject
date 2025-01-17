import React from 'react';
import Image from "next/image";
import image from "../../assets/accept-payment-img.png";
import {dataCard4} from "@/data";
import Card2 from "@/components/card/Card2";

const Component4 = () => {
	return (
		<div className="w-full flex py-10 px-5 lg:p-20 flex-col-reverse lg:flex-row gap-5 mt-32 lg:mt-44">
			<div>
				<Image src={image} alt="Accept Payment - LOSPAY"/>
			</div>
			<div className="flex flex-col">
				<h2 className="text-xl font-bold text-amber-500">The platform to help your business grow</h2>
				<p
					className="text-3xl lg:text-5xl font-black tracking-wider text-cyan-700 leading-10 mt-5"
				>
					Accept Payments Everywhere
				</p>
				<p className="text-slate-700 mt-10">Let your customers pay wherever and however they prefer. Work with
					one provider to accept, process, and settle payments.
				</p>

				<div>
					{
						dataCard4.map((card) => (
							<Card2 key={card.id} {...card} />
						))
					}
				</div>
			</div>
		</div>
	);
};

export default Component4;
