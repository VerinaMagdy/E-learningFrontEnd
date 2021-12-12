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


                  navigate(`/quizzes/attempt/${student_id}/${data.id}`);

        }

        return(
                        <div >
                          <div class="media">
                        <span class="media-left">
                            <i class="icon fa fa-graduation-cap fa-fw " aria-hidden="true"  ></i>
                        </span>
                      <header>  <h2>CSE487 E-learning Systems</h2>
</header>
<h3 id="quiz">Quiz </h3>
                        </div>
                        
                     <div id="all">   <div className='img'>
    <head> <base href="/"/> </head>
      <img    src="./images/quiztime.png"/>
      </div>
                  
                         
                 <div id="txt">
                          <label>Duration:  </label><label>"{data.duration}"</label><br></br>
                         <label>Starttime:  </label><label>"{data.time}"</label><br></br>
                         <label>Number of questions:  </label><label>"{data.no_of_questions}"</label><br></br>
                         </div></div>
                         {/* <label>quiz_marks:</label><label>{newSplit[5]}</label><br></br>  */}
                         <button id="attempt" onClick={attemptquiz}>Attempt quiz</button> 
                         <footer>
        <p>Online Quiz System, Copyright &copy; 2021</p>
      </footer>
                     
                 </div>
                       
                        );
                               
                        
                        
                        }
                        
   
   }
              
            
        
    
export default Quizzes;

               
      