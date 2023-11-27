export interface QuestionData {
	id: int;
	category: int;
	theme: int;
	question: string;
	image: string;
	image_url: string;
	test_count: int;
	question_number: int;
	answerList: Answer[];
}
export interface Answer {
	id: int;
	answerContent: string;
	correct: boolean;
}

