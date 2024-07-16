import React from 'react';
import Image from "next/image";

const Card3 = ({...props}) => {
	return (
		<div className="w-full inline-flex items-center justify-center gap-4">
			<Image src={props.img} alt={props.title}
				className="w-16 lg:w-14 h-16 lg:h-14"
			/>
			<div className="w-full">
				<h3 className="font-semibold text-cyan-600">{props.title}</h3>
				<p className="text-sm">{props.description}</p>
			</div>
		</div>
	);
};

export default Card3;
