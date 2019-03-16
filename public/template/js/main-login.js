import {} from "../libs/jquery.js";
import {} from "../libs/jquery.cookie.js";

import {Login} from "../module/login.js";

new Login(
	{
	 name:$("#user"),
	 usertip1:$("#usertip1"),
	 pass1:$("#pass1"),
	 usertip2:$("#usertip2"),
	 usertip3:$("#usertip3"),
	 log:$("#log"),
	 remember:$("#remember"),
	 url:"http://www.liyangyf.com/ctrl/login.php"
	}
)

//console.log(Tvlive)
//var ocont = $(".box");
//var t1 = new Tab();
//var toast = new Toast(
//	{
//      img:t1.img,
//      cont:ocont
//});














