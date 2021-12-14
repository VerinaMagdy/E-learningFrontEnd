import axios from 'axios';
import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import './grades.css';

const baseURL = 'http://127.0.0.1:3008';
async function fetchRows() {
	const { data } = await axios.get(`${baseURL}/api/instructor/viewGrades`);
	return data;
}

function Grades() {
	const { data, error, isError, isLoading } = useQuery('rows', fetchRows);
	console.log(data);
	if (isLoading) {
		return <div>Loading...</div>;
	} else if (isError) {
		return <div>Error! {error.message}</div>;
	} else if (data) {
		return (
			<div id="d1">
				{' '}
				<header>
					{' '}
					<h2>CSE487 E-learning Systems</h2>
				</header>
				<div id="hd">
					<h2 id='view_grades'>View Grades</h2>
				</div>
				<table className="center">
					<thead>
						<tr>
							<th>studentName</th>
							<th>studentId</th>
							<th>studentGrade</th>
						</tr>
					</thead>
					<tbody>
						{data.map(({ student_id, username, quiz_1 }) => {
							return (
								<tr key={student_id}>
									<td>{username}</td>
									<td>{student_id}</td>
									<td>{quiz_1}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				<footer>
					<p>Online Quiz System, Copyright &copy; 2021</p>
				</footer>
			</div>
		);
	}
}

export default Grades;
