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
	?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>RATE my professor website</title>
<link href="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRXxzeubuYvgjmyhPiqqEnFObll73dn_VQTXIuc4M0mNJ56_q5m-w" rel=icon type=image/x-icon> 
<meta name="keywords" content="Rate my professor website" />
<meta name="description" content="Rate my professor is a website where AUCA students can rate any professor from their University" />
<link href="style.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="general.css" />
<link rel="stylesheet" type="text/css" href="rating.css" />
</head>
<body>
<div id="templatemo_container">

	<div id="templatemo_left_column">
    	<div id="templatemo_site_header">
        	<div id="site_logo">&nbsp;</div>
            <div id="site_name">Rate my Professor!<span></span></div>          
        </div>
        
        <div class="templatemo_left_column_section">
            <div class="left_column_header_01">News</div>
            <div class="news_outter_box">
                <div class="news_innter_box">
                    <div class="news_title">NEW GENERATION ACADEMY WAITS ENTRANTS</div>
                    <p>Article from Super Info website</p>
                    
                  <div class="cleaner_h20">&nbsp;</div>
                    
                    <div class="news_title">AUCA Open House Day</div>
                    <p>95% of AUCA graduates get jobs within 3 months of graduation. Your future starts at AUCA on Saturday, January 25, 2014</p>
					
				  <div class="cleaner_h21">&nbsp;</div>
                    
                  <div class="news_title">New Generation Academy Students Start Giving Back</div>
                    <p>NGA students organized a charity event for orphans and the elderly at the Boorukerlik (Mercy) House in Osh. The New Year’s party helped the people to celebrate the coming year and forget about their troubles for a night. </p>
                </div>
            </div>        
        </div> <!-- end of news panel --> 
        
		<div>
            <a href="http://validator.w3.org/check?uri=referer"><img style="border:0;width:88px;height:31px" src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Transitional" width="88" height="31" vspace="8" border="0" /></a>
            <a href="http://jigsaw.w3.org/css-validator/check/referer"><img style="border:0;width:88px;height:31px"  src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!" vspace="8" border="0" /></a>
        </div>
      	
    </div> <!-- end of left column -->
    
    <div id="templatemo_right_column">
		
        <div id="right_column_top_panel">
            <form action="#" method="get">
                <label>Username</label><input type="text" name="q" size="10" class="inputfield" title="searchfield" />
                <label>Password</label><input type="password" name="q" size="10" class="inputfield" title="searchfield" />
                <input type="submit" name="Search" value="" alt="Search" id="login_button" title="Search" />
            </form>
            <div class="cleaner">&nbsp;</div>
        </div> <!-- end of top panel -->
        
        <div id="templatemo_menu">
            <ul>
                <li><a href="?id=1" class="current">Home</a></li>
                <li><a href="?id=2">About</a></li>
                <li><a href="?id=3">All Professors and Departments</a></li>
                <li><a href="?id=4">Rating</a></li>  
                <li><a href="?id=5">Guests</a></li> 
                <!-- <li><a href="#" class="last">Contact</a></li> -->                     
            </ul> 
	    </div> <!-- end of menu -->	
	
