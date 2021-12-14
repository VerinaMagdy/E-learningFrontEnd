import React from 'react';
import './quiz.css';
import 'react-dropdown/style.css';
import axios from 'axios';
import { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const baseURL = 'http://127.0.0.1:3008';

function Quiz() {
	const [ post, setPost ] = React.useState(null);
	const [ duration, setDuration ] = useState('');
	const [ starttime, setStarttime ] = useState('');
	const [ from, setFrom ] = useState('');
	const [ to, setTo ] = useState('');
	const [ number_of_questions, setNumber_of_questions ] = useState('');
	const navigate = useNavigate();
	function createPost() {
		axios
			.post(`${baseURL}/api/instructor/createquiz`, {
				duration: duration,
				starttime: starttime,
				from: from,
				to: to,
				number_of_questions: number_of_questions
			})
			.then((response) => {
				setPost(response.data);

				navigate(`/quizzes/attempt/1/${response.data.quiz_id}`);
			});
	}

	return (
		<div>
			{' '}
			<header>
				{' '}
				<h2>CSE487 E-learning Systems</h2>
			</header>
			<div class="quiz_inner">
				<h2 id="quiz_create">Create Quiz</h2>
				<div id="div1">
					<label>Quiz duration: </label>
					<input
						id="duration"
						type="text"
						placeholder="                        add duration"
						value={duration}
						onChange={(e) => {
							setDuration(parseInt(e.target.value));
						}}
					/>
					<label> minutes</label>
					<br />
					{/* {' '} */}
				</div>
				<div>
					{/* {' '} */}
					<label>Start time: </label>
					<input
						id="time"
						type="text"
						placeholder="                        add time"
						value={starttime}
						onChange={(e) => {
							setStarttime(e.target.value);
						}}
					/>
					<br />
					{/* {' '} */}
				</div>

				<div id="div2">
					{/* {' '} */}
					<label>From Chapter: </label>
					<input
						id="chapter"
						type="text"
						placeholder="                                ex:1"
						value={from}
						onChange={(e) => {
							setFrom(parseInt(e.target.value));
						}}
					/>
					<label> To </label>
					<input
						id="chapter"
						type="text"
						placeholder="                                     ex:10"
						value={to}
						onChange={(e) => {
							setTo(parseInt(e.target.value));
						}}
					/>
				</div>
				<div id="ques">
					<label>Number of Questions: </label>
					<input
						id="in1"
						type="text"
						placeholder="                                           1"
						value={number_of_questions}
						onChange={(e) => {
							setNumber_of_questions(parseInt(e.target.value));
						}}
					/>
				</div>
				<div id="create_quiz_btn_div">
					<button id="create" onClick={createPost}>
						Create Quiz
					</button>
				</div>
			</div>
			<footer>
				<p>Online Quiz System, Copyright &copy; 2021</p>
			</footer>
		</div>
	);
}

export default Quiz;
