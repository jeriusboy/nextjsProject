import React from 'react';
import Image from 'next/image';
import image from '../../assets/features-built-frame.png';
import {dataCard6} from "@/data";
import Card3 from "@/components/card/Card3";

const Component6 = () => {
	return (
		<div className="w-full mt-20 px-4 lg:px-44">
			<div className="flex justify-center items-center flex-col mx-4">
				<span className="text-amber-500">Features built for business</span>
				<h2 className="text-3xl lg:text-5xl font-bold text-cyan-600 text-center my-10 px-10 lg:px-44">Do Business With Confidence</h2>
				<p className="text-slate-700 text-center">
					Make Money Mover the hub of your cross-border and cross-currency payments and collections and benefit from our intuitive user interface and payment tracking.
				</p>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-20">
					<div className="flex flex-col gap-8">
						{dataCard6.map((card) => (
							<Card3 key={card.id} {...card} />
						))}
					</div>
					<div className="mt-10 lg:mt-0">
						<Image src={image} alt="Features built for business - LOSPAY" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Component6;
