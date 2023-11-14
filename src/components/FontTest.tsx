'use client';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import TitleDesignText from './common/TitleDesignText';
import SelectButton from './common/SelectButton';

const FontTest = () => {
	return (
		<Wrapper>
            <Image src="/img/testIcon.png" alt="" width={50} height={60} />
			<TitleDesignText text='학교/학업' bgColor='linear-gradient(180deg, #FFF 0%, #FFD9D7 100%)' size={3.3}/>
			<TitleDesignText text='학교 앞 탕후루' bgColor='linear-gradient(180deg, #fff 0%, #81efe5 100%)' size={5}/>
			<SelectButton bgColor='linear-gradient(0deg, #7FEFE5 0%, #CEF3DA 87.5%, #CBF2DB 87.5%)' text='이 게임 한 적 있어!'/>
		</Wrapper>
	);
};

export default FontTest;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background: linear-gradient(180deg, #7defe5 0%, #faf4d4 100%);
`;

const Skybori = styled.div`
	font-family: 'SKYBORI';
    color: #5b5b5b;
    font-size: 1.5rem;
`;

const DNF = styled.div`
	font-family: 'DNF Bit Bit v2';
	font-size: 4rem;
	background: linear-gradient(180deg, #fff 0%, #81efe5 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	z-index: 1;
	-webkit-text-stroke: 1px #3b3b3b;
`;

const OverlappingDNF = styled.div`
	font-family: 'DNF Bit Bit v2';
	font-size: 4rem;
	background-clip: text;
	position: relative;
	color: #3b3b3b; /* Black color */
	margin-top: -5.4rem; /* Adjust this value based on your design */
`;

const Neo = styled.div`
	padding-top: 1rem;
    font-size: 2rem;
	font-family: 'NeoDunggeunmo Pro';
`;
