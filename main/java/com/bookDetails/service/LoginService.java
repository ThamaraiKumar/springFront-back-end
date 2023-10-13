package com.bookDetails.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookDetails.entity.SignUpEntity;
import com.bookDetails.repository.SignUpRepository;

@Service
public class LoginService {

	@Autowired
	SignUpRepository signUpRepository;
	public Iterable<SignUpEntity> readByUserName(String userName)
	{
		return signUpRepository.readByUserName(userName);
	}
	public Iterable<SignUpEntity> read()
	{
		return signUpRepository.findAll();
	} 
}
