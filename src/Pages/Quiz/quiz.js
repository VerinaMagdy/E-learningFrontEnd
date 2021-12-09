import React from 'react';
import './quiz.css';
import 'react-dropdown/style.css'
import axios from "axios";
import { useState } from 'react';

const baseURL = "http://127.0.0.1:3008";

function Quiz (){
    const [post, setPost] = React.useState(null);
    const [inputList, setInputList] = useState([{ question: "", CorrectAnswer1: "" ,Answer2: "" ,Answer3: "" ,Answer4: "" }]);

    function choosefromqb(){
      
            axios.get(baseURL).then((response) => {
              setPost(response.data);
             
            });  
            console.log(post);
          if (!post) return null;
    }
 return(
        <div className='Home'>
    <h2>Create Quiz</h2>
    <div >
    <div id="div1">
        <label>Quiz duration </label>
   <input id="duration" type = "text" placeholder='                        add duration'/><label> minutes</label><br></br>  </div>
   <div id="div2"> <label>From Chapter </label><input id="chapter" type = "text" placeholder='                                ex:1'/><label> To </label><input id="chapter" type = "text" placeholder='                                     ex:10'/></div>
      </div>
      
     <div className="outer">
    <div id="ques"><label>Number of Questions </label>
    <input id="in1" type = "text" placeholder='                                           1' /></div>
    <div id="mar"><label>Quiz Marks: </label>
    <input id="in2" type = "text" placeholder='                                           1' /></div>
    <button id="qb" onClick={choosefromqb} >Choose from Question Bank </button>
    <button id="create" >Create Quiz</button>
   
         </div>
         </div>
    )
}






export default Quiz;