import './App.css'
import { Routes, Route } from 'react-router-dom'

import Login from './pages/header/Login.jsx'
import Home from './pages/Home.jsx'
import SignUp from './pages/header/SignUp.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user/login' element={<Login/>}/>
      <Route path='/user/signup' element={<SignUp/>}/>
    </Routes>
  )
}

export default App
