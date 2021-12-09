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
                navigate(`/LoginStudent/quizzes/${response.data.id}`);
            }
        })

    }
        return(
            <div className='div-login'>
                <div className='div-login-logo'>
                    <Logo/>
                </div>
                <div>
                    <form onSubmit = {handleS  }  >
                        <input name='username' placeholder='username...' required />
                        <input type='password' name='password' placeholder='password...' />
                        <button>Log In</button>
                    </form>
                </div>
            </div>
        )
    }


export default LoginStudent;
