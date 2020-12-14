/*
* @Author: 22378
* @Date:   2020-12-11 09:45:18
* @Last Modified by:   22378
* @Last Modified time: 2020-12-14 17:06:07
*/
window.onload = function(){
	//简陋轮播图效果
	var banner0 = document.getElementById("banner0");
	var banner1 = document.getElementById("banner1");
	var banner2 = document.getElementById("banner2");
	var banner3 = document.getElementById("banner3");
	var banner4 = document.getElementById("banner4");
	var rightPoint = document.getElementById("rightPoint");
	var leftPoint = document.getElementById("leftPoint");
	var i = 0;
	var arr = new Array();
	arr.push(banner0);
	arr.push(banner1);
	arr.push(banner2);
	arr.push(banner3);
	arr.push(banner4);
	rightPoint.onclick = function(){
		i ++;
		i = i % 5;
		arr[i].style.display = "block";
		for(var k=0;k<5;k++){
			if(k == i){
				continue;
			} else{
				arr[k].style.display = "none";
			}
		}
	}
	leftPoint.onclick = function(){
		i --;
		i = (i+5) % 5;
		arr[i].style.display = "block";
		for(var k=0;k<5;k++){
			if(k == i){
				continue;
			} else{
				arr[k].style.display = "none";
			}
		}
	}
	//搜索框显示最近搜索
	var search = document.getElementById("search");
	var inputs = document.getElementById("inputs");
	var form = document.getElementById("form");
	var len = 7;
	var count = 0;
	var myli_0;
	var str = new Array();
	var myul = document.createElement("ul");
	var del = document.createElement("span");
	var delText = document.createTextNode("删除全部记录");
	del.appendChild(delText);
	del.setAttribute("class","del");
	myul.appendChild(del);
	del.onmousedown = function(){
		inputs.value = "";
		str.length = 0;
		li = document.getElementsByClassName("myli");
		length = li.length;
		for(var j=0;j<length;j++){
			myul.removeChild(li[0]);
		}
	}
	search.onclick = function(){
		if(str.length>=len){
			myul.removeChild(myli_0);
			str.shift();
		}
		if(inputs.value != ""){
			str.push(inputs.value);
			var text = document.createTextNode(str[str.length-1]);
			var myli = document.createElement("li");
			myli.appendChild(text);
			myli.setAttribute("class", "myli");
			myli.onmousedown = function(){
				inputs.value = myli.innerHTML;
			}
			myul.appendChild(myli);
		}
	}
	inputs.onfocus = function(){
		if(!myul.getAttribute("myul")){
			myul.setAttribute("class", "myul");
			form.appendChild(myul);
		}
	}
	inputs.onblur = function(){
		var myul = document.getElementsByClassName("myul")[0];
		myli_0 = document.getElementsByClassName("myli")[0];
		if(myul.getAttribute("class")){
			myul.removeAttribute("class");
			form.removeChild(myul);
		}
	}
	//点击登录，跳出用户名和密码输入不可为空否则无法登录,登录点击注销则返回
	var pleaseSignIn = document.getElementById("pleaseSignIn");
	var register = document.getElementsByClassName("register")[0];
	var snIn = document.getElementById("snIn");
	var userDiv = document.getElementById("userDiv");
	
	pleaseSignIn.onclick = function(){
		pleaseSignIn.style.display = "none";
		register.style.display = "block";
		snIn.style.display = "block";
		userDiv.style.display = "none";
		signIn.disabled = true;
	}
	var signIn = document.getElementById("signIn");
	var user = document.getElementById("user");
	var userPassword = document.getElementById("userPassword");
	var userName = document.getElementById("userName");
	userName.onclick = function(){
		if(userName.value == "请输入用户名"){
			userName.value = "";
		}
	}
	userName.onfocus = function(){
		var format = document.getElementById("userFormat");
		format.setAttribute("class", "gray")
		format.innerHTML = "支持中文和数字";
	}
	userName.onblur = function(){
		var format = document.getElementById("userFormat");
		if(userName.value == ""){
			userName.value = "请输入用户名";
			format.setAttribute("class", "red");
			format.innerHTML = "用户名不能为空";
		} else{
			format.innerHTML = null;
		}
	}
	userPassword.onfocus = function(){
		var format1 = document.getElementById("passwordFormat");
		format1.setAttribute("class", "gray");
		format1.innerHTML = "建议使用俩种字符组合";
	}
	userPassword.onblur = function(){
		var format1 = document.getElementById("passwordFormat");
		if(userPassword.value == ""){
			format1.setAttribute("class", "red");
			format1.innerHTML = "密码不能为空";
		} else{
			format1.innerHTML = null;
		}
	}
	userPassword.onmouseout = function(){
		if(userPassword.value != "" && userName.value != "请输入用户名" && userName.value != ""){
			signIn.disabled = false;
		}
	}
	userName.onmouseout = function(){
		if(userPassword.value != "" && userName.value != "请输入用户名" && userName.value != ""){
			signIn.disabled = false;
		}
	}
	signIn.onclick = function(){
		pleaseSignIn.style.display = "none";
		if(userName.value != ""){
			user.innerHTML = "user:" + "&nbsp;" + userName.value;
		}
		userDiv.style.display = "block";
		register.style.display = "none";
		snIn.style.display = "none";
	}
	var signOut = document.getElementById("signOut");
	signOut.onclick = function(){
		pleaseSignIn.style.display = "block";
		register.style.display = "none";
		snIn.style.display = "none";
		userDiv.style.display = "none";
		user.innerHTML = "user:";
		userName.value = "请输入用户名";
		userPassword.value = "";
	}

}
