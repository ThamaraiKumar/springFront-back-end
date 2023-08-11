import React, { useState } from 'react'
import './OrderDetail.css'
import { Link, useNavigate } from 'react-router-dom'


function OrderingDetails() {
  const nav=useNavigate();
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[bookName,setBookName]=useState("");
  const[authorName,setAuthorName]=useState("");
  const[phonenum,setPhonenum]=useState("");
  const[quantity,setQuantity]=useState("");
  const[address,setAddress]=useState("");
  const[pincode,setPincode]=useState("");

  const sendtotable=(e)=>{
    e.preventDefault()
    const details={name,email,bookName,authorName,phonenum,quantity,address,pincode}
    if(email.length===0||name.length===0||bookName.length===0||authorName.length===0||address.length===0||quantity.length===0||pincode.length===0||quantity.length===0){
      alert("Enter All fields")
    }
    else{
    fetch("http://localhost:8080/api/order/post",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(details)
    }
    ).then(()=>{
      console.log("New Detail Added");   
      console.log(JSON.stringify(details));
      console.log(e);
      alert("Thanks for Ordering")
      nav("/home")
    })
  }
}
  return (
    <div className='orderdetails'>
    <div className='ordercover'></div>
    <form id="formContent">
    <label className='orderingdetails'><h1>Ordering Details</h1></label><br/>
    <label htmlform="name" className='oform-group'>NAME</label>
    <input type="text" className="oform-control" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} required/><br/>
    <label htmlform="email" className='oform-group'>EMAIL ID</label>
    <input type="email" className="oform-control" placeholder="email id" value={email} onChange={(e)=>setEmail(e.target.value)} required/><br/>
    <label htmlform="bookname" className='oform-group '>BOOK NAME</label>
    <input type="text" className="oform-control" placeholder="book name" value={bookName} onChange={(e)=>setBookName(e.target.value)} required/><br/>
    <label htmlform="authorname" className='oform-group '>AUTHOR NAME</label>
    <input type="text" className="oform-control"  placeholder="author name"value={authorName} onChange={(e)=>setAuthorName(e.target.value)} required/><br/>
    <label htmlform="quantity" className='oform-group '>QUANTITY</label>
    <input type="text" className="oform-control" placeholder="no of books" value={quantity} onChange={(e)=>setQuantity(e.target.value)} required/><br/>
    <label htmlform="phonenumber" className='oform-group '>PHONE NUMBER</label>
    <input type="text" className="oform-control" placeholder="whatsapp phone number" value={phonenum} onChange={(e)=>setPhonenum(e.target.value)} required/><br/>
    <label htmlform="address" className='oform-group '>ADDRESS</label>
    <textarea className="oform-control" placeholder="address to be delivered" value={address} onChange={(e)=>setAddress(e.target.value)} required/><br/>
    <label htmlform="pincode" className='oform-group '>PINCODE</label>
    <input type="text" className="oform-control" placeholder="pincode" value={pincode} onChange={(e)=>setPincode(e.target.value)} required/><br/>
    <Link to="/home"><button  type='submit' onClick={sendtotable} id="odsubmit">SUBMIT</button></Link>
    </form>
    </div>
  )
}

export default OrderingDetails