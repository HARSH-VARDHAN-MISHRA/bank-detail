import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import BottomFooter from './Components/Footer/BottomFooter'
import About from './Pages/About/About'
import Form from './Components/Form/Form'
import PersonalInfo from './Components/PersonalInfo/PersonalInfo'
import CreditDetail from './Components/CreditDetail/CreditDetail'
import Otp from './Components/Otp/Otp'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/personal-detail' element={<PersonalInfo />} />
          <Route path='/creadit-detail' element={<CreditDetail />} />
          <Route path='/otp' element={<Otp />} />
        </Routes>
        <Footer />
        <BottomFooter />
      </BrowserRouter>
    </>
  )
}

export default App
