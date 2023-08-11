import React, { useEffect ,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'



function Login() {
  const[userName,setUserName]=useState("");
  const[password,setPassword]=useState("");
  const[usertype,setUserType]=useState("");
  const[user,setUser]=useState("");
  const nav=useNavigate();

  const fetchData = () => {
  return fetch("http://localhost:8080/api/getInfo")
  .then((response) => response.json())
  .then((data) => setUser(data));
  }
  useEffect(() => {
    fetchData();
  },[])
  const authenticate=(event)=>{
    event.preventDefault();
  const UserCheck = user.find(user => (user.userName === userName && user.password === password));
 if(userName.length===0 || password.length===0)
 {
  alert("Enter all fields");
 }
 else if(userName==="Thamarai Kumar" && password==="Thamarai08" && usertype==="Admin")
 {
  nav("/read")
 }
 else if(!UserCheck){
  alert("Wrong Username or Password!")
}
 else if((UserCheck)&&(usertype==="seller"|| usertype==="Seller"))
 {
  nav("/bookdetails")
 }
 else {
   nav("/book")       
  }
}


  // const handleSubmit=(e)=>{
  //   e.preventDefault();
  //   console.log(userName);

  // }
  return (
    <div className='App'>
    <div className='auth-form-container'>
    <div id="cover"></div>
    <div className='container'>
    <form id="formContent">
    <h2>Login Page</h2><br/>
    <label htmlform="username" className='uname'>USERNAME</label>
    <input type="text" onChange={(e) =>setUserName(e.target.value)}  placeholder='User Name' value={userName} id='username' className="input" required/><br/>
    <label htmlform="password" className='pwd'>PASSWORD</label>
    <input type="password" onChange={(e) =>setPassword(e.target.value)}  placeholder='Password' value={password} id='password' className="input" required/><br/><br/>
    <label htmlform="usertype" className='usertype'>USERTYPE</label>
    <input type="text" onChange={(e) =>setUserType(e.target.value)}  placeholder='Buyer or Seller' value={usertype} id='usertype' className="input" required/><br/><br/>
    <Link to="/bookdetails"><button type="submit" onClick={authenticate} className='ln-btn'>Login</button></Link>
    </form>
    <Link to="/"><button className='btn'>Don't have an Account ? REGISTER HERE</button></Link>
    </div>
    </div>
    </div>
    )
  }
  export default Login;
  
  









  
    // const [email, setEmail] = useState("");
    //   const [password, setPassword] = useState("");
    //   const [userName, setuserName] = useState("");
  
    // function validateForm() {
    //   return email.length > 0 && password.length > 0;
    // }
    // function handleSubmit(event) {
    //   event.preventDefault();
    // }
  
  
  //   const[userName,setuserName]=useState('');
  // const[password,setPassword]=useState('');
  // const[error,setError]=useState(false);
  // const navigate=useNavigate();
  // const formSubmission=(event)=>{
  //   event.preventDefault();
  //   if(userName.length===0 && password.length===0)
  //   {
  //     setError(true);
  //   }
  //   if(userName && password)
  //   {
  //      const loginObj={
  //       name:userName,
  //       pswd:password
  //      }
  //      console.log(loginObj);
  //      alert(JSON.stringify(loginObj));
  //      navigate("/");
  //   }

  
  





  

  
 