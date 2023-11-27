'use client';

import { styled } from 'styled-components';
import Image from 'next/image';
import SelectButton from '../common/SelectButton';
import { useState, ChangeEvent } from 'react';
import { signup } from '@/apis/login';
import { ModalSectionWrapper } from './ModalSection';

type ModalProps = {
	closeModal: () => void;
	goTest: () => void;
};

const Signup = ({ closeModal, goTest }: ModalProps) => {
	const [nickname, setNickname] = useState('');
	const [password, setPassword] = useState('');
	const [isSignupFailed, setIsSignupFailed] = useState(false);

	const handleNickNameChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNickname(e.target.value);
	};

	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const body = {
		nickname: nickname,
		password: password,
	};

	const handleClick = async () => {
		const result = await signup(body);
		if (result) {
			return true;
		}
	};

	const go = async () => {
		const success = await handleClick();
		if (!success) {
			setIsSignupFailed(true);
		} else {
			goTest();
		}
	};

	return (
		<ModalSectionWrapper>
			<Wrapper>
				<InputWrapper>
					<CloseButton onClick={closeModal}>X</CloseButton>
					<LoginText>회원가입</LoginText>
					<Text>어서 최고점에 도전해보라구!</Text>
					<ImageWrapper>
						<StyledImage src={'/img/fruitBig5.png'} alt={'파인애플'} fill priority />
					</ImageWrapper>
					<Input1
						failed={isSignupFailed}
						placeholder="닉네임을 입력해주세요"
						onChange={handleNickNameChange}
						value={nickname}
					/>
					<Input1
						failed={isSignupFailed}
						type="password"
						placeholder="비밀번호를 입력해주세요"
						onChange={handlePasswordChange}
						value={password}
					/>
				</InputWrapper>
				<BtnWrapper>
					<SelectButton
						bgColor="linear-gradient(0deg, #7FEFE5 0%, #CEF3DA 87.5%, #CBF2DB 87.5%)"
						text="이제 도전하러 가볼까?"
						onClick={go}
					/>
				</BtnWrapper>
			</Wrapper>
		</ModalSectionWrapper>
	);
};

export default Signup;

const Wrapper = styled.div`
	width: 60%;
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 3;
`;

const CloseButton = styled.button`
	font-size: 2.7rem;
	color: #b5b5bc;
	background-color: #fdfdfd;
	border: none;
	cursor: pointer;
	position: relative;
	margin-top: -18%;
	margin-bottom: 1rem;
	margin-right: -95%;
`;

const LoginText = styled.div`
	color: #171717;
	text-align: center;
	font-family: 'NeoDunggeunmo Pro';
	font-size: 3rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: 1.756px;
	margin-bottom: 1rem;
`;

const Text = styled.div`
	color: #6f6f6f;
	position: relative;
	text-align: center;
	font-family: 'NeoDunggeunmo Pro';
	font-size: 1.6rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	bottom: 0.3rem;
	letter-spacing: 0.2195rem;
`;

const ImageWrapper = styled.div`
	width: 65%;
	margin-top: 2rem;
	margin-bottom: 2rem;
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
	margin-top: 1.9rem;
`;

const Input1 = styled.input<{ failed: boolean }>`
	width: 90%;
	color: ${(props) => (props.failed ? '#EF6161' : '#727272')};
	background: #f5f5f5;
	font-family: 'SKYBORI';
	font-size: 1.4rem;
	font-weight: 400;
	line-height: normal;
	padding: 1.5rem;
	margin-top: 1rem;
	border: 1px solid ${(props) => (props.failed ? '#EF6161' : '#f5f5f5')};
`;

const BtnWrapper = styled.div`
	width: 36rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	margin-top: 1rem;
`;

const InputWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;
	border-radius: 1.25rem;
	padding: 7rem 2.75rem;
	margin-bottom: 1rem;
`;
