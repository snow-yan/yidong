window.onload=function(){
  // banner轮播
	var box=getClass("bnner-pic")[0];
    var img=getClass("picture-a");
    var cil=getClass("circle");
    var width=parseInt(getStyle(box,"width"));
    var left=getClass("less")[0];
    var right=getClass("greater")[0];    
    var n=0;
    var next=0;
    var t=setInterval(con,3000)
    var flag=true;
    function con(){
    	next=n+1;
    	if(next>=img.length){
    		next=0;
    	}
	        img[next].style.left=width+"px"
	    	animate(img[n],{left:-width},600,Tween.Linear);
	    	cil[n].style.background="#CECECE"
	    	animate(img[next],{left:0},600,Tween.Linear);
	    	cil[next].style.background="#E4066B"
	    	n=next;
    }      
	    box.onmouseover=function(){
		    clearInterval(t);  
           }		
		  box.onmouseout=function(){
				t=setInterval(con,3000)
		   }
	   right.onclick=function(){
			
	    con();
	}
	left.onclick=function(){
			
		 next=n-1;
         if(next<0){
          next=img.length-1;
         }
         img[next].style.left=-width+"px"
         animate(img[n],{left:width},600)
         animate(img[next],{left:0},600)
         cil[n].style.backgroundColor="#CECECE"
         cil[next].style.backgroundColor="#E4066B"
         n=next;
	}
    for(var i=0;i<cil.length;i++){
    	cil[i].index=i;
    	cil[i].onclick=function(){
    		if(this.index>n){
    			for(var i=0;i<cil.length;i++){
					img[next].style.left=width+"px"				
					  cil[n].style.backgroundColor="#CECECE";
			         animate(img[n],{left:-width},600,Tween.Linear);

			     }        
					 cil[this.index].style.backgroundColor="#E4066B" 
					 animate(img[this.index],{left:0},600,Tween.Linear);         
					 n=this.index;
					}
				if(this.index<n){
					for(var i=0;i<cil.length;i++){
					img[next].style.left=-width+"px"				
					  cil[n].style.backgroundColor="#CECECE";
			         animate(img[n],{left:width},600,Tween.Linear);

			    }        
					 cil[this.index].style.backgroundColor="#E4066B" 
					 animate(img[this.index],{left:0},600,Tween.Linear);         
					 n=this.index;
					 }
				}

    		
    }

    	// 北京 事件委派
       	var area=$(".area")[0];
       	var area_jian=$(".area-jian")[0];
       	var area_hidden=$(".area-hidden")[0];
       	var body=$("body")[0];
       	area.onclick=function(){
       		area_hidden.style.display="block"
       	}
       	body.onclick=function(e){
       		var e=e||window.event;
       		var obj=e.target||e.srcElement;
       		if(obj==area){
       			return;
       		}else{
       			area_hidden.style.display="none"  
       		}
       		     		
       	}




    // 头部右边登录
     var register_hidden=$(".register-hidden")[0];
        var head_ding=$(".head-ding")[0];
        var register_hidden_top=$(".register-hidden-top")[0]
        head_ding.onmouseover=function(){
        	register_hidden.style.display="block"
        	register_hidden_top.style.display="block"
        }  
        head_ding.onmouseout=function(){
        	register_hidden.style.display="none"
        	register_hidden_top.style.display="none"

        } 

      // 头部手机营业厅
        var register_hidden_two=$(".register-hidden-two")[0];
        var head_ding_two=$(".head-ding-two")[0];
        var register_hidden_top_two=$(".register-hidden-top-two")[0]
       head_ding_two.onmouseover=function(){
        	register_hidden_two.style.display="block"
        	register_hidden_top_two.style.display="block"
        }  
        head_ding_two.onmouseout=function(){
        	register_hidden_two.style.display="none"
        	register_hidden_top_two.style.display="none"

        }  

        // 绝对定位右下角
        var zxzx=$(".zxzx")[0];
        var cjwt=$(".cjwt")[0];
        var tsjy=$(".tsjy")[0];
        zxzx.onmouseover=function(){
        	animate(zxzx,{right:35},500)
        }
         zxzx.onmouseout=function(){
        	animate(zxzx,{right:-25},500)
        }
         cjwt.onmouseover=function(){
        	animate(cjwt,{right:35},500)
        }
         cjwt.onmouseout=function(){
        	animate(cjwt,{right:-25},500)
        }
         tsjy.onmouseover=function(){
        	animate(tsjy,{right:35},500)
        }
         tsjy.onmouseout=function(){
        	animate(tsjy,{right:-25},500)
        }


// banner上边
    	var nav=$(".nav_fenlei");
		for(var i=0;i<nav.length;i++){
			if(i==0){
				continue;
			}
			hover(nav[i],function(){
				var ul=$(".xiala",this);
				for(var i=0;i<ul.length;i++){
					ul[i].style.display="block";          
				}
			},function(){
				var ul=$(".xiala",this);
				for(var i=0;i<ul.length;i++){
					ul[i].style.display="none";
				}
			})
		}

	   var lunbo=getClass("play")[0];
		var move=getClass("move-lunbo")[0];
		var kuang=getClass("kuang")[0]
		var lun=getClass("lunbo")[0]
		var zuo=getClass("zuo")[0]
		var you=getClass("you")[0]
		var kuan=kuang.offsetWidth	
	    var time=setInterval(remove,2000)
	    function remove(){
	    	animate(move,{left:-kuan},600,function(){
	    		var First=getFirst(move)
	    		move.appendChild(First)
	            move.style.left=0+"px"
	    	})
	    }
	    move.onmouseover=function(){
	    	clearInterval(time)
	    }
	     move.onmouseout=function(){
	    	time=setInterval(remove,2000)
	    }
	    you.onclick=function(){
	    	remove();
	    }
	     zuo.onclick=function(){
	    	    var First=getFirst(move)
	    			var Last=getLast(move)
						insertBefore(Last,First)
	          move.style.left=-kuan+"px"
	          animate(move,{left:0},600)
	    	
	    }

	    // 公告
        var less_zuo=$(".less-zuo")[0];
        var more_you=$(".more-you")[0];
        var notice_about=$(".notice-about")
        var notice_gonggao=$(".notice-gonggao")
        var next1=0;
        var n1=0;        
        more_you.onclick=function(){
            next1=n1+1;
            if(next1>=notice_about.length){
                next1=0;
            }
            notice_about[n1].className="notice-about";
            notice_about[next1].className="notice-about notice-hidden";
            notice_gonggao[n1].className="notice-gonggao";            
            notice_gonggao[next1].className="notice-gonggao notice-gonggao-hidden";
                      
            n1=next1;
        }
         less_zuo.onclick=function(){
            next1=n1-1;
            if(next1<=0){
                next1=notice_about.length-1;
            }
            notice_about[n1].className="notice-about";
            notice_about[next1].className="notice-about notice-hidden";
            notice_gonggao[n1].className="notice-gonggao";            
            notice_gonggao[next1].className="notice-gonggao notice-gonggao-hidden";
            n1=next1;
        }
        	 
        
       


    	var four=getClass("zq-box");  	
    	var pic=getClass("baoimg")        	  	
        for(var j=0;j<pic.length;j++){
          	pic[j].index=j;
  	          pic[j].onmouseover=function(){
  		    	    animate(pic[this.index],{right:18},200)
  		    	}
  		      pic[j].onmouseout=function(){
  		    	    animate(pic[this.index],{right:1},200)
  		    		   
  		      }
        }	





}


  
