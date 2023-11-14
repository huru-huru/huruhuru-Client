'use client';
import React from 'react';
import styled from 'styled-components';

type SelectButtontPropsType = {
	text: string;
	bgColor: string;
};

const SelectButton = (props: SelectButtontPropsType) => {
	return (
		<>
			<BtnBox $bgColor={props.bgColor}>{props.text}</BtnBox>
			<ShadowBox />
		</>
	);
};

export default SelectButton;

const BtnBox = styled.div<{ $bgColor: string }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80%;
	height: 5.2rem;
	border-radius: 35.625px;
	border: 1.187px solid #646464;
	background: ${(props) => props.$bgColor};
	color: #464646;
	font-family: 'DNF Bit Bit v2';
	line-height: normal;
	font-size: 2rem;
    z-index: 1;
`;

const ShadowBox = styled.div`
	position: relative;
	width: 80%;
	height: 5.2rem;
	border-radius: 35.625px;
	background: #646464;
    margin-top: -4.7rem;
`;
