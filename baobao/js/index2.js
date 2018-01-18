$(function() {
	//页面初始化
	function initial() {
		var iNow = 0;
		var oWidth = $(window).width();
		var oHeight = $(window).height();
		var lWidth = (oWidth - $('#layer').innerWidth()) / 2;
		var lHeight = (oHeight - $('#layer').innerHeight()) / 2;
		$('#images').height(oHeight);
		$('#img02 div, #images').width(oWidth).height(oHeight);
		$('#images img').width(oWidth);
		$('#navigation').css('left', oWidth / 2 - 100);
		$('#images,#imgages img div').width(oWidth).height(oHeight);
		$('#images img').width(oWidth);
		$('#length').text($('#images img').length);
		$('#thisImg').text($('#layer img:not(.none)').length);
		$('#layer ul li').eq(0).css('display', 'block');
		$('#liTotal').text($('#layer ul li').length);
		setTimeout(function() {
			$('#img02').animate({
				opacity: 1
			}, 3000);
		}, 1500);
		/*var layerUl = $('#layer ul li:last-child');
		var lastLiLen = layerUl.find('img').length;

		if(lastLiLen < 12) {
			var tag = '';
			for(var i = 0; i < 11; i++) {
				tag += '<img class="none" src="images/25.jpg" />'
			}
			layerUl.append(tag);
		}*/
		$('#layer').css({
			left: lWidth,
			top: lHeight
		});
		$('#prevSm').attr('src', "images/" + ($('#layer img').length - $('#layer img.none').length) + ".jpg");
		$('#nextSm').attr('src', "images/" + (iNow + 1) + ".jpg");
	}
	initial();
	$(window).resize(initial);
	//	var factLen = $('#layer img.none').length;
	var iNum = 0;
	$('#layer .next').click(function() {
		nextOrPrev(1);
	});

	$('#layer .prev').click(function() {
		nextOrPrev(0);
	});

	function nextOrPrev(num) {
		if(num == 0) {
			iNum--;
			if(iNum == -1) {
				iNum = $('#layer ul li').length - 1;
			}
		} else if(num == 1) {
			iNum++;
			if(iNum > $('#layer ul li').length - 1) {
				iNum = 0;
			}
		}
		/*$('#layer ul li').eq(iNum).animate({
			opacity: 1,
			filter: 'alpha(opacity=100)'
		}, 2000).siblings().css('opacity', 0);*/
		$('#layer ul li').eq(iNum).fadeIn(2000).siblings().css('display', 'none');
		$('#liNo').text(iNum + 1);
	}

	//显示弹出层中的图片
	var timeOut = null;
	$('#layer ul li img').click(function() {
		$('#layer').slideUp(2000);
		//					$('#img02').attr('src', $(this).attr('src'));
		iNow = $(this).index() + ((iNum) * 12);
		$('#content').animate({
			opacity: 1,
			filter: 'alpha(opacity=100)'
		}, 2000);
		imgClick();
		startMove($('#layer')[0], {
			opacity: 0
		}, function() {
			startMove($('#album')[0], {
				opacity: 100
			});
		});
		autoPlay($('#play'));
	}).on({
		mouseenter: function(e) {
			if($(window).width()>960){
				imgOver($(this));
			}
//			
		},
		mouseleave: function(e) {
			if(place($(this), e)) {
//				$('#layer ul>img:not(:first), #layer ul .happy:not(:first)').attr('class','hidden');
				$('#layer ul>img, #layer ul .happy').remove();
				$(this).on('mouseenter', function() {
					imgOver($(this));
				});
			}
			
		}
	});

	function imgOver(element) {
		var text = ['祝宝宝:健康快乐，心想事成', '祝宝宝:翠篁附凤 珠玉悦德', '祝宝宝:聪明伶俐，幸福成长', '祝宝宝:平平安安，快乐长大', '祝宝宝:身体健康 万事如意', '祝宝宝:笑口常开，百事可乐', '祝宝宝:意气风发，好事连连', '祝宝宝:一帆风顺,万事如意', '鹏程万里越高峰,幸福快乐永相随', '生命里你是我们永远不悔的主题', '这是一个永恒也是我们的爱与关怀'];
		var oImg = $('<img class="show" />');
		var oDiv = $('<div class="happy show"><p>' + text[parseInt(text.length * Math.random())] + '</p></div>');
		var imgW = $('#layer ul').width() * 0.7;
		var imgH = $('#layer ul').height() * 0.8;
		$('#layer ul').append(oImg);
		$('#layer ul').append(oDiv);
		$('#layer ul>img[style="display:none"]').remove();
		oImg.attr('src', element.attr('src')).animate({
			width: imgW,
			height: imgH,
			left: ($('#layer ul').width() - imgW - 8) / 2,
			top: ($('#layer ul').height() - imgH - 8) / 2,
			opacity: 1,
			filter: 'alpha(opacity=100)'
		}, 2000);
		oDiv.css({
			width: imgW,
			height: imgH,
			left: ($('#layer ul').width() - imgW - 8) / 2,
			top: ($('#layer ul').height() - imgH - 8) / 2
		});
		setTimeout(function() {
			oDiv.animate({
				opacity: 1,
				filter: 'alpha(opacity=100)'
			}, 2000);
			/*$('#layer ul>img, #layer ul .hello').css({
				'animation-name': 'rotateImg',
				'animation-duration': '2s'
			});*/
		}, 2000);
		var $events = element.siblings().data("events");
		/*setTimeout(function() {
			element.mousemove(function() {
				$('#layer ul>img, #layer ul .happy').fadeOut(2000);
			});
		}, 4000);*/
		/*timeOut = setTimeout(function(){
			$('#layer ul>img, #layer ul .happy').attr('class','hidden');
			$('#layer ul>img.hidden, #layer ul .hidden').fadeOut(2000);
		},6000);*/
		oDiv.mousemove(function(){
			$('#layer ul>img, #layer ul .happy').fadeOut(2000);
		})
		element.off('mouseenter');
	}

	function place(element, e) {
		var oEvent = e || event;
		var disX = oEvent.clientX;
		var disY = oEvent.clientY;
		var placeX = disX - element.offset().left;
		var placeY = disY - element.offset().top;
		if(placeX < 0 || placeX > element.width() || placeY < 0 || placeY > element.height()) {
			return true;
		}
	}
	//目录菜单
	$('#album').click(function() {
		$('#content').animate({
			opacity: 0,
			filter: 'alpha(opacity=0)'
		}, 2000);
		startMove($('#layer')[0], {
			opacity: 100
		});
		$('#layer').slideDown(2000);
		startMove($('#album')[0], {
			opacity: 0
		});

	});

	//关闭弹出层
	$('#close').click(function() {
		startMove($('#layer')[0], {
			opacity: 0
		}, function() {
			startMove($('#album')[0], {
				opacity: 100
			});
		});
		$('#content').animate({
			opacity: 1,
			filter: 'alpha(opacity=100)'
		}, 2000);
		imgClick();
	})

	var len = $('#layer img').length;
	var flag = true;
	var timer = null;
	var iNow = 0;

	//显示图片
	function imgClick() {
		$('#img02').css({
			opacity: 0,
			filter: 'alpha(opacity=0)'
		})
		if(iNow == 0) {
			$('#prevSm').attr('src', "images/" + len + ".jpg");
			$('#nextSm').attr('src', "images/" + (iNow + 2) + ".jpg");
		} else if(iNow == len - 1) {
			$('#prevSm').attr('src', "images/" + iNow + ".jpg");
			$('#nextSm').attr('src', "images/" + (len - iNow) + ".jpg");
		} else {
			$('#prevSm').attr('src', "images/" + iNow + ".jpg");
			$('#nextSm').attr('src', "images/" + (iNow + 2) + ".jpg");
		}
		$('#img02').attr('src', 'images/' + (iNow + 1) + '.jpg');
		$('#length').text(iNow + 1);
		startMove($('#img02')[0], {
			opacity: 100,
		});
	}

	//上一张,下一张操作
	$('#next, #nextSm').click(function() {
		iNow++;
		if(iNow == len) {
			alert('已经是最后一张了');
			iNow = 0;
		}
		imgClick();
	});

	$('#prev, #prevSm').click(function() {
		iNow--;
		if(iNow == -1) {
			iNow = len - 1;
			alert('已经是第一张了');
		}
		imgClick();
	});

	//图片自动播放
	$('#play').click(function() {
		/*if(flag) {
			$(this).attr('src', 'img/play_dull.png');
			timer = setInterval(function() {
				if(iNow == len - 1) {
					iNow = 0;
				} else {
					iNow++;
				}
				imgClick();
			}, 2500);
			flag = false;
		} else {
			$(this).attr('src', 'img/pause_dull.png');
			clearInterval(timer);
			flag = true;
		}*/
		autoPlay($(this));
	});
	
	function autoPlay(element){
		if(flag) {
			element.attr('src', 'img/play_dull.png');
			timer = setInterval(function() {
				if(iNow == len - 1) {
					iNow = 0;
				} else {
					iNow++;
				}
				imgClick();
			}, 3000);
			flag = false;
		} else {
			element.attr('src', 'img/pause_dull.png');
			clearInterval(timer);
			flag = true;
		}
	}
	//按钮交互效果
	$('#next').mousedown(function() {
		$(this).attr('src', 'img/forward.png');
	}).mouseup(function() {
		$(this).attr('src', 'img/forward_dull.png');
	});

	$('#prev').mousedown(function() {
		$(this).attr('src', 'img/back.png');
	}).mouseup(function() {
		$(this).attr('src', 'img/back_dull.png');
	});

	//获取样式
	function getStyle(obj, attr) {
		if(obj.currentStyle) {
			return obj.currentStyle[attr];

		} else {
			return getComputedStyle(obj, false)[attr];
		}
	}

	//运动
	function startMove(obj, json, fnEnd) {
		clearInterval(obj.timer);
		var attr;
		obj.timer = setInterval(function() {

			var bStop = true; //是不是都到了，假设所有的都到了

			for(attr in json) {
				var iCur = 0;

				//取当前位置
				if(attr == 'opacity') {
					iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
				} else {
					iCur = parseInt(getStyle(obj, attr));
				}

				//算速度
				var iSpeed = (json[attr] - iCur) / 8;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

				//到没到

				if(attr == 'opacity') {
					obj.style.filter = 'alpha(opacity:' + (iCur + iSpeed) + ')';
					obj.style.opacity = (iCur + iSpeed) / 100;
				} else {
					obj.style[attr] = iCur + iSpeed + 'px';
				}

				if(iCur != json[attr]) {
					bStop = false;
				}
			}

			if(bStop) {
				clearInterval(obj.timer);
				if(fnEnd) {
					fnEnd();
				}
			}
		}, 60);
	}

	//计算天数
	function fillZero(num, digit) {
		var str = '' + num;
		while(str.length < digit) {
			str = '0' + str;
		}
		return str;
	}

	function updateTime() {
		var birthday = new Date();
		var nowDate = new Date();
		var range = 0;
		var iDay = 0;
		var iHour = 0;
		var iMin = 0;
		var iSec = 0;

		birthday.setFullYear(2016);
		birthday.setMonth(5);
		birthday.setDate(22);
		birthday.setHours(19);
		birthday.setMinutes(23);
		birthday.setSeconds(12);

		range = (nowDate.getTime() - birthday.getTime()) / 1000;
		iDay = parseInt(range / 86400);
		range %= 86400;

		iHour = parseInt(range / 3600);
		range %= 3600;

		iMin = parseInt(range / 60);
		range %= 60;

		iSec = parseInt(range);

		$('#day span').text(fillZero(iDay, 3));
		$('#hour span').text(fillZero(iHour, 2));
		$('#min span').text(fillZero(iMin, 2));
		$('#sec span').text(fillZero(iSec, 2));

	}
	setInterval(updateTime, 1000);

	/*浏览器为手机时触发音乐播放*/
	if($(window).width() < 1280) {
		if(window.orientation == 0) {
			alert('手机请横屏观看看');
		}
		$('body').click(function() {
			$('#music').get(0).play();
		});

		$('#layer span.prevB, #layer span.nextB').css('display', 'inline');
		$('#layer span.prevB').click(function() {
			nextOrPrev(0);
		});
		$('#layer span.nextB').click(function() {
			nextOrPrev(1);
		});
	}

	/*判断手机是否横屏*/
	$(window).on("orientationchange", function() {
		if(window.orientation == 0) {
			alert('手机请横屏观看看');
		}
	});

});