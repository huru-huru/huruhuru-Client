'use client';
import { FRUITS } from '@/utils/constant';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TestHeader from '../common/TestHeader';
import ProgressBar from '../common/ProgressBar';
import { Answer, QuestionData } from '@/types/request';
import Image from 'next/image';
import SelectButton from '@/components/common/SelectButton';
import { testColors } from '@/utils/constant/colorConstants';
import { getTestSet, updateUserCount } from '@/apis/test';

const Test1Main = () => {
	const router = useRouter();
	const params = useSearchParams();
	const [progress, setProgress] = useState(0);
	const [testSet, setTestSet] = useState<QuestionData[]>();
	const [currentQuestion, setQuestion] = useState<QuestionData>();
	const [shuffledAnswerList, setShuffledAnswerList] = useState<Answer[]>();

	// 결과 저장 state
	const [resultSet, setResult] = useState([0, 0, 0]);

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
				const response = await getTestSet(1, selectType);
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
			// console.log(resultSet);
			// 인덱스 0 : 10대, 1 : 20대, 2 : 부모님 세대
			const gen = randomIndexOfMaxValue();
			updateUserCount(1, selectType);
			router.push(`generationTest/result?fruits=${selectType}&generation=${gen}`);
		} else {
			if (testSet) {
				setQuestion(testSet[progress]);
			}
		}
	}, [progress, router, selectType, testSet]);

	useEffect(() => {
		// currentQuestion이 변경될 때마다 answerList를 섞어서 상태를 업데이트
		shuffleAnswerList();
	  }, [currentQuestion]);

	const shuffleAnswerList = () => {
		// Fisher-Yates 알고리즘을 사용하여 배열을 섞음
		const shuffledArray = currentQuestion?.answerList;
		if(shuffledArray){
			for (let i = shuffledArray.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
			  }
		setShuffledAnswerList(shuffledArray);
		}
	  };

	// resultSet에서 가장 큰 값의 인덱스를 랜덤으로 반환하는 함수
	const randomIndexOfMaxValue = () => {
		const maxValues = [];
		let maxValue = -Infinity;

		// 최대값 찾기
		for (let i = 0; i < resultSet.length; i++) {
			const currentValue = resultSet[i];
			if (currentValue > maxValue) {
				maxValues.length = 0; // 현재 최대값보다 큰 값이 나오면 배열 초기화
				maxValues.push(i); // 현재 인덱스를 추가
				maxValue = currentValue; // 현재 값을 최대값으로 업데이트
			} else if (currentValue === maxValue) {
				// 동일한 최대값이 나오면 인덱스를 추가
				maxValues.push(i);
			}
		}

		// 랜덤으로 선택된 인덱스 반환
		return maxValues[Math.floor(Math.random() * maxValues.length)];
	};

	const incrementAtIndex = (index: number) => {
		setResult((prevResult) => {
			// 배열 복사
			const updatedResult = [...prevResult];
			// 특정 인덱스의 값 1 증가
			updatedResult[index] += 1;
			// 새로운 배열을 반환하여 상태 업데이트
			return updatedResult;
		});
	};

	const handleButtonClick = (optionId: number) => {
		const selectedAge = optionId % 3;
		// 20대
		if (selectedAge === 1) {
			incrementAtIndex(1);
		}
		// 10대
		if (selectedAge === 2) {
			incrementAtIndex(0);
		}
		// 부모님 세대
		if (selectedAge === 0) {
			incrementAtIndex(2);
		}
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
				<div className='source'>출처 : {currentQuestion?.image_url}</div>
				{shuffledAnswerList?.map((answerOption: any, index: number) => (
					// 해당 답변의 인덱스 값이 인자로 들어감
					<BtnWrapper key={index} onClick={() => handleButtonClick(answerOption.id)}>
						<SelectButton
							bgColor={testcolors.btnbg}
							size={1.8}
							text={answerOption.answerContent}
							textColor={testcolors.btntext}
						/>
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
	.source{
		font-size : 1rem;
		color: #6F6F6F;
		margin-bottom: 3rem;
	}
`;
