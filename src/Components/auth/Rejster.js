import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './auth.css'

const Rejster = () => {
    const navigate = useNavigate();
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        rePassword:""
    })
    const handleChange = e => {
        const{name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const reg = () => {
        const {name,email,password,rePassword} =user
        if(name && email && password && (password === rePassword)) {
            axios.post("http://localhost:9002/register",user)
            .then(res => {
                alert(res.data.message)
                navigate("/lo")
            })
        }else {
            alert("invlid input")
        }
    }
  return (
    <div className='login'>
    <div className='log-body'>
    <div className='hed-h1'>
        <p>Rejster</p>
    </div>
    <div className='login-input'>
        <input type='text' name='name' value={user.name} onChange={handleChange} placeholder='Name' />
        <input type='email' name='email' value={user.email} onChange={handleChange} placeholder='Email' />
        <input type='password' name='password' value={user.password} onChange={handleChange} placeholder='Password' />
        <input type='password' name='rePassword' value={user.rePassword} onChange={handleChange} placeholder='ReEnter Password' />
    </div>
    <div className='login-bu'>
        <button onClick={reg}>Rejster</button>
        <p onClick={()=>{navigate('/lo')}}> Login</p>
    </div>
    </div>
</div>
  )
}

export default Rejster