'use client'
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import facebook from "../../assets/social/facebook.png";
import instagram from "../../assets/social/instagram.png";
import twitter from "../../assets/social/twitter.png";
import linkedin from "../../assets/social/linkedin.png";
import sendMail from "../../assets/send.png";

const Footer = () => {
	const [showButton, setShowButton] = useState(false);
	useEffect(() => {
		//clientHeight
		const handleScroll = () => {
			const scrollPosition = window.pageYOffset;
			//console.log(scrollPosition);
			if (scrollPosition > 200) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	return (
		<footer className="w-full">
			<div className={`transition-opacity duration-1000 ${showButton ? 'relative z-50 opacity-100' : 'opacity-0 pointer-events-none'}`}>
				<button
					onClick={scrollToTop}
					className="fixed right-5 bottom-5 mr-2 bg-white rounded-full p-1 lg:shadow-2xl shadow-xl drop-shadow-2xl"
				>
					<svg
						viewBox="0 0 24 24"
						fill="currentColor"
						className="lg:w-10 lg:h-10 w-8 h-8"
					>
						<path d="M6.293 11.293l1.414 1.414L12 8.414l4.293 4.293 1.414-1.414L12 5.586z"/>
						<path d="M6.293 16.293l1.414 1.414L12 13.414l4.293 4.293 1.414-1.414L12 10.586z"/>
					</svg>
				</button>
			</div>
			<div className="w-full flex justify-center items-center">
				<div className="rounded-lg bg-cyan-600 p-4 w-full mx-4 lg:mx-0 lg:w-1/2 translate-y-28 h-52 relative">
					<Image src={sendMail} alt="Send Mail" className="w-44 opacity-50"/>
					<div className='absolute inset-0 flex justify-center items-center flex-col lg:px-28 px-4'>
						<h2 className="text-white text-3xl lg:text-4xl text-center">Subscribe to Our Newsletter</h2>
						<div className="w-full mt-5 relative">
							<input type="text"
							       className="bg-white rounded-full w-full h-16 px-4 outline-none pr-20"
							       placeholder="Enter your email address"
							/>
							<button className="absolute right-0 top-2 mr-2">
								{/*	svg arrow right*/}
								<svg
									fill="currentColor"
									viewBox="0 0 16 16"
									className="w-12 h-12"
								>
									<path
										d="M8 0a8 8 0 110 16A8 8 0 018 0zM4.5 7.5a.5.5 0 000 1h5.793l-2.147 2.146a.5.5 0 00.708.708l3-3a.5.5 0 000-.708l-3-3a.5.5 0 10-.708.708L10.293 7.5H4.5z"/>
								</svg>

							</button>
						</div>

					</div>
				</div>
			</div>
			<div className="w-full bg-cyan-950 px-5 lg:px-44 pt-44 pb-10">
				<div className="flex flex-col lg:flex-row justify-between">
					<div className="flex gap-4 justify-center lg:justify-around items-center text-white font-semibold">
						<Link href="/about">About Us</Link>
						<Link href="/contact">Contact Us</Link>
						<Link href="/fees">Fees</Link>
					</div>
					<div className="p-4 flex justify-center gap-4">
						<Image src={facebook} alt="Facebook" width={30} height={30}/>
						<Image src={linkedin} alt="Facebook" width={30} height={30}/>
						<Image src={instagram} alt="Facebook" width={30} height={30}/>
						<Image src={twitter} alt="Facebook" width={30} height={30}/>
					</div>
				</div>
				<div className="w-full py-5">
					<div className="w-full h-[1px] bg-gray-300 "/>
				</div>
				<div className="flex justify-between flex-col-reverse lg:flex-row">
					<div className="flex gap-4 justify-around items-center text-white font-semibold">
						<p className="text-sm">Copyright © 2022 LOSPAY. All Rights Reserved.</p>
					</div>
					<div className="p-4 flex gap-4 text-white font-semibold items-center justify-center">
						<p>Terms</p>
						<p>Privacy</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
