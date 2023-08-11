import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PaginationSorting.css'
import { Link } from 'react-router-dom';

function Read() {
  const [details, setDetails] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    fetchData();
  }, [pageNumber, pageSize, sortBy]);

  const fetchData = () => {
    axios
      .get(`http://localhost:8080/api/getps/${pageNumber}/${pageSize}/${sortBy}`)
      .then((response) => {
        setDetails(response.data.content);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className='tableheading'>
        <h1 style={{ textAlign: 'center' }}>Book Details</h1>
      </div>
      <table className='pagetable'>
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
          {details.map((book) => {
            return (
              <tr key={book.bookId}>
                <td>{book.bookId}</td>
                <td>{book.userinfo}</td>
                <td>{book.bookName}</td>
                <td>{book.authorName}</td>
                <td>{book.bookVolume}</td>
                <td>{book.price}</td>
                <td>{book.category}</td>
                <td>{book.imageurl}</td>
                <td>
                  <Link to={`/updatebooks/${book.bookId}`}>
                    <button className='pageupdate'>UPDATE</button>
                  </Link>
                </td>
                <td>
                  <Link to={`/deletebyid/${book.bookId}`}>
                    <button className='pagedelete'>DELETE</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='pagination'>
        <button className="previous"
        onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber === 0}>
          Previous
        </button>
        <span className='pagenospan'>  {pageNumber + 1} </span>
        <button className='next'   onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
      </div>
      <div className='sorting'>
        <label htmlFor='sortBy'>Sort By:</label>
        <select
          id='sortBy'
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value=''>None</option>
          <option value='bookName'>Book Name</option>
          <option value='authorName'>Author Name</option>
          <option value='price'>Price</option>
          <option value='category'>Category</option>
        </select>
      </div>
      
    </div>
  );
}

export default Read;