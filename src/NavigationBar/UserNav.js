import React from 'react'
import '../Components/Home.css'
import { Link } from 'react-router-dom'

function UserNav() {
  return (
    <div className='navigation bar'>
    <Link to="/book" style={{textDecoration:'none',color:'currentcolor'}}><span className='nav'>Home</span></Link>
    <Link to="/showingbook" style={{textDecoration:'none',color:'currentcolor'}}><span className='nav'>BookDetails</span></Link>
    <Link to="/ordering" style={{textDecoration:'none',color:'currentcolor'}}><span className='nav'>Ordering</span> </Link>
    <Link to="/" style={{textDecoration:'none',color:'currentcolor'}}><span className='nav'>SignUp</span></Link>
    <Link to="/login" style={{textDecoration:'none',color:'currentcolor'}}><span className='nav'>Logout</span></Link>
    </div>
  )
}

export default UserNav