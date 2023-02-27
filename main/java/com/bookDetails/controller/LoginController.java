package com.bookDetails.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookDetails.entity.SignUpEntity;
import com.bookDetails.service.LoginService;

@RestController
@RequestMapping("/api")
public class LoginController {

	@Autowired
	private LoginService loginService;
	@GetMapping("/getInfo/{userName}")
	public Iterable<SignUpEntity> readByUserName(@PathVariable String userName)
	{
		return loginService.readByUserName(userName);
	}
}
