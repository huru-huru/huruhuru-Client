import { FRUITS } from '@/utils/constant';
import React from 'react';
import styled from 'styled-components';

type TestHeaderPropsType = {
	fruit: FRUITS;
};

const TestHeader = (props: TestHeaderPropsType) => {
	const title =
		props.fruit === FRUITS.STRAWBERRY
			? '학교/학업'
			: props.fruit === FRUITS.SHINE
			? '문구점'
			: props.fruit === FRUITS.BLACK
			? 'TV/연예'
			: props.fruit === FRUITS.FINEAPPLE
			? '음식'
			: props.fruit === FRUITS.TOMATO
			? '게임'
			: props.fruit === FRUITS.ORANGE
			? '의류/생활'
			: 'ㅇㅅㅇ';
	return (
		<HeaderWrap>
			<div>{title}</div>
		</HeaderWrap>
	);
};

export default TestHeader;

const HeaderWrap = styled.div`
	width: 100%;
	height: 8.6rem;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #3b3b3b;
	font-family: NeoDunggeunmo Pro;
	font-size: 2.38rem;
	font-weight: 400;
	background-color: aliceblue;
`;
