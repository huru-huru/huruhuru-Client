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
						<StyledImage src="/img/huru0.png" alt={'딸기'} fill priority />
					</ImageWrapper>
					<SelectButton bgColor="linear-gradient(0deg, #FF9F96 0%, #FFCEC9 87.5%);" text="학교/학업"size={1.7} />
				</BtnWrapper>
				<BtnWrapper
					onClick={() => {
						handleClick(FRUITS.SHINE);
					}}
				>
					<ImageWrapper>
						<StyledImage src="/img/huru2.png" alt={'샤머'} fill priority />
					</ImageWrapper>
					<SelectButton bgColor="linear-gradient(0deg, #C7DB17 0%, #F8FEB8 87.5%);" text="문구점"size={1.7} />
				</BtnWrapper>
				<BtnWrapper
					onClick={() => {
						handleClick(FRUITS.BLACK);
					}}
				>
					<ImageWrapper>
						<StyledImage src="/img/huru3.png" alt={'포도'} fill priority />
					</ImageWrapper>
					<SelectButton textColor="white" bgColor="linear-gradient(0deg, #633D55 0%, #9A5A73 87.5%);" text="TV/연예"size={1.7} />
				</BtnWrapper>
				</Line>
				<Line>
				<BtnWrapper
					onClick={() => {
						handleClick(FRUITS.TOMATO);
					}}
				>
					<ImageWrapper>
						<StyledImage src="/img/huru4.png" alt={'방토'} fill priority />
					</ImageWrapper>
					<SelectButton textColor="white" bgColor="linear-gradient(0deg, #E92E0D 0%, #F47E5D 87.5%);" text="게임"size={1.7} />
				</BtnWrapper>
				<BtnWrapper
					onClick={() => {
						handleClick(FRUITS.FINEAPPLE);
					}}
				>
					<ImageWrapper>
						<StyledImage src="/img/huru5.png" alt={'파인애플'} fill priority />
					</ImageWrapper>
					<SelectButton bgColor="linear-gradient(0deg, #F3D722 0%, #FFF4A2 87.5%);" text="음식"size={1.7} />
				</BtnWrapper>
				<BtnWrapper
					onClick={() => {
						handleClick(FRUITS.ORANGE);
					}}
				>
					<ImageWrapper>
						<StyledImage src="/img/huru1.png" alt={'오렌지'} fill priority />
					</ImageWrapper>
					<SelectButton bgColor="linear-gradient(0deg, #FE8920 0%, #FFCB94 87.5%);" text="의류/생활" size={1.7}/>
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
	padding-top: 1rem;
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
	margin-bottom: 0.5rem;
`;

const Line = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	margin-top: 2.5rem;
`;

const BtnWrapper = styled.div`
	width: 20%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ImageWrapper = styled.div`
	width: 43%;
	height: 75%;
	position: relative;
	margin-bottom: -7%;
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: 80%;
`;
