'use client';
import TitleDesignText from '@/components/common/TitleDesignText';
import { FRUITS } from '@/utils/constant';
import { resultColors } from '@/utils/constant/colorConstants';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GoTriangleDown } from 'react-icons/go';
import { getRank } from '@/apis/test';

type Authority = {
	authority: string;
};

type Member = {
	id: number;
	nickname: string;
	testCount: number;
	totalBestScore: number;
	enabled: boolean;
	authorities: Authority[];
	accountNonLocked: boolean;
	credentialsNonExpired: boolean;
	accountNonExpired: boolean;
	username: string;
};

type MyRanking = {
	member: Member;
	ranking: number;
};

type Top10 = {
	id: number;
	nickname: string;
	testCount: number;
	totalBestScore: number;
	enabled: boolean;
	authorities: Authority[];
	accountNonLocked: boolean;
	credentialsNonExpired: boolean;
	accountNonExpired: boolean;
	username: string;
};

const Result2 = () => {
	const router = useRouter();
	const params = useSearchParams();
	const selectType = parseInt(params.get('fruits') || '0', 10);
	const score = parseInt(params.get('score') || '0', 10);
	const [myrank, setMyrank] = useState<MyRanking>();
	const [ranking, setRanking] = useState<Top10[]>([]);
	const [participant, setParticipant] = useState('');

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

	const handleClick = (props: string) => {
		router.push(`${props}`);
	};

	useEffect(() => {
		const getRanking = async () => {
			try {
				const result = await getRank();
				if (result) {
					setMyrank(result.data.MyRanking);
					setRanking(result.data.Top10);
					setParticipant(result.data.test2Count);
				}
			} catch (error) {
				console.error('Error fetching test set:', error);
			}
		};
		getRanking();
	}, []);

	return (
		<Wrapper $bg={resultcolor.bg} $bordercolor={resultcolor.border}>
			<TitleDesignText text="당신이 깨뜨린" bgColor={resultcolor.title} size={3.6} />
			<TitleDesignText text="탕후루의 개수는?" bgColor={resultcolor.title} size={4.5} />
			<div className="fruit-img">
				<StyledImage src={`/img/result2fruit${selectType}.png`} alt="결과 과일" fill priority />
				<div className="count">
					<div className="text1">{score}</div>
					<div className="text2">/ 10개</div>
				</div>
			</div>
			<ResultBox $bgcolor={resultcolor.btnbg} $color={resultcolor.textcolor} $bordercolor={resultcolor.border}>
				<div className="box-top">
					<div className="result-title">내 탕후루 깨기 현황은?</div>
					<GoTriangleDown className="icon" size="15%" color={resultcolor.btnbg} />
				</div>

				<div className="box">
					<Info>
						<div className="text1">지금까지 내가 깨트린 탕후루 개수</div>
						<div className="crush-count">{myrank?.member?.totalBestScore}</div>
					</Info>
					<div className="line" />
					<Info2>
						<div className="text1">현재 내 순위는 {participant}명 중</div>
						<div className="total-count">{myrank?.ranking}</div>
					</Info2>
				</div>
			</ResultBox>
			<ResultDetail>
				<CircleGroup>
					<div className="circle">
						<span className="result">
							<span className="bold">8</span>/10
						</span>
					</div>
					<div>학교</div>
				</CircleGroup>
				<CircleGroup>
					<div className="circle">
						<span className="result">
							<span className="bold">8</span>/10
						</span>
					</div>
					<div>TV/연예</div>
				</CircleGroup>
				<CircleGroup>
					<div className="circle">
						<span className="result">
							<span className="bold">8</span>/10
						</span>
					</div>
					<div>문구점</div>
				</CircleGroup>
			</ResultDetail>
			<ResultDetail>
				<CircleGroup>
					<div className="circle">
						<span className="result">
							<span className="bold">8</span>/10
						</span>
					</div>
					<div>음식</div>
				</CircleGroup>
				<CircleGroup>
					<div className="circle">
						<span className="result">
							<span className="bold">8</span>/10
						</span>
					</div>
					<div>게임</div>
				</CircleGroup>
				<CircleGroup>
					<div className="circle">
						<span className="result">
							<span className="bold">8</span>/10
						</span>
					</div>
					<div>의류/생활</div>
				</CircleGroup>
			</ResultDetail>
			<Btn1
				onClick={() => {
					handleClick('/select?type=2');
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
				테스트1도 하러가기
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
						<StyledImage src={`/img/shareLogo3.png`} alt="카톡 공유" fill priority />
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
			<Ranking>
				<Title>전체 랭킹</Title>
				<RankWrapper $bordercolor={resultcolor.border}>
					{ranking.map((item, index) => {
						if (index + 1 === 1) {
							return (
								<RankSection key={index}>
									<Rank>
										<StyledImage src="/img/1st.png" alt="Rank 1" fill priority />
									</Rank>
									<Name>{item.nickname}</Name>
									<Score>{item.totalBestScore}개</Score>
								</RankSection>
							);
						} else if (index + 1 === 2) {
							return (
								<RankSection key={index}>
									<Rank>
										<StyledImage src="/img/2nd.png" alt="Rank 2" fill priority />
									</Rank>
									<Name>{item.nickname}</Name>
									<Score>{item.totalBestScore}개</Score>
								</RankSection>
							);
						} else if (index + 1 === 3) {
							return (
								<RankSection key={index}>
									<Rank>
										<StyledImage src="/img/3rd.png" alt="Rank 3" fill priority />
									</Rank>
									<Name>{item.nickname}</Name>
									<Score>{item.totalBestScore}개</Score>
								</RankSection>
							);
						} else {
							return (
								<RankSection key={index}>
									<Rank>{index + 1}</Rank>
									<Name>{item.nickname}</Name>
									<Score>{item.totalBestScore}개</Score>
								</RankSection>
							);
						}
					})}
				</RankWrapper>
			</Ranking>
		</Wrapper>
	);
};

export default Result2;

const Wrapper = styled.div<{ $bg: string; $bordercolor: string }>`
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
		width: 60%;
		position: relative;
	}
	.count {
		width: 60%;
		position: absolute;
		top: 74%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		width: 100%;
	}
	.text1 {
		color: ${(props) => props.$bordercolor};
		text-align: center;
		font-family: 'DNF Bit Bit v2';
		font-size: 5.78575rem;
		font-weight: 400;
		margin-bottom: -3%;
	}
	.text2 {
		color: #919191;
		font-family: 'DNF Bit Bit v2';
		font-size: 2.18925rem;
		font-weight: 400;
	}
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	size: unset !important;
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
		color: #fff;
		text-align: center;
		font-family: 'SKYBORI';
		font-size: 2rem;
		font-style: normal;
		font-weight: 400;
		padding: 1rem 0rem;
	}
	.icon {
		position: relative;
		margin-top: -6%;
	}
	.box {
		width: 80%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		border-radius: 1.25rem;
		border: 2px solid ${(props) => props.$bordercolor};
		background: #fff;
		padding: 3rem 2rem;
		overflow: hidden;
	}
	.text1 {
		color: var(--black, #171717);
		text-align: center;
		font-family: 'SKYBORI';
		font-size: 2.25rem;
		font-style: normal;
		font-weight: 400;
		word-break: keep-all;
		margin-bottom: 1rem;
	}
	.line {
		border-radius: 1.25rem;
		background: ${(props) => props.$bordercolor};
		width: 1px;
		height: 10rem;
	}
	.box-top {
		width: 60%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		margin-bottom: -5%;
	}
	.crush-count {
		color: ${(props) => props.$bordercolor};
		text-align: center;
		font-family: 'DNF Bit Bit v2';
		font-size: 4rem;
		font-style: normal;
		font-weight: 400;
	}
	.total-count {
		color: #4bd8cb;
		text-align: center;
		font-family: 'DNF Bit Bit v2';
		font-size: 4rem;
		font-weight: 400;
	}
`;

const Info = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 1rem;
	.info {
		color: var(--grey, #727272);
		font-family: 'Pretendard Variable';
		font-size: 1.75rem;
		font-weight: 400;
		padding-left: 1rem;
	}
`;

const Info2 = styled.div`
	width: 30%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 1rem;
	.info {
		color: var(--grey, #727272);
		font-family: 'Pretendard Variable';
		font-size: 1.75rem;
		font-weight: 400;
		padding-left: 1rem;
	}
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
	font-family: 'SKYBORI';
	font-size: 2.5rem;
	font-weight: 400;
	margin-top: 5rem;
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
	font-family: 'SKYBORI';
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
		font-family: 'SKYBORI';
		font-size: 2rem;
		font-weight: 400;
	}
`;

const Title = styled.div`
	color: var(--black, #171717);
	text-align: center;
	font-family: 'SKYBORI';
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
	}
`;

const ResultDetail = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const CircleGroup = styled.div`
	margin-top: 3rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #7a7a7a;
	font-family: 'SKYBORI';
	font-size: 2.25rem;
	font-weight: 400;
	.circle {
		width: 50%;
		padding-bottom: 50%;
		border-radius: 50%;
		position: relative;
		background-color: #fff;
		stroke-width: 1px;
		stroke: #eee;
	}
	.bold {
		color: #f5655e;
	}
	.result {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		width: 100%;
	}
`;

const Ranking = styled.div`
	width: 100%;
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const RankWrapper = styled.div<{ $bordercolor: string }>`
	width: 80%;
	height: fit-content;
	font-family: 'SKYBORI';
	border: 2px solid ${(props) => props.$bordercolor};
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 2.5rem;
	padding: 1rem 3rem;
	border-radius: 0.625rem;
	margin-top: 1rem;
`;

const RankSection = styled.div`
	display: flex;
	width: 97%;
	padding: 1.5rem;
	border-bottom: 1px solid #f9f9f9;
`;

const Rank = styled.div`
	width: 4rem;
	text-align: center;
	/* background-image: url('/img/1st.png'); */
`;

const Name = styled.div`
	width: 25rem;
	text-align: left;
	margin-left: 5rem;
`;
const Score = styled.div`
	width: 10rem;
	text-align: end;
`;
