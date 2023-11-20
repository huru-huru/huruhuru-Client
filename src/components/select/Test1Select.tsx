import { FRUITS } from '@/utils/constant';
import { useRouter } from 'next/navigation';
import React from 'react'
import styled from 'styled-components';

const Test1Select = () => {
  const router = useRouter();

  const handleClick = (props: FRUITS) => {
        router.push(`/generationTest?fruits=${props}`)
};

  return (
    <Wrapper>
      <button onClick={()=>{handleClick(FRUITS.STRAWBERRY)}}>딸기</button>
      <button onClick={()=>{handleClick(FRUITS.SHINE)}}>샤인머스켓</button>
      <button onClick={()=>{handleClick(FRUITS.ORANGE)}}>통귤</button>
      <button onClick={()=>{handleClick(FRUITS.BLACK)}}>블랙사파이어</button>
      <button onClick={()=>{handleClick(FRUITS.TOMATO)}}>방울 토마토</button>
      <button onClick={()=>{handleClick(FRUITS.FINEAPPLE)}}>파인애플</button>
    </Wrapper>
  )
}

export default Test1Select

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	height: 100%;
	background: linear-gradient(180deg, #7defe5 0%, #faf4d4 100%);
`;