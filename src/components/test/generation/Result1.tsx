'use client';
import TitleDesignText from '@/components/common/TitleDesignText';
import { FRUITS } from '@/utils/constant';
import { resultColors } from '@/utils/constant/colorConstants';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { GoTriangleDown } from 'react-icons/go';
import { initKakao, onClickShareKakaoTalk } from '@/utils/kakaoShare';

const Result1 = () => {
	const router = useRouter();
	const params = useSearchParams();
	const selectType = parseInt(params.get('fruits') || '0', 10);
	const selectGeneration = parseInt(params.get('generation') || '0', 10);

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

	const resultContent =
		selectGeneration === 0
			? { title: '상콤발랄 10대', content: '10대 어쩌구저쩌구' }
			: selectGeneration === 1
			? { title: '어쩌구 20대', content: '20대 어쩌구저쩌구' }
			: selectGeneration === 2
			? { title: '어쩌구 어른세대', content: '어른이 어쩌구저쩌구' }
			: { title: '', content: '' };

	const handleClick = (props: string) => {
		router.push(`${props}`);
	};

	useEffect(()=>{
		initKakao();
	},[])

	return (
		<Wrapper $bg={resultcolor.bg}>
			<TitleDesignText text="당신의 탕후루 시절은?" bgColor={resultcolor.title} size={3.6} />
			<div className="fruit-img">
				<StyledImage src={`/img/fruitBig${selectType}.png`} alt="결과 과일" fill priority />
			</div>
			<ResultBox $bgcolor={resultcolor.btnbg} $color={resultcolor.textcolor} $bordercolor={resultcolor.border}>
				<div className="box-top">
					<div className="result-title">{resultContent.title}</div>
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
						<div className="info">{resultContent.content}</div>
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
						<div className="info">탕후루는 맛있어</div>
					</Info>
				</div>
			</ResultBox>
			<Btn1
				onClick={() => {
					handleClick('/select?type=1');
				}}
				$btncolor={resultcolor.btnbg}
				$color={resultcolor.textcolor}
				$bordercolor={resultcolor.border}
			>
				다른 탕후루도 맛보기
			</Btn1>
			<Btn2
				onClick={() => {
					handleClick('/');
				}}
			>
				테스트2도 하러가기
			</Btn2>
			<ResultShare>
				<Title>결과 공유하기</Title>
				<ShareBtnGroup>
					<div className="share">
						<StyledImage src={`/img/shareLogo0.png`} alt="인스타 공유" fill priority />
					</div>
					<div className="share">
						<StyledImage src={`/img/shareLogo1.png`} alt="페북 공유" fill priority />
					</div>
					<div className="share">
						<StyledImage src={`/img/shareLogo2.png`} alt="트위터 공유" fill priority />
					</div>
					<div className="share">
						<StyledImage src={`/img/shareLogo3.png`} alt="카톡 공유" fill priority onClick={onClickShareKakaoTalk}/>
					</div>
				</ShareBtnGroup>
			</ResultShare>
			<TestShare>
				<Title>탕후루 친구랑 같이 먹자!</Title>
				<div className="sub">친구들에게 테스트 공유하기</div>
				<ShareBtnGroup>
					<div className="share2">
						<StyledImage src={`/img/shareLogo4.png`} alt="공유" fill priority />
					</div>
					<div className="share2">
						<StyledImage src={`/img/shareLogo3.png`} alt="카톡 공유" fill priority />
					</div>
				</ShareBtnGroup>
			</TestShare>
		</Wrapper>
	);
};

export default Result1;

const Wrapper = styled.div<{ $bg: string }>`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	height: 100%;
	background: ${(props) => props.$bg};
	padding-bottom: 5rem;
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
	cursor: pointer;
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
	cursor: pointer;
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
position: "relative";
	display: flex;
	gap: 2rem;
	width: 50%;
	align-items:center;
	justify-content:center;
	margin-top: 2rem;
	.share {
		width: 95%;
	}
	.share2{
		width: 18.60%;
	}
`;
