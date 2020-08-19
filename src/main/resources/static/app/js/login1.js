		function check() {
			var un = document.getElementsByName('username')[0];
			var pwd = document.getElementsByName('password')[0];
			var tips = document.getElementsByClassName('tips')[0];
			if(!un.value && !pwd.value){
				tips.innerHTML = "请输入用户名和密码";
				tips.style.visibility = "visible";
				un.style.borderColor = " #e4393c";
				un.focus();
				pwd.style.borderColor = " #e4393c";
				return false;
			}
			else if(un.value && !pwd.value){
				tips.innerHTML = "请输入密码";
				tips.style.visibility = "visible";
				pwd.style.borderColor = " #e4393c";
				pwd.focus();
				return false;
			}else if(!un.value && pwd.value){
				tips.innerHTML = "请输入用户名";
				tips.style.visibility = "visible";
				un.style.borderColor = " #e4393c";
				un.focus();
				return false;
			}
			return true;
		}