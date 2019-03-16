

export    class Login{
        constructor(options){
             this.name = options.name;
			 this.usertip1 = options.usertip1;
			 this.pass1 = options.pass1;
			 this.usertip2 = options.usertip2;
			 
			 this.usertip3 = options.usertip3;
			 this.log = options.log;
			 this.remember = options.remember;
			 this.rightAccount=options.rightAccount;
			 this.timerId = "";
			 this.url = options.url;
			 
			 this.init();
        }
        init(){
        	
			this.showTip(this.name,this.usertip1);
			this.showTip(this.pass1,this.usertip2);
			
			
			var that = this;
			if(this.log){
				this.log.on("click",function(){
					that.userlog();
				})
				
			}
			if(this.rightAccount){
				this.rightAccount.on("click","#log",function(){
					console.log(888)
					that.userlog2();
				})
				
			}
			
        }
        showTip(jq1,jq2){
        	var that = this;
        	jq1.on("focus",function(){
        		jq2.stop().show();
        	})
        	jq1.on("blur",function(){
        		jq2.stop().hide();
        	})
        }
        
		userlog(){
			var username=this.name.val();
	        var password=this.pass1.val();
	        
	
	        //FormData混合提交 流文件与普通表单混合
	        //https://blog.csdn.net/qq_36947174/article/details/82709124
	
	        var form_data = new FormData();
	        form_data.append('username',username);
	        form_data.append('password',password);
					
	        
	        form_data.append('dataName',"user");
			var that = this;
			
            $.ajax({
                url: '/api/login',
		          type: 'POST',
		          data:form_data,
		          contentType: false,//不设置编码类型,在进行文件流与普通字符串混合上传的时候，需要设置为false
		          processData: false,//不进行数据处理
                success:function(res){
                    switch(res){
                        case "0":
                            that.usertip3.html("用户名密码不符");
                            break;
                        case "1":
                            that.usertip3.html("请重新登录");
                            break;
                        default:
                            that.res = res;
                            that.usertip3.html("登录成功,正在为你跳转...");
                            if(that.remember.prop("checked")){
                            	//判断是否勾选记住密码，勾选存7天的，未勾选存会话，只会存一个。节省cookie空间
                              	 $.cookie("remember",JSON.stringify({user:that.name.val(),pass:that.pass1.val()}),{expires:7})
                            }else{
                            	$.cookie("tempRem",JSON.stringify({user:that.name.val(),pass:that.pass1.val()}))
                            }
                            setTimeout(() => {
                                location.href = "index.html";
                            }, 2000);
                            
                            that.display()
                    }
                },
                beforeSend:function(){
                    that.usertip3.html("<img src='images/loading2.gif'>")
                }
            })
        }
		userlog2(){
			var username=this.name.val();
	        var password=this.pass1.val();
	        
	
	        //FormData混合提交 流文件与普通表单混合
	        //https://blog.csdn.net/qq_36947174/article/details/82709124
	
	        var form_data = new FormData();
	        form_data.append('username',username);
	        form_data.append('password',password);
					
	        
	        form_data.append('dataName',"user");
			var that = this;
			var that = this;
//			console.log(that.rightAccount.find("#user").val());
            $.ajax({
                url: '/api/login',
		          type: 'POST',
		          data:form_data,
		          contentType: false,//不设置编码类型,在进行文件流与普通字符串混合上传的时候，需要设置为false
		          processData: false,//不进行数据处理
                success:function(res){
                    switch(res){
                        case "0":
                            that.rightAccount.find("#usertip3").html("用户名密码不符");
                            break;
                        case "1":
                            that.rightAccount.find("#usertip3").html("请重新登录");
                            break;
                        default:
                            that.res = res;
                            that.rightAccount.find("#usertip3").html("登录成功,正在为您刷新页面...");
                            if(that.remember.prop("checked")){
                            	//判断是否勾选记住密码，勾选存7天的，未勾选存会话，只会存一个。节省cookie空间
                              	 $.cookie("remember",JSON.stringify({user:that.rightAccount.find("#user").val(),pass:that.rightAccount.find("#pass").val()}),{expires:7})
                            }else{
                            	$.cookie("tempRem",JSON.stringify({user:that.rightAccount.find("#user").val(),pass:that.rightAccount.find("#pass").val()}))
                            }
                            setTimeout(() => {
                                history.go(0);
                            }, 2000);
                            
                            that.display()
                    }
                },
                beforeSend:function(){
                    that.usertip3.html("<img src='images/loading2.gif'>")
                }
            })
        }
        display(){
            console.log(this.res)
        }
			
		
		
     
    }


