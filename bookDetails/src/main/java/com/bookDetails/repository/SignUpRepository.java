package com.bookDetails.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bookDetails.entity.SignUpEntity;


@Repository
public interface SignUpRepository extends CrudRepository<SignUpEntity, String>{

	@Query("select s.userName,s.password from SignUpEntity s where s.userName=? 1")
	Iterable<SignUpEntity> readByUserName(String userName);
}
