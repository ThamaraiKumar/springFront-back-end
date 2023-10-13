package com.bookDetails.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookDetails.entity.Orderdetails;
import com.bookDetails.service.OrderDetailsService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class OrderDetailsController {
	@Autowired
	OrderDetailsService orderService;
	
	@PostMapping("/order/post")
	public String post(@RequestBody Orderdetails order)
	{
		return orderService.Ordering(order);
	}

}
