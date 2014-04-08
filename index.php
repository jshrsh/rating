<?php
	error_reporting(0);
	$container_name = array();
	$container_department = array();
	$comment = array();
	include "connection.php";//Connecting to DB
	include "db.php";
	$id = strip_tags($_GET['id']);//Set id to change between pages
	$errors = array();#container for errors
	$ac = array();#main container will contain professor's info
	$name = $_POST['professor'];#getting selected professor
	$go = $_POST['go'];#submit button of professor
	
	#if selected teacher button has been hit we process the request
	if($go)
	{
		if(isset($name) && !empty($name))
		{
			$q = "
				SELECT * FROM general WHERE p_name = '".$name."'
			";#getting data about professor
			$q = mysql_query($q);
			$sep = mysql_query("
				SELECT general.p_id,comment.p_id,general.p_name,comment.comment as comment,sum(comment.rating) / count(comment.rating) as rate FROM general,comment 
				WHERE comment.p_id = general.p_id and general.p_name = '".$name."'
			");#getting data about professor's rating and comments
			$r = mysql_num_rows($q);
			if($r == 0)
			{
				#if nothing was found
				$errors[] = "Such professor has not been found!";
			}
			else
			{
				#getting data about professor and putting into ac container
				while($t = mysql_fetch_assoc($q))
				{
					$ac['id'] = $t['p_id'];
					$ac['Full name'] = $t['p_name'];
					$ac['Department'] = $t['p_department'];
				}
				#getting data about professor's rating and comment
				while($t = mysql_fetch_assoc($sep))
				{
					$ac['Current Rating'] = $t['rate'];
					array_push($comment,$t['comment']);
				}
			}
		}
		
	}
		
	
