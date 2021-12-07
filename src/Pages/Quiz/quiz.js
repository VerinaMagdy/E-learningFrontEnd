import React from 'react';
import './quiz.css';
import 'react-dropdown/style.css'

function Quiz (){
    
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
    <button id="create" >Create Quiz</button>

         </div>
         </div>
    )
}






export default Quiz;