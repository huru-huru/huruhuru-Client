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
import { testColors } from '@/utils/constant/colorConstants';

const Test1Main = () => {
	const router = useRouter();
	const params = useSearchParams();
	const [progress, setProgress] = useState(0);
	const [currentQuestion, setQuestion] = useState<QuestionData>();
	const selectType = parseInt(params.get('fruits') || '0', 10);
	const testcolors =
		selectType === FRUITS.STRAWBERRY
			? testColors.STRAWBERRY
			: selectType === FRUITS.SHINE
			? testColors.SHINE
			: selectType === FRUITS.BLACK
			? testColors.BLACK
			: selectType === FRUITS.TOMATO
			? testColors.TOMATO
			: selectType === FRUITS.ORANGE
			? testColors.ORANGE
			: selectType === FRUITS.FINEAPPLE
			? testColors.FINEAPPLE
			: testColors.DEFAULT;

	useEffect(() => {
		if (progress === 10) {
			router.push(`generationTest/result?fruits=${selectType}`);
		} else {
			setQuestion(test1sample[progress]);
		}
	}, [progress, router, selectType]);

	const handleButtonClick = () => {
		setProgress(progress + 1);
	};

	return (
		<Wrapper $bg={testcolors.bg}>
			<TestHeader fruit={selectType} />
			<ProgressBar fruit={selectType} progress={progress} />

			<QuestionSection>
				<div className="question">{currentQuestion?.question}</div>
				<QuestionImg>
					<img src={currentQuestion?.image} />
				</QuestionImg>
				{currentQuestion?.answer.map((answerOption: any, index: number) => (
					<BtnWrapper key={index} onClick={handleButtonClick}>
						<SelectButton bgColor={testcolors.btnbg} size={1.8} text={answerOption.text} textColor={testcolors.btntext} />
					</BtnWrapper>
				))}
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
`;
