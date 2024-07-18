import React from 'react';
import DefaultLayout from "@/layout/DefaulLayout";
import Component1 from "@/components/About/Component1";
import Component2 from '@/components/About/Component2';
import Component3 from '@/components/About/Component3';


const AboutPage = () => {
	return (
		<DefaultLayout>
			<Component1 />
			<Component2 />
			<Component3 />
		</DefaultLayout>
	);
};

export default AboutPage;
