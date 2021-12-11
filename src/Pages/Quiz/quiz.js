import React from 'react';
import './quiz.css';
import 'react-dropdown/style.css'
import axios from "axios";
import { useState } from 'react';
import {QueryClient, QueryClientProvider,useQuery} from 'react-query';
import { useNavigate } from 'react-router-dom';

const baseURL = "http://127.0.0.1:3008";


function Quiz (){
    const [post, setPost] = React.useState(null);
    const [ duration, setDuration] = useState('');
    const [starttime, setStarttime] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [number_of_questions, setNumber_of_questions] = useState('');
    const navigate=  useNavigate();
   // const {data, error, isError, isLoading } = useQuery('rows', fetchRows)
 
//  function getfrombank(){

//     if(isLoading){
//      return <div>Loading...</div>
//  }
//  else if(isError){
//      return <div>Error! {error.message}</div>
//  }else if(data){
//   console.log(data); 
//   return(
              
//     data.map(question=>{
//       return (
//         <div key={question.question_id}className="box">
//         <p
//           id="qu"
//           name="question"
//           >{question.question}</p>
//           {
//               question.choices.map(choice=>{
//                   return <p>{choice}</p>
//               })
//           }
//           </div>)}))
       
              
       

//  }}
      function createPost() {
      axios
        .post(`${baseURL}/api/instructor/createquiz`, {
          duration:duration,
          starttime:starttime,
          from:from,
          to:to,
          number_of_questions:number_of_questions
     
        })
        .then((response) => {
          setPost(response.data);
          navigate(`/LoginStudent/quizzes/attempt/1/${response.data.quiz_id}`);
        });
        
      
  }
    
 return(
        <div className='Home'>
    <h2>Create Quiz</h2>
    <div >
    <div id="div1">
        <label>Quiz duration </label>
   <input id="duration" type = "text" placeholder='                        add duration' value={duration} onChange={(e)=> { setDuration(parseInt(e.target.value))}}/><label> minutes</label><br></br>  </div>
  <div> <label>Start time </label><input id="time" type = "text" placeholder='                        add time' value={starttime} onChange={(e)=> { setStarttime(e.target.value)}}/><br></br>  </div>

   <div id="div2"> <label>From Chapter </label><input id="chapter" type = "text" placeholder='                                ex:1' value={from} onChange={(e)=> { setFrom(parseInt(e.target.value))}}/><label> To </label><input id="chapter" type = "text" placeholder='                                     ex:10'value={to} onChange={(e)=> { setTo(parseInt(e.target.value))}}/></div>
      </div>
      
     <div className="outer">
    <div id="ques"><label>Number of Questions </label>
    <input id="in1" type = "text" placeholder='                                           1'  value={number_of_questions} onChange={(e)=> { setNumber_of_questions(parseInt(e.target.value))}} /></div>
   
 
    {/* <button id="qb" onClick={getfrombank} > </button> */}
    <button id="create" onClick={createPost}>Create Quiz</button>
   
         </div>
         </div>
    )

}




export default Quiz;