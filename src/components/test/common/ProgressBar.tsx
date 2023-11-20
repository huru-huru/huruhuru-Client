import { FRUITS } from '@/utils/constant';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

type ProgressBarPropsType = {
	fruit: FRUITS;
	progress: number;
};

enum ProgressLabels {
	'한',
	'두',
	'세',
	'네',
	'다섯',
	'여섯',
	'일곱',
	'여덟',
	'아홉',
	'마지막',
}

const ProgressBar = (props: ProgressBarPropsType) => {
	const { fruit, progress } = props;

	const getCount = () => {
		switch (progress) {
			case 0:
				return 5;
			case 1:
				return 4;
			case 2:
				return 4;
			case 3:
				return 3;
			case 4:
				return 3;
			case 5:
				return 2;
			case 6:
				return 2;
			case 7:
				return 1;
			case 8:
				return 1;
			case 9:
				return 0;
			default:
				return 0;
		}
	};

	const renderMissionComponent = () => {
		const fruitCount = getCount();
		switch (props.fruit) {
			case FRUITS.STRAWBERRY:
				return (
					<ProgressWrap>
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
						{Array.from({ length: fruitCount }).map((_, index) => (
							<div key={index} className="st">
								<StyledImage src="/img/strawberry.png" alt="진행도 막대" fill priority />
							</div>
						))}
						{progress % 2 === 1 && (
							<div className="st">
								<StyledImage src="/img/strawberryhalf.png" alt="진행도 막대" fill priority />
							</div>
						)}
					</ProgressWrap>
				);
			case FRUITS.SHINE:
				return <></>;
			case FRUITS.BLACK:
				return <></>;
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
			{renderMissionComponent()}
			<BiteText>탕후루 <span className='bold'>{ProgressLabels[progress]} </span>입</BiteText>
		</>
	);
};

export default ProgressBar;

const ProgressWrap = styled.div`
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
	.text1 {
		color: #fc615e;
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

const BiteText = styled.span`
	color: var(--black, #171717);
	font-family: DNF Bit Bit v2;
	font-size: 2.16rem;
	font-weight: 400;
    margin-top: 3rem;
    .bold{
        color: #FC615E;
    }
`;
