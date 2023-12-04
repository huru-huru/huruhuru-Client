// import Result1 from '@/components/test/generation/Result1';
import dynamic from 'next/dynamic';
import React from 'react';

// application error a client-side exception has occurred 해결
const DynamicResult1ComponentWithNoSSR = dynamic(
	()=> import('@components/test/generation/Result1'),
	{ssr: false}
)

const page = () => {
	return (
		<>
			<DynamicResult1ComponentWithNoSSR />
		</>
	);
};

export default page;
