import './App.css'
import { Routes, Route } from 'react-router-dom'

import Login from './pages/header/Login.jsx'
import Home from './pages/Home.jsx'
import SignUp from './pages/header/SignUp.jsx'
import CreateProduct from './pages/Products/CreateProduct.jsx'
import MyProducts from './pages/Products/MyProducts.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user/login' element={<Login/>}/>
      <Route path='/user/signup' element={<SignUp/>}/>
      <Route path='/product/create' element={<CreateProduct/>}/>
      <Route path='/product/my-products' element={<MyProducts/>}/>
      <Route path='/create-product/:productId' element={<CreateProduct/>}/>
    </Routes>
  )
}

export default App
