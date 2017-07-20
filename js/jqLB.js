
		    $(function(){
		    	var index=0;
		    	var timer=null;
		    	timer=setInterval(fun,2000)//计时器
		    	function fun(){
		    		index++;//让index每次加1
		    		$(".banner ul li").eq(index).show()//让ul li 随着index++而显示
		    		$(".banner ul li").eq(index).show().siblings().hide()//让ul li 随着index++而除了它本身的都隐藏
		    		$(".banner .num li").eq(index).addClass("on")//和图片的下标同步，然后添加样式
		    		$(".banner .num li").eq(index).siblings().removeClass("on")//当到这个下标的时候除啦它之外的全部显示并且删除样式
		    		if(index==3){//判断当下标等于3的时候
		    			index=-1//index=-1  就是返回第一张图片
		    		}
		    	}
		    $(".banner").hover(function(){
				clearInterval(timer)
			},function(){
				clearInterval(timer)
				timer = setInterval(fun,3000);
			})
		    	//点击向右
		    	$(".sp2").click(function(){//给按钮一个点击事件
		    		clearInterval(timer);
		    		index++;//每点击一下就++
		    			if(index==3){
		    			index=-1
		    		}
		    		$(".banner ul li").eq(index).show(); //随着下标++而显示
		    		$(".banner ul li").eq(index).show().siblings().hide() //除了显示的这张图片之外其他的全部隐藏
		    		$(".banner .num li").eq(index).addClass("on")//和图片的下标同步，然后添加样式
		    		$(".banner .num li").eq(index).siblings().removeClass("on")//当到这个下标的时候除啦它之外的全部显示并且删除样式
		    	
		    	})
		    	
		    	//点击向左 
		    	$(".sp1").click(function(){//给按钮一个点击事件
		    		clearInterval(timer);
		    		index--;//每点击一下就++
		    		if(index==-3){//判断如果点击到最后一张的时候让它返回第一张从新开始
		    			index=1
		    		}
		    		$(".banner ul li").eq(index).show(); //随着下标++而显示
		    		$(".banner ul li").eq(index).show().siblings().hide() //除了显示的这张图片之外其他的全部隐藏
		    		$(".banner .num li").eq(index).addClass("on")//和图片的下标同步，然后添加样式
		    		$(".banner .num li").eq(index).siblings().removeClass("on")//当到这个下标的时候除啦它之外的全部显示并且删除样式
		    		
		    	})
		    	
			    	//划过ol
				$(".banner ol li").hover(function(){
			    clearInterval(timer)
			       var  $index = $(this).index() ; // 拿到下标 0
				   index=$index-1;
				   fun();
			    },function(){				
				clearInterval(timer)
				timer = setInterval(fun,3000);
			   })
				
				//划过div的时候让他停止计时器
				
		    })
		