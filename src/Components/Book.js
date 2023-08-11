import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Footer from '../NavigationBar/Footer'
import UserNav from '../NavigationBar/UserNav'

function Book() {
  return (
    <div className='container'>
    <UserNav/>
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

export default Book