'use client';
import React, {useState} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const Header = () => {
	const Pages = ["Home", "About","Docs","Blog","Contact", "Login"];
	const [open, setOpen] = useState(false);
	const pathname = usePathname()
	return (
		<>
			<div
				className="hidden lg:flex justify-around top-0 sticky w-full bg-slate-800 p-4 h-24  items-center text-slate-100 group z-40">
				<div className="text-3xl font-bold text-cyan-700">
					<Link  href="/">LOS<span className="text-amber-500">PAY</span></Link>
				</div>
				<div>
					<ul className="flex gap-4">
						{Pages.map((page) => (
							<li key={page} className={`hover:text-cyan-700 duration-200 text-xl 
								${pathname === '/'+page.toLowerCase() && "text-cyan-700"}
								${pathname === '/' && page === 'Home' && "text-cyan-700"}`}

							>
								<Link href={`/${page === 'Home' ? '/': page.toLowerCase()}`}>{page}</Link>
							</li>
						))}
						<li>
							<Link className="px-5 py-2 bg-cyan-700 rounded text-xl" href="/register">Register</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="block lg:hidden top-0 sticky w-full bg-slate-800 text-slate-100 group z-30">
				<div className="flex justify-between p-4">
					<div className="text-3xl font-bold text-cyan-700">
						<Link href="/">LOS<span className="text-amber-500">PAY</span></Link>
					</div>
					<button
						type="button"
						onClick={() => setOpen(!open)}
						className="cursor-pointer hover:text-amber-500 duration-200"
					>
						{
							!open &&
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
							     stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round"
								      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
							</svg>
						}
						{/*	close svg icon*/}
						{
							open &&
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
							     stroke="currentColor" className="w-6 h-6">
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
					<ul className="flex gap-4 flex-col">
						{Pages.map((page) => (
							<li key={page} className={`hover:text-cyan-700 duration-200 text-xl 
								${pathname === '/'+page.toLowerCase() && "text-cyan-700"}
								${pathname === '/' && page === 'Home' && "text-cyan-700"}`}

							>
								<Link href={`/${page === 'Home' ? '/': page.toLowerCase()}`}>{page}</Link>
							</li>
						))}
						<li>
							<Link className="px-5 py-2 bg-cyan-700 rounded text-xl" href="/register">Register</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Header;
