package com.bookDetails.repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bookDetails.entity.SignUpEntity;

import jakarta.transaction.Transactional;


@Repository
public interface SignUpRepository extends CrudRepository<SignUpEntity, String>{

	@Query("select s.userName,s.password from SignUpEntity s where s.userName=? 1")
	Iterable<SignUpEntity> readByUserName(String userName);
	
	@Transactional
	@Modifying
	@Query("update SignUpEntity s set s.password=?1 where s.userName=?2")
	void changePassword(String password,String userName);
}
