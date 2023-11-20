'use client';
import { FRUITS } from '@/utils/constant';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TestHeader from '../common/TestHeader';
import ProgressBar from '../common/ProgressBar';
import { QuestionData } from '@/types/request';
import { test1sample } from '@/utils/dummydata';
import Image from 'next/image';
import SelectButton from '@/components/common/SelectButton';

const Test1Main = () => {
	const router = useRouter();
	const params = useSearchParams();
	const [progress, setProgress] = useState(0);
	const [currentQuestion, setQuestion] = useState<QuestionData>();
	const selectType = parseInt(params.get('fruits') || '0', 10);
	const background =
		selectType === FRUITS.STRAWBERRY
			? '#FFF0EE;'
			: selectType === FRUITS.SHINE
			? 'linear-gradient(180deg, rgba(180, 197, 37, 0.20) 0.06%, rgba(235, 243, 152, 0.20) 23.8%), #F2F8B7;'
			: selectType === FRUITS.BLACK
			? 'linear-gradient(180deg, rgba(108, 66, 90, 0.20) 0.06%, rgba(216, 186, 198, 0.20) 23.8%, rgba(217, 187, 199, 0.20) 23.8%), #FEECF4'
			: 'white';

	useEffect(() => {
		setQuestion(test1sample[progress]);
	}, [progress]);

	return (
		<Wrapper $bg={background}>
			<TestHeader fruit={selectType} />
			<ProgressBar fruit={selectType} progress={progress} />
			<QuestionSection>
			<div className="question">{currentQuestion?.question}</div>
			<QuestionImg>
				<img src={currentQuestion?.image} />
			</QuestionImg>
			<BtnWrapper
				onClick={() => {
					setProgress(progress + 1);
				}}
			>
				<SelectButton
					bgColor="linear-gradient(0deg, #FF9F96 0%, #FFCEC9 87.5%)"
					text={currentQuestion?.answer[0].text}
				/>
			</BtnWrapper>
			<BtnWrapper
				onClick={() => {
					setProgress(progress + 1);
				}}
			>
				<SelectButton
					bgColor="linear-gradient(0deg, #FF9F96 0%, #FFCEC9 87.5%)"
					text={currentQuestion?.answer[1].text}
				/>
			</BtnWrapper>
			<BtnWrapper
				onClick={() => {
					setProgress(progress + 1);
				}}
			>
				<SelectButton
					bgColor="linear-gradient(0deg, #FF9F96 0%, #FFCEC9 87.5%)"
					text={currentQuestion?.answer[2].text}
				/>
			</BtnWrapper>
			</QuestionSection>
		</Wrapper>
	);
};

export default Test1Main;

const Wrapper = styled.div<{ $bg: string }>`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	height: 100%;
	background: ${(props) => props.$bg};
	.question {
		margin-top: 1.5rem;
		color: var(--black, #171717);
		text-align: center;
		font-family: SKYBORI;
		font-size: 2rem;
		font-weight: 400;
	}
	padding-bottom: 3rem;
`;

const QuestionImg = styled.div`
	margin-top: 3rem;
	margin-bottom: 3rem;
	width: 50%;
	padding-bottom: 50%;
	position: relative;
	overflow: hidden;
	border-radius: 30px;
	img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const BtnWrapper = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	border-radius: 35.625px;
	margin-bottom: 1rem;
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;

const QuestionSection = styled.div`
	min-height: 70vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
`