package com.bookDetails.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bookDetails.entity.UserWithBook;

@Repository
public interface UserWithBookRepo extends CrudRepository<UserWithBook, String> {

}
