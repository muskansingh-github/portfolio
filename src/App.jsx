import React from 'react'

import { useState,useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import Projects from './components/Projects'
import About from './components/About'
import Home from './components/Home';
import Layout from './components/Layout'
import Loader from './components/Loader'
import Navbar from './Navbar'
import AppFooter from './components/Footer';

function App(){ 
  const [loading,setLoading] = useState(true);

  useEffect(function(){
    setTimeout(function(){
     setLoading(false)
    },3000)
  },[])

  return(
   <div>
      {
        loading === true ? <Loader/>:
        <Layout>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
          <AppFooter />
        </Layout>
      }
   </div>
  )
} 

export default App
 