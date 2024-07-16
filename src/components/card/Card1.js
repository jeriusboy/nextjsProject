import React from 'react';
import Image from "next/image";

const Card1 = ({...props}) => {
	return (
		<div className="border border-cyan-900/30 lg:border-cyan-900/50 p-5 rounded-3xl hover:border-transparent duration-500 hover:shadow-2xl">
			<div className="flex justify-center">
				<Image
					src={props.img}
					alt={"LOSPAY"}
					className="w-16 h-16"
				/>
			</div>
			<h2 className="text-2xl font-bold text-cyan-600 text-center mt-10">{props.title}</h2>
			<p className=" text-cyan-700 text-center mt-10">
				{props.description}
			</p>
		</div>
	);
};

export default Card1;
