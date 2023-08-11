import React from 'react'
import axios from 'axios'
import { useEffect ,useState } from 'react'
import './Read.css'
import { Link } from 'react-router-dom'




function Read() {
    const [details, setDetails] = useState([])
     
    
    useEffect(() => {
        axios.get("http://localhost:8080/api/geting")
            .then((response) => {
                setDetails(response.data);
            })
    }, [])


  return (
    <div>
    <div className='tableheading'>
    <h1 style={{textAlign:'center'}}>Book Details</h1></div>
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>User EmailId</th>
          <th>Book Name</th>
          <th>Author Name</th>
          <th>Book Volume</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image URL</th>
          <th>UPDATE AS ADMIN</th>
          <th>DELETE AS ADMIN</th>
        </tr>
      </thead>
      <tbody>
        {details.map((Book) =>{return (
            <tr>
            <td>{Book.bookId}</td>
            <td>{Book.userinfo}</td>
            <td>{Book.bookName}</td>
            <td>{Book.authorName}</td>
            <td>{Book.bookVolume}</td>
            <td>{Book.price}</td>
            <td>{Book.category}</td>
            <td>{Book.imageurl}</td>
            <td>
            <Link to={`/updatebooks/${Book.bookId}`}><button className='readupdate'>UPDATE</button></Link></td>
            <td>
            <Link to={`/deletebyid/${Book.bookId}`}><button className='readdelete'>DELETE</button></Link></td>
            </tr>
        )})}
      </tbody>
    </table>
    <div className='pagsort'><Link to="/page" style={{textDecoration:'none',color:'inherit'}}><h3>Want to sort?</h3></Link></div>
    </div>
    )
  }
   //<Link to="/bookdetails"><button>Add</button></Link>

export default Read