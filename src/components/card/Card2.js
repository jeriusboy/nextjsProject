import React from 'react';

const Card2 = ({...props}) => {
	return (
		<div className="w-full border border-slate-500/10 rounded-xl p-4 my-8">
			<h3 className="text-cyan-600 py-2 font-semibold">{props.title}</h3>
			<p className="text-slate-700 text-sm pb-1">{props.description}</p>
		</div>
	);
};

export default Card2;
