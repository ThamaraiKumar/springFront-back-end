import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'



function SignUp() {
  const nav=useNavigate();
  const[userName,setUserName]=useState("");
  const[password,setPassword]=useState("");
  const[emailId,setemailId]=useState("");
  const[fname,setfname]=useState("");
  const[usertype,setusertype]=useState("");

  
  // const handleSubmit=(e)=>{
  //   e.preventDefault();
  //   console.log(userName,password);

  // }
  const sendtodb=(e)=>{
    e.preventDefault()
    const details={userName,emailId,password,fname,usertype}
    if(emailId.length===0||fname.length===0||usertype.length===0||password.length===0||userName.length===0){
      alert("Enter All fields")
    }
    else{
    fetch("http://localhost:8080/api/signUp",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(details)
    }
    ).then(()=>{
      console.log("New Detail Added");   
      console.log(JSON.stringify(details));
      console.log(e);
      nav("/login")
    })
  }
}

  

  return (
    <div className='signcover'>
    <div className='scover'></div>
    <div className='Scontainer'>
     <form className='formContent'>
     <h1 className='signup'>SIGN UP</h1><br/>
     <label htmlform="userName" className='suname'>USERNAME</label><br/>
     <input type="text" onChange={(e) =>setUserName(e.target.value)} placeholder="UserName" className="Susername" value={userName} required></input><br/>
     <label htmlform="emailId" className='semail'>EMAIL ID</label><br/>
     <input type="email" onChange={(e) =>setemailId(e.target.value)} placeholder="Email Id" className="Semail" value={emailId} required></input><br/>
     <label htmlform="password" className='spassword'>PASSWORD</label><br/>
     <input type="password" onChange={(e) =>setPassword(e.target.value)} placeholder="Password" className="Signpassword" value={password} required></input><br/>
     <label htmlform="Fname" className='sfname'>FIRST NAME</label><br/>
     <input type="text"  onChange={(e) =>setfname(e.target.value)} placeholder="First Name" className="Sfname"  value={fname} required></input><br/>
     <label htmlform="usertype" className='slname'>USER TYPE</label><br/>
     <input type="text" onChange={(e) =>setusertype(e.target.value)} placeholder="Buyer or Seller" value={usertype} className="Slname"></input><br/><br/>
     <Link to="/bookdetails"><button type="submit" onClick={sendtodb} className='Sp-btn'>SIGNUP</button></Link>
     </form>
     <Link to="/login"><button className='Sbtn'>Already have an Account ? LOGIN</button></Link>
     </div>
    </div>
  )
}

export default SignUp