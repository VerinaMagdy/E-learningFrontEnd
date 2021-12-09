import React from 'react';
import axios from "axios";
import './attempt.css';
import { useState } from 'react';
import Solve from '../Solve/solve';
import { useNavigate } from 'react-router-dom';
import Review from'../Review/review'
import { render } from 'react-dom';

// we need to use it in on submit

const baseURL = "http://127.0.0.1:3008/api/quiz/getquestions/1";
function Attempt (){
    const [post, setPost] = React.useState(null);
    const navigate=  useNavigate();
    function getquiz(){
        axios.get(baseURL).then((response) => {
         var answer= response.data;
         var len=answer.length;
        // console.log(answer)
         var rows = [];
        for (var i = 0; i < len; i++) {
            rows.push(Solve(answer[i]))
            console.log(answer[i])
        }
    
        return rows; 
 
     
         
        
        });
        
      
    }
    
    function submitquiz(e){
        e.preventDefault();
          navigate("/LoginStudent/quizzes/attempt/review");

    }
   
  
           return(
            
              <div>   
           {getquiz()}
           {/* <button onClick={() =>}>Start</button> */}
           
                <button onClick={submitquiz}>Submit</button> </div>
            
              );
            
           

}
export default Attempt;


  