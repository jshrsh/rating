<!--<div id="ad728">
				
				
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<title>Ads - 728 x 90</title>

</head>
<body bgcolor="#fff">
<script language="Javascript">
	var ordJS=Math.floor(Math.random()*10000000000000000000);
 	var fnm = "";
	var lp=location.pathname;
	var sectionParamAndValue = "";
	var sectionParam="";
	var tempseg1="";
	var sname1="";
	var state1="";
	var country1="null";
	var iii=0;
	var jjj=0;
if(location.pathname.indexOf(".") != -1){
	   fnm = location.pathname.substring(1,location.pathname.lastIndexOf("."));
	}
	else{
	    fnm = location.pathname.substring(1,location.pathname.length-1);
	   }
	//alert("fnm:" + fnm);
	//alert("location.pathname: " + lp);
	
	sname1= RepBeginningNumber(RepBadChars(sname1));
	state1= RepBeginningNumber(RepBadChars(state1));
	fnm= RepBeginningNumber(RepBadChars(fnm));
	
	if( (fnm=="" || fnm=="/" || fnm=="index") && lp.indexOf("member")== -1 ) // https://dev.ratemyprofessors.com:8052/
	{
		sectionParam="_hp/_"+ country1;
		sectionParamAndValue = "sec0=_hp;sec1=_" + country1;
		fnm="";
	}
