import axios from 'axios';

const baseURL = `http://huruhuru.kro.kr:8080/`;

// 테스트 셋 가져오기
export const getTestSet = async (category: number, theme: number) => {
    console.log(category,theme);
	try {
		const response = await axios.get(`${baseURL}test?category=${category}&theme=${theme}`);
		console.log(response);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const getCount = async () => {
	try {
		const response = await axios.get(`${baseURL}`);
		console.log(response);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

// 테스트 2 점수 전송
export const postResultScore = async (selectedTheme: number, userScore: number) => {
	const accessToken = localStorage.getItem('access');
	try {
		const response = await axios.post(
			`${baseURL}saves`,
			{ theme: selectedTheme, score: userScore },
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			},
		);
		console.log(response);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

// 테스트2 랭킹 가져오기
export const getRank = async (memberId:number) => {
	try {
		const response = await axios.get(`${baseURL}score/${memberId}`);
		console.log(response);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};