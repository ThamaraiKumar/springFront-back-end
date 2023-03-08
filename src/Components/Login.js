import React, { useEffect ,useState } from 'react'
import { Link } from 'react-router-dom';
import './Login.css'


function Login() {
  const[userName,setUserName]=useState("");
  const[password,setPassword]=useState("");
  const[user,setUser]=useState("");
  const fetchData = () => {
    return fetch("http://localhost:8080/api/getinfo/{user}")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])
  
  // const handleSubmit=(e)=>{
  //   e.preventDefault();
  //   console.log(userName);

  // }
  return (
    <div className='App'>
    <div className='auth-form-container'>
    <div id="cover"></div>
    <div className='container'>
    <form    id="formContent">
     <h2>Login Page</h2><br/>
    <label htmlform="username" className='uname'>USERNAME</label>
    <input type="text" onChange={(e) =>setUserName(e.target.value)}  placeholder='User Name' value={userName} id='username'  required/><br/>
    <label htmlform="password" className='pwd'>PASSWORD</label>
    <input type="password" onChange={(e) =>setPassword(e.target.value)}  placeholder='Password' value={password} id='password' required/><br/><br/>
    <button type="submit" className='ln-btn'>Login</button>
    </form>
    <Link to="/"><button className='btn'>Don't have an Account ? REGISTER HERE</button></Link>
    </div>
    </div>
    </div>
   )
  }
  export default Login
  
  









  
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

  
  





  

  
 