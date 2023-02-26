package com.bookDetails.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.bookDetails.entity.BookDetails;
import com.bookDetails.repository.BookDetailsRepository;

@Service
public class BookDetailsService {

	@Autowired
	  BookDetailsRepository bookRepository;
	  
	  public BookDetails create(BookDetails book)
		{
			return bookRepository.save(book);
		}
		public Optional<BookDetails> read(int id)
		{
			return bookRepository.findById(id);
		}
		public BookDetails update(BookDetails book)
		{
			return bookRepository.save(book);
		}
		public void delete(int id)
		{
			bookRepository.deleteById(id);
		}
		public Iterable<BookDetails> readAll()
		{
			return bookRepository.findAll();
		}
		
		public Iterable<BookDetails> sortBook(String field)
	  {
		  return bookRepository.findAll(Sort.by(Direction.DESC, field));
		//return bookRepository.findAll(Sort.by(field));
	  }
		public Iterable<BookDetails> getData()
		{
			return bookRepository.findAll();
		}
	  public BookDetails saveBook(BookDetails book)
	  {
		  return bookRepository.save(book);
	  }
	  public Page<BookDetails>pagingBook(int page,int pageSize)
	  {
		  Pageable paging=PageRequest.of(page, pageSize);
		  return bookRepository.findAll(paging);
	  }
	  public Page<BookDetails>pagingAndSorting(int pageNo,int pageSize,String field)
	  {
		  Pageable paging=PageRequest.of(pageNo, pageSize).withSort(Sort.by(Direction.DESC, field));
		  return bookRepository.findAll(paging);
	  }
}
