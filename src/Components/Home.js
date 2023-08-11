import React from 'react'
import './Home.css'
import NavBar from '../NavigationBar/NavBar'
import { Link } from 'react-router-dom'
import Footer from '../NavigationBar/Footer'

function Home() {
  return (
    <div className='container'>
    <NavBar/>
    <div className='title'>
    <h1>BOOKS<br/>WORLD
    </h1>
    </div>
    <div className='shoppingnow'>
    <Link to="/showingbook" style={{textDecoration:'none',color:'currentcolor'}}>Start<br/>Shopping Now</Link></div>
    <div className='footerapp'><Footer/></div>
    </div>
  )
}

export default Home