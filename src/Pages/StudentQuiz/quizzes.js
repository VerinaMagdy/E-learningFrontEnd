import React from 'react';
import {ReactComponent as Logo} from '../../assets/instagram.svg'
import { useNavigate, useParams } from 'react-router-dom';
import './quizzes.css'
import axios from "axios";
import { useState } from 'react';
import {QueryClient, QueryClientProvider,useQuery} from 'react-query';

const baseURL = "http://127.0.0.1:3008";
async function fetchRows(){
        const {data} = await axios.get(`${baseURL}/api/quiz/getInfo`)
        // console.log(data)
        return data
      }
      
function Quizzes (){
        const {student_id} = useParams()
        const navigate=  useNavigate();
        const [post, setPost] = React.useState(null);
        const {data, error, isError, isLoading } = useQuery('rows', fetchRows)
 if(isLoading){
     return <div>Loading...</div>
 }
 else if(isError){
     return <div>Error! {error.message}</div>
 }else if(data){
        
       console.log(data);
        function attemptquiz(e){
                e.preventDefault();
                  navigate(`/LoginStudent/quizzes/attempt/${student_id}/${data.id}`);
        }

        return(
                        <div >
                         
                         <label id="quiz">Quiz </label><br></br>
                 
                          <label>Duration:</label><label>{data.duration}</label><br></br>
                         <label>starttime:</label><label>{data.time}</label><br></br>
                         {/* <label>from:</label><label>{data.duration}</label><br></br>
                         <label>to:</label><label>{newSplit[3]}</label><br></br> */}
                         <label>number_of_questions:</label><label>{data.no_of_questions}</label><br></br>
                         {/* <label>quiz_marks:</label><label>{newSplit[5]}</label><br></br>  */}
                         <button id="attempt" onClick={attemptquiz}>Attempt quiz</button> 
                        
                     
                 </div>
                       
                        );
                               
                        
                        
                        }
                        
   
   }
              
            
        
    
export default Quizzes;

               
      