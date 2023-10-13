package com.bookDetails.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.bookDetails.entity.BookDetails;

import jakarta.transaction.Transactional;

@Repository
public interface BookDetailsRepository extends CrudRepository<BookDetails, Integer> ,PagingAndSortingRepository<BookDetails, Integer>{

	@Query(value="select * from BookDetails where bookName=?1 or authorName=?2", nativeQuery=true)
	public Optional<BookDetails> getByBook(String bookName,String AuthorName);
	
	@Transactional
	@Query(value="select * from BookDetails where bookName=?1", nativeQuery=true)
	public Optional<BookDetails> findByKeyword(String keyword);
}
