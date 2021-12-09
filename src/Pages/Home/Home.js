import React from 'react';
import Question from '../../Pages/Questions/question'
import './Home.css';
import { useNavigate, useParams } from 'react-router-dom';

function Home (){
  const {instructor_id} = useParams()
  const navigate=  useNavigate();
  console.log(instructor_id)
  function handlehome(e){
    e.preventDefault();
    navigate(`/Login/Home/QuestionBank/${instructor_id}`);

}
function handlequiz(e){
  e.preventDefault();
  navigate(`/Login/Home/createquiz/${instructor_id}`);

}
function handlegrades(e){
  e.preventDefault();
  navigate(`/Login/Home/viewgrades/${instructor_id}`);

}

    return(
  <div className='Home'>
    <h1>CSE487: E-Learning Course</h1>
    <div className='img'>
    <head> <base href="/"/> </head>
        <img  src="./images/back.jpg"/>
      </div>
     <div className="outer">
       
     <button  onClick={handlequiz}>Create Quiz</button>
      <button onClick={handlehome}>Question Bank</button>
      <button onClick={handlegrades}>View Grades</button>

     </div>
      </div>


    );




}

export default Home;