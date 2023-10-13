package com.bookDetails.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bookDetails.entity.Orderdetails;

@Repository
public interface OrderDetailsRepo extends CrudRepository<Orderdetails, Integer> {

}
