'use client';
import { FRUITS } from '@/utils/constant';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TestHeader from '../common/TestHeader';
import ProgressBar from '../common/ProgressBar';
import { QuestionData } from '@/types/request';
import Image from 'next/image';
import { testColors } from '@/utils/constant/colorConstants';
import { getTestSet, postResultScore, updateLoginUserCount } from '@/apis/test';

const Test2Main = () => {
	const router = useRouter();
	const params = useSearchParams();
	const [progress, setProgress] = useState(0);
	const [testSet, setTestSet] = useState<QuestionData[]>();
	const [currentQuestion, setQuestion] = useState<QuestionData>();
	const [crushResult, setCrushResult] = useState(0);
	const [loading, setLoading] = useState(false);
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
		const getTest = async () => {
			try {
				const response = await getTestSet(2, selectType);
				if (response && response.data) {
					setTestSet(response.data);
				} else {
					console.log('Failed to fetch mission list');
				}
			} catch (error) {
				console.error('Error fetching test set:', error);
			}
		};
		getTest();
	}, [selectType]);

	useEffect(() => {
		if (progress === 10) {
			// console.log(crushResult);
			postResultScore(selectType, crushResult);
			updateLoginUserCount(2, selectType);
			setLoading(true);
			setTimeout(() => {
				router.push(`crushTest/result?fruits=${selectType}&score=${crushResult}`);
			}, 500);
		} else {
			if (testSet) {
				setQuestion(testSet[progress]);
			}
		}
	}, [progress, router, selectType, testSet]);

	const handleButtonClick = (correct: boolean | undefined) => {
		if (correct != undefined && correct) {
			// 맞으면 점수 추가
			setCrushResult(crushResult + 1);
		}
		if (progress < 11) {
			setProgress(progress + 1);
		}
	};

	return (
		<>
			{loading ? (
				<LoadingSection>
					<Image src={`/img/loadingImage.png`} alt="로딩" width={150} height={150} />
					<div className="text">과연 탕후루에 대한 맛 평가는 ?</div>
				</LoadingSection>
			) : (
				<Wrapper $bg={testcolors.bg}>
					<TestHeader fruit={selectType} />
					<ProgressBar fruit={selectType} progress={progress} />

					<QuestionSection>
						<div className="question">{currentQuestion?.question}</div>
						<QuestionImg>
							<img src={currentQuestion?.image} />
						</QuestionImg>
						<div className="source">출처 : {currentQuestion?.image_url}</div>
						<BtnSection>
							<BtnWrapper onClick={() => handleButtonClick(currentQuestion?.answerList[0].correct)}>
								<BtnBox $bgColor={testcolors.btnbg} $textColor={testcolors.btntext}>
									{currentQuestion?.answerList[0].answerContent}
								</BtnBox>
								<ShadowBox />
							</BtnWrapper>
							<BtnWrapper onClick={() => handleButtonClick(currentQuestion?.answerList[1].correct)}>
								<BtnBox $bgColor={testcolors.btnbg} $textColor={testcolors.btntext}>
									{currentQuestion?.answerList[1].answerContent}
								</BtnBox>
								<ShadowBox />
							</BtnWrapper>
						</BtnSection>
						<BtnSection>
							<BtnWrapper onClick={() => handleButtonClick(currentQuestion?.answerList[2].correct)}>
								<BtnBox $bgColor={testcolors.btnbg} $textColor={testcolors.btntext}>
									{currentQuestion?.answerList[2].answerContent}
								</BtnBox>
								<ShadowBox />
							</BtnWrapper>
							<BtnWrapper onClick={() => handleButtonClick(currentQuestion?.answerList[3].correct)}>
								<BtnBox $bgColor={testcolors.btnbg} $textColor={testcolors.btntext}>
									{currentQuestion?.answerList[3].answerContent}
								</BtnBox>
								<ShadowBox />
							</BtnWrapper>
						</BtnSection>
					</QuestionSection>
				</Wrapper>
			)}
		</>
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
	margin-bottom: 0.5rem;
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

const BtnSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	flex-wrap: wrap;
	gap: 1rem;
	margin-bottom: 1rem;
`;
const BtnWrapper = styled.div`
	min-width: 40%;
`;

// const StyledImage = styled(Image)`
// 	position: relative !important;
// 	height: unset !important;
// 	object-fit: cover;
// `;

const QuestionSection = styled.div`
	min-height: 70vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	font-family: SKYBORI;
	.source {
		font-size: 1rem;
		color: #6f6f6f;
		margin-bottom: 3rem;
	}
`;

const BtnBox = styled.div<{ $bgColor: string; $textColor: string }>`
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
	font-family: SKYBORI;
	font-weight: 400;
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

const LoadingSection = styled.div`
	width: 100%;
	position: absolute;
	z-index: 5;
	display: flex;
	flex-direction : column;
	align-items: center;
	justify-content: center;
	background: #fff0ee;
	overflow: hidden;
	top: 0;
	bottom: 0;
	@media (min-width: 490px) {
		width: 490px;
	}
	color: #000;
	font-family: SKYBORI;
	font-size: 2rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	text-align: center;
	.text{
		margin-top: 2rem;
	}
`;
