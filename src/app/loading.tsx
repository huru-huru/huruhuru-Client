'use client';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const loading = () => {
	return (
		<LoadingSection>
			<Image src="/img/loading.png" alt="로딩" width={375} height={812} />
		</LoadingSection>
	);
};

export default loading;

const LoadingSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: #fff0ee;
`;
