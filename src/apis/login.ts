import axios from 'axios';

const baseURL = `https://huruhuru.kro.kr/`;

type LoginInfo = {
	nickname: string;
	password: string;
};

export const signup = async (body: LoginInfo) => {
	try {
		const result = await axios.post(`${baseURL}signup`, body);
		const token = result.data.token;
		const id = result.data.id;
		localStorage.setItem('token', token);
		localStorage.setItem('memberId', id);
		return result;
	} catch (error) {
		console.log(error);
		return false;
	}
};

export const login = async (body: LoginInfo) => {
	try {
		const result = await axios.post(`${baseURL}login`, body);
		const token = result.data.token;
		const id = result.data.id;
		localStorage.setItem('token', token);
		localStorage.setItem('memberId', id);
		return result;
	} catch (error) {
		console.log(error);
		return false;
	}
};
