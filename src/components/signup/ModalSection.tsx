import styled from 'styled-components';

export const ModalSectionWrapper = ({ children }: { children: React.ReactNode }) => {
	const totalHeight = document.documentElement.scrollHeight;
	return <ModalSection height={totalHeight}>{children}</ModalSection>;
};

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
