'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import Test1Select from './Test1Select';
import Test2Select from './Test2Select';

const SelectMain = () => {
    const params = useSearchParams();
    const selectType= params.get('type');

    const renderMissionComponent = () => {
		switch (selectType) {
			case '1':
				return <Test1Select />;
			case '2':
				return <Test2Select />;
			default:
				return <div>테스트가 존재하지 않습니다</div>; // 나중에 에러 컴포넌트 반환
		}
	};
	return <>{renderMissionComponent()}</>;
}

export default SelectMain