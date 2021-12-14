import React from 'react';
import axios from 'axios';
import './review.css';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const baseURL = 'http://127.0.0.1:3008/api/quiz/preview';
// var res=[];
async function fetchRows({ queryKey }) {
	const [ _, quiz_id, student_id ] = queryKey;
	console.log(quiz_id);
	console.log(student_id);
	const { data } = await axios.post(`${baseURL}`, {
		quiz_id: quiz_id,
		student_id: student_id
	});
	console.log(data);
	return data;
}
function Review() {
	const { student_id, quiz_id } = useParams();

	const [ post, setPost ] = React.useState(null);
	const [ state, setState ] = React.useState(null);
	const { data, error, isError, isLoading } = useQuery([ 'rows', quiz_id, student_id ], fetchRows);
	if (isLoading) {
		return <div>Loading...</div>;
	} else if (isError) {
		return <div>Error! {error.message}</div>;
	} else if (data) {
		console.log(data);
		let grade = data.grade;
		let questions = data.questions;

		return (
			<div>
				{' '}
				<header>
					{' '}
					<h2>CSE487 E-learning Systems</h2>
				</header>
				<label id="review_grade">Your Grade: {grade}</label>
				{questions.map(({ question_id, question, choices, right_answer, answer, correct }) => {
					return (
						<div key={question_id} className="review_question">
							<p className="review_question_header" name="question">
								{question}
							</p>
							<div className="div_choices">
								{choices.map((choice) => {
									return (
										<div>
											<label className="review_choices">{choice}</label>
										</div>
									);
								})}
							</div>
							<p>
								<label id="review_right_answer">Right Answer: </label>
								{right_answer}
							</p>

							{correct ? (
								<p id="review_correct">
									<label>Your Answer: </label>
									{answer}
								</p>
							) : (
								<p id="review_wrong">
									<label>Your Answer: </label>
									{answer}
								</p>
							)}
						</div>
					);
				})}
				<p id="for_margin">End of page</p>
				<footer>
					<p>Online Quiz System, Copyright &copy; 2021</p>
				</footer>
			</div>
		);
	}
}
export default Review;
