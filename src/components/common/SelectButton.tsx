'use client';
import React from 'react';
import styled from 'styled-components';

type SelectButtonPropsType = {
	text: string;
	bgColor: string;
	size?: number; // 선택사항
	textColor?: string;
	onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

const SelectButton = (props: SelectButtonPropsType) => {
	return (
		<>
			<BtnBox
				$bgColor={props.bgColor}
				$size={props.size || 2}
				$textColor={props.textColor || ' #464646'}
				onClick={props.onClick}
			>
				{props.text}
			</BtnBox>
			<ShadowBox />
		</>
	);
};

export default SelectButton;

const BtnBox = styled.div<{ $bgColor: string; $size: number; $textColor: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80%;
	padding: 0.5rem 2rem;
	min-height: 5.2rem;
	height: fit-content;
	border-radius: 35.625px;
	border: 1.187px solid #646464;
	background: ${(props) => props.$bgColor};
	color: ${(props) => props.$textColor};
	font-family: 'DNF Bit Bit v2';
	line-height: normal;
	font-size: ${(props) => props.$size}rem;
	z-index: 1;
	font-weight: 400;
	cursor: pointer;
`;

const ShadowBox = styled.div`
	position: relative;
	width: 80%;
	padding: 0.5rem 2rem;
	min-height: 5.2rem;
	height: fit-content;
	border-radius: 35.625px;
	background: #646464;
	margin-top: -5.7rem;
	cursor: pointer;
`;
