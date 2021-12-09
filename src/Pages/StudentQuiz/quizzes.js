import React from 'react';
import {ReactComponent as Logo} from '../../assets/instagram.svg'
import { useNavigate } from 'react-router-dom';
import './quizzes.css'
import axios from "axios";
import { useState } from 'react';

const baseURL = "http://127.0.0.1:3008/api/quiz/getInfo/:id";

function Quizzes (){
        const navigate=  useNavigate();
        const [post, setPost] = React.useState(null);
        function getquiz(){
          axios.get(baseURL).then((response) => {
            setPost(response.data);
          });
        console.log(post);
      
        if (!post) return null;
        }  
       
        function attemptquiz(e){
                e.preventDefault();
                  navigate("/LoginStudent/quizzes/attempt");
        }

        // function getstring(){
        //         const stringData=getquiz(); 
        //         var splits = stringData.split(','); 
        //         return(splits);
        // }
       
        // var newSplit =getstring();

        return(
               
                <div >
                         
                        <label id="quiz">Quiz </label><br></br>
                
                        {/* <label>Duration:</label><label>{newSplit[0]}</label><br></br>
                        <label>starttime:</label><label>{newSplit[1]}</label><br></br>
                        <label>from:</label><label>{newSplit[2]}</label><br></br>
                        <label>to:</label><label>{newSplit[3]}</label><br></br>
                        <label>number_of_questions:</label><label>{newSplit[4]}</label><br></br>
                        <label>quiz_marks:</label><label>{newSplit[5]}</label><br></br> */}
                        <button id="attempt" onClick={attemptquiz}>Attempt quiz</button>
                      
                    
                </div>
            
        );
    }


export default Quizzes;
