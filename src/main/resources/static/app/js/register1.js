function check_email(d){
	var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	var o = d.nextElementSibling;
	if(d.value == ""){
		o.innerHTML = "邮箱不能为空";
		o.style.visibility = "visible";
		d.style.border = "1px solid #e4393c";
	}
	else{
		if(myreg.exec(d.value)){
			o.style.visibility = "hidden";
			d.style.border = "1px solid #bdbdbd";
		}
		else{
			o.innerHTML = "邮箱须符合国际标准如xx@xx.xx";
			o.style.visibility = "visible";
			d.style.border = "1px solid #e4393c";
		}
	}
}

function get_check(){
	var o = document.getElementById('email');
	if(o.value == "" || o.nextElementSibling.style.visibility == "visible"){
		document.getElementsByClassName('mid')[0].innerHTML = "请填写正确邮箱信息";
		var t = document.getElementsByClassName('alert')[0].style.visibility = "visible";
	}
}

function check(){
	var o = document.getElementsByClassName('d');
	for(var i = 0; i < o.length; ++i){
		var t = o[i].firstElementChild;
		if(t.value == ""){
			var str = t.placeholder;
			document.getElementsByClassName('mid')[0].innerHTML = str + "不能为空";
			var t = document.getElementsByClassName('alert')[0].style.visibility = "visible";
			return false;
		}
	}
	/*Ajax判断验证码*/
}

function hide(){
	document.getElementsByClassName('alert')[0].style.visibility = "hidden";
}