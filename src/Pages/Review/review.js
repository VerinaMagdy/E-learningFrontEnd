import React from 'react';
import axios from "axios";
import './review.css';
import { useState } from 'react';

const baseURL = "http://127.0.0.1:3008/api/quiz/preview";
function Review(){
    const [post, setPost] = React.useState(null);
    function finalreview(){
        axios.get(baseURL).then((response) => {
          setPost(response.data);
          console.log(response.data)
        });
     
      if (!post) return null;
    }
    return(
          <div>     
    {/* //   post.map(question.question=>{
    //      return (
    //      <div key={question.question.question_id}className="box">
    //      <p
    //      id="qu"
    //      name="question"
    //      >{question.question}</p>
    //      {
    //          question.choices.map(choice=>{
    //              return<div> <input   type="radio" value="choice" name="answer" onClick={ ()=>setAnswer(choice)}/>{choice}
                
            
    //            </div>
    //            })
    //         }
    //      <div>  <button onClick={submitquiz}>Submit</button> </div>
    //      </div>
    //      )}));
                */}
    {finalreview()}
        
        
         
        <label>Your Grade: </label>
        </div>
        
    
    )

}


export default Review;