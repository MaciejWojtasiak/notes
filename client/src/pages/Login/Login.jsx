import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='login'>        
    <Link to={"/register"} className="link registerBtn" >Register</Link>
        <form action="" className='loginForm'> 
        <h1 className='loginTitle'>Login</h1>         
                <label className='loginLabel' htmlFor="username">Username</label>
                <input className='loginInput' type="text" placeholder='Username'  id='username'/>
                <label className='loginLabel' htmlFor="password">Password</label>
                <input className='loginInput' type="password" placeholder='Password' id='password'/>
                <button className='loginButton' type="submit" >Submit</button>           
        </form>
    </div>
  )
}

export default Login