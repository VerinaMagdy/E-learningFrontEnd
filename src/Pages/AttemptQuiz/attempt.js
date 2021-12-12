import React from 'react';
import axios from "axios";
import './attempt.css';
import { useState } from 'react';
import Solve from '../Solve/solve';
import { useNavigate, useParams } from 'react-router-dom';
import Review from'../Review/review'
import { render } from 'react-dom';
import {QueryClient, QueryClientProvider,useQuery} from 'react-query';
// import { Button, Radio } from 'react-bootstrap';


  
// we need to use it in on submit

const baseURL = "http://127.0.0.1:3008";

async function fetchRows({queryKey}){
  const[_,quiz_id]=queryKey
   const {data} = await axios.get(`${baseURL}/api/quiz/getquestions/${quiz_id}`)
   // console.log(data)
   return data
 }
 
     
 function Attempt (){
  const {student_id,quiz_id} = useParams()
   const [answer, setAnswer] = useState(null);

   const [post, setPost] = React.useState(null);
   const navigate=  useNavigate();
   const [state, setState] = useState(null);
   
 const {data, error, isError, isLoading } = useQuery(['rows',quiz_id], fetchRows)
 if(isLoading){
     return <div>Loading...</div>
 }
 else if(isError){
     return <div>Error! {error.message}</div>
 }else if(data){
 console.log(data)
  

    function submitquiz(e){

        e.preventDefault();

 axios
        .post(`${baseURL}/api/quiz/submit`, {
         student_id:student_id,
         quiz_id:quiz_id,
         qid:e.target.key,
         answer:answer
        })
        .then((response) => {
          setPost(response.data);
        });
    }
    function finishquiz(e){

      e.preventDefault();

        navigate(`/quizzes/attempt/review/${student_id}/${quiz_id}`);


  }
   const handleChange = e => {
      const name  = e.target;
  
      this.setState({
      name
      });
    };

           return(
          <div>  <header>  <h2>CSE487 E-learning Systems</h2>
           </header>
                 { data.map(question=>{
                     return (
                     <div key={question.question_id}className="box">
                       <form>
                     <p
                     id="qu"
                     name="question"
                     >{question.question}</p>
                     {
                         question.choices.map(choice=>{
                             return<div> <input type="radio" value={choice} name={question.question_id} onClick={ ()=>setAnswer(choice)}/>{choice}
                            
                        
                           </div>
                           })
                        }
                     <div> 
                        <button id="submit" key={question.question_id} onClick={submitquiz}>Submit</button> </div>
                        </form>
                     </div>
                     )
                    }
                    )}
                    <button id="finish" onClick={finishquiz}>Finish quiz</button> 
                    <footer>
        <p>Online Quiz System, Copyright &copy; 2021</p>
      </footer>
      
                    </div>
                    )
                            
                     
                     
  }
                 

}
export default Attempt;