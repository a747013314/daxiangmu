window.onload=function(){
	setInterval(function(){
		var o = document.getElementById('jump');
		var str = o.innerHTML;
		var n = str.substr(0, 1);
		if(n == 0){
			window.location.href = "http://127.0.0.1:8080/thymeleaf/login1";
		}
		else{
			n = n - 1;
			o.innerHTML = n + "秒后跳转主页，或直接点击此处跳转";
		}
	},1000);
}