import React from 'react';
import Link from "next/link";
import Image from "next/image";
import facebook from "../../assets/social/facebook.png";
import instagram from "../../assets/social/instagram.png";
import twitter from "../../assets/social/twitter.png";
import linkedin from "../../assets/social/linkedin.png";

const Footer = () => {
	return (
		<footer className="w-full">
			<div className="w-full bg-cyan-950 px-44 pb-10">
				<div className="flex justify-between">
					<div className="flex gap-4 justify-around items-center text-white font-semibold">
						<Link href="/about">About Us</Link>
						<Link href="/contact">Contact Us</Link>
						<Link href="/fees">Fees</Link>
					</div>
					<div className="p-4 flex gap-4">
						<Image src={facebook} alt="Facebook" width={30} height={30} />
						<Image src={linkedin} alt="Facebook" width={30} height={30} />
						<Image src={instagram} alt="Facebook" width={30} height={30} />
						<Image src={twitter} alt="Facebook" width={30} height={30} />
					</div>
				</div>
				<div className="w-full py-5">
					<div className="w-full h-[1px] bg-gray-300 "/>
				</div>
				<div className="flex justify-between">
					<div className="flex gap-4 justify-around items-center text-white font-semibold">
						<p className="text-sm">Copyright © 2022 LOSPAY. All Rights Reserved.</p>
					</div>
					<div className="p-4 flex gap-4 text-white font-semibold">
						<p>Terms</p>
						<p>Privacy</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
