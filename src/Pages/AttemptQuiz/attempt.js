import React from 'react';
import axios from 'axios';
import './attempt.css';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';


const baseURL = 'http://127.0.0.1:3008';

async function fetchRows({ queryKey }) {
	const [ _, quiz_id ] = queryKey;
	const { data } = await axios.get(`${baseURL}/api/quiz/getquestions/${quiz_id}`);
	return data;
}

function Attempt() {
	const { student_id, quiz_id } = useParams();
	const [ answer, setAnswer ] = useState(null);

	const [ post, setPost ] = React.useState(null);
	const navigate = useNavigate();
	const [ state, setState ] = useState(null);

	const { data, error, isError, isLoading } = useQuery([ 'rows', quiz_id ], fetchRows);
	if (isLoading) {
		return <div>Loading...</div>;
	} else if (isError) {
		return <div>Error! {error.message}</div>;
	} else if (data) {
		let state = [];
		data.map(({ question_id }) => {
			state.push(([ question_id ] = ''));
		});
		console.log(state);

		function submitquiz(e) {
			e.preventDefault();

			axios
				.post(`${baseURL}/api/quiz/submit`, {
					student_id: student_id,
					quiz_id: quiz_id,
					qid: e.target.key,
					answer: answer
				})
				.then((response) => {
					setPost(response.data);
				});
		}
		function finishquiz(e) {
			e.preventDefault();
      let request = []
      data.map(({question_id})=>{
        request.push({
          student_id: student_id,
					quiz_id: quiz_id,
					qid: question_id,
					answer: state[question_id]
        })
      })
      axios
				.post(`${baseURL}/api/quiz/submit`, 
        request
        )
				.then((response) => {
          navigate(`/quizzes/attempt/review/${student_id}/${quiz_id}`);
				});
		}
		const handleChange = (e) => {
			const name = e.target;

			this.setState({
				name
			});
		};

		return (
			<div>
				{' '}
				<header>
					{' '}
					<h2>CSE487 E-learning Systems</h2>
				</header>
				{data.map((question) => {
					return (
						<div key={question.question_id} class="question">
							<form>
								<p id="qu" name="question">
									{question.question}
								</p>
								{question.choices.map((choice) => {
									return (
										<div>
											{' '}
											<input
												class="option"
												type="radio"
												value={choice}
												name={question.question_id}
												onClick={() => {
													state[question.question_id] = choice;
													console.log(state);
												}}
											/>
											{choice}
										</div>
									);
								})}
							</form>
						</div>
					);
				})}
				<div class="submit_attempt">
					<button class="questionBtn" id="finish" onClick={finishquiz}>
						Finish quiz
					</button>
				</div>
				<footer>
					<p>Online Quiz System, Copyright &copy; 2021</p>
				</footer>
			</div>
		);
	}
}
export default Attempt;
