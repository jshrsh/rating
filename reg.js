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
else if((lp.indexOf("SelectSchool")> -1) && lp.indexOf("member")== -1 )
	{
			if(state1=='null' || country1=='null') {
			   sectionParamAndValue = "sec0=null;sec1=null;sec2=null";
			  }
			else{ sectionParamAndValue = "sec0=" + fnm + ";sec1=" + state1 + ";sec2=_" + country1;
			    }
			fnm += "/" + state1 + "/_" + country1; 
	}
	else if( ( (lp.indexOf("SelectTeacher")> -1) || (lp.indexOf("ShowRatings")> -1) || (lp.indexOf("AddRating")> -1) || (lp.indexOf("ShowRatingReview")> -1)) && ( lp.indexOf("member")== -1))
	{
		   if(state1=='null' || country1=='null' || sname1=='null' )
		     {  sectionParamAndValue = "sec0=null;sec1=null;sec2=null;sec3=null";
		      }
		     else{ sectionParamAndValue = "sec0=" + fnm + ";sec1=" + state1 + ";sec2=" + sname1 + ";sec3=_" + country1;
		         }
			fnm+="/" + state1 + "/" + sname1 + "/_" + country1;
	
	}
	else if(lp.indexOf("jive/vodka/")> -1 && lp.indexOf("member")== -1)
	{
		fnm = location.pathname.substring((location.pathname.lastIndexOf("/")+1),(fnm.length+1));
		sectionParamAndValue = "sec0=" + fnm + ";sec1=_mn;sec2=_"+ country1;
		fnm +="/_mn/_" + country1;
	}
	else
       {
		tempseg1=fnm.split("/");
		jjj=0;
	
		for(iii=0;iii<tempseg1.length;iii++)
		  {
		   if(tempseg1[iii] != "")
			 {  
			  tempseg1[iii]=(RepBeginningNumber(RepBadChars(tempseg1[iii])));
			 
			 if( tempseg1[iii].indexOf('.')!= -1 )
			   {
				tempseg1[iii]=tempseg1[iii].substring(0,tempseg1[iii].indexOf('.'));
			   }
			 sectionParamAndValue += "sec" + jjj + "=" + tempseg1[iii] +";";
			 jjj++;
			}
		  }
