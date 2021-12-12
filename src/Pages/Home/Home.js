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
     {/* <div id="page-navbar">
          <nav role="navigation" aria-label="Navigation bar">
<ol class="breadcrumb">
  <li class="breadcrumb-item">
      <a href="https://lms.eng.asu.edu.eg/my/"  >Dashboard</a>
  </li>
  <li class="breadcrumb-item">
      <a href="https://lms.eng.asu.edu.eg/course/index.php"  >Courses</a>
  </li>
  <li class="breadcrumb-item">
      <a href="https://lms.eng.asu.edu.eg/course/index.php?categoryid=424"  >Fall 2021</a>
  </li>
  <li class="breadcrumb-item">
      <a href="https://lms.eng.asu.edu.eg/course/index.php?categoryid=426"  >Computer and Systems Engineering</a>
  </li>
  <li class="breadcrumb-item">
      <a href="https://lms.eng.asu.edu.eg/course/view.php?id=9480" aria-current="page" title="CSE427 (UG2013) - Software Project Management (23387)">CSE427 (UG2013) - Software Project Management (23387)</a>
  </li>
</ol>
</nav>
      </div> */}
      </div>


    );




}

export default Home;