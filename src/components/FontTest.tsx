'use client';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const FontTest = () => {
	return (
		<Wrapper>
            <Image src="/img/testIcon.png" alt="" width={50} height={60} />
			<Skybori>🍑 팀 왕가탕후루 🍒</Skybori>
			<DNF>위대한 탕후루 테스트</DNF>
			<OverlappingDNF>위대한 탕후루 테스트</OverlappingDNF>
			<Neo>아자아자 파이팅</Neo>
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
	filter: drop-shadow(1px 1px 1px black); /* Shadow effect */
`;

const OverlappingDNF = styled.div`
	font-family: 'DNF Bit Bit v2';
	font-size: 4rem;
	background-clip: text;
	position: relative;
	color: #3b3b3b; /* Black color */
	margin-top: -5.5rem; /* Adjust this value based on your design */
`;

const Neo = styled.div`
	padding-top: 1rem;
    font-size: 2rem;
	font-family: 'NeoDunggeunmo Pro';
`;
