

export    class Register{
        constructor(options){
             this.name = options.name;
			 this.usertip1 = options.usertip1;
			 this.pass1 = options.pass1;
			 this.usertip2 = options.usertip2;
			 this.pass2 = options.pass2;
			 this.usertip3 = options.usertip3;
			 this.reg = options.reg;
			 this.sever = options.sever;
			 this.timerId = "";
			 this.uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
			 this.pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
			 this.url = options.url;
			 
			 this.init();
        }
        init(){
			this.showTip(this.name,this.usertip1);
			this.showTip(this.pass1,this.usertip2);
			this.nameTest();
			this.passTest();
			this.samepass();
			this.userReg();
			
			
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
        nameTest(){
        	var that = this;
        	this.name.on("blur",function(){
        		if(that.uPattern.test(that.name.val())){}else{
        			that.usertip3.text("用户名:4到16位（字母，数字，下划线，减号）");
        			
        			clearTimeout(that.timerId)
        			that.timerId=setTimeout(()=>{
        				that.usertip3.text("");
        			},3000)
        		}
        	})
        }
        passTest(){
        	var that = this;
        	this.pass1.on("blur",function(){
        		if(that.pPattern.test(that.pass1.val())){}else{
        			that.usertip3.text("密码:最少6位，至少1个小、大写字母、数字、特殊字符");
        			
        			clearTimeout(that.timerId)
        			that.timerId=setTimeout(()=>{
        				that.usertip3.text("");
        			},3000)
        		}
        	})
        }
		samepass(){
			var that = this;
			this.pass2.on("blur",function(){
        		if(that.pass1.val() ==that.pass2.val()){}else{
        			that.usertip3.text("两次密码不一致");
        			
        			clearTimeout(that.timerId)
        			that.timerId=setTimeout(()=>{
        				that.usertip3.text("");
        			},3000)
        		}
        	})
			
		}
		userReg(){
			var that = this;
			this.reg.on("click",function(){
				if(that.uPattern.test(that.name.val())&&that.pPattern.test(that.pass1.val())&&that.pass1.val() ==that.pass2.val()){
					if(that.sever.prop("checked")){
						that.linkServer();
					}else{
						that.usertip3.text("请阅读《用户服务协议》，并勾选");
	        			
	        			clearTimeout(that.timerId)
	        			that.timerId=setTimeout(()=>{
	        				that.usertip3.text("");
	        			},3000)
					}
				}
				
			})
		}
		linkServer(){
			console.log("准备注册")
			var username=this.name.val();
            var password=this.pass1.val();
            
			var form_data = new FormData();//$('#uploadForm')[0]
	        form_data.append('username',username);
	        form_data.append('password',password);
			form_data.append('nikename','前端自主注册用户');
	        
	        form_data.append('dataName',"user");
	        // form_data.append('icon',new FormData($('#uploadForm')[0]));//添加流

			var that = this;
			$.ajax({
                url: '/api/reg',
		          type: 'POST',
		          data:form_data,
		          contentType: false,//不设置编码类型,在进行文件流与普通字符串混合上传的时候，需要设置为false
		          processData: false,//不进行数据处理
                success:function(res){
                    switch(res){
                        case "0":
                            that.usertip3.text("重名");
                            break;
                        case "1":
                            that.usertip3.text("成功，3秒周跳转到登录");
                            setTimeout(() => {
                                location.href = "login.html";
                            }, 3000);
                            break;
                        case "2":
                            that.usertip3.text("网络错误");
                            break;
                    }
                },
                beforeSend:function(){
                    that.usertip3.html("<img src='images/loading2.gif'>")
                }
            })
			//、、、、、、、、、、、、、、、、、、
			
			
		}
     
    }


