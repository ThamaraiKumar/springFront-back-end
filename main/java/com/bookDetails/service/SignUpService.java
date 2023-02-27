package com.bookDetails.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookDetails.entity.SignUpEntity;
import com.bookDetails.repository.SignUpRepository;

@Service
public class SignUpService {
  @Autowired
  SignUpRepository signUpRepository;
  public String saveSignUp(SignUpEntity signUp)
  {
	  signUpRepository.save(signUp);
	  return "Thanks for signUp";
  }
}
