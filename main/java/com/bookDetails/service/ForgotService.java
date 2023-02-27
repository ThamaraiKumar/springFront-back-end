package com.bookDetails.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookDetails.repository.SignUpRepository;

@Service
public class ForgotService {
	@Autowired
	private SignUpRepository signUpRepository;
	public void change(String password ,String userName)
	{
		signUpRepository.changePassword(password,userName);
		System.out.println("Password Changed Successfully");
	}
	

}
