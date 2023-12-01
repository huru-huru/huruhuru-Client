import axios from 'axios';

const baseURL = `https://huruhuru.kro.kr/`;

export const participants = async () => {
	const result = await axios.get(`${baseURL}`);
	// console.log(result);
	return result.data;
};
