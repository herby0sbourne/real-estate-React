import {useState} from 'react'

import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import Profile from "./pages/Profile.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Offers from "./pages/Offers.jsx";
import ForgotPassword from "./pages/forgotPassword";
import Header from "./components/Header.jsx";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sing-up" element={<SignUp/>}/>
        <Route path="/offers" element={<Offers/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
      </Route>
    </Routes>
  )
}

export default App
