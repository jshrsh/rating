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
		
{
			$txt = "";
			#not neccessary check if comment field has been filled or not
			if(isset($comment) and !empty($comment))
			{
				$txt = $comment;
			}
			$q = "
				INSERT INTO comment(p_id,comment,rating) VALUES('".$uid."','".$txt."','".$rate."') 
			";#inserting data into db
			$q = mysql_query($q);
			#returing to main page
			header("Location: ".$_SERVER['HTTP_REFERER']);
		}
	}
?>
