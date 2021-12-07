import React from 'react';
import {ReactComponent as Logo} from '../../assets/instagram.svg'
import './login.css';
import { useNavigate } from 'react-router-dom';
import Home from '../Home/Home';

function Login (){
    const navigate=  useNavigate();
    const state={
        email:'',
        pwd:''
    }
    
    function handleChange(e){
        
        const {name,value} = e.target
        // this.setState({[name]:value})
    }


   function handleS(e){
        e.preventDefault();
          
        // this.props.isLogin(true)
        
          navigate("/Login/Home");

    }
        return(
            <div className='div-login'>
                <div className='div-login-logo'>
                    <Logo/>
                </div>
                <div>
                    <form onSubmit = {handleS  }  >
                        <input type='email' name='email' placeholder='email...' required onChange={handleChange}/>
                        <input type='password' name='pwd' placeholder='password...' required onChange={handleChange}/>
                        <button onSubmit={ 
                         handleS }>Log In</button>
                    </form>
                </div>
            </div>
        )
    }


export default Login;
