'use client';
import { FRUITS } from '@/utils/constant';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import styled from 'styled-components';
import TestHeader from '../common/TestHeader';
import ProgressBar from '../common/ProgressBar';

const Test1Main = () => {
	const router = useRouter();
	const params = useSearchParams();
	const [progress, setProgress] = useState(0);
	const selectType = parseInt(params.get('fruits') || '0', 10);
	const background = selectType === FRUITS.STRAWBERRY ? '#FFF0EE;' : 
                selectType === FRUITS.SHINE ? 'linear-gradient(180deg, rgba(180, 197, 37, 0.20) 0.06%, rgba(235, 243, 152, 0.20) 23.8%), #F2F8B7;' : 
                selectType === FRUITS.BLACK ? 'linear-gradient(180deg, rgba(108, 66, 90, 0.20) 0.06%, rgba(216, 186, 198, 0.20) 23.8%, rgba(217, 187, 199, 0.20) 23.8%), #FEECF4' : 
                'white';

	return( 
	<Wrapper $bg={background}>
		<TestHeader fruit={selectType}/>
		<ProgressBar fruit={selectType} progress={progress}/>
	</Wrapper>
	);
};

export default Test1Main;

const Wrapper = styled.div<{$bg:string}>`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
	height: 100%;
	background: ${(props=>props.$bg)};
	/* background-image: url('/img/landing.png'); */
`;
