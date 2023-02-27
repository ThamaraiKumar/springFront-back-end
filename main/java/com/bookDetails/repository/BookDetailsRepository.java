package com.bookDetails.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.bookDetails.entity.BookDetails;

@Repository
public interface BookDetailsRepository extends CrudRepository<BookDetails, Integer> ,PagingAndSortingRepository<BookDetails, Integer>{

}
