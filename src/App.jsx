
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Rootlayout from './Layout/Rootlayout'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { ChangeProvider } from './Components/Context'
import ShoppingBag from './Components/ShoppingBag'

const App = () => {
  return (
    <>
    <ChangeProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Rootlayout />}>
              <Route path='/' element={<Home />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/shoppingbag' element={<ShoppingBag/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
    </ChangeProvider>
    
    </>
  )
}

export default App
