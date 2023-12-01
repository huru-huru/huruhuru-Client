'use client';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const loading = () => {
	return (
		<LoadingSection>
			<Image src="/img/loadingImage.png" alt="로딩" width={180} height={180} />
			<div className='text'>🍇 로 딩 중 🥝</div>
		</LoadingSection>
	);
};

export default loading;

const LoadingSection = styled.div`
	width: 100%;
	position: absolute;
	z-index: 5;
	display: flex;
	flex-direction : column;
	align-items: center;
	justify-content: center;
	background: linear-gradient(180deg, #7defe5 0%, #faf4d4 100%);
	overflow: hidden;
	top: 0;
	bottom: 0;
	@media (min-width: 490px) {
		width: 490px;
	}
	color: #000;
	font-family: SKYBORI;
	font-size: 2.5rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	text-align: center;
	.text{
		margin-top: 2rem;
	}
`;
