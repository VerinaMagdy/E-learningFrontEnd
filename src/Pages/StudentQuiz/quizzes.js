import React from 'react';
import {ReactComponent as Logo} from '../../assets/instagram.svg'
import { useNavigate } from 'react-router-dom';
import './quizzes.css'
function Quizzes (){
    
        return(
            
                <div>
                    
                        <label>Quiz 1</label>
                        <button >Attempt quiz</button>
                        <label>Quiz 2</label>
                        <button>Attempt quiz</button>
                        <label>Quiz 3</label>
                        <button>Attempt quiz</button>
                    
                </div>
            
        )
    }


export default Quizzes;
