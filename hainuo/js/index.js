$(function() {
	/*首页*/
	//导航下方左侧导航
	$(':checkbox').prop('checked',false);
	
	$('#all_nav li').mouseenter(function() {
		$(this).addClass('active').siblings().removeClass('active');
		if($('#nav_box').find('div.n_box').eq($(this).index()).length == 0) {
			$('#nav_box').css({
				padding: 5
			});
			$('#nav_box').find('div.n_box').hide();
			$('#nav_box .n_box_m').show();
		} else {
			$('#nav_box').css({
				padding: 0
			});
		}
		$('#nav_box').find('div.n_box').eq($(this).index()).show().siblings().hide();
	}).mouseleave(function(e) {
		var oEvent = e || window.event;
		var _height = $('#all_nav li:last-child').offset().top + 30;
		var clentT = oEvent.clientY + $(document).scrollTop();
		if(clentT >= _height || oEvent.clientX < $(this).offset().left || clentT < $('#all_nav').offset().top) {
			$('#nav_box').find('div.n_box').hide();
			$('#nav_box .n_box_m').show();
			$('#nav_box').css({
				padding: 5
			})

		}
	});



	(function(){
		$('#l_all').mouseenter(function() {
			$('#all_nav').show();
		}).mouseleave(function(e){
			var oE = e || window.event;
			if(oE.clientX<$(this).offset().left||oE.clientY + $(document).scrollTop()<$(this).offset().top||oE.clientX>$(this).offset().left+$(this).width()){
				$('#all_nav').hide();
			}
		});
		
		$('.l_nav').mouseleave(function(e){
			var oEvent = e || window.event;
			var _height = $('#all_nav li:last-child').offset().top + 30;
			var clentT = oEvent.clientY + $(document).scrollTop();
			if(clentT >= _height || oEvent.clientX < $(this).offset().left || clentT < $('#all_nav').offset().top) {
				$('#nav_box').find('div.n_box').hide();
				$(this).hide();
	
			}
		})
		
		$('.l_boxm').mouseleave(function(e){
			var oE = e || window.event;
			if(oE.clientX>$(this).offset().left){
				$('.l_nav').hide();
			}
			
		})
	})();
	

	$('.n_box').mouseenter(function() {
		$('#nav_box').css({
			padding: 0
		})
	}).mouseleave(function() {
		var oBox = $('#nav_box');
		$('#nav_box .n_box_m').show();
		$(this).hide();
		if(!oBox.hasClass('login_b')) {
			oBox.css('padding', '5px');
		}
	});

	//底部分类导航鼠标移入效果
	$('#other li li a').mouseenter(function() {
		var oSpan = $('<span class="tis">' + $(this).text() + '</span>');
		$(this).parent('li').append(oSpan);
	}).mouseleave(function() {
		$(this).parent('li').find('span.tis').remove();
	});

	//导航下方轮播图
	(function() {
		$('#list li').click(function() {
			$(this).addClass('active').siblings().removeClass('active');
			$('#banner li').eq($(this).index()).fadeIn(1000).siblings().fadeOut();
		});

		var iNow = 0;
		var timer = null;

		function autoPlay() {
			iNow++;
			if(iNow > 3) {
				iNow = 0;
			}
			$('#banner li').eq(iNow).fadeIn(1000).siblings().fadeOut();
			$('#list li').eq(iNow).addClass('active').siblings().removeClass('active');
		}

		function play() {
			timer = setInterval(autoPlay, 2000);
		}
		play();

		$('#banner').hover(function() {
			clearInterval(timer);
		}, play);
	})();

	//首二级页面分页
	$('.p_page li:not(:first-child, :last-child)').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
	})

	//2-2
	$('#m_nav li:not(:last-child)').mouseenter(function() {
		$(this).addClass('active').siblings().removeClass('active');
	});

	$('#selectall').click(function() {

		$('#info input').attr('checked', this.checked);
	});

	$('.sidebar>ul>li h4, .sidebar>ul>li li').click(function() {
		$('.sidebar').find('h4, li li').removeClass('active');
		$(this).addClass('active');
	});

	num = 0;
	(function() {
		if($('#js_cart_list_ul li').length < 1) {
			$('#js_empty_cart_div').show();
		}
		var len = $(':checkbox').length;
		var no = [];
		for(var i = 0; i < len; i++) {
			$(':checkbox').eq(i).addClass('li' + (i + 1) + '');
			$(':checkbox').eq(i).attr('data-s','li'+(i+1));
		}
		$(':checkbox').next('label').addClass('ok');
		$('#check').click(function() {
			if(this.checked) {
				$(':checkbox').each(function() {
					this.checked = true;
					$(this).next('label').removeClass('ok');
				});
				
				$('#js_cart_list_ul li').remove();
				var len2 = $(this).parents('ul').find('>li:not(:first-child)').length;
				num = len2;
				for(var i=0;i<len2;i++){
					var text1,tName1;
					/*var text1 = $('#info>ul>li').eq(i+1).find('dt span.quanx').text();
					var tName1 = $('#info>ul>li').eq(i+1).find('dt :checked').attr('data-s');*/
					if($('#info>ul>li').eq(i+1).find('dt span.quanx').length>0){
						text1 = $('#info>ul>li').eq(i+1).find('dt span.quanx').text();
					}else if($('#info>ul>li').eq(i+1).find('dt span.tit').length>0){
						text1 = $('#info>ul>li').eq(i+1).find('dt span.tit').text();
					}else {
						text1 = $('#info>ul>li').eq(i+1).find('dt span.tuij').text();
					}
					var tName1 = $('#info>ul>li').eq(i+1).find('dt :checked').attr('data-s');
					var oLi = '<li class="clearfix ' + tName1 + '" data-account_id="395243" data-sign="'+tName1+'">' +
						'<div class="accountHeader text_center relative"> <img src="images/side/wqdx1998_avatar_1476585820.jpg" class="accountHeader_avatar"> <img src="images/side/icon_s_weixin.png" class="shoppingCart_platform"> </div>' +
						'<div class="accountWrap">' +
						'<div class="accountInner">' +
						'<p class="accountNick">' + text1 + '</p>' +
						'<p class="color_light"> <span class="accountName font_size_small"> 微信号：<em title="wqdx1998">wqdx1998</em>  </span> <img class="fr shoppingCart_delete js_cart_delete" data-weibo_type="9" data-account_id="395243" src="images/side/icon_del.png"> </p>' +
						'</div>' +
						'</div>' +
						'</li>';
						$('#js_cart_list_ul').append(oLi);
						$('.js_cart_num').text(num);
						$('#js_empty_cart_div').hide();
				}
			} else {
				$(':checkbox').each(function() {
					this.checked = false;
					$(this).next('label').addClass('ok');
				});
				num = 0;
				$('#js_cart_list_ul li').remove();
				$('.js_cart_num').text(num);
				$('#js_empty_cart_div').show();
			}
		});

		$(':checkbox:not(#check)').each(function() {

			$(this).click(function() {
				var tName = $(this).attr('data-s');
				
				if(this.checked) {
					$(this).next('label').removeClass('ok');
					//				var oLi = $('#js_cart_list_ul li').eq(0).clone(true);
					num++;
//					var text = $(this).nextAll('span.quanx').find('a').text();
					var text;
					if($(this).nextAll('span.quanx').length>0){
						text = $(this).nextAll('span.quanx').find('a').text();
					}else if($(this).nextAll('div.s3_text').find('span.tit').length>0){
						text = $(this).nextAll('div.s3_text').find('span.tit').text();
					}else {
						text = $(this).nextAll('div.s3_text').find('span.tuij').text();
					}
					var oLi = '<li class="clearfix ' + tName + '" data-account_id="395243" data-sign="'+tName+'">' +
						'<div class="accountHeader text_center relative"> <img src="images/side/wqdx1998_avatar_1476585820.jpg" class="accountHeader_avatar"> <img src="images/side/icon_s_weixin.png" class="shoppingCart_platform"> </div>' +
						'<div class="accountWrap">' +
						'<div class="accountInner">' +
						'<p class="accountNick">' + text + '</p>' +
						'<p class="color_light"> <span class="accountName font_size_small"> 微信号：<em title="wqdx1998">wqdx1998</em>  </span> <img class="fr shoppingCart_delete js_cart_delete" data-weibo_type="9" data-account_id="395243" src="images/side/icon_del.png"> </p>' +
						'</div>' +
						'</div>' +
						'</li>';

					$('#js_empty_cart_div').hide();
					$('#js_cart_list_ul').append(oLi);
					$('.js_cart_num').text(num);
				} else {
					num--;
					if(num < 0) {
						num = 0;
					}
					$('.js_cart_num').text(num);
					$(this).next('label').addClass('ok');
					$('#js_cart_list_ul').find('li.' + tName).remove();
					if($('#js_cart_list_ul li').length < 1) {
						$('#js_empty_cart_div').show();
					}
				}
			});

		});

	})();
	//分类更多
	(function() {
		var flag = true;
		$('#more').click(function() {
			if(flag) {
				$(this).parents('dd').height('auto').find('.m_gen').height('auto');
				$(this).parents('dl').find('dt,dt>span').height($(this).parents('dd').height());
				flag = false;
			} else {
				$(this).parents('dd').height(50).find('.m_gen').height(50);
				$(this).parents('dl').find('dt,dt>span').height($(this).parents('dd').height());
				flag = true;
			}

		})
	})();
	//三级页面banner
	(function() {
		var len = $('#l3_banner').find('li').length;
		var w = $('#l3_banner').find('li').width();
		var iNow = 0;
		$('#l3_banner').width(len * (w + 40));
		$('.simg #next').click(function() {
			iNow--;
			if(iNow < -Math.floor(len / 4)) {
				iNow = 0;
			}
			$('#l3_banner').animate({
				left: iNow * 260
			}, 500)

		});
		$('#l3_banner li').mouseenter(function() {
			$('.l3_banner .bigimg>img').attr('src', $(this).find('a img').attr('src'));
		});

	})();

	/*三级页面*/
	//套餐点击效果
	$('.detail .meal dd').on({
		mouseenter: function() {
			$(this).addClass('hover').siblings().removeClass('hover');
		},
		click: function() {
			$(this).removeClass('hover').addClass('active').siblings().removeClass('active');
		}
	});

	/*三级页面购买数量加减*/
	var count = $('.buy .t_count').val();
	$('.buy .t_count').change(function() {
		count = $(this).val();
	})
	$('.buy #add').click(function() {
		count++;
		$('.buy .t_count').val(count);
	})

	$('.buy #reduce').click(function() {
		count--;
		if(count < 1) {
			count = 1;
		}
		$('.buy .t_count').val(count);
	});

	//我的订单页列表切换
	$('#order li').click(function() {
		$(this).find('a').addClass('active').parent('li').siblings().find('a').removeClass('active');
		$('#order_info .o_box').eq($(this).index()).addClass('show').siblings().removeClass('show');
	});

	$('.page .o_link li').click(function() {
		$(this).find('a').addClass('active').parent('li').siblings().find('a').removeClass('active');
//		if($(this).parent().is('oul_f'))
		if($(this).parent().index()==0){
			if($(this).find('.s_list').length>0){
				var listArray = [];
				var oLi = '';
				$('.oul_s').hide().find('li').remove();
				$(this).find('.s_list a').each(function(){
					var _href = $(this).attr('href');
					listArray[$(this).index()] = $(this).html();
					oLi +='<li><a href="'+_href+'">'+listArray[$(this).index()]+'</a></li>';
				});
				$('.oul_s').append(oLi).find('li').eq(0).find('a').addClass('active');
				$('.oul_s').slideDown();
			}else{
				$('.oul_s').slideUp();
			}
		}
		
		$('.oul_s').on('click','li',function(){
			$(this).find('a').addClass('active').parent('li').siblings().find('a').removeClass('active');
		})
		
//		
	});

	$('#success li, .buyn').mouseenter(function() {
		$(this).addClass('item_active').siblings().removeClass('active');
	}).mouseleave(function() {
		$(this).removeClass('item_active');
	});
	
	var flag = [];
	var term = ['filter1', 'filter2', 'filter3', 'filter4', 'filter5', 'filter6', 'filter7', 'filter8'];
	var sign;
	var len = $('.filter dl').length;
	var len1 = $('dd div.sel').length;
	for(var i = 0; i < len + len1; i++) {
		flag[i] = true;
	}

	for(var i = 0; i < len+len1; i++) {
		
		$('.filter dl dd>span:not(.bux), .filter dl dd div.m_gen>span').click(function() {
			sign = 1;
			var index1 = $(this).parents('.filter dl').index();
			filter(flag[index1], term[index1], $(this),sign);
			flag[index1] = false;
			$(this).parents('dd').attr('data-sgn',term[index1]);
		});
	}
	
	$('.f_price').click(function(){
		sign = 3;
		var _index = $(this).parents('.filter dl').index();
		filter(flag[_index], term[_index], $(this),sign);
		flag[_index] = false;
		$(this).parents('dd').find('span').removeClass('active');
	})
	
	$('input[name="price"]').change(function(){
		
	})
	
	
	$('.filter dl .bux').click(function() {
		var liName = term[$(this).parents('.filter dl').index()];
		$('.sel_ul li.' + liName + '').remove();
		if($('.sel_ul li').length < 2) {
			$('.selected').hide();
			for(var i = 0; i < len; i++) {
				flag[i] = true;
			}
		}
	});

	$('.sel_ul').on({

		click: function() {
			$(this).parent('li').remove();
			var _sgn = $(this).parents('li').attr('data-sgn');
			$('dd[data-sgn="'+_sgn+'"]').find('span').removeClass('active');
			$('dd[data-sgn="'+_sgn+'"]').find('.bux').addClass('active');
			if($('.sel_ul li').length < 2) {
				$('.selected').hide();
				for(var i = 0; i < len; i++) {
					flag[i] = true;
				}
			}
		}
	}, 'li i');
	
	
	
	$("input[name='price']").keyup(function(){       
        var tmptxt=$(this).val();       
        $(this).val(tmptxt.replace(/\D|/g,''));       
    }).bind("paste",function(){       
        var tmptxt=$(this).val();       
        $(this).val(tmptxt.replace(/\D|/g,''));       
    }).css("ime-mode", "disabled"); 	
	
	
	
	
	
	
	
	
	
	
	
	
	

	$('.empty').click(function() {
		$('.sel_ul li:not(.empty)').remove();
		$('.selected').hide();
		for(var i = 0; i < len+len1; i++) {
			flag[i] = true;
		}
		$('.filter dd span').removeClass('active');
		$('.filter dd .bux').addClass('active');
	});
	$('#count').change(function() {
		var count = $('#count').val();
		var price = $('#price').val();
		if(count < 100) {
			count = 100;

		} else if(count % 100 != 0) {
			count = Math.ceil(count / 100) * 100;
		}
		$('#count').val(count);
		$('.totalPrice').find('font').text('￥' + count * price + '.00');
		$('.totalPrice').show();
	});

	/*购物车*/
	(function() {
		var flag = true;
		$('#js_cart_icon_div').click(function() {
			if(flag) {
				$('.sidebar').animate({
					right: 270
				}, 500);
				flag = false;
			} else {
				$('.sidebar').animate({
					right: 0
				}, 500);
				flag = true;
			}

		});

		$('.sidebar_notice_close').click(function() {
			$('.sidebarMain_grid').hide();
		});

		$('.js_cart_delete').click(function() {
			$(this).parents('li').remove();
		});

		var offset = $("#js_cart_icon_div");
		$(".addcar").click(function(event) {
			if($(this).hasClass('ok')) {
				var addcar = $(this);
//				var img = addcar.parent().find('img').attr('src');
				var img = 'images/side/wqdx1998_avatar_1476585820.jpg';
				var flyer = $('<img class="u-flyer" src="' + img + '">');
				flyer.fly({
					start: {
						left: event.clientX,
						top: event.clientY
					},
					end: {
						left: offset.offset().left,
						top: offset[0].offsetTop,
						width: 0,
						height: 0
					},
					onEnd: function() {
						addcar.css("cursor", "default").removeClass('orange');
						this.destory();
					}
				});
			}
		});
	})();

	$('ul').on('click', '.js_cart_delete', function() {
		num--;
		if(num < 0) {
			num = 0;
		}
		$('.js_cart_num').text(num);
		var _dataclass = $(this).parents('li').attr('data-sign');
		$(this).parents('li').remove();
		$(':checkbox[data-s="'+_dataclass+'"]').prop('checked',false).next('label').addClass('ok');
		if($('#js_cart_list_ul li').length < 1) {
			$('#js_empty_cart_div').show();
		}
	});

	$('#js_delete_all').click(function() {
		num = 0;
		$('#js_cart_list_ul').find('li').remove();
		$('.js_cart_num').text(0);
		$('#js_empty_cart_div').show();
		$(':checkbox').prop('checked',false).next('label').addClass('ok');
	});
	
	$('#userName, #passWord').click(function(){
		$(this).prev().val('')
	});
	
	$('.side2 .filter dd>span').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	$('.m_gen>span').click(function(){
		$(this).parents('dd').find('.bux').removeClass('active');
		$(this).addClass('active').siblings().removeClass('active');
	});
	$('.bux').click(function(){
		$(this).addClass('active');
		$(this).next().find('span').removeClass('active');
	});
	
	/*升级会员*/
	/*----------此处为升级会员页左侧点击在当前页面显示的效果,如果需要在当前页面显示取消注释就可-----------------------*/
	
	(function(){
		$('.update .sidebar1 li li').click(function(){
			var _name = $(this).attr('data-id');
			var oDiv = $('.con_main div[data-id='+_name+']');
			$(this).parents('ul').parents('ul').find('li li').removeClass('on');
			$(this).addClass('on');
			if(oDiv.length>0){
				$('.con_main .u_box').hide();
				oDiv.slideDown(1500);
			}else{
				if($('.con_main .u_box:first-child').is(':hidden')){
					$('.con_main .u_box').hide();
					$('.con_main .first').slideDown(1500);
				}
				
			}
			
			
		});
		
		//左侧导航展开
		
		$('#a_nav .txt').click(function(){
			var _index = $(this).index();
			$(this).parents('.u_box').find('.b_info').hide();
			$(this).addClass('active').siblings('.txt').removeClass('active');
			$('#a_box>div').hide().eq(_index).slideDown(1500);
			//充值
		})
	})();   
	
	/*升级会员*/
	/*---------------------------------*/
	
	(function(){
		$('#a_nav .txt').click(function(){
			$(this).addClass('active').siblings('.txt').removeClass('active');
		});
	})();
	/*---------------------------------*/
	/*资源导出弹出层*/
	(function(){
		$('#export').click(function(){
			$('#lving').fadeIn(1000);
		});
		$('#cancel').click(function(){
			$('#lving').fadeOut(1000);
		})
	})();
	
	/*资源导出弹出层*/
	/*---------------------------------*/
	
	
});

function filter(flag, name, ele,sign) {
	var type = '';
	var text = '';
	if(sign==1){
		
		type = ele.parents('dl').find('dt').text();
		text = ele.text();
	}else if(sign==3){
		text = ele.siblings('div.input').find(':text').eq(0).val()+'-'+ele.siblings('div.input').find(':text').eq(1).val()+'元';
		type = ele.parents('dl').find('dt').text();
	}else {
		
		type = ele.parent('ul').find('li').eq(0).text();
		text = ele.text();
	}
	this.falg = flag;
	if(falg) {
		$('.selected').show();
		var oLi ='<li data-sgn="'+name+'" class=' + name + '>' + type + '<i class="close"></i><strong>' + text + '</strong></li>';
		$('.sel_ul').find('li.empty').before(oLi);
		$('.side2 .filter .selected dt').height($('.side2 .filter .selected dd').height());
//			$('.sel_ul').append(oLi);
	} else {
		$('.sel_ul li.' + name + '').html(type + '<i class="close"></i><strong>' + text + '</strong>');
	}
}