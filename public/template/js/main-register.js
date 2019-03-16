import {} from "../libs/jquery.js";

import {Register} from "../module/register.js";

new Register(
	{
	 name:$("#user"),
	 usertip1:$("#usertip1"),
	 pass1:$("#pass1"),
	 usertip2:$("#usertip2"),
	 pass2:$("#pass2"),
	 usertip3:$("#usertip3"),
	 reg:$("#reg"),
	 sever:$("#sever"),
	 url:"/api/reg"
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














