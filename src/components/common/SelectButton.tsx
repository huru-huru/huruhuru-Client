'use client';
import React from 'react';
import styled from 'styled-components';

type SelectButtonPropsType = {
	text: string;
	bgColor: string;
	size?: number; // 선택사항
};

const SelectButton = (props: SelectButtonPropsType) => {
	return (
		<>
			<BtnBox $bgColor={props.bgColor} $size={props.size || 2}>
				{props.text}
			</BtnBox>
			<ShadowBox />
		</>
	);
};

export default SelectButton;

const BtnWrapper = styled.div`
	width: 100%;
`;

const BtnBox = styled.div<{ $bgColor: string; $size: number }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 5.2rem;
	border-radius: 35.625px;
	border: 1.187px solid #646464;
	background: ${(props) => props.$bgColor};
	color: #464646;
	font-family: 'DNF Bit Bit v2';
	line-height: normal;
	font-size: ${(props) => props.$size}rem;
	z-index: 1;
	cursor: pointer;
`;

const ShadowBox = styled.div`
	position: relative;
	width: 100%;
	height: 5.2rem;
	border-radius: 35.625px;
	background: #646464;
	margin-top: -4.9rem;
	cursor: pointer;
`;
