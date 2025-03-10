import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './pages/header/Navbar'
import Login from './pages/header/Login.jsx'
import Home from './pages/Home.jsx'
import SignUp from './pages/header/SignUp.jsx'
import CreateProduct from './pages/Products/CreateProduct.jsx'
import MyProducts from './pages/Products/MyProducts.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/user/login' element={<Login/>}/>
          <Route path='/user/signup' element={<SignUp/>}/>
          <Route path='/product/create' element={<CreateProduct/>}/>
          <Route path='/my-products' element={<MyProducts/>}/>
          <Route path='/create-product/:productId' element={<CreateProduct/>}/>
          <Route path='/cart' element={<div className="text-center text-2xl mt-10">Cart Page Coming Soon!</div>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
