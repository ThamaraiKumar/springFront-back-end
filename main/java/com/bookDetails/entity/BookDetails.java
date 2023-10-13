package com.bookDetails.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Entity
@Table(name="bookDetails")
@Transactional
public class BookDetails {
 
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int bookId;
	private String bookName;
	private String authorName;
	private int bookVolume;
	private int price;
	private String category;
	private String imageurl;
	private String userinfo;
public String getUserinfo() {
		return userinfo;
	}
	public void setUserinfo(String userinfo) {
		this.userinfo = userinfo;
	}
	//	@OneToOne(cascade=CascadeType.ALL)
//	@JoinColumn(name="user_id")
//	private UserWithBook userinfo;
	public int getBookId() {
		return bookId;
	}
	public void setBookId(int bookId) {
		this.bookId = bookId;
	}
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	public String getAuthorName() {
		return authorName;
	}
	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}
	public int getBookVolume() {
		return bookVolume;
	}
	public void setBookVolume(int bookVolume) {
		this.bookVolume = bookVolume;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getImageurl() {
		return imageurl;
	}
	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}
//	public UserWithBook getUserinfo() {
//		return userinfo;
//	}
//	public void setUserinfo(UserWithBook userinfo) {
//		this.userinfo = userinfo;
//	}
	
		
	
}
