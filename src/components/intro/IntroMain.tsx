'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';
import TitleDesignText from '../common/TitleDesignText';
import { INTRO_BTN } from '@/utils/constant';
import SelectButton from '../common/SelectButton';
import Signup from '../signup/signup';
import Image from 'next/image';
import Login from '../login/Login';

const IntroMain = () => {
	const router = useRouter();
	const params = useSearchParams();
	const selectType = params.get('type');
	const [loginModal, setLoginModal] = React.useState(false);
	const [signupModal, setSignupModal] = React.useState(false);
	// const handleClick = (props: INTRO_BTN) => {
	// 	if (props === INTRO_BTN.LOGIN) {
	// 		// access 토큰 확인
	// 		// 유효한 토큰이면 해당 테스트 페이지 바로 이동
	// 		router.push(`/select?type=${selectType}`);
	// 		// 유효하지 않은 토큰이면 로그인 모달 (구현해주세요)
	// 	} else {
	// 		setIsModalOpen(true);
	// 	}
	// };

	const renderMissionComponent = () => {
		switch (selectType) {
			case '1':
				return (
					<TitleDesignText text="테스트 1" bgColor="linear-gradient(180deg, #fff 0%, #81efe5 100%)" size={4.125} />
				);
			case '2':
				return (
					<TitleDesignText text="테스트 2" bgColor="linear-gradient(180deg, #fff 0%, #81efe5 100%)" size={4.125} />
				);
			default:
				return <div>테스트가 존재하지 않습니다</div>; // 나중에 에러 컴포넌트 반환
		}
	};

	const closeLogin = () => {
		setLoginModal(false);
	};

	const closeSignup = () => {
		setSignupModal(false);
	};

	const goTest = () => {
		router.push(`/select?type=${selectType}`);
	};

	const goLogin = () => {
		setLoginModal(true);
	};

	const goSignup = () => {
		setSignupModal(true);
	};

	return (
		<>
			<Wrapper>
				<TitleWrapper>
					{renderMissionComponent()}
					<SubTitle>이 테스트는 1970년</SubTitle>
					<SubTitle>왕가탕후루 중앙대본점에서 시작되어...</SubTitle>
				</TitleWrapper>
				{/* <BtnWrapper onClick={() => handleClick(INTRO_BTN.LOGIN)}> */}
				<ImageWrapper>
					<StyledImage src="/img/huru1.png" alt={'오렌지'} fill priority />
				</ImageWrapper>
				<BtnWrapper onClick={goLogin}>
					<SelectButton
						bgColor="linear-gradient(0deg, #7FEFE5 0%, #CEF3DA 87.5%, #CBF2DB 87.5%)"
						text="이 게임 한 적 있어!"
					/>
				</BtnWrapper>
				{/* <BtnSignup onClick={() => handleClick(INTRO_BTN.SIGNIN)}>이 게임 처음이야</BtnSignup> */}
				<BtnSignup onClick={goSignup}>이 게임 처음이야</BtnSignup>
				{signupModal && <Signup closeModal={closeSignup} goTest={goTest} />}
				{loginModal && <Login closeModal={closeLogin} goTest={goTest} />}
			</Wrapper>
		</>
	);
};

export default IntroMain;

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

const TitleWrapper = styled.div`
	width: 100%;
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 2rem;
	bottom: 5rem;
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
`;

const BtnWrapper = styled.div`
	width: 80%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	top: 3rem;
`;

const BtnSignup = styled.div`
	color: #999;
	position: relative;
	font-family: 'DNF Bit Bit v2';
	font-size: 2.15rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	border-bottom: 2px solid #999;
	top: 4rem;
`;

const ImageWrapper = styled.div`
	width: 25%;
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;
