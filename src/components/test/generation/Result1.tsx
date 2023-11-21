'use client';
import TitleDesignText from '@/components/common/TitleDesignText';
import { FRUITS } from '@/utils/constant';
import {resultColors} from '@/utils/constant/colorConstants';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import styled from 'styled-components';

const Result1 = () => {
	const router = useRouter();
	const params = useSearchParams();
	const selectType = parseInt(params.get('fruits') || '0', 10);
	const resultcolor =
		selectType === FRUITS.STRAWBERRY
			? resultColors.STRAWBERRY
			: selectType === FRUITS.SHINE
			? resultColors.SHINE
			: selectType === FRUITS.BLACK
			? resultColors.BLACK
			: resultColors.DEFAULT;
    
	return (
		<Wrapper $bg={resultcolor.bg}>
			<TitleDesignText text="당신의 탕후루 시절은?" bgColor={resultcolor.title} size={3.6} />
			<div className="fruit-img">
            <StyledImage src={`/img/fruitBig${selectType}.png`} alt="결과 과일" fill priority />
			</div>
		</Wrapper>
	);
};

export default Result1;

const Wrapper = styled.div<{ $bg: string }>`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	height: 100%;
	background: ${(props) => props.$bg};
	padding-bottom: 3rem;
    .fruit-img{
        margin-top: 3.61088rem;
        width: 35%;
    }
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;
