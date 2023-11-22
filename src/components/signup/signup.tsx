import { styled } from 'styled-components';
import Image from 'next/image';
import SelectButton from '../common/SelectButton';

type ModalProps = {
	closeModal: () => void;
	goTest: () => void;
};

const Signup = ({ closeModal, goTest }: ModalProps) => {
	const close = () => {
		closeModal();
	};

	const go = () => {
		goTest();
	};

	const ModalSectionWrapper = ({ children, closeModal }: { children: React.ReactNode, closeModal: () => void }) => {
		const totalHeight = document.documentElement.scrollHeight;
		const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		  if (e.target === e.currentTarget) {
			closeModal();
		  }
		};
	  
		return (
		  <ModalSection onClick={handleClick} height={totalHeight}>
			{children}
		  </ModalSection>
		);
	  };


	return (
			<ModalSectionWrapper closeModal={closeModal}>
			<Wrapper>
				<InputWrapper>
					<CloseButton onClick={close}>X</CloseButton>
					<LoginText>회원가입</LoginText>
					<Text>어서 최고점에 도전해보라구!</Text>
					<ImageWrapper>
						<StyledImage src={'/img/fruitBig5.png'} alt={'딸기'} fill priority />
					</ImageWrapper>
					<Input1 placeholder="닉네임을 입력해주세요" />
					<Input1 type="password" placeholder="비밀번호를 입력해주세요" />
				</InputWrapper>
				<BtnWrapper onClick={go}>
					<SelectButton
						bgColor="linear-gradient(0deg, #7FEFE5 0%, #CEF3DA 87.5%, #CBF2DB 87.5%)"
						text="이제 도전하러 가볼까?"
					/>
				</BtnWrapper>
			</Wrapper>
		</ModalSectionWrapper>
	);
};

export default Signup;

const ModalSection = styled.div<{ height: number }>`
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	top: 0;
	right: 50%;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 0%);
	height: ${(props) => props.height};
	background: rgba(0, 0, 0, 0.77);
	z-index: 3;
	@media (min-width: 490px) {
		width: 490px;
	}
`;

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
	width: 36%;
	margin-bottom: 2rem;
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
	background:  #F5F5F5;
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
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
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
