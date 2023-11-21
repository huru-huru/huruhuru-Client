import { styled } from 'styled-components';
import Image from 'next/image';
import SelectButton from '../common/SelectButton';

type ModalProps = {
	closeModal: () => void;
	goTest: () => void;
};

const Login = ({ closeModal, goTest }: ModalProps) => {
	const close = () => {
		closeModal();
	};

	const go = () => {
		goTest();
	};

	return (
		<>
			<Wrapper onClick={close}>
				<ModalSection>
					<CloseButton onClick={close}>X</CloseButton>
					<LoginText>로그인</LoginText>
					<Text>이번엔 저번 기록을 깨보자구!!</Text>
					<ImageWrapper>
						<StyledImage src={'/img/strawberry2.png'} alt={'딸기'} fill priority />
					</ImageWrapper>
					<Input1 placeholder="닉네임을 입력해주세요" />
					<Input1 type="password" placeholder="비밀번호를 입력해주세요" />
					<FindPassWord>비밀번호를 잊어버리셨나요?</FindPassWord>
				</ModalSection>
				<BtnWrapper onClick={go}>
					<SelectButton
						bgColor="linear-gradient(0deg, #7FEFE5 0%, #CEF3DA 87.5%, #CBF2DB 87.5%)"
						text="이제 도전하러 가볼까?"
					/>
				</BtnWrapper>
			</Wrapper>
		</>
	);
};

export default Login;

const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	display: flex;
	background-color: rgba(0, 0, 0, 0.7);
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	z-index: 3;
`;

const CloseButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	width: 20px;
	height: 20px;
	color: #b5b5bc;
	background-color: #fdfdfd;
	border: none;
	cursor: pointer;
`;

const LoginText = styled.div`
	color: #171717;
	position: relative;
	text-align: center;
	font-family: 'NeoDunggeunmo Pro';
	font-size: 2.5rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: 1.756px;
	bottom: 1rem;
`;

const Text = styled.div`
	color: #6f6f6f;
	position: relative;
	text-align: center;
	font-family: 'NeoDunggeunmo Pro';
	font-size: 1.8rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	bottom: 0.3rem;
	letter-spacing: 0.2195rem;
`;

const FindPassWord = styled.div`
	color: #999;
	position: relative;
	text-align: center;
	font-family: 'SKYBORI';
	font-size: 1.3rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	top: 2rem;
	letter-spacing: 1.756px;
	border-bottom: 2px solid #999;
`;

const ModalSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 30rem;
	height: 45rem;
	flex-shrink: 0;
	padding: 40px 20px;
	border-radius: 0.625rem;
	background: #fdfdfd;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
	position: absolute;
`;

const ImageWrapper = styled.div`
	width: 52%;
	height: 50%;
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
	margin-top: 1.9rem;
`;

const Input1 = styled.input`
	width: 90%;
	color: var(--grey, #727272);
	background: #eae9e9;
	font-family: 'SKYBORI';
	font-size: 1.4rem;
	font-weight: 400;
	line-height: normal;
	padding: 1.5rem;
	margin-top: 1rem;
	border: 1px solid #f5f5f5;
`;

const BtnWrapper = styled.div`
	width: 36rem;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	top: 32rem;
`;
