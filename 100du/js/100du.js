$(function() {
				//搜索切换
				(function() {
					var oText = $('#search').find('.form .text');
					var arrText = [
						'例如：荷棠鱼坊烧鱼 或 樱花日本料理',
						'例如：昌平区育新站龙旗广场2号楼609室',
						'例如：万达影院双人情侣券',
						'例如：东莞出事了，大老虎是谁？',
						'例如：北京初春降雪，天气变幻莫测'
					];
					var iNow = 0;
					oText.val(arrText[iNow]);
					var aLi = $('#menu li');

					aLi.each(function(index) {
						$(this).click(function() {
							//console.log(index);
							aLi.attr('class', 'gradient');
							$(this).attr('class', 'active');

							iNow = index;

							oText.val(arrText[iNow]);
						});

					});

					oText.focus(function() {
						if($(this).val() == arrText[iNow])
							$(this).val('');
					});

					oText.blur(function() {
						if($(this).val() == '')
							$(this).val(arrText[iNow]);
					});
				})();
			
			    //update文字弹性滑动
			    (function(){
			    	var oDiv = $('.update');
			    	var oUl = oDiv.find('ul');
			    	var iH = 0;
			    	var arrData = [
									{ 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间' },
									{ 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯' },
									{ 'name':'京京', 'time':6, 'title':'国台办回应王郁琦' },
									{ 'name':'晓晓', 'time':7, 'title':'那些灿烂华美的瞬间' },
									{ 'name':'丽丽', 'time':8, 'title':'那些灿烂华美的瞬间' },
									{ 'name':'伟伟', 'time':9, 'title':'广东3天抓获涉黄疑犯' },
									{ 'name':'星星', 'time':10, 'title':'国台办回应王郁琦' },
									{ 'name':'宁宁', 'time':11, 'title':'那些灿烂华美的瞬间' }
		                        ];
		            var str = ''; 
		            var oBtnUp = $('#updateUpBtn');
		            var oBtnDown = $('#updateDownBtn');
		            var iNow = 0;
		            var timer = null;
		            
		            for(var i=0;i<arrData.length;i++){
		            	str += '<li><a href="#"><strong>'+arrData[i].name+'</strong> <span>'+arrData[i].time+'分钟前</span> 写了一篇新文章：'+arrData[i].title+'…</a></li>';
		            }
		            console.log(str);
		            oUl.html(str);
		            
		            iH = oUl.find('li').height();
		            
		            oBtnUp.click(function(){
		            	doMove(-1);
		            });
		            
		            oBtnDown.click(function(){
		            	doMove(1);
		            });
		            
		            oDiv.hover(function(){
		            	clearInterval(timer);
		            },autoPlay);
		            
		            function autoPlay() {
		            	timer = setInterval(function(){
		            		doMove(-1);
		            	},1500);
		            }
		            
		            autoPlay();
		            
		            function doMove(num){
		            	iNow += num;
		            	if(Math.abs(iNow)>arrData.length-1){
		            		iNow = 0;
		            	}
		            	if(iNow>0){
		            		iNow = -(arrData.length-1);
		            	}
		            	oUl.stop().animate({'top':iH*iNow},2200,'elasticOut')
		            }
			    })();
			   
			   //options选项卡切换
			    (function(){
			    	
			    	fnTab($('.tabNav1'),$('.tabCon1'),'click');
			    	fnTab($('.tabNav2'),$('.tabCon2'),'click');
			    	fnTab($('.tabNav3'),$('.tabCon3'),'mouseover');
			    	fnTab($('.tabNav4'),$('.tabCon4'),'mouseover');
			    	
			    	function fnTab(oNav,aCon,sEvent){
			    		var aElem = oNav.children();
			    		aCon.hide().eq(0).show();
			    		
			    		aElem.each(function(index){
			    			
			    			$(this).on(sEvent,function(){
			    				
			    				aElem.removeClass('active').addClass('gradient');
			    				$(this).removeClass('gradient').addClass('active');
			    				aElem.find('a').attr('class','triangle_down_gray');
			    				$(this).find('a').attr('class','triangle_down_red');
			    				
			    				aCon.hide().eq(index).show();
			    			})
			    		});
			    	}
			    	
			    })();
			    
			   //焦点图轮播
			   (function() {

			   	var oDiv = $('#fade');
			   	var aUlLi = oDiv.find('ul li');
			   	var aOlLi = oDiv.find('ol li');
			   	var oP = oDiv.find('p');
			   	var arr = ['爸爸去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方'];
			   	var iNow = 0;
			   	var timer = null;
			   	
			   	aOlLi.click(function(){
			   		iNow = $(this).index();
			   		fnFade();
			   	});
			   	
			   	oDiv.hover(function(){clearInterval(timer);},autoPlay);
			   	
			   	fnFade();
			   	
			   	function autoPlay(){
			   		timer = setInterval(function(){
			   			iNow++;
				   		iNow %= arr.length;	
				   		fnFade();
			   		},1000);
			   		
			   	}
			   	
			   	autoPlay();

			   	function fnFade() {
			   		aUlLi.each(function(i){
			   			if(i!=iNow){
			   				aUlLi.eq(i).fadeOut().css('zIndex',1);
			   				aOlLi.eq(i).removeClass('active');
			   			}else{
			   				aUlLi.eq(i).fadeIn().css('z-index',2);
			   				aOlLi.eq(i).addClass('active');
			   			}
			   		});
			   	}
			   })();
			   
			   //日历提示说明
			   (function(){
			   	var aSpan = $('.calendar h3 span');
				var aImg = $('.calendar .img');
				var oPrompt = $('.today_info');
				var oImg = oPrompt.find('img');
				var oStrong = oPrompt.find('strong');
				var oP = oPrompt.find('p');
				
				aImg.hover(function (){
			var iTop = $(this).parent().position().top - 30;
			var iLeft = $(this).parent().position().left + 55;
			var index = $(this).parent().index()%aSpan.size();
			
			// console.log( $(this).parent().index()%aSpan.size() );
			
			oPrompt.show().css({ 'left': iLeft, 'top': iTop });
			oP.text($(this).attr('info'));
			oImg.attr('src', $(this).attr('src'));
			oStrong.text( aSpan.eq(index).text() );
			
			
		}, function (){
			oPrompt.hide();
		});
		
			   })();

			   });