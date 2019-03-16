export  class Swiper{
	        constructor(){
	            this.li = $("#banner").find("li");
	            this.btns = $("#banner .btn").find("u");
	            
	            this.swiper = $("#banner").find(".swiper-pic");
	            this.pre = 0;
	            this.next = 1;
	            this.timer = "";
	
	            this.init();
	       	}
	        init(){
	        	this.li.eq(0).css({"z-index":1,"opacity":1})
	        	this.autoPlay();
	        	this.chick();
	        	this.changePic();
	        }
	        show(pre,next){
	        	this.li.eq(pre).css("z-index",0);
	        	this.li.eq(next).css("z-index",1);
	        	this.li.eq(pre).stop().animate({"opacity":0},1000);
	        	this.li.eq(next).stop().animate({"opacity":1},1000);
	        	this.btns.find("span").removeClass("active");
	        	this.btns.find("span").eq(next).addClass("active");
	        	
	        }
	        autoPlay(){
	        	var that = this;
//	        	console.log(that.swiper);
	        	that.swiper.hover(function(){
	        		clearInterval(that.timer);
	        		
	        	},function(){
	        		
	        		that.timer = setInterval(()=>{
	        			if(that.next == 4){
	        				that.next = 0;
	        				that.pre = 4;
	        			}else{
	        				that.next++;
	        				that.pre = that.next - 1;
	        			}
	        			
	        			that.show(that.pre,that.next)
	        		},3000)
	        	})
	        }
	        chick(){
	        	var that=this;
	        	that.btns.on("click",function(){
	        		that.pre = that.next;
	        		that.next = $(this).index();
	        		console.log($(this).index(),that.pre,that.next)
	        		that.show(that.pre,that.next);
	        		console.log(6666)
	        	})
	        }
	        changePic(){
	        	var socket = io('http://localhost');
	        	socket.on('update_banner',(res)=>{
			      console.log('收到',res)
//			      $("#div1").html(res.data.title)
			    })
	        	for(var i=0;i<this.li.length;i++){
//	        		this.li.eq(i).find("img").attr({src:"upload/banner/4b38eddc65b1e81ac6921d94a3a9b934.jpg"})
	        		
	        	}
	        }
      }
