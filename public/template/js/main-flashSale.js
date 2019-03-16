import {} from "../libs/jquery.js";
import {} from "../libs/jquery.cookie.js";
import {Islogin} from "../module/isLogin.js";
import {Login} from "../module/login.js";
import {Newgoods} from "../module/newgoods.js";
import {Time} from "../module/time.js";


new Time({
	countDown:$(".countDown"),
	timeli:$(".time").find("li"),
	flashgoodsli:$("#flashgoods").children("li")
});

new Login(
	{
	 name:$("#user"),
	 usertip1:$("#usertip1"),
	 pass1:$("#pass1"),
	 usertip2:$("#usertip2"),
	 usertip3:$("#usertip3"),
	 log:$("#log"),
	 remember:$("#remember"),
	 url:"http://www.liyangyf.com/ctrl/login.php",
	 rightAccount:$("#right-account").find(".log-in")
	}
)
new Islogin(
	{
	hello:$("#hello"),
	cart:$(".cart"),
	rightAccount:$("#right-account").find(".log-in"),
	goodsnum:$(".cart").find(".num")
	
	}
)

var href = location.href;
var obj ={};
if (href.indexOf("?") != -1){
	 	href = href.substr(href.indexOf("?") + 1);
    	href = href.split('&');
    	for(var i=0;i<href.length;i++){
    		obj[href[i].split('=')[0]]=href[i].split('=')[1]
    		
    	}
	
	 
}
new Newgoods(
	{
	 ul:$("#flash1").find("ul"),
	 displayNum:8,
	 min:17,
	 max:41
	}
)
new Newgoods(
	{
	 ul:$("#flash2").find("ul"),
	 displayNum:8,
	 min:17,
	 max:41
	}
)
new Newgoods(
	{
	 ul:$("#flash3").find("ul"),
	 displayNum:8,
	 min:17,
	 max:41
	}
)
new Newgoods(
	{
	 ul:$("#flash4").find("ul"),
	 displayNum:8,
	 min:17,
	 max:41
	}
)

//console.log(obj);





//console.log(Tvlive)
//var ocont = $(".box");
//var t1 = new Tab();
//var toast = new Toast(
//	{
//      img:t1.img,
//      cont:ocont
//});














