'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';
import TitleDesignText from '../common/TitleDesignText';
import { INTRO_BTN } from '@/utils/constant';

const IntroMain = () => {
    const router = useRouter();
	const params = useSearchParams();
	const selectType = params.get('type');

	const handleClick = (props: INTRO_BTN) => {
        if(props===INTRO_BTN.LOGIN){
            // access 토큰 확인
            // 유효한 토큰이면 해당 테스트 페이지 바로 이동
            router.push(`/select?type=${selectType}`)
            // 유효하지 않은 토큰이면 로그인 모달 (구현해주세요)
        } else{
            // 회원가입 모달
        }
    };

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

	return (
		<Wrapper>
			{renderMissionComponent()}
			<button onClick={() => handleClick(INTRO_BTN.LOGIN)}>이 게임한 적 있어!</button>
			<button onClick={() => handleClick(INTRO_BTN.SIGNIN)}>이 게임 처음이야</button>
		</Wrapper>
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
