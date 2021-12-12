import React from 'react';
import {ReactComponent as Logo} from '../../assets/instagram.svg'
import './LoginStudent.css';
import { useNavigate } from 'react-router-dom';
import Home from '../Home/Home';
import axios from 'axios';

function LoginStudent (){
    const navigate=  useNavigate();
    // const state={
    //     email:'',
    //     pwd:''
    // }
    
    // function handleChange(e){
        
    //     const {name,value} = e.target
    //     // this.setState({[name]:value})
    // }


   function handleS(e){
        e.preventDefault();
          
        // this.props.isLogin(true)
        axios.post(
            `http://127.0.0.1:3008/api/student/login`,{
                username:e.target.username.value,
                password:e.target.password.value
            }
        ).then((response)=>{
            if(response.status==400){
                alert(response.data)
            }else{
                navigate(`/quizzes/${response.data.id}`);
            }
        })

    }
        return(
            <div className='div-login'>
                 <div class="card">
    <div class="card-block">
            <h2 class="card-header text-center">Ain Shams University - Faculty of Engineering</h2></div></div>
         
                <div className='div-login-logo'>
                 <head>     <base href="/"/> </head>
        <img id="pic" src="./images/lms.png"/>
                </div>
                <div>
                    <form id="form" onSubmit = {handleS  }  >
                        <input name='username' placeholder='username...' required />
                        <input type='password' name='password' placeholder='password...' /><br></br>
                        <button>Log In</button>
                    </form>
                    <footer>
        <p>Online Quiz System, Copyright &copy; 2021</p>
      </footer>
                </div>
                  </div>
        )
    }


export default LoginStudent;
