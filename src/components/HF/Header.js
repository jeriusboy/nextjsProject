import React from 'react';
import Link from "next/link";

const Header = () => {
	const Pages = ["About Us","Blog","Contact", "Login"];
	return (
		<div className="flex justify-around top-0 sticky w-full bg-slate-800 p-4 h-24 items-center text-slate-100 group">
			<div className="text-3xl">
				<Link href="/">LOGO</Link>
			</div>
			<div>
				<ul className="flex gap-4">
					<li className="hover:text-cyan-700 duration-200 text-xl">
						<Link href="/">Home</Link>
					</li>
					{Pages.map((page) => (
						<li key={page} className="hover:text-cyan-700 duration-200 text-xl">
							<Link href={`/${page.toLowerCase()}`}>{page}</Link>
						</li>
					))}
					<li>
						<Link className="px-5 py-2 bg-cyan-700 rounded text-xl" href="/register">Register</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
