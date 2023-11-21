import { FRUITS } from '@/utils/constant';
import { useRouter } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';
import TitleDesignText from '../common/TitleDesignText';
import SelectButton from '../common/SelectButton';
import Image from 'next/image';

const Test1Select = () => {
	const router = useRouter();

	const handleClick = (props: FRUITS) => {
		router.push(`/generationTest?fruits=${props}`);
	};

	return (
		<Wrapper>
			<TitleDesignText text="테스트 1" bgColor="linear-gradient(180deg, #fff 0%, #81efe5 100%)" size={4.125} />
			<SubTitle>주제에 맞는 탕후루를 선택해 주세요!</SubTitle>
			<Line>
				<BtnWrapper
					onClick={() => {
						handleClick(FRUITS.STRAWBERRY);
					}}
				>
					<ImageWrapper>
						<StyledImage src="/img/strawberry.png" alt={'딸기'} fill priority />
					</ImageWrapper>
					<SelectButton bgColor="linear-gradient(0deg, #FF9F96 0%, #FFCEC9 87.5%);" text="학업" />
				</BtnWrapper>
				<BtnWrapper
					onClick={() => {
						handleClick(FRUITS.SHINE);
					}}
				>
					<ImageWrapper>
						<StyledImage src="/img/shine.png" alt={'오렌지'} fill priority />
					</ImageWrapper>
					<SelectButton bgColor="linear-gradient(0deg, #C7DB17 0%, #F8FEB8 87.5%);" text="문구점" />
				</BtnWrapper>
				<BtnWrapper
					onClick={() => {
						handleClick(FRUITS.ORANGE);
					}}
				>
					<ImageWrapper>
						<StyledImage src="/img/grape.png" alt={'포도'} fill priority />
					</ImageWrapper>
					<SelectButton bgColor="linear-gradient(0deg, #633D55 0%, #9A5A73 87.5%);" text="TV/연예" />
				</BtnWrapper>
				<BtnWrapper
					onClick={() => {
						handleClick(FRUITS.BLACK);
					}}
				>
					<ImageWrapper>
						<StyledImage src="/img/cherryTomato.png" alt={'오렌지'} fill priority />
					</ImageWrapper>
					<SelectButton bgColor="linear-gradient(0deg, #E92E0D 0%, #F47E5D 87.5%);" text="음식" />
				</BtnWrapper>
				<BtnWrapper
					onClick={() => {
						handleClick(FRUITS.TOMATO);
					}}
				>
					<ImageWrapper>
						<StyledImage src="/img/pineapple.png" alt={'오렌지'} fill priority />
					</ImageWrapper>
					<SelectButton bgColor="linear-gradient(0deg, #F3D722 0%, #FFF4A2 87.5%);" text="게임" />
				</BtnWrapper>
				<BtnWrapper
					onClick={() => {
						handleClick(FRUITS.FINEAPPLE);
					}}
				>
					<ImageWrapper>
						<StyledImage src="/img/orange.png" alt={'오렌지'} fill priority />
					</ImageWrapper>
					<SelectButton bgColor="linear-gradient(0deg, #FE8920 0%, #FFCB94 87.5%);" text="의류/생활" />
				</BtnWrapper>
			</Line>
		</Wrapper>
	);
};

export default Test1Select;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	height: 100%;
	background: linear-gradient(180deg, #7defe5 0%, #faf4d4 100%);
`;

const SubTitle = styled.div`
	color: #171717;
	position: relative;
	text-align: center;
	font-family: 'NeoDunggeunmo Pro';
	font-size: 1.8rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: 1.756px;
	margin-top: 1rem;
	margin-bottom: 3rem;
`;

const Line = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;

const BtnWrapper = styled.div`
	width: 30%;
	display: flex;
	flex-direction: column;
`;

const ImageWrapper = styled.div`
	width: 43%;
	height: 75%;
	position: relative;
	margin-left: 4.1rem;
	top: 1rem;
	align-items: center; /* 이미지를 수직 가운데로 정렬 */
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: 80%;
`;
