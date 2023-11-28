'use client';

import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import TitleDesignText from '../common/TitleDesignText';
import SelectButton from '../common/SelectButton';
import { useRouter } from 'next/navigation';
import { participants } from '@/apis/landing';

const LandingSection = () => {
	const [num, setNum] = useState();
	const router = useRouter();
	const getNum = async () => {
		const result = await participants();
		setNum(result);
	};

	getNum();
	return (
		<Wrapper>
			<MainWrapper>
				<TitleWrapper>
					<SubTitle>본격 2000년대 모음.zip</SubTitle>
					<TitleDesignText text="학교 앞 탕후루" bgColor="linear-gradient(180deg, #fff 0%, #81efe5 100%)" size={5} />
				</TitleWrapper>
				<ImgWrapper>
					<StyledImage src="/img/landing.png" alt="랜딩 이미지" fill priority />
				</ImgWrapper>
				<BtnWrapper
					onClick={() => {
						router.push('/intro?type=1');
					}}
				>
					<SelectButton bgColor="linear-gradient(0deg, #7FEFE5 0%, #CEF3DA 87.5%, #CBF2DB 87.5%)" text="테스트 1" />
				</BtnWrapper>
				<BtnWrapper2
					onClick={() => {
						router.push('/intro?type=2');
					}}
				>
					<SelectButton bgColor="linear-gradient(0deg, #7FEFE5 0%, #CEF3DA 87.5%, #CBF2DB 87.5%)" text="테스트 2" />
				</BtnWrapper2>
				<Footer>지금까지 {num}명이 참여했어요!!</Footer>
			</MainWrapper>
		</Wrapper>
	);
};

export default LandingSection;

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

const MainWrapper = styled.div`
	width: 100%;
	height: 98vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const TitleWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-top: 3rem;
	top: 3rem;
`;

const SubTitle = styled.div`
	color: #171717;
	position: relative;
	text-align: center;
	font-family: 'NeoDunggeunmo Pro';
	font-size: 17.559px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 1.756px;
	margin-bottom: 1rem;
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;

const ImgWrapper = styled.div`
	position: relative;
	width: 70%;
	max-height: 446px;
	@media (max-width: 490px) {
		width: 80%;
	}
`;

const BtnWrapper = styled.div`
	width: 80%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	bottom: 70px;
	border-radius: 35.625px;
`;

const BtnWrapper2 = styled.div`
	width: 80%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	bottom: 60px;
`;

const Footer = styled.div`
	background-color: #434343;
	display: flex;
	position: fixed;
	max-width: 490px;
	width: 100%;
	height: 50px;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	color: #efefef;
	font-family: 'DNF Bit Bit v2';
	font-size: 1.75rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	bottom: 0px;
	z-index: 3;
`;
