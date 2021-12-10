import React from 'react';
import './solve.css';


function Solve (){
  //  console.log(splits)
    
    
    return(
     
         <div>
             <label id="quiz">Quiz</label><br/>
             <label>Question</label><label></label>
                 <div>       
                     <input type="radio" value="Male" name="gender" /> Male
 <input type="radio" value="Female" name="gender" /> Female
 <input type="radio" value="Other" name="gender" /> Other
</div>


            
         </div>
       )
}


export default Solve;