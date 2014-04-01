<?php 
	#page for inserting comment and rating
	include "connection.php";
	$rating = $_POST['rating'];#submit button for selected rating
	$rate = $_POST['rate'];#selected rating
	$uid = $_POST['uid'];#hidden field that contains professors id
	$comment = $_POST['comment'];
	
	#making sure if rating has been set
	if($rating)
	{
		#check if rate has been selected
		if(isset($rate) and !empty($rate))
		
