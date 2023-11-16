'use client';
import React from 'react';
import styled from 'styled-components';

type TitleDesignTextPropsType = {
	text: string;
	bgColor: string;
	size: number; // Change type to number
};

const TitleDesignText = (props: TitleDesignTextPropsType) => {
	return (
		<>
			<Text $bgColor={props.bgColor} $size={props.size}>
				{props.text}
			</Text>
			<ShadowText $size={props.size}>{props.text}</ShadowText>
		</>
	);
};

export default TitleDesignText;

const Text = styled.div<{ $bgColor: string; $size: number }>`
	font-family: 'DNF Bit Bit v2';
	font-size: ${(props) => `${props.$size}rem`};
	background: ${(props) => props.$bgColor};
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	z-index: 2;
	-webkit-text-stroke: 1px #3b3b3b;
`;

const ShadowText = styled.div<{ $size: number }>`
	font-family: 'DNF Bit Bit v2';
	font-size: ${(props) => `${props.$size}rem`};
	background-clip: text;
	position: relative;
	color: #3b3b3b;
	margin-top: ${(props) => `-${props.$size + props.$size / 3}rem`};
	z-index: 1;
`;
