import axios from 'axios';

const baseURL = `https://huruhuru.kro.kr/`;

// 테스트 셋 가져오기
export const getTestSet = async (category: number, theme: number) => {
	// console.log(category, theme);
	try {
		const response = await axios.get(`${baseURL}test?category=${category}&theme=${theme}`);
		// console.log(response);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const getCount = async () => {
	try {
		const response = await axios.get(`${baseURL}`);
		// console.log(response);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

// 테스트 2 점수 전송
export const postResultScore = async (selectedTheme: number, userScore: number) => {
	const token = localStorage.getItem('token');
	try {
		const response = await axios.post(
			`${baseURL}save`,
			{ theme: selectedTheme, score: userScore },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
		// console.log(response);
		return response;
	} catch (error) {
		console.log('에러 :',error);
		return false;
	}
};

// 테스트2 랭킹 가져오기
export const getRank = async () => {
	const token = localStorage.getItem('token');
	try {
		const response = await axios.get(`${baseURL}score`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		// console.log(response);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

// 테스트 참여자수 증가
export const updateUserCount = async (category: number, theme: number) => {
	// console.log(category, theme);
	try {
		const response = await axios.put(`${baseURL}?category=${category}&theme=${theme}`);
		// console.log(response);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};

// 각각 테마 점수 가져오기
export const getThemeResult = async () => {
	const token = localStorage.getItem('token');
	try {
		const response = await axios.get(`${baseURL}total`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		// console.log(response);
		return response;
	} catch (error) {
		console.log(error);
		return false;
	}
};