'use client';
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const Header = () => {
	const Pages = ["Home", "About","Docs","Blog","Contact", "Login"];
	const [open, setOpen] = useState(false);
	const pathname = usePathname()
	const [height, setHeight] = useState(0);

	useEffect(() => {
		//clientHeight
		const handleScroll = () => {
			const scrollPosition = window.pageYOffset;
			//console.log(scrollPosition);
			if (scrollPosition >= 200 && scrollPosition <= 400) {
				console.log(200)
				setHeight(200);
			}
			if (scrollPosition > 400) {
				console.log(400)
				setHeight(400);
				//setShowButton(true);
			}
			if (scrollPosition === 0) {
				setHeight(0);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<div
				className={`hidden lg:flex justify-around top-0 w-full bg-white p-4 items-center text-slate-100 group z-40
				 ${height === 400 ? 'border-b shadow-lg h-16' : 'h-24'}
				${height === 400 && "sticky bg-opacity-50 backdrop-blur-xl transition-transform duration-[2000ms]" }
				${height === 200 && "-translate-y-24 transition-transform duration-[2000ms]" }`}
			>
				{/*${height === 200 && "-translate-y-24" }*/}
				<div className="text-3xl font-bold text-cyan-700">
					<Link  href="/">LOS<span className="text-amber-500">PAY</span></Link>
				</div>
				<div>
					<ul className="flex gap-4 text-slate-500 text-lg">
						{Pages.map((page) => (
							<li key={page} className={`hover:text-cyan-700 duration-200 
								${pathname === '/'+page.toLowerCase() && "text-cyan-500"}
								${pathname === '/' && page === 'Home' && "text-cyan-500"}`}

							>
								<Link href={`/${page === 'Home' ? '/': page.toLowerCase()}`}>{page}</Link>
							</li>
						))}
						<li>
							<Link className="px-5 py-2 bg-cyan-700 rounded text-xl text-white" href="/register">Register</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className={`block lg:hidden top-0 w-full bg-white text-slate-100 group z-30
				${height === 400 && "sticky bg-opacity-50 backdrop-blur-xl transition-transform duration-[2000ms] border-b shadow-lg" }
				${height === 200 && "-translate-y-32 transition-transform duration-[2000ms]" }`}>
				<div className="flex justify-between p-4">
					<div className="text-3xl font-bold text-cyan-700">
						<Link href="/">LOS<span className="text-amber-500">PAY</span></Link>
					</div>
					<button
						type="button"
						onClick={() => setOpen(!open)}
						className="cursor-pointer hover:text-amber-500 duration-200 "
					>
						{
							!open &&
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
							     stroke="none" className="w-6 h-6 stroke-cyan-700">
								<path strokeLinecap="round" strokeLinejoin="round"
								      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
							</svg>
						}
						{/*	close svg icon*/}
						{
							open &&
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
							     stroke="none" className="w-6 h-6 stroke-cyan-700">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
							</svg>
						}
					</button>
				</div>
				<div className={
					`w-full bg-slate-800 h-auto absolute top-12 p-4 mt-4 shadow-2xl shadow-slate-700 duration-1000 ${
						open ? "scale-100 left-0" : "pointer-events-none scale-0 -translate-y-96"
					}`
				}>
					<ul className="flex gap-4 flex-col text-sm md:text-lg">
						{Pages.map((page) => (
							<li key={page} className={`hover:text-cyan-700 duration-200
								${pathname === '/'+page.toLowerCase() && "text-cyan-700"}
								${pathname === '/' && page === 'Home' && "text-cyan-700"}`}

							>
								<Link href={`/${page === 'Home' ? '/': page.toLowerCase()}`}>{page}</Link>
							</li>
						))}
						<li>
							<Link className="px-5 py-2 bg-cyan-700 rounded text-xl text-white" href="/register">Register</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Header;
