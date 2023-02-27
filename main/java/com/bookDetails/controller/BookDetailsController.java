package com.bookDetails.controller;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.bookDetails.entity.BookDetails;
import com.bookDetails.service.BookDetailsService;
import com.fasterxml.jackson.core.JsonProcessingException;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

@RestController
@RequestMapping("/api")
public class BookDetailsController {

	@Autowired
	private BookDetailsService bookService;
	//@Autowired BookRepository bookRepository;
	
	@Operation(summary = "creates a new book details")
	@ApiResponses(value = {@ApiResponse(responseCode = "201",description = "book detail created successfully"),
			@ApiResponse(responseCode="400",description="book detail is invalid")})
	
	@ResponseStatus(HttpStatus.CREATED)
	
	@PostMapping(produces="application/json", consumes="application/json")
	public ResponseEntity<BookDetails> create(final @RequestBody BookDetails book)
	{
		BookDetails createdBook=bookService.create(book);
		return ResponseEntity.ok(createdBook);
	}
	
	
	@Operation(summary = "get an book detail with an given id")
	@ApiResponses(value = {@ApiResponse(responseCode = "200",description = "getting book details successfully"),
			@ApiResponse(responseCode="401",description="invalid credentials"),
			@ApiResponse(responseCode="404",description="book detail not found")})
	@GetMapping(value="/{id}",produces="application/json")
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
	@PutMapping(value="/{id}",produces="application/json",consumes="application/json")
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
