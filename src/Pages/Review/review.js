import React from 'react';
import axios from "axios";
import './review.css';
import { useState } from 'react';

const baseURL = "http://127.0.0.1:3008/api/quiz/preview";
var res=[];
function Review(){
    const [post, setPost] = React.useState(null);
    const [state, setState] = React.useState(null);
    function finalreview(){
        axios.get(baseURL).then((response) => {
          setPost(response.data);
          res=post.questions;
          console.log(response.data)
        });
     
      if (!post) return null;
     
    }
    
    return(
     
          <div> <header>  <h2>CSE487 E-learning Systems</h2>
           </header>
            
            {setState(post.questions)}    
    {  state.map(allq=>{
         return (
         <div key={allq.question}className="box">
         <p
         id="qu"
         name="question"
         >{allq.question}</p>
         {
           allq.choices.map(choice=>{
                 return<div> <label>{choice}</label></div>
               })
         }
             <p><label>Right Answer= </label>{allq.right_answer}</p>
            <p><label>Your Answer= </label>{allq.answer}</p>
            <p><label>Correct= </label>{allq.correct}</p>
         
          </div>
         )
          }) } 
           
          <label>Your Grade: </label>
          <footer>
        <p>Online Quiz System, Copyright &copy; 2021</p>
      </footer>
          </div>     
    
        
        
         
        
    )
        
}
export default Review;