import { styled } from 'styled-components';

type ModalProps = {
	closeModal: () => void;
};

const Signup = ({ closeModal }: ModalProps) => {
	const close = () => {
		closeModal();
	};
	return (
		<>
			<Shadow onClick={close} />
			<Wrapper>
				<ModalSection>
					<CloseButton onClick={close}>X</CloseButton>
					<Login>로그인</Login>
					<Text>이번엔 저번 기록을 깨보자구</Text>
					<StyledImage src={'/img/testIcon.png'} alt={'딸기'} width={10} />
					<Input1 placeholder="닉네임을 입력해주세요" />
					<Input1 type="password" placeholder="비밀번호를 입력해주세요" />
				</ModalSection>
			</Wrapper>
		</>
	);
};

export default Signup;

const Shadow = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5); /* 어두운 배경 색상 */
	z-index: 2;
	cursor: pointer;
`;
const Wrapper = styled.div`
	position: fixed;
	width: 25rem;
	height: 28rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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

const Login = styled.div`
	color: #171717;
	position: relative;
	text-align: center;
	font-family: 'NeoDunggeunmo Pro';
	font-size: 1.7rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: 1.756px;
`;

const Text = styled.div`
	color: #6f6f6f;
	position: relative;
	text-align: center;
	font-family: 'NeoDunggeunmo Pro';
	font-size: 1.2rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	letter-spacing: 1.756px;
`;

const Btn = styled.div`
	width: 320px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 6.5%;
	height: 52px;
	background-color: #ffd5d5;
	color: black;
	border-radius: 30px;
	background: linear-gradient(180deg, #c5e9ff 0%, #6bda01 100%);
	font-size: 2.3rem;
	font-weight: 600;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
	cursor: pointer;
`;

const Title = styled.div`
	font-size: 30px;
	font-weight: bold;
	color: var(--dark-gray, #585858);
`;

const Image = styled.img``;

const ModalSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 19.625rem;
	height: 28.3125rem;
	flex-shrink: 0;
	padding: 40px 20px;
	border-radius: 0.625rem;
	background: #fdfdfd;
	box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
	margin-top: 3rem;
	position: absolute;
`;

const StyledImage = styled(Image)`
	width: 10rem;
	height: 11rem;
	/* object-fit: cover; */
`;

const Input1 = styled.input`
	width: 19rem;
	color: var(--grey, #727272);
	background: #f5f5f5;
	font-family: 'SKYBORI';
	font-size: 1.2rem;
	font-weight: 400;
	line-height: normal;
	padding: 0.7rem;
	border: 1px solid #f5f5f5;
`;
