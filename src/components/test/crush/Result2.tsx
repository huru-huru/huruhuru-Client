'use client';
import TitleDesignText from '@/components/common/TitleDesignText';
import { FRUITS } from '@/utils/constant';
import { resultColors } from '@/utils/constant/colorConstants';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';
import { GoTriangleDown } from 'react-icons/go';

const Result2 = () => {
	const router = useRouter();
	const params = useSearchParams();
	const selectType = parseInt(params.get('fruits') || '0', 10);
	const resultcolor =
		selectType === FRUITS.STRAWBERRY
			? resultColors.STRAWBERRY
			: selectType === FRUITS.SHINE
			? resultColors.SHINE
			: selectType === FRUITS.BLACK
			? resultColors.BLACK
			: selectType === FRUITS.TOMATO
			? resultColors.TOMATO
			: selectType === FRUITS.ORANGE
			? resultColors.ORANGE
			: selectType === FRUITS.FINEAPPLE
			? resultColors.FINEAPPLE
			: resultColors.DEFAULT;
	return (
		<Wrapper $bg={resultcolor.bg}>
			<TitleDesignText text="당신이 깨뜨린" bgColor={resultcolor.title} size={3.6} />
			<TitleDesignText text="탕후루의 개수는?" bgColor={resultcolor.title} size={4.5} />
			<div className="fruit-img">
				<StyledImage src={`/img/fruitBig${selectType}.png`} alt="결과 과일" fill priority />
			</div>
			<ResultBox $bgcolor={resultcolor.btnbg} $color={resultcolor.textcolor} $bordercolor={resultcolor.border}>
				<div className="box-top">
					<div className="result-title">상콤발랄 10대</div>
					<GoTriangleDown className="icon" size="15%" color={resultcolor.btnbg} />
				</div>

				<div className="box">
					<div className="text1">
						{`아웅 >< 탕후루 맛있다!`}
						<br />
						{`내일 또 먹자~`}
					</div>
					<Info>
						<Circle />
						<div className="info">탕후루의 맛을 제대로 아는 당신😋</div>
					</Info>
					<Info>
						<Circle />
						<div className="info">혹시 마라탕-탕후루의 조합을 좋아하는지!</div>
					</Info>
					<Info>
						<Circle />
						<div className="info">이런 공감 설명 문구 조금 넣으면 어떠신지!</div>
					</Info>
					<Info>
						<Circle />
						<div className="info">아 힘들다</div>
					</Info>
				</div>
			</ResultBox>
			<Btn1 $btncolor={resultcolor.btnbg} $color={resultcolor.textcolor} $bordercolor={resultcolor.border}>
				다른 탕후루도 맛보기
			</Btn1>
			<Btn2>테스트1도 하러가기</Btn2>
			<ResultShare>
				<Title>결과 공유하기</Title>
				<ShareBtnGroup></ShareBtnGroup>
			</ResultShare>
			<TestShare>
				<Title>탕후루 친구랑 같이 먹자!</Title>
				<div className="sub">친구들에게 테스트 공유하기</div>
			</TestShare>
		</Wrapper>
	);
};

export default Result2;

const Wrapper = styled.div<{ $bg: string }>`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	height: 100%;
	background: ${(props) => props.$bg};
	padding-bottom: 3rem;
	padding-top: 15%;
	.fruit-img {
		margin-top: 3.61088rem;
		width: 35%;
	}
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;

const ResultBox = styled.div<{ $bgcolor: string; $color: string; $bordercolor: string }>`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 3.94rem;
	.result-title {
		width: 70%;
		border-radius: 4.3055rem;
		background: ${(props) => props.$bgcolor};
		color: ${(props) => props.$color};
		color: #fff;
		text-align: center;
		font-family: DNF Bit Bit v2;
		font-size: 3rem;
		font-weight: 400;
		padding: 1.6rem 0rem;
	}
	.icon {
		position: relative;
		margin-top: -6%;
	}
	.box {
		width: 70%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 1.25rem;
		border: 2px solid ${(props) => props.$bordercolor};
		background: #fff;
		padding: 4.75rem 3rem;
	}
	.text1 {
		color: var(--black, #171717);
		text-align: center;
		font-family: SKYBORI;
		font-size: 2.5rem;
		font-weight: 400;
		margin-bottom: 3.12rem;
	}
	.box-top {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		margin-bottom: -12%;
	}
`;

const Info = styled.div`
	width: 90%;
	display: flex;
	align-items: center;
	padding-bottom: 1rem;
	.info {
		color: var(--grey, #727272);
		font-family: Pretendard Variable;
		font-size: 1.75rem;
		font-weight: 400;
		padding-left: 1rem;
	}
`;
const Circle = styled.div`
	width: 0.5rem;
	height: 0.5rem;
	background-color: #6f6f6f;
	border-radius: 50%;
`;

const Btn1 = styled.div<{ $btncolor: string; $bordercolor: string; $color: string }>`
	display: flex;
	width: 70%;
	padding: 1.3rem 3rem;
	justify-content: center;
	align-items: center;
	gap: 1.25rem;
	border-radius: 1.25rem;
	border: 2px solid ${(props) => props.$bordercolor};
	background: ${(props) => props.$btncolor};
	color: ${(props) => props.$color};
	text-align: center;
	font-family: SKYBORI;
	font-size: 2.5rem;
	font-weight: 400;
	margin-top: 3rem;
	margin-bottom: 2rem;
`;
const Btn2 = styled.div`
	display: flex;
	width: 70%;
	padding: 1.3rem 3rem;
	justify-content: center;
	align-items: center;
	gap: 1.25rem;
	border-radius: 1.25rem;
	border: 2px solid #cafdf6;
	background: var(--lightMint, #94f1e3);
	text-align: center;
	font-family: SKYBORI;
	font-size: 2.5rem;
	font-weight: 400;
`;

const ResultShare = styled.div`
	margin-top: 5rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const TestShare = styled.div`
	margin-top: 5rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.sub {
		color: var(--grey, #727272);
		text-align: center;
		font-family: SKYBORI;
		font-size: 2rem;
		font-weight: 400;
	}
`;

const Title = styled.div`
	color: var(--black, #171717);
	text-align: center;
	font-family: SKYBORI;
	font-size: 3rem;
	font-weight: 400;
`;

const ShareBtnGroup = styled.div`
	display: flex;
`;
