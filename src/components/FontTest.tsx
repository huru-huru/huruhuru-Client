'use client';
import React from 'react';
import styled from 'styled-components';

const FontTest = () => {
	return (
		<Wrapper>
            🍊폰트테스트🍓
			<Skybori>하늘보리</Skybori>
            <DNF>던파2</DNF>
            <Neo>둥근고딕</Neo>
		</Wrapper>
	);
};

export default FontTest;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(180deg, #7DEFE5 0%, #FAF4D4 100%);
    font-size: 2rem;
`
const Skybori = styled.div`
	font-family: 'SKYBORI';
`;

const DNF = styled.div`
	font-family: 'DNF Bit Bit v2';
`;

const Neo = styled.div`
    font-family: "NeoDunggeunmo Pro";
`