package com.bookDetails.controller;


import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bookDetails.entity.BookDetails;
import com.bookDetails.repository.BookDetailsRepository;
import com.bookDetails.service.BookDetailsService;
import com.fasterxml.jackson.core.JsonProcessingException;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

import org.springframework.data.rest.webmvc.ResourceNotFoundException;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class BookDetailsController {

	@Autowired
	private BookDetailsService bookService;
	@Autowired
	private BookDetailsRepository bookRepo;
	
	@PostMapping("/posting")
	public String saveAll(@RequestBody BookDetails book)
	{
		return bookService.saveBooks(book);
	}
	@GetMapping("/geting")
	public Iterable<BookDetails> get()
	{
		return bookService.readAll();
	}
	
	//for frontend
	@PutMapping("/updatebyid/{id}")
	public ResponseEntity<BookDetails> Update(@PathVariable int id ,@RequestBody BookDetails book)
	{
		BookDetails update=bookRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("not found exception"));
		update.setAuthorName(book.getAuthorName());
		update.setBookName(book.getBookName());
		update.setCategory(book.getCategory());
		update.setPrice(book.getPrice());
		update.setImageurl(book.getImageurl());
		update.setUserinfo(book.getUserinfo());
		bookRepo.save(update);
		return ResponseEntity.ok(update);
	}
	@GetMapping("/getwithid/{id}")
	public ResponseEntity<Optional<BookDetails>> getWithId(@PathVariable int id)
	{
		Optional<BookDetails>book=bookRepo.findById(id);
		return ResponseEntity.ok(book);
	}
	

	@DeleteMapping("/deleting/{id}")
	public void Delete(@PathVariable("id") int id)
	{
		bookService.delete(id);
	}
	
	//get with query
	@GetMapping("/getforsearch/{bookName}/{authorName}")
	public Optional<BookDetails>getbyName(@PathVariable String bookName,@PathVariable String authorName)
	{
		return bookService.getByName(bookName,authorName);
	}
	
	@GetMapping("/search")
    public Optional<BookDetails> searchItems(@RequestParam("keyword") String keyword)
	{
        return bookRepo.findByKeyword(keyword);
    }
	
	
//	@Operation(summary = "creates a new book details")
//	@ApiResponse(value = {@ApiResponse(responseCode = "201",description = "book detail created successfully"),
//			@ApiResponse(responseCode="400",description="book detail is invalid")})
//	
//	@ResponseStatus(HttpStatus.CREATED)
//	
//	@PostMapping(produces="application/json", consumes="application/json")
//	public ResponseStatus<BookDetails> create(final @RequestBody BookDetails book)
//	{
//		BookDetails createdBook=bookService.create(book);
//		return ResponseEntity.ok(createdBook);
//	}
	
	
	@Operation(summary = "get an book detail with an given id")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "getting book details successfully"),
			@ApiResponse(responseCode="401",description="invalid credentials"),
			@ApiResponse(responseCode="404",description="book detail not found")})
	@GetMapping(value="getbyid/{id}",produces="application/json")
	public ResponseEntity<Optional<BookDetails>> read(final @PathVariable int id)
	{
		Optional<BookDetails> readBook=bookService.read(id);
		return ResponseEntity.ok(readBook);
	}
	
	
	@Operation(summary = "updates an book with an given id")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "book details updated successfully"),
			@ApiResponse(responseCode="400",description="book details is invalid"),
			@ApiResponse(responseCode="401",description="invalid credentials"),
			@ApiResponse(responseCode="404",description="book detail not found")})
	@PutMapping(value="update/{id}",produces="application/json",consumes="application/json")
	public ResponseEntity<BookDetails> updateById(final @RequestBody BookDetails book) throws JsonProcessingException
		{
			final BookDetails updateBook=bookService.update(book);
			return ResponseEntity.ok(updateBook);
		}
	
	
	@Operation(summary = "Deletes a book detail with an given id")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "book detail deleted successfully"),
			@ApiResponse(responseCode="401",description="invalid credentials"),
			@ApiResponse(responseCode="404",description="book detail not found")})
	@DeleteMapping("/{id}")
	public void deleteById(final @PathVariable int id)
	{
		bookService.delete(id);
	}
	
	@Operation(summary = "get all book detail")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "getting book details successfully"),
			@ApiResponse(responseCode="401",description="invalid credentials"),
			@ApiResponse(responseCode="404",description="book detail not found")})
	
	@GetMapping(produces="application/json")
	public Iterable<BookDetails> readAll()
	{
		return bookService.readAll();
	}
	
	
	@GetMapping("/get/{field}")
	  Iterable<BookDetails>bookSort(@PathVariable("field") String field)
	  {
		  return bookService.sortBook(field);
	  }
	  
	  @GetMapping(value="/paging/{pageNo}/{pageSize}")
	  Page<BookDetails>bookPaging(@PathVariable("pageNo") int pageNo,@PathVariable("pageSize") int pageSize)
	  {
		  return bookService.pagingBook(pageNo, pageSize);
	  }
	  
	  @GetMapping(value="getps/{pageNo}/{pageSize}/{field}")
	  Page<BookDetails>bookPagingSorting(@PathVariable("pageNo") int pageno,@PathVariable("pageSize") int pageSize,@PathVariable("field") String field)
	  {
		return bookService.pagingAndSorting(pageno,pageSize,field); 
	  }
}
