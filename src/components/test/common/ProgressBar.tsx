import { FRUITS, ProgressLabels } from '@/utils/constant';
import { testColors } from '@/utils/constant/colorConstants';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

type ProgressBarPropsType = {
	fruit: FRUITS;
	progress: number;
};

const ProgressBar = (props: ProgressBarPropsType) => {
	const { fruit, progress } = props;

	const testcolors =
		fruit === FRUITS.STRAWBERRY
			? testColors.STRAWBERRY
			: fruit === FRUITS.SHINE
			? testColors.SHINE
			: fruit === FRUITS.BLACK
			? testColors.BLACK
			: testColors.DEFAULT;

	const getCount = () => {
		const count = 5 - progress / 2;
		return count;
	};

	const renderMissionComponent = () => {
		const fruitCount = getCount();
		switch (fruit) {
			case FRUITS.STRAWBERRY:
				return (
					<>
						{Array.from({ length: fruitCount }).map((_, index) => (
							<>
								<div key={index} className="st">
									<StyledImage src={`/img/fruit${fruit}.png`} alt="진행도 막대" fill priority />
								</div>
							</>
						))}
						{progress % 2 === 1 && (
							<div className="st">
								<StyledImage src={`/img/fruithalf${fruit}.png`} alt="진행도 막대" fill priority />
							</div>
						)}
					</>
				);
			case FRUITS.SHINE:
				return (
					<>
						{Array.from({ length: fruitCount }).map((_, index) => (
							<>
								<div key={index} className="sh">
									<StyledImage src={`/img/fruit${fruit}.png`} alt="진행도 막대" fill priority />
								</div>
							</>
						))}
						{progress % 2 === 1 && (
							<div className="sh">
								<StyledImage src={`/img/fruithalf${fruit}.png`} alt="진행도 막대" fill priority />
							</div>
						)}
					</>
				);
			case FRUITS.BLACK:
				return (
					<>
						{Array.from({ length: fruitCount }).map((_, index) => (
							<>
								<div key={index} className="bl">
									<StyledImage src={`/img/fruit${fruit}.png`} alt="진행도 막대" fill priority />
								</div>
							</>
						))}
						{progress % 2 === 1 && (
							<div className="bl">
								<StyledImage src={`/img/fruithalf${fruit}.png`} alt="진행도 막대" fill priority />
							</div>
						)}
					</>
				);
			case FRUITS.FINEAPPLE:
				return <></>;
			case FRUITS.ORANGE:
				return <></>;
			case FRUITS.TOMATO:
				return <></>;
			default:
				return <div>테스트가 존재하지 않습니다</div>;
		}
	};
	return (
		<>
			<ProgressWrap $bold={testcolors.title}>
				<div className="stick">
					<StyledImage src="/img/stick.png" alt="진행도 막대" fill priority />
				</div>
				<div className="cup">
					<StyledImage src="/img/papercup.png" alt="진행도 막대" fill priority />
					<div className="count">
						<div className="text1">{progress + 1}</div>
						<div className="text2">/ 10개</div>
					</div>
				</div>
				{renderMissionComponent()}
			</ProgressWrap>
			<BiteText $bold={testcolors.title}>
				탕후루 <span className="bold">{ProgressLabels[progress]} </span>입
			</BiteText>
		</>
	);
};

export default ProgressBar;

const ProgressWrap = styled.div<{ $bold: string }>`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-top: 1rem;
	.stick {
		width: 90%;
	}
	.cup {
		width: 17%;
		position: relative;
		margin-left: -83%;
		z-index: 1;
		display: flex;
	}
	.count {
		position: relative;
		z-index: 2;
		margin-left: -70%;
		margin-top: 30%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.st {
		width: 15%;
		margin-left: -5%;
		margin-right: 3%;
	}
	.sh {
		width: 15%;
		margin-left: -5%;
		margin-right: 3%;
	}
	.bl {
		width: 15%;
		margin-left: 2%;
		margin-right: -10%;
	}
	.text1 {
		color: ${(props) => props.$bold};
		text-align: center;
		font-family: DNF Bit Bit v2;
		font-size: 1.733rem;
		font-weight: 400;
	}
	.text2 {
		color: #919191;
		font-family: DNF Bit Bit v2;
		font-size: 0.87rem;
		font-weight: 400;
	}
`;
const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;
const BiteText = styled.span<{ $bold: string }>`
	color: var(--black, #171717);
	font-family: DNF Bit Bit v2;
	font-size: 2.16rem;
	font-weight: 400;
	margin-top: 3rem;
	.bold {
		color: ${(props) => props.$bold};
	}
`;
