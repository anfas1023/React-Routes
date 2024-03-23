import { Route,Routes } from "react-router-dom"
import React from 'react'
import Home from "./Components/Home"
// import About from "./Components/About"
const LazyAbout=React.lazy(()=>import('./Components/About'))

import Navbar from "./Components/Navbar"
import './Components/app.css'
import Ordersummary from "./Components/Ordersummary"
import  NoMatch  from "./Components/NoMatch";
import Product from './Components/Product';
import FeaturedProduct from "./Components/FeaturedProduct"
import NewProduct from "./Components/NewProduct"
import Users from "./Components/Users"
import Userdetails from "./Components/Userdetails"
import React from "react"
function App() {
  return (
    <div className='app'>
   <Navbar/>
   <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/about' element={<React.Suspense>
    <LazyAbout/>
  </React.Suspense>} />
  <Route path='/ordersummary' element={<Ordersummary/>} />
  <Route path='/product' element={<Product/>}>
    {/* Nested routes are defined here */}
    <Route index element={<FeaturedProduct/>}/>  {/*indexRouting*/}
    <Route path='feature' element={<FeaturedProduct/>} />
    <Route path='new' element={<NewProduct/>} />
  </Route>
  <Route path='*' element={<NoMatch/>} />
   {/*Dynamic Routing*/}
  <Route path='users' element={<Users/>}/>

  <Route path='users/:userid' element={<Userdetails/>}/>
</Routes>
    </div>
 

  )
}

export default App
