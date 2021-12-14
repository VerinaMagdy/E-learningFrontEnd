import React from 'react';
import './question.css';
import { useState } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from 'axios';

const baseURL = 'http://127.0.0.1:3008';

async function fetchRows() {
	const { data } = await axios.get(`${baseURL}/api/questionbank/show`);
	return data;
}

function Question() {
	const [ inputList, setInputList ] = useState({
		question: '',
		CorrectAnswer1: '',
		Answer2: '',
		Answer3: '',
		Answer4: '',
		Chapter: ''
	});

	const [ post, setPost ] = React.useState(null);
	const { data, error, isError, isLoading } = useQuery('rows', fetchRows);
	if (isLoading) {
		return <div>Loading...</div>;
	} else if (isError) {
		return <div>Error! {error.message}</div>;
	} else if (data) {
		function createPost() {
			const list = inputList;
			axios
				.post(`${baseURL}/api/questionbank/addquestion`, {
					question: list['question'],
					right_answer: list['CorrectAnswer1'],
					wrong_answers: [ list['Answer2'], list['Answer3'], list['Answer4'] ],
					chapter: parseInt(list['Chapter'])
				})
				.then((response) => {
					setPost(response.data);
				});
		}

		const handleInputChange = (e) => {
			const { name, value } = e.target;
			let list = inputList;
			list[name] = value;
			setInputList(list);
		};
		const handleRemoveClick = (index) => {
			const list = [ ...inputList ];
			list.splice(index, 1);
			setInputList(list);
		};
		const handleAddClick = () => {
			setInputList([
				...inputList,
				{ question: '', CorrectAnswer1: '', Answer2: '', Answer3: '', Answer4: '', Chapter: '' }
			]);
		};

		return (
			<div className="App">
				<header>
					{' '}
					<h2>CSE487 E-learning Systems</h2>
				</header>
				<h2>Question Bank</h2>
				{
					<div className="box">
						<input
							id="qu"
							name="question"
							placeholder="Enter Your Question"
							onChange={(e) => handleInputChange(e)}
						/>
						<input
							className="ml10"
							name="CorrectAnswer1"
							placeholder="Enter Correct Answer1"
							onChange={(e) => handleInputChange(e)}
						/>
						<input
							className="ml20"
							name="Answer2"
							placeholder="Enter Answer2"
							onChange={(e) => handleInputChange(e)}
						/>
						<input
							className="ml30"
							name="Answer3"
							placeholder="Enter Answer3"
							onChange={(e) => handleInputChange(e)}
						/>
						<input
							className="ml40"
							name="Answer4"
							placeholder="Enter Answer4"
							onChange={(e) => handleInputChange(e)}
						/>
						<input
							className="ml40"
							name="Chapter"
							placeholder="Enter Question chapter"
							onChange={(e) => handleInputChange(e)}
						/>
						<div className="btn-box">{<button onClick={createPost}>Add</button>}</div>
					</div>
				}
				{data.map((question) => {
					return (
						<div key={question.question_id} className="questionbank_question">
							<p name="question">{question.question}</p>
							{question.choices.map((choice) => {
								return <label>{choice}</label>;
							})}
						</div>
					);
				})}
				<footer>
					<p>Online Quiz System, Copyright &copy; 2021</p>
				</footer>
			</div>
		);
	}
}

export default Question;
