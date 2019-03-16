

export    class Toast{
        constructor(options){
            this.img = options.img;
            this.cont = options.cont;
            this.init()
        }
        init(){
            var that = this;
            this.img.on("click",function(){
                console.log(1)
                if(!that.ele){
                    that.ele = $("<img>");
                    that.ele.css({
                        width:100,
                        height:100,
                        position:"absolute",
                        left:0,
                        top:0,
                        right:0,
                        bottom:0,
                        margin:"auto",
                        border:"solid 2px #fff"
                    })
                }else{
                    that.ele.show()
                }
                that.ele.attr("src",$(this).attr("src"))
                that.cont.append(that.ele)

                clearTimeout(that.timer)
                that.timer = setTimeout(() => {
                    that.ele.hide()
                }, 2000);

            })
        }
    }

