'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';
import TitleDesignText from '../common/TitleDesignText';
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
					<>
						<TitleDesignText
							text="2000년대"
							bgColor="linear-gradient(180deg, #fff 0%, #81efe5 100%)"
							size={3}
						/>
						<TitleDesignText text="연령 테스트" bgColor="linear-gradient(180deg, #fff 0%, #81efe5 100%)" size={4.125} />
						<SubTitle>2000년대의 당신은 몇 살이었나요?</SubTitle>
					</>
				);
			case '2':
				return (
					<>
						<TitleDesignText
							text="2000년대"
							bgColor="linear-gradient(180deg, #fff 0%, #81efe5 100%)"
							size={3}
						/>
						<TitleDesignText text="유행 랭킹 게임" bgColor="linear-gradient(180deg, #fff 0%, #81efe5 100%)" size={4.125} />
						<SubTitle>2000년대의 유행은 내가 제일 잘 알지!</SubTitle>
					</>
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
				<TitleWrapper>{renderMissionComponent()}</TitleWrapper>
				{/* <BtnWrapper onClick={() => handleClick(INTRO_BTN.LOGIN)}> */}
				<ImageWrapper>
					{selectType === '1' ? (
						<StyledImage src="/img/huru1.png" alt={'오렌지'} fill priority />
					) : (
						<StyledImage src="/img/huru3.png" alt={'오렌지'} fill priority />
					)}
				</ImageWrapper>
				{selectType === '1' ? (
					<BtnWrapper onClick={goTest}>
						<SelectButton
							bgColor="linear-gradient(0deg, #7FEFE5 0%, #CEF3DA 87.5%, #CBF2DB 87.5%)"
							text="게임하러 가기!"
						/>
					</BtnWrapper>
				) : (
					<BtnWrapper>
						<SelectButton
							bgColor="linear-gradient(0deg, #7FEFE5 0%, #CEF3DA 87.5%, #CBF2DB 87.5%)"
							text="이 게임 한 적 있어!"
							onClick={goLogin}
						/>
						{selectType === '1' ? null : <BtnSignup onClick={goSignup}>이 게임 처음이야</BtnSignup>}
					</BtnWrapper>
				)}
				{/* <BtnSignup onClick={() => handleClick(INTRO_BTN.SIGNIN)}>이 게임 처음이야</BtnSignup> */}
				{/* {selectType === '1' ? null : <BtnSignup onClick={goSignup}>이 게임 처음이야</BtnSignup>} */}
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
	justify-content: space-around;
	align-items: center;
	min-height: 100vh;
	height: 100%;
	background: linear-gradient(180deg, #7defe5 0%, #faf4d4 100%);
	padding: 1rem 0rem;
`;

const TitleWrapper = styled.div`
	width: 100%;
	display: flex;
	position: relative;
	margin-top: -30%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
	z-index: 1;
`;

const BtnWrapper = styled.div`
	width: 80%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	margin-bottom: -30%;
`;

const BtnSignup = styled.div`
	color: #999;
	position: relative;
	font-family: 'DNF Bit Bit v2';
	font-size: 1.867rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	border-bottom: 2px solid #999;
	margin-top: 2rem;
`;

const ImageWrapper = styled.div`
	width: 25%;
	position: absolute;
	max-width: 98px;
	max-height: 300px;
	margin-top: 8rem;
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;
