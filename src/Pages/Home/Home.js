import React from 'react';
import Question from '../../Pages/Questions/question';
import './Home.css';
import { useNavigate, useParams } from 'react-router-dom';

function Home() {
	const { instructor_id } = useParams();
	const navigate = useNavigate();
	console.log(instructor_id);
	function handlehome(e) {
		e.preventDefault();
		navigate(`/Login/Home/QuestionBank/${instructor_id}`);
	}
	function handlequiz(e) {
		e.preventDefault();
		navigate(`/Login/Home/createquiz/${instructor_id}`);
	}
	function handlegrades(e) {
		e.preventDefault();
		navigate(`/Login/Home/viewgrades/${instructor_id}`);
	}

	return (
		<div className="Home">
			<header>
				{' '}
				<h2>CSE487 E-learning Systems</h2>
			</header>
      <div class="home_inner">
			<div className="home_img">
				<head>
					{' '}
					<base href="/" />{' '}
				</head>
				<img src="./images/back.jpg" />
			</div>
			<div className="outer">
				<button className="HomeButtons" onClick={handlequiz}>
					Create Quiz
				</button>
				<button className="HomeButtons" onClick={handlehome}>
					Question Bank
				</button>
				<button className="HomeButtons" onClick={handlegrades}>
					View Grades
				</button>
			</div>
      </div>
			<footer>
				<p>Online Quiz System, Copyright &copy; 2021</p>
			</footer>
		</div>
	);
}

export default Home;
