import React, { useState } from 'react'
import './BookDetails.css'
import { useNavigate } from 'react-router-dom';

function BookDetails() {
    const[bookId,setbookId]=useState("");
    const[authorName,setauthorName]=useState("");
    const[bookName,setbookName]=useState("");
    const[bookVolume,setbookVolume]=useState("");
    const[price,setPrice]=useState("");
    const[category,setCategory]=useState("");
    const[imageurl,setImageUrl]=useState("");
    const[userinfo,setuserinfo]=useState([]);
    const nav=useNavigate();

    const sendtodb=(event)=>{
        event.preventDefault()
        const details={bookId,bookName,authorName,bookVolume,price,userinfo,category,imageurl}
        if(bookId.length===0||bookName.length===0||authorName.length===0||bookVolume.length===0||price===0||imageurl===0||category.length===0||userinfo.length===0){
          alert("Enter All fields")
        }
        else{
        fetch("http://localhost:8080/api/posting",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(details)
        }
        ).then(()=>{
          console.log("New Detail Added");   
          console.log(JSON.stringify(details));
          console.log(event);
          alert("Thanks!!!")
           nav("/showingbook")
        })
      }
    } 

  return( 
    <div className='book'> 
    <div className='bcover'></div>
    <div className='bform'>
    <form>
    <label id='headingofform'>BOOK DETAILS</label>
    <label htmlform="BookId" className='bform-group'>
    <input type="text" className="bform-control" value={bookId}  onChange={(e) =>setbookId(e.target.value)}  required></input>
    <span>BOOK ID</span>
    <span className='bborder'></span>
    </label>
    <label htmlform="BookName" className='bform-group'>
    <input type="text" className="bform-control" value={bookName} onChange={(e) =>setbookName(e.target.value)} required></input>
    <span>BOOK NAME</span>
    <span className='bborder'></span>
    </label>
    <label htmlform="authorname" className='bform-group bauthor'>
    <input type="text" className="bform-control" value={authorName} onChange={(e) =>setauthorName(e.target.value)} required></input>
    <span>AUTHOR NAME</span>
    <span className='bborder'></span>
    </label>
    <label htmlform="BookVolume" className='bform-group volume'>
    <input type="text" className="bform-control" value={bookVolume} onChange={(e) =>setbookVolume(e.target.value)} required></input>
    <span>BOOK VOLUME</span>
    <span className='bborder'></span>
    </label>
    <label htmlform="BookPrice" className='bform-group bprice'>
    <input type="text" className="bform-control" value={price} onChange={(e) =>setPrice(e.target.value)}  required></input>
    <span>PRICE</span>
    <span className='bborder'></span>
    </label>
    <label htmlform="BookCategory" className='bform-group bcategory'>
    <input type="text" className="bform-control" value={category} onChange={(e) =>setCategory(e.target.value)}  required></input>
    <span>CATEGORY</span>
    <span className='bborder'></span>
    </label>
    <label htmlform="emailid" className='bform-group bmail'>
    <input type="text" className="bform-control" value={userinfo} onChange={(e) =>setuserinfo(e.target.value)}  required></input>
    <span>USER EMAIL ID</span>
    <span className='bborder'></span>
    </label>
    <label htmlform="imageurl" className='bform-group burl'>
    <input type="text" className="bform-control" value={imageurl} onChange={(e) =>setImageUrl(e.target.value)}  required></input>
    <span>BOOK IMAGE URL</span>
    <span className='bborder'></span>
    </label>
    <button  type='submit' onClick={sendtodb} id="bdsubmit">SUBMIT</button>
    </form>
    </div>
    </div>
  )
}

export default BookDetails





