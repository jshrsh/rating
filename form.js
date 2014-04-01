function submitForm() {
        $("#customError").hide(); //clear old validation messages
	$("#fm1").validate({
		rules : {
			'username' : {
				required : true,
				email  :true
			},
			'password' : 'required',
			'userAccessAgreeKey' : {
				agreementCheck : true
			}
		},
		errorElement : 'span',
		messages : {
			'username' : {
				required : 'Please enter a valid e-mail.',
				email : 'Please enter a valid e-mail.'
			},
			'password' : 'Your password was entered incorrectly.',
			'userAccessAgreeKey' : {
				agreementCheck : 'You must agree with the Terms and Conditions to sign in.'
			}
		}
	
	});
$.validator.addMethod("agreementCheck", function(value, element){
		if ($('#agreementChkDiv').css('visibility') == 'visible') {
			if($("#userAccessAgreeKey").is(':checked'))
				return true;
		}
	});
}
