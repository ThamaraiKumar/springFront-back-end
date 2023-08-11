import React from 'react'
import './Footer.css'
import { Email, Facebook, Instagram, Twitter, WhatsApp } from '@mui/icons-material'

function Footer() {
  return (
    <div className="footer">
      <div><h4 className='h4'>About us</h4>
      <ul>
      <li>A platform for Book Sellers</li>
      <li>Also for Book Lovers</li>
      <li>Cash On Delivery only Available</li>
      <li>Online Payment only at the time Delivery</li>
      <li>Fast Accessing And Fast Delivery</li>
      </ul> 
      </div>
      <div className='contactus'>
      <h4 className='h4'>Contact Us</h4>
      <li><a href="#" style={{color:"black"}}><Instagram/></a></li>
      <li><a href="#" style={{color:"black"}}><Twitter/></a></li>
      <li><a href="#" style={{color:"black"}}><Facebook/></a></li>
      <li><a href="#" style={{color:"black"}}><WhatsApp/></a></li><br/>
      <label className='mailid'>Mail ur queries to
      <Email/> @Bookstores2023@gmail.com
      </label>
      </div>      
    </div>
  )
}

export default Footer