
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/auth/Login';
import Rejster from './Components/auth/Rejster';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Items from './Components/Items/Items';
import { useEffect, useState } from 'react';
import LoginHome from './Components/auth/LoginHome';

function App() {
  const [ user, setLoginUser] = useState({})

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user))
    setLoginUser(user)
  }

  return (
  
      <BrowserRouter >
      <Routes >
        <Route exact path='/' element={<Home  /> } />
        <Route  path='/loho' element={user && user._id ? <LoginHome  updataUser={updateUser}/> : <Login updataUser={updateUser} />} />
        <Route path='/lo' element={<Login updateUser={updateUser} />} />
        <Route path='/re' element={<Rejster />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
