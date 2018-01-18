$(function(){
	
	/*顶部菜单*/
	$('#cover_r li:has(div)').mouseenter(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(this).find('div.info,div.navlist').show();
	}).mouseleave(function(){
		$(this).removeClass('active').find('div.info,div.navlist').hide();
	})
	
	$('.s_bar>ul>li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	
	
	$('.hello').slideDown(5000).slideUp(5000);
	
	/*二维码关闭*/
	$('#qrc_close').click(function(){
		$(this).parent('div').hide();
	});
	
	/*图片轮播区 上  与下部分*/
	(function(){
		
		/*显示上下按钮*/
		$('.car_m_t, .car_m_b').hover(function(){
			$(this).find('span.next, span.prev').show();
		},function(){
			$(this).find('span.next, span.prev').hide();
		});
		
		/*上下按钮操作*/
		
		var iW = $('.car_m_t ul li').width();
		var len = $('.car_m_t ul li').length;
		var len1 = $('.car_m_b ul li').length;
		$('.car_m_t ul').width(iW*len);
		$('.car_m_b ul').width(iW*len1);
		var iNow = 0;
		var iNow1 = 0;
		
		function next(th,num){
			iNow--;
			if(iNow==-num){
				iNow = 0;
			}
			th.siblings('ul').stop().animate(({
				left:iNow*iW+'px'
			}),300);
			th.siblings('ol').find('li').eq(-iNow).addClass('active').siblings().removeClass('active');
		}
		
		function prev(th,num){
			iNow++;
			if(iNow==1){
				iNow = -(num-1);
			}
			th.siblings('ul').stop().animate(({
				left:iNow*iW+'px'
			}),300);
			th.siblings('ol').find('li').eq(-iNow).addClass('active').siblings().removeClass('active');
		}
		
		
		$('.car_m_t .prev').click(function(){
			prev($('.car_m_t .prev'),5);
		})
		
		$('.car_m_t .next').click(function(){
			next($('.car_m_t .next'),5);
		});
		
		$('.car_m_b .prev').click(function(){
			prev($('.car_m_b .prev'),6);
		})
		
		$('.car_m_b .next').click(function(){
			next($('.car_m_b .next'),6);
		});
		
		$('.car_m_t ol li, .car_m_b ol li').mouseenter(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$(this).parent().siblings('ul').stop().animate(({
				left:-$(this).index()*iW+'px'
			}),300);
		});
		
		/*图片轮播效果*/
		var timer,timer1 = null;
		function autoPlay(){
			timer = setInterval(function(){
					move();
			},2000);
		}
		
		function autoPlay1(){
			timer1 = setInterval(function(){
					move1();
			},2000);
		}
		
		autoPlay();
		
		autoPlay1();
		
		/*鼠标悬停*/
		$('.car_m_t').hover(function(){
			clearInterval(timer);
		},autoPlay);
		
		$('.car_m_b').hover(function(){
			clearInterval(timer1);
		},autoPlay1);
		
		function move(){
			iNow--;
			if(iNow==-5){
				iNow = 0;
				$('.car_m_t ul').css('left','0px');
			}
			$('.car_m_t ul').stop().animate({
				left:iNow*522+'px'
			});
			
			$('.car_m_t ul').siblings('ol').find('li').eq(-iNow).addClass('active').siblings().removeClass('active');
		}
		
		function move1(){
			iNow1--;
			if(iNow1==-6){
				iNow1 = 0;
				$('.car_m_b ul').css('left','0px');
			}
			$('.car_m_b ul').stop().animate({
				left:iNow1*522+'px'
			});
			
			$('#car_n').html(-iNow+1);
			
			$('.car_m_b ul').siblings('ol').find('li').eq(-iNow1).addClass('active').siblings().removeClass('active');
		}
	})();
	
	
	/*图片轮播区下方hover*/
	$('#ad_box1 li').mouseover(function(){
		$(this).find('img').css('border-color','#a6d4b1');
	}).mouseout(function(){
		$(this).find('img').css('border-color','#f3f3f3');
	})
	
	/*左侧导航菜单*/
	
	for(var i=0;i<16;i++){
		$('#s_list li .sl_box').eq(i).css('top',-i*30+'px');
	}
	$('#s_list li').mouseenter(function(){
		$(this).find('div.sl_box').show();
	}).mouseleave(function(){
		$(this).find('div.sl_box').hide();
	})
	
	
	/*我经常逛区域*/
	$('.o_box_m').eq(0).mouseover(function(){
		$(this).find('.box_r').css('border-color','#fe6fa6');
	}).mouseout(function(){
		$(this).find('.box_r').css('border-color','rgba(254,111,166,0.2)');
	})
	
	$('.o_box_m').eq(1).mouseover(function(){
		$(this).find('.box_r').css('border-color','#8678CB');
	}).mouseout(function(){
		$(this).find('.box_r').css('border-color','rgba(121,106,198,0.2)');
	})
	
	$('.o_box_m').eq(2).mouseover(function(){
		$(this).find('.box_r').css('border-color','#FE4E88');
	}).mouseout(function(){
		$(this).find('.box_r').css('border-color','rgba(255,59,124,0.2)');
	})
	
	$('.o_box_m').eq(3).mouseover(function(){
		$(this).find('.box_r').css('border-color','#FEAD1A');
	}).mouseout(function(){
		$(this).find('.box_r').css('border-color','rgba(255,164,1,0.2)');
	})
	
	/*时常爆料王区域二维码图标*/
	$('.t_eq_ico').mouseenter(function(){
		$(this).next().slideDown();
	}).mouseleave(function(){
		$(this).next().slideUp();
	})
	
	$('.fbm_r>a, .bom_c>a, .sl_box_r>a').mouseenter(function(){
		$(this).find('p').css({
			background:'#fff',
			color:'red'
		})
	}).mouseleave(function(){
			$(this).find('p').css({
				background:'rgba(245,246,248,0.5)',
				color:'#666'
			})
	});
	
	/*实惠专业户区域与右侧有好货图像渐变*/
	$('.sbox_b>.sbox_bt, .sbox_s>.sbox_bt').mouseenter(function(){
		$(this).find('a>img').animate(({
			opacity:'0.7'
		}),200)
	}).mouseleave(function(){
		$(this).find('a>img').animate(({
			opacity:'1'
		}),200)
	})
	/*右侧有好货与每日好店图像渐变*/
	$('.goodsList>a, .shop_box>a').mouseenter(function(){
		$(this).find('img').animate(({
			opacity:'0.7'
		}),300)
	}).mouseleave(function(){
		$(this).find('img').animate(({
			opacity:'1'
		}),300)
	})
	/*右侧公告*/
	$('.affiche li').mouseenter(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(this).next().show().siblings('div.a_info').hide();
	});
	
	
	
	
	$('#rec_info li').mouseenter(function(){
		if($(this).index()<7){
			$(this).addClass('active').siblings().removeClass('active');
		    $(this).next().show().siblings('div.r_info').hide();
		}
		$(this).find('p').css('color','#ff4400');
	}).mouseleave(function(){
		$(this).find('p').css('color','#6c6c6c');
	});
	
	$('.rinfo_icon').click(function(){
		$(this).parent().hide();
		$('#rec_info li').removeClass('active');
	});
	
	
	
	/*阿里APP*/
	$('#aliApp li').mouseenter(function(){
		$(this).find('div.app_info').fadeIn('slow');
	}).mouseleave(function(){
		$(this).find('div.app_info').hide();
	});
	
	
	/*淘宝头条轮播*/
	(function(){
		iH =$('#topline li').height()+3;
		var iNow = 0;
		var timer = null;
		
		function autoPlay(){
			timer = setInterval(function(){
				doMove(-1);
			},1500);
		}
		
		autoPlay();
		function doMove(num){
			iNow += num;
			if(iNow==-3){
				iNow = 0;
				$('#topline').css('top',0);
			}
			$('#topline').stop().animate({'top':iH*iNow},'slow');
		}
		
		$('#topline li').hover(
			function(){
			clearInterval(timer);
			$(this).find('em').css('color','#ff4400');
		},
		function(){
			$(this).find('em').css('color','#333');
			autoPlay();
		});
		
	})();
		
	/*热卖单品区域hover效果*/
	$('.mh_item').mouseover(function(){
		$(this).addClass('hover').siblings().removeClass('hover');
		$(this).find('a.mh_item_hover').show();
	}).mouseout(function(){
		$(this).removeClass('hover');
		$(this).find('a.mh_item_hover').hide();
	})
	
	/*猜你喜欢区域hover效果*/
	
	$('#mainL li').mouseenter(function(){
		$(this).addClass('hover').siblings().removeClass('hover');
		$(this).find('img').animate(({
			opacity:'0.8'
		}),300);
		$(this).find('a.ml_hover').fadeIn(300);
	}).mouseleave(function(){
		$(this).removeClass('hover');
		$(this).find('img').animate(({
			opacity:'1'
		}),300);
		$(this).find('a.ml_hover').hide();
	});
	
	
	/*侧边栏*/
	var top1 = 0;
	$(window).scroll(function(){
		top1 = $(document).scrollTop();
		
		if(top1>490){
			$('.subnav').css({
				position:'fixed',
				top:'0'
			});
        		
        		if(top1 >= $('#mainLove').offset().top){
        			$('.subnav li').eq(5).addClass('current').siblings().removeClass();
        		} else if(top1 >= $('.substantial').offset().top){
        			$('.subnav li').eq(4).addClass('current').siblings().removeClass();
        		}else if(top1 >= $('.feature').offset().top){
        			$('.subnav li').eq(3).addClass('current').siblings().removeClass();
        		}else if(top1 >= $('.tone1').offset().top){
        			$('.subnav li').eq(2).addClass('current').siblings().removeClass();
        		}else if(top1 >= $('.fashion').offset().top){
        			$('.subnav li').eq(1).addClass('current').siblings().removeClass();
        		}else{
        			$('.subnav li').eq(0).addClass('current').siblings().removeClass();
        		}
			
		}
		if(top1<490){
			$('.subnav').css({
				position:'absolute',
				top:'490px'
			});
		}
	});
	
	$('.subnav li').not('.top, .fk, .bk').click(function(){
		$('html,body').stop().animate({
        			'scrollTop':$('.sub').eq($(this).index()).offset().top
        },1000)
	});
	
	$('.subnav .top').click(function(){
		$('html,body').stop().animate({
        			'scrollTop':'0'
        },300)
	});
	
	
	
	
	
})
