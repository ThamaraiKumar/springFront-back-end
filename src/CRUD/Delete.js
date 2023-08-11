import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Delete.css'
import deleteImage from '../Images/deletepage.gif'
import axios from 'axios';

function Delete() {
    const{id}=useParams();
    const nav=useNavigate();
    const deletebyid=()=>{
       axios.delete(`http://localhost:8080/api/deleting/${id}`)
       .then(()=>{
        alert("Deleted!!")
        nav("/read")
       })
       
    }
   
      const fetchById=async()=>{
          const response=await fetch(`http://localhost:8080/api/getwithid/${id}`);
      };
  return (
    <div className='deletehead'>
    <h1>DELETE ID:{id}
    <br/>
    <img src={deleteImage}  height={100} alt='delete gif'/>
    </h1>   
    <button type="delete" className='deletebyid' onClick={deletebyid}>DELETE</button>
    </div>
  )
}

export default Delete