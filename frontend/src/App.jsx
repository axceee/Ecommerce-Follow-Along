import './App.css'
import { Routes, Route } from 'react-router-dom'

import Login from './pages/header/Login.jsx'
import Register from './pages/header/Register.jsx'
import Home from './pages/Home.jsx'

function App() {


  return (

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user/register' element={<Register/>}/>
        <Route path='/user/login' element={<Login/>}/>
      </Routes>
   
  )
}

export default App
