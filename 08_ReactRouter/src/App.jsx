// import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header.jsx'
// import Home from './components/Home/Home.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
