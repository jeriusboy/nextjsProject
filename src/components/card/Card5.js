import React from 'react';
import Image from "next/image";

const Card5 = ({...props}) => {
	return (
        <div className="p-4  rounded-2xl bg-white drop-shadow-xl">
			<div className="flex justify-center">
				<Image
					src={props.img}
					alt={"LOSPAY"}
					className="w-24 h-26 pt-4"
				/>
			</div>
			<h2 className="text-lg font-semibold text-cyan-600 text-center py-4">{props.title}</h2>
			<p className="text-sm text-cyan-700 font-light text-center">
				{props.description}
			</p>
		</div>
	);
};

export default Card5;
