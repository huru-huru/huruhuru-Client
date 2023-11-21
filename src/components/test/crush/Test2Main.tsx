'use client';
import { FRUITS } from '@/utils/constant';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TestHeader from '../common/TestHeader';
import ProgressBar from '../common/ProgressBar';
import { QuestionData } from '@/types/request';
import { test2sample } from '@/utils/dummydata';
import Image from 'next/image';
import { testColors } from '@/utils/constant/colorConstants';

const Test2Main = () => {
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
			router.push(`crushTest/result?fruits=${selectType}`);
		} else {
			setQuestion(test2sample[progress]);
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
                <BtnSection>
                <BtnWrapper onClick={handleButtonClick}>
                    <BtnBox $bgColor={testcolors.btnbg} $textColor={testcolors.btntext}>
                        {currentQuestion?.answer[0].text}
                        </BtnBox>
                        <ShadowBox />
                        </BtnWrapper>
                <BtnWrapper onClick={handleButtonClick}>
                    <BtnBox $bgColor={testcolors.btnbg} $textColor={testcolors.btntext}>
                        {currentQuestion?.answer[1].text}
                        </BtnBox>
                        <ShadowBox />
                    </BtnWrapper>
                </BtnSection>
                <BtnSection>
                    <BtnWrapper onClick={handleButtonClick}>
                        <BtnBox $bgColor={testcolors.btnbg} $textColor={testcolors.btntext}>
                            {currentQuestion?.answer[2].text}
                        </BtnBox>
                        <ShadowBox />
                    </BtnWrapper>
                    <BtnWrapper onClick={handleButtonClick}>
                        <BtnBox $bgColor={testcolors.btnbg} $textColor={testcolors.btntext}>
                        {currentQuestion?.answer[3].text}
                        </BtnBox>
                        <ShadowBox />
                    </BtnWrapper>
                </BtnSection>
			</QuestionSection>
		</Wrapper>
	);
};

export default Test2Main;

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
        width: 80%;
		margin-top: 1.5rem;
		color: var(--black, #171717);
		text-align: center;
		font-family: SKYBORI;
		font-size: 2rem;
		font-weight: 400;
        word-break: keep-all;
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

const BtnSection =styled.div`
display: flex;
justify-content: center;
	align-items: center;
    width: 100%;
    flex-wrap:wrap;
    gap: 1rem;
    margin-bottom: 1rem;
`
const BtnWrapper = styled.div`
	min-width: 40%;

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

const BtnBox = styled.div<{ $bgColor: string;  $textColor: string }>`
  position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 5.2rem;
    padding: 2rem 0rem;
	border-radius: 4.45313rem;
	border: 1.187px solid #646464;
	background: ${(props) => props.$bgColor};
	color: ${(props) => props.$textColor};
	font-family: 'DNF Bit Bit v2';
    font-weight : 400;
	font-size: 2rem;
    z-index: 1;
	cursor: pointer;
`;

const ShadowBox = styled.div`
	position: relative;
    margin-top: -45%;
	width: 100%;
	height: 5.2rem;
    padding: 2rem 0rem;
	border-radius: 4.45313rem;
	background: #646464;
	cursor: pointer;
`;
