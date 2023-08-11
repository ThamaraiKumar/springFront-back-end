import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './UpdateBook.css'

function UpdateBook() {
  const {id}=useParams();
    const[authorName,setauthorName]=useState("");
    const[bookName,setbookName]=useState("");
    const[bookVolume,setbookVolume]=useState("");
    const[price,setPrice]=useState("");
    const[category,setCategory]=useState("");
    const[imageurl,setImageUrl]=useState("");
    const[userinfo,setuserinfo]=useState("");
    const[response,setResponse]=useState("");
    const nav=useNavigate();

   useEffect(()=>{
    const fetchById=async()=>{
      try{
        const response=await fetch(`http://localhost:8080/api/getwithid/${id}`);
        if(!response.ok)
        {
          throw new Error('Error:'+response.status);
        }
        const data=await response.json(); 
        setbookName(data.bookName);
        setauthorName(data.authorName);
        setbookVolume(data.bookVolume);
        setCategory(data.category);
        setPrice(data.price);
        setImageUrl(data.imageurl);
        setuserinfo(data.userinfo);
      }catch(error){
        console.log('Error:',error);
      }
    };
    fetchById();
   },[id]);

const update=async(e)=>{
  e.preventDefault();
  try{
    const response=await fetch(`http://localhost:8080/api/updatebyid/${id}`,
    {
      method:"PUT",
      headers:{'Content-Type':'application/json',},
      body:JSON.stringify({bookName,authorName,price,userinfo,bookVolume,category,imageurl}),
    }
    );
    const data=await response.json();
    setResponse(data);
    nav("/read")
  }catch(error)
  {
    console.log('Error:',error);
  }
};




  return (
    <div id='updatebg'>
    <h1 className='formtitle'>UPDATING FORM</h1>
    <form id="updated-form">
    <label className='lubookname'>Book Name<br/>
    <input type="text" className="update-group ubookname" value={bookName} onChange={(e)=>setbookName(e.target.value)}/></label>
    <label className='luauthor'>Author Name<br/>
    <input type="text" className="update-group uauthor" value={authorName} onChange={(e)=>setauthorName(e.target.value)}/></label>
    <label className='luvolume'>Book Volume<br/>
    <input type="text" className="update-group uvolume" value={bookVolume} onChange={(e)=>setbookVolume(e.target.value)}/></label>
    <label className='luprice'>Price<br/>
    <input type="text" className="update-group uprice" value={price} onChange={(e)=>setPrice(e.target.value)}/></label>
    <label className='lucategory'>Category<br/>
    <input type="text" className="update-group ucategory" value={category} onChange={(e)=>setCategory(e.target.value)}/></label>
    <label className='luimage'>Image URL<br/>
    <input type="text" className="update-group uimage" value={imageurl} onChange={(e)=>setImageUrl(e.target.value)}/></label>
    <button type='submit' className='busave' onClick={update}>Save Changes</button>
    </form>
    </div>
  )
}

export default UpdateBook