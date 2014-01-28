$(document).ready(function() {
		$(".username").focus(function() {
			$(".user-icon").css("left","-48px");
			if(this.value=='Username')
			{
				this.value = '';
			}
		});
		$(".username").blur(function() {
			$(".user-icon").css("left","0px");
			if(this.value=='')
			{
				this.value = 'Username';
			}
		
		});
	
		$(".password").focus(function() {
			$(".pass-icon").css("left","-48px");
			if(this.value=='Password')
                        {
                                this.value = '';
                        }

		});
		$(".password").blur(function() {
			$(".pass-icon").css("left","0px");
			if(this.value=='')
                        {
                                this.value = 'Password';
                        }

		
		});
		$(".username").focus(function() {
			$(".userl-icon").css("left","-48px");
		});
		$(".username").blur(function() {
			$(".userl-icon").css("left","0px");
		
		});
	
		$(".password").focus(function() {
			$(".passl-icon").css("left","-48px");
		});
		$(".password").blur(function() {
			$(".passl-icon").css("left","0px");
		
		});
		$(".fullname").focus(function(){
			$(".full-icon").css("left","-48px");
			if(this.value=='Full Name')
                        {
                                this.value = '';
                        }

		});
		$(".fullname").blur(function(){
			$(".full-icon").css("left","0px");
			if(this.value=='')
                        {
                                this.value = 'Full Name';
                        }

		
		});
		$(".gmail").focus(function(){
			$(".gmail-icon").css("left","-48px");
			if(this.value=='User@example.com')
                        {
                                this.value = '';
                        }

		});
		$(".gmail").blur(function(){
			$(".gmail-icon").css("left","0px");
			if(this.value=='')
                        {
                                this.value = 'User@example.con';
                        }

		
		});
		$(".email").focus(function(){
			$(".gmailp-icon").css("left","-48px");
			if(this.value=='Email')
                        {
                                this.value = '';
                        }

		});
		$(".email").blur(function(){
			$(".gmailp-icon").css("left","0px");
			if(this.value=='')
                        {
                                this.value = 'Email';
                        }

		
		});
	});
