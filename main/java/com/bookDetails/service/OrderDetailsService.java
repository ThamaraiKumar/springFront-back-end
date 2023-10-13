package com.bookDetails.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookDetails.entity.Orderdetails;
import com.bookDetails.repository.OrderDetailsRepo;

@Service
public class OrderDetailsService {
	@Autowired
	OrderDetailsRepo orderRepo;
	public String Ordering(Orderdetails order)
	{
		orderRepo.save(order);
		return "Thanks for ordering!";
	}
	

}
