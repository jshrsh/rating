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
sectionParamAndValue += "sec" + jjj + "=_mn;sec" + ++jjj + "=_" + country1 ;
		  sectionParam +="/_mn/_" + country1;
  }
 	document.write ( "<script language='JavaScript' src='https:\/\/ad.doubleclick.net\/adj\/rmp.mtvi\/atf_j_s\/" + fnm + sectionParam + ";" + sectionParamAndValue + ";pos=atf;tag=adj;mtype=standard;sz=728x90;tile=1;dcopt=ist;u=" + (sectionParamAndValue.replace(/;/g,'|')).replace(/=/g,'-') + "|pos-atf|tag-adj|mtype-standard|sz-728x90|tile-1|dcopt-ist;ord=20140401012337" + ordJS + ";' type='text\/javascript'><\/script>");
    //alert( "'https:\/\/ad.doubleclick.net\/adj\/rmp.mtvi\/atf_j_s\/" + fnm + sectionParam + ";" + sectionParamAndValue + ";pos=atf;tag=adj;mtype=standard;sz=728x90;tile=1;dcopt=ist;u=" + (sectionParamAndValue.replace(/;/g,'|')).replace(/=/g,'-') + "|pos-atf|tag-adj|mtype-standard|sz-728x90|tile-1|dcopt-ist;ord=20140401012337" + ordJS + ";'type=");
	// 1 x 2 ads
 	document.write ( "<script language='JavaScript' src='https:\/\/ad.doubleclick.net\/adj\/rmp.mtvi\/btf_j_s\/" + fnm + sectionParam + ";" + sectionParamAndValue + ";pos=btf;tag=adj;mtype=standard;sz=1x2;tile=1;u=" + (sectionParamAndValue.replace(/;/g,'|')).replace(/=/g,'-') + "|pos-btf|tag-adj|mtype-standard|sz-1x2|tile-1;ord=20140401012337" + ordJS + ";' type='text\/javascript'><\/script>");
function RepBadChars(badstr) {
   var str="";
   str=badstr;
   var invalidch= ["-","`","&",";","~",":","?","@","{","}","^","$","\\","%","|"," "];
   var iii=0;
   var jjj=0;
   var strnew;
       
    for(iii=0; iii < str.length ;iii++)
	   {
       for(jjj=0;jjj< invalidch.length; jjj++)
          {  
            if(str.charAt(iii)==invalidch[jjj])
              { strnew = str.split(str.charAt(iii));
            	strnew = strnew.join("_");
            	str=strnew;
                break;
              }      
          } 
      } 
    return str;
}   
function RepBeginningNumber(str){
var str1=str;
var iii=0;
var rstr="";
var flag=false;
if((isNaN(str1.charAt(0))))
  {
  return str1;
  }
else
  {
	while((!(isNaN(str1.charAt(iii))) && iii < str1.length))
   		{
    	iii++;
    	flag=true;   
   		}
   rstr= "__" + str1.substring(iii,str1.length); 
   return rstr; 
  }
}
</script>
<noscript>
	<a href="https://ad.doubleclick.net/jump/rmp.mtvi/_hp;tile=1;sz=728x90;ord=123456789?" target="_blank">
		<img src="https://ad.doubleclick.net/ad/rmp.mtvi/_hp;tile=1;sz=728x90;ord=123456789?" width="728" height="90" border="0" alt="" />
	</a>
</noscript>
</body>
</html>
</div>-->
