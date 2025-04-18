import React from 'react'
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import HomePage from './Pages/HomePage'
import Login from './Pages/LoginPage/Login'
const App = () => {
  return (
    <div>

      <Routers>
        
        <Routes>
        <Route path='/' element={<Login />}></Route>
          <Route path='/homepage' element={<HomePage />}></Route>
        </Routes>
      </Routers>


      

    </div>
  )
}

export default App
