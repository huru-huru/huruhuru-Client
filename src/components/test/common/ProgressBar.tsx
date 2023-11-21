import { FRUITS } from '@/utils/constant';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

type ProgressBarPropsType = {
	fruit: FRUITS;
	progress: number;
};

const ProgressBar = (props: ProgressBarPropsType) => {
	const { fruit, progress } = props;

	const getCount = () => {
		const count = 5 - (progress / 2)
		return count;
	};

	const renderMissionComponent = () => {
		const fruitCount = getCount();
		switch (fruit) {
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
							<>
								<div key={index} className="st">
									<StyledImage src="/img/strawberry.png" alt="진행도 막대" fill priority />
								</div>
							</>
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

