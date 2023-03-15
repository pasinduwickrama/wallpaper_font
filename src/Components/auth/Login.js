import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './auth.css'
import logo1 from '../../img/2.jpg'
import axios from 'axios'

const Login = ({updataUser}) => {
    const navigate = useNavigate();
    const [user,setUser] =useState({
        email:"",
        password:"",
    })
    const handleChange = e => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            updataUser(res.data.user)
            navigate("/loho")
        })
    }
  return (
    <div className='login'>
        <div className='log-body'>
        <div className='hed-h1'>
            <p>Login</p>
        </div>
        <div className='login-input'>
           
            <input type='email' name='email' value={user.email} onChange={handleChange} placeholder='Email' />
            <input type='password' name='password' value={user.password} onChange={handleChange} placeholder='Password' />
           
        </div>
        <div className='login-bu'>
            <button onClick={login}>Login</button>
            <p onClick={()=>{navigate('/re')}}>Have an Account</p>
        </div>
        </div>
    </div>
  )
}

export default Login