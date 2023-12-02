'use client';
import TitleDesignText from '@/components/common/TitleDesignText';
import { FRUITS } from '@/utils/constant';
import { resultColors } from '@/utils/constant/colorConstants';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { GoTriangleDown } from 'react-icons/go';
import { onClickShareKakaoTalk, onClickShareResult1KakaoTalk } from '@/utils/kakaoShare';
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'next-share';
import ShareButton from '@/components/common/ShareButton';

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
			? {
					title: '상콤발랄 10대',
					subTitle: '마라탕후루~ 츄베릅 😋',
					text1: '지금 유행을 주도하는 당신!',
					text2: '레트로 감성을 얻고 싶다면, 응답하라 시리즈를 좀 보고 와-!',
					text3: '진정한 Y2K 감성을 얻고 싶다면, 테스트를 더 진행해보는 것은 어때?',
			  }
			: selectGeneration === 1
			? {
					title: '몽글몽글 20-30대',
					subTitle: '‘ㄱ’ㄴrLI..?! 우ㄹlºl 추억 🥹',
					text1: '그 때 그 시절, 추억을 제대로 아는 당신!',
					text2: '추억팔이 할 때만큼 시간 빨리 간 적 없지~',
					text3: '당장 추억 소환하기 위해 다음 테스트로 고!',
			  }
			: selectGeneration === 2
			? {
					title: '40-50대',
					subTitle: '라떼는 말이야~ Latte is Horse 🐴',
					text1: '레트로 끝판왕인 당신!',
					text2: '여기에 없는 추억이 있다면 당장 공유해줘!',
					text3: '오랜만에 추억을 친구들과 함께 이야기 나누는 것은 어떨까?',
			  }
			: {
					title: '',
					subTitle: '',
					content: '',
					text1: '',
					text2: '',
					text3: '',
			  };

	const handleClick = (props: string) => {
		router.push(`${props}`);
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const { Kakao } = window;
			if (!Kakao.isInitialized()) {
				// SDK 초기화 부분, 본인의 API KEY 입력
				Kakao.init(process.env.NEXT_PUBLIC_API_KEY);
			}
		}
	}, []);

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
					<div className="text1">{resultContent.subTitle}</div>
					<Info>
					<Circle />
						<div className="info">{resultContent.text1}</div>
					</Info>
					<Info>
						<Circle />
						<div className="info">{resultContent.text2}</div>
					</Info>
					<Info>
						<Circle />
						<div className="info">{resultContent.text3}</div>
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
				다른 테스트도 하러가기 !
			</Btn2>
			{/* <KakaoShareButton/> */}
			<ResultShare>
				<Title>결과 공유하기</Title>
				<ShareBtnGroup>
					{/* <div className="share">
						<StyledImage src={`/img/shareLogo0.png`} alt="인스타 공유" fill priority />
					</div> */}
					<FacebookShareButton
						url={`https://huruhuru.netlify.app/generationTest/result?fruits=${selectType}&generation=${selectGeneration}`}
						quote={`🍊 나의 탕후루는... ${resultContent.title} 탕후루! ${resultContent.subTitle}`}
						hashtag={`#탕후루테스트 #학교앞탕후루`}
					>
						<FacebookIcon size={40} round />
					</FacebookShareButton>
					<TwitterShareButton
						url={`https://huruhuru.netlify.app/generationTest/result?fruits=${selectType}&generation=${selectGeneration}`}
						title={`🍊 나의 탕후루는... ${resultContent.title} 탕후루! ${resultContent.subTitle}`}
						hashtags={['탕후루테스트', '학교앞탕후루']}
					>
						<TwitterIcon size={40} round />
					</TwitterShareButton>
					<KaKaoShareBtn>
						<Image
							src={`/img/shareLogo3.png`}
							alt="카톡 공유"
							width={40}
							height={40}
							priority
							onClick={() => onClickShareResult1KakaoTalk(resultContent.title, resultContent.subTitle, selectGeneration)}
						/>
					</KaKaoShareBtn>
				</ShareBtnGroup>
			</ResultShare>

			<TestShare>
				<Title>탕후루 친구랑 같이 먹자!</Title>
				<div className="sub">친구들에게 테스트 공유하기</div>
				<ShareBtnGroup>
					<ShareButton where="result" />
					<div className="share2">
						<Image
							src={`/img/shareLogo3.png`}
							alt="카톡 공유"
							width={40}
							height={40}
							priority
							onClick={onClickShareKakaoTalk}
						/>
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
	width: 100%;
	height: max-content;
	display: flex;
	align-items: start;
	justify-content: start;
	padding-bottom: 1rem;
	overflow: wrap;
	.info {
		width: 95%;
		color: var(--grey, #727272);
		font-family: Pretendard Variable;
		font-size: 1.75rem;
		font-weight: 400;
		word-break: keep-all;
	}
`;
const Circle = styled.div`
	width: 0.5rem;
	height: 0.5rem;
	background-color: #6f6f6f;
	border-radius: 50%;
	margin-right: 1rem;
	margin-top: 0.7rem;
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
	position: 'relative';
	display: flex;
	gap: 2rem;
	width: 50%;
	align-items: center;
	justify-content: center;
	margin-top: 2rem;
	.share {
		width: 95%;
	}
	.share2 {
		width: 18.6%;
		cursor: pointer;
	}
`;

const KaKaoShareBtn = styled.div`
	cursor: pointer;
`;
