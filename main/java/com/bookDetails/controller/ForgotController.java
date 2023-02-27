package com.bookDetails.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookDetails.service.ForgotService;

@RestController
@RequestMapping("/api")
public class ForgotController {
  
	@Autowired
	private ForgotService forgotService;
	@PutMapping("/changePassword/{password}/{username}")
	public void changePassword(@RequestBody @PathVariable String password, String username)
	{
		forgotService.change(password,username);
	}
	
}
