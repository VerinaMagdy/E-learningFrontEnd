import React from 'react';
import axios from "axios";
import './attempt.css';
import { useState } from 'react';
import Solve from '../Solve/solve';
import { useNavigate } from 'react-router-dom';
import Review from'../Review/review'
import { render } from 'react-dom';
import {QueryClient, QueryClientProvider,useQuery} from 'react-query';


  
// we need to use it in on submit

const baseURL = "http://127.0.0.1:3008";

async function fetchRows(){
   const {data} = await axios.get(`${baseURL}/api/quiz/getquestions/1`)
   // console.log(data)
   return data
 }
 
     
 function Attempt (){
   const [answer, setAnswer] = useState(null);

   const [post, setPost] = React.useState(null);
   const navigate=  useNavigate();
   const [state, setState] = useState(null);
   
 const {data, error, isError, isLoading } = useQuery('rows', fetchRows)
 if(isLoading){
     return <div>Loading...</div>
 }
 else if(isError){
     return <div>Error! {error.message}</div>
 }else if(data){
 
  

    function submitquiz(e){

        e.preventDefault();
          navigate("/LoginStudent/quizzes/attempt/review/1");
 axios
        .post(`${baseURL}/api/quiz/submit`, {
         student_id:1,
         quiz_id:1,
         qid:1,
         answer:answer
        })
        .then((response) => {
          setPost(response.data);
        });
        console.log(answer);
    }
   const handleChange = e => {
      const name  = e.target;
  
      this.setState({
      name
      });
    };
           return(
               
                  data.map(question=>{
                     return (
                     <div key={question.question_id}className="box">
                     <p
                     id="qu"
                     name="question"
                     >{question.question}</p>
                     {
                         question.choices.map(choice=>{
                             return<div> <input   type="radio" value="choice" name="answer" onClick={ ()=>setAnswer(choice)}/>{choice}
                            
                        
                           </div>
                           })
                        }
                     <div>  <button onClick={submitquiz}>Submit</button> </div>
                     </div>
                     )}));
                            
                     
                     
                     }
                     

}
export default Attempt;