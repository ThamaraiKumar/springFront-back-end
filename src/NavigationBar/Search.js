import React, { useState } from 'react'

function Search() {
    const[keyword,setKeyword]=useState("");
    const[details,setDetails]=useState([]);
    const search=async()=>{
        try{
            const response=await fetch(`http://localhost:8080/api/search?keyword=${keyword}`);
            const data=await response.json();
            setDetails(data);
        }catch(error)
        {
            console.log('Error:',error);
        }
    };
  return (
    <div>
    
    <input type="text" value={keyword} onChange={(e)=>setKeyword(e.target.value)}/>
    <button onClick={search}>SEARCH</button>
    <ul>{details.map((item)=>(
        <li key={item.bookId}>{item.bookName}</li>
    ))}</ul>
    </div>
  )
}

export default Search

   
  
      
      