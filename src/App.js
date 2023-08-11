import React from 'react';
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import BookDetails from './Components/BookDetails';
import './App.css';
import Read from './CRUD/Read';
import Home from './Components/Home';
import ShowingBooks from './Components/ShowingBooks';
import OrderingDetails from './Components/OrderingDetails';
import UpdateBook from './CRUD/UpdateBook';
import Delete from './CRUD/Delete';
import PaginationSorting from './CRUD/PaginationSorting';
import NotFound from './Components/NotFound';
import Book from './Components/Book';


function App() {
  return (
  <div>
  <BrowserRouter>
  <Routes>
  <Route path="*" element={<NotFound/>}></Route>
  <Route path="/" element={<SignUp/>}></Route>
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/bookdetails" element={<BookDetails/>}></Route>
  <Route path="/home" element={<Home/>}></Route>
  <Route path="/book" element={<Book/>}></Route>
  <Route path="/read" element={<Read/>}></Route>
  <Route path="/showingbook" element={<ShowingBooks/>}></Route>
  <Route path="/ordering" element={<OrderingDetails/>}></Route>
  <Route path="/updatebooks/:id" element={<UpdateBook/>}></Route>
  <Route path="/deletebyid/:id" element={<Delete/>}></Route>
  <Route path="/page" element={<PaginationSorting/>}></Route>
  </Routes>
  </BrowserRouter>
 
  </div>
  );
  
}




export default App;
