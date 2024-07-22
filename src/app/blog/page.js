import React from 'react';
import DefaultLayout from "@/layout/DefaulLayout";
import integration from "../../assets/integrations-banner-bg.jpg";
import Image from "next/image";

const Page = () => {
	return (
		<DefaultLayout>
			<div className="w-full bg-cyan-950 p-5 relative">
				<Image src={integration} alt="Blog" className="absolute inset-0 h-full w-full object-cover bg-opacity-80" />
				<div className="relative z-10 flex flex-col items-center justify-center h-full">
					<div className="flex flex-col items-center justify-center my-10 lg:my-20 gap-5">
						<h1 className="text-4xl lg:text-7xl font-bold text-white">Blog</h1>
						<p className="text-base lg:text-xl text-gray-300">Our Latest News</p>
					</div>
				</div>
			</div>

		</DefaultLayout>
	);
};

export default Page;
