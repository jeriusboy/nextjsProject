import React from 'react';
import Header from "@/components/HF/Header";
import Footer from "@/components/HF/Footer";

const DefaultLayout = ({children}) => {
	return (
		<div>
			<Header />
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default DefaultLayout;
