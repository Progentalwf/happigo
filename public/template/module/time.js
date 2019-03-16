

export    class Time{
        constructor(options){
            this.countDown=options.countDown;
            this.timeli = options.timeli;
            this.flashgoodsli = options.flashgoodsli;
            
			this.d = "";
			this.passtime = "";
		
			 this.init();
        }
        init(){
        	this.show();
        	this.addevent();
			}
        show(){
        	setInterval(()=>{
        		this.d = new Date();
        		
        		this.passtime = parseInt((this.d.getTime()/1000 + 28800)%(24*60*60));
        		console.log(this.passtime);
//      		21600,43200,64800,86400/
				if(this.passtime>=0&&this.passtime<21600){
//					console.log("现在处于0-6点时间")
					this.timeli.eq(0).find("h3").html("00:00");
					this.timeli.eq(0).find(".countDown").html(`${createZero(mygettime(this.passtime,21600)[0])}:${createZero(mygettime(this.passtime,21600)[1])}:${createZero(mygettime(this.passtime,21600)[2])}`);
					this.timeli.eq(1).find("h3").html("06:00");
					this.timeli.eq(1).find(".countDown").html(`${createZero(mygettime(this.passtime,21600)[0])}:${createZero(mygettime(this.passtime,21600)[1])}:${createZero(mygettime(this.passtime,21600)[2])}`);
					
					this.timeli.eq(2).find("h3").html("12:00");
					this.timeli.eq(2).find(".countDown").html(`${createZero(mygettime(this.passtime,43200)[0])}:${createZero(mygettime(this.passtime,43200)[1])}:${createZero(mygettime(this.passtime,43200)[2])}`);
					this.timeli.eq(3).find("h3").html("18:00");
					this.timeli.eq(3).find(".countDown").html(`${createZero(mygettime(this.passtime,64800)[0])}:${createZero(mygettime(this.passtime,64800)[1])}:${createZero(mygettime(this.passtime,64800)[2])}`);
					
				}
				if(this.passtime>=21600&&this.passtime<43200){
//					console.log("现在处于6-12点时间");
					this.timeli.eq(0).find("h3").html("06:00");
					this.timeli.eq(0).find(".countDown").html(`${createZero(mygettime(this.passtime,43200)[0])}:${createZero(mygettime(this.passtime,43200)[1])}:${createZero(mygettime(this.passtime,43200)[2])}`);
					this.timeli.eq(1).find("h3").html("12:00");
					this.timeli.eq(1).find(".countDown").html(`${createZero(mygettime(this.passtime,43200)[0])}:${createZero(mygettime(this.passtime,43200)[1])}:${createZero(mygettime(this.passtime,43200)[2])}`);
					
					this.timeli.eq(2).find("h3").html("18:00");
					this.timeli.eq(2).find(".countDown").html(`${createZero(mygettime(this.passtime,64800)[0])}:${createZero(mygettime(this.passtime,64800)[1])}:${createZero(mygettime(this.passtime,64800)[2])}`);
					this.timeli.eq(3).find("h3").html("24:00");
					this.timeli.eq(3).find(".countDown").html(`${createZero(mygettime(this.passtime,86400)[0])}:${createZero(mygettime(this.passtime,86400)[1])}:${createZero(mygettime(this.passtime,86400)[2])}`);
					
				}
				if(this.passtime>=43200&&this.passtime<64800){
//					console.log("现在处于12-18点时间")
					this.timeli.eq(0).find("h3").html("12:00");
					this.timeli.eq(0).find(".countDown").html(`${createZero(mygettime(this.passtime,64800)[0])}:${createZero(mygettime(this.passtime,64800)[1])}:${createZero(mygettime(this.passtime,64800)[2])}`);
					this.timeli.eq(1).find("h3").html("18:00");
					this.timeli.eq(1).find(".countDown").html(`${createZero(mygettime(this.passtime,64800)[0])}:${createZero(mygettime(this.passtime,64800)[1])}:${createZero(mygettime(this.passtime,64800)[2])}`);
					
					this.timeli.eq(2).find("h3").html("24:00");
					this.timeli.eq(2).find(".countDown").html(`${createZero(mygettime(this.passtime,86400)[0])}:${createZero(mygettime(this.passtime,86400)[1])}:${createZero(mygettime(this.passtime,86400)[2])}`);
					this.timeli.eq(3).find("h3").html("明日6:00");
					this.timeli.eq(3).find(".countDown").html(`${createZero(mygettime(this.passtime,108000)[0])}:${createZero(mygettime(this.passtime,108000)[1])}:${createZero(mygettime(this.passtime,108000)[2])}`);
					
					
				}
				if(this.passtime>=64800&&this.passtime<86400){
					
					this.timeli.eq(0).find("h3").html("18:00");
					this.timeli.eq(0).find(".countDown").html(`${createZero(mygettime(this.passtime,86400)[0])}:${createZero(mygettime(this.passtime,86400)[1])}:${createZero(mygettime(this.passtime,86400)[2])}`);
					this.timeli.eq(1).find("h3").html("24:00");
					this.timeli.eq(1).find(".countDown").html(`${createZero(mygettime(this.passtime,86400)[0])}:${createZero(mygettime(this.passtime,86400)[1])}:${createZero(mygettime(this.passtime,86400)[2])}`);
					
					this.timeli.eq(2).find("h3").html("明日06:00");
					this.timeli.eq(2).find(".countDown").html(`${createZero(mygettime(this.passtime,108000)[0])}:${createZero(mygettime(this.passtime,108000)[1])}:${createZero(mygettime(this.passtime,108000)[2])}`);
					this.timeli.eq(3).find("h3").html("明日12:00");
					this.timeli.eq(3).find(".countDown").html(`${createZero(mygettime(this.passtime,129600)[0])}:${createZero(mygettime(this.passtime,129600)[1])}:${createZero(mygettime(this.passtime,129600)[2])}`);
					
//					console.log("现在处于18-24点时间");
				
					
				}

        	},1000)
        }
        addevent(){
        	var that = this;
        	this.timeli.on("click",function(){
        		that.timeli.attr("class","");
        		that.flashgoodsli.attr("class","");
        		
        		$(this).attr("class","active");
        		that.flashgoodsli.eq($(this).index()).attr("class","active");
        		
        	})
        }
        
    }

function mygettime(t,b){
	var dis = b-t;
	
	var h = parseInt(dis/3600);
	var m = parseInt(dis%3600/60);
	var s = parseInt(dis%60);
	return [h,m,s]

}
function createZero(n){
	if(n<10 || n.length<2){
		return "0"+n
	}else{
		return n
	}
}

