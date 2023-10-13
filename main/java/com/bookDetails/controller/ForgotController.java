package com.bookDetails.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookDetails.service.ForgotService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ForgotController {
  
	@Autowired
	private ForgotService forgotService;
	@PutMapping("/changePassword/{password}/{username}")
	public void changePassword(@RequestBody @PathVariable("password") String password, @PathVariable("username") String username)
	{
		forgotService.change(password,username);
	}
	
}
