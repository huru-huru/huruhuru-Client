export interface QuestionData {
	id: int;
	category: int;
	question: string;
	image: string;
	theme: int;
	answer: Collection<Answer>;
	test_count: int;
	question_number: int;
}
