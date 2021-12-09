import React, { Component } from 'react';
import {ReactComponent as Logo} from '../../assets/instagram.svg'
import './login.css';
import { useNavigate } from 'react-router-dom';
// import { withNavigation } from 'react-navigation';
import Home from '../Home/Home';
import axios from 'axios';

// class Login extends Component{
//     state={
//         username:'',
//         password:''
//     }

//     handleChange= (e)=>{
        
//         const {name,value} = e.target
//         this.setState({[name]:value})

//     }

//     // const navigate=  useNavigate();
//     handleS= (e)=>{
//         e.preventDefault();
//           console.log(this.state)
//         // this.props.isLogin(true)
        // axios.post(
        //     `http://127.0.0.1:3008/api/instructor/login`,{
        //         'username':this.state.username,
        //         'password':this.state.password
        //     }
        // ).then((response)=>{
        //     if(response.status==400){
        //         alert(response.data)
        //     }else{
        //         // const navigate=  useNavigate();
        //         // navigate("/Login/Home");
        //         // this.props.navigation.navigate("/Login/Home")
        //     }
        // })
        

//     }

//     render(){
//         return(
//             <div className='div-login'>
//                 <div className='div-login-logo'>
//                     <Logo/>
//                 </div>
//                 <div>
//                     <form onSubmit = {this.handleS  }  >
//                         <input name='username' placeholder='email...' required onChange={this.handleChange}/>
//                         <input type='password' name='password' placeholder='password...' required onChange={this.handleChange}/>
//                         <button onSubmit={ this.handleS }>Log In</button>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }
function Login (){
    const navigate=  useNavigate();
    const state={
        username:'',
        password:''
    }
    
    // function handleChange(e){
        
    //     const {name,value} = e.target
    //     if(name=="username"){
    //         state.username=value
    //     }else{
    //         state.password=value
    //     }
        
    // }


   function handleS(e){
        e.preventDefault();
          console.log(e.target)
        // this.props.isLogin(true)
        axios.post(
            `http://127.0.0.1:3008/api/instructor/login`,{
                username:e.target.username.value,
                password:e.target.password.value
            }
        ).then((response)=>{
            if(response.status==400){
                alert(response.data)
            }else{
                navigate(`/Login/Home/${response.data.id}`);
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
                        <input name='username' placeholder='email...' required />
                        <input type='password' name='password' placeholder='password...' required />
                        <button>Log In</button>
                    </form>
                </div>
            </div>
        )
    }


export default Login;
