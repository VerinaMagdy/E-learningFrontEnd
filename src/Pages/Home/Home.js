import React from 'react';
import Question from '../../Pages/Questions/question'
import './Home.css';
import { useNavigate } from 'react-router-dom';
function Home (){
  const navigate=  useNavigate();
  
  function handlehome(e){
    e.preventDefault();
    navigate("/Login/Home/QuestionBank");

}
function handlequiz(e){
  e.preventDefault();
  navigate("/Login/Home/createquiz");

}
function handlegrades(e){
  e.preventDefault();
  navigate("/Login/Home/viewgrades");

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