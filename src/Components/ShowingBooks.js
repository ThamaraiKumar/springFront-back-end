import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ShowingBooks.css'
import Heart from '../NavigationBar/Heart'
// import { Link } from 'react-router-dom';
// import SearchIcon from '@mui/icons-material/Search';


function ShowingBooks() {
  const[details,allDetails]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8080/api/geting")
    .then((response)=>{
      allDetails(response.data);
    })
  },[]);
  
  return (
    <div id="showingbook">
    <div className='py-4'>
    <h1 className='py-5'>BOOKS WORLD</h1>
    <img className='py-4-1' src="https://i.pinimg.com/originals/4f/8f/48/4f8f4849d7ca6c6d81964c3c61f9d085.gif" alt="gif"/>
    </div>
      <div xs={1} md={3} id='card-showing'>
       {details.map((item) => (
          <span key={item.bookId}>
          <div className='card'>
          <img className="bookimage" src={item.imageurl} alt={item.category} height={230}/>
          <div className='contentofbook'><Heart/>
                {item.bookName}<br/>
                {item.category}<br/>
               Rs.{item.price+100}<br/>
          </div>
          </div>
          </span>
          ))}
          </div>
          </div>
          )
        }
        
        export default ShowingBooks
        // <div className='searchbar'>
        // <input type='search'  className="py-5" placeholder='Search here'/><SearchIcon className='iconsearch' />
        // </div>
        