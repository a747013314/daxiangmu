function check_username(d){
	if(d.value == ""){
		var o = d.nextElementSibling;
		o.innerHTML = "用户名不能为空";
		o.style.visibility = "visible";
		d.style.border = "1px solid #e4393c";
	}
	else{
		/*Ajax实现*/
	}
}

function check_pwd1(d){
	var cmp = document.getElementsByName("ch_pwd")[0];
	var o = d.nextElementSibling;
	var ch=/^(\w){6,20}$/;  
	if(cmp.value == ""){
		if(d.value == ""){
			o.innerHTML = "密码不能为空";
			o.style.visibility = "visible";
			d.style.border = "1px solid #e4393c";
		}
		else{
			if (!ch.exec(d.value)){
				o.innerHTML = "密码只能由字母、数字、下划线组成且长度为6-20";
				o.style.visibility = "visible";
				d.style.border = "1px solid #e4393c";
			}
			else{
				o.style.visibility = "hidden";
				d.style.border = "1px solid #bdbdbd";
			}
		}
	}
	else{
		if(d.value == ""){
			o.innerHTML = "密码不能为空";
			o.style.visibility = "visible";
			d.style.border = "1px solid #e4393c";
		}
		else{
			if(!ch.exec(d.value)){
				if(d.value == cmp.value){
					o.innerHTML = "密码只能由字母、数字、下划线组成且长度为6-20";
					o.style.visibility = "visible";
					d.style.border = "1px solid #e4393c";	
				}
				else{
					o.innerHTML = "两次密码不一致";
					o.style.visibility = "visible";
					d.style.border = "1px solid #e4393c";
				}
			}
			else{
				if(d.value == cmp.value){
					o.style.visibility = "hidden";
					d.style.border = "1px solid #bdbdbd";
					o = cmp.nextElementSibling;
					o.style.visibility = "hidden";
					cmp.style.border = "1px solid #bdbdbd";
				}
				else{
					o.innerHTML = "两次密码不一致";
					o.style.visibility = "visible";
					d.style.border = "1px solid #e4393c";
				}
			}			
		}
	}
}

function check_pwd2(d){
	var cmp = document.getElementsByName("pwd")[0];
	var o = d.nextElementSibling;
	var ch=/^(\w){6,20}$/;  
	if(cmp.value == ""){
		if(d.value == ""){
			o.innerHTML = "确认密码不能为空";
			o.style.visibility = "visible";
			d.style.border = "1px solid #e4393c";
		}
		else{
			if (!ch.exec(d.value)){
				o.innerHTML = "确认密码只能由字母、数字、下划线组成且长度为6-20";
				o.style.visibility = "visible";
				d.style.border = "1px solid #e4393c";
			}
			else{
				o.style.visibility = "hidden";
				d.style.border = "1px solid #bdbdbd";
				o = cmp.nextElementSibling;
				o.style.visibility = "hidden";
				d.style.border = "1px solid #bdbdbd";
			}
		}
	}
	else{
		if(d.value == ""){
			o.innerHTML = "密码不能为空";
			o.style.visibility = "visible";
			d.style.border = "1px solid #e4393c";
		}
		else{
			if(!ch.exec(d.value)){
				if(d.value == cmp.value){
					o.innerHTML = "密码只能由字母、数字、下划线组成且长度为6-20";
					o.style.visibility = "visible";
					d.style.border = "1px solid #e4393c";	
				}
				else{
					o.innerHTML = "两次密码不一致";
					o.style.visibility = "visible";
					d.style.border = "1px solid #e4393c";
				}
			}
			else{
				if(d.value == cmp.value){
					o.style.visibility = "hidden";
					d.style.border = "1px solid #bdbdbd";
					o = cmp.nextElementSibling;
					o.style.visibility = "hidden";
					cmp.style.border = "1px solid #bdbdbd";
				}
				else{
					o.innerHTML = "两次密码不一致";
					o.style.visibility = "visible";
					d.style.border = "1px solid #e4393c";
				}
			}			
		}
	}
}

function check_tel(d){
	var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	var o = d.nextElementSibling;
	if(d.value == ""){
		o.innerHTML = "手机号不能为空";
		o.style.visibility = "visible";
		d.style.border = "1px solid #e4393c";
	}
	else{
		if(d.value.length == 11 && myreg.exec(d.value)){
			o.style.visibility = "hidden";
			d.style.border = "1px solid #bdbdbd";
		}
		else{
			o.innerHTML = "手机号需符合标准且长度为11";
			o.style.visibility = "visible";
			d.style.border = "1px solid #e4393c";
		}
	}
}

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



function check_receAdd(d){
	var o = d.nextElementSibling;
	if(d.value == ""){
		o.innerHTML = "收货地址不能为空";
		o.style.visibility = "visible";
		d.style.border = "1px solid #e4393c";
	}
	else{
		o.style.visibility = "hidden";
		d.style.border = "1px solid #bdbdbd";
		
	}
}

function show_receAdd(d){
	var o = d.nextElementSibling;
	o.innerHTML = "为了快递能安全到达你家门口，请自觉填写正确地址";
	o.style.visibility = "visible";
	d.style.border = "1px solid #e4393c";
}

function check() {
	var o = document.getElementsByClassName('d');
	for(var i = 0; i < o.length; ++i){
		var t = o[i].firstElementChild;
		if(t.value == ""){
			var str = t.placeholder;
			t.focus();
			t.style.border = "1px solid #e4393c";
			o = t.nextElementSibling;
			o.innerHTML = str + "不能为空";
			o.style.visibility = "visible";
			return false;
		}
	}
	o = document.getElementsByClassName('d');
	for(var i = 0; i < o.length; ++i){
		var t = o[i].firstElementChild.nextElementSibling;
		if(t.style.visibility == "visible" && t.type != "submit"){
			t.previousElementSibling.focus();
			return false;
		}
	}
	return true;
}
