package com.bookDetails.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookDetails.entity.SignUpEntity;
import com.bookDetails.service.SignUpService;



@RestController
@RequestMapping("/api")
public class SignUpController {
  @Autowired
  private SignUpService signUp ;
  
  @PostMapping("/signUp")
  public String singUp(@RequestBody SignUpEntity signup)
  {
	   return signUp.saveSignUp(signup);
	  
  }
}
