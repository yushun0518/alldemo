$(function(){
	/*新闻页面新闻列表展开*/
	$('#s_news>li').click(function(){
		$(this).find('>h4, >p, >i').hide();
		$(this).siblings().find('>h4, >p, >i').show();
		$(this).siblings().find('div.open').hide();
//		$(this).height(340).siblings().height(102);
		$(this).find('div.open').show();
		$(this).addClass('active').siblings().removeClass('active');
//		$(this).height($(this).find('.open').height())
	});
	
	/*更多图片*/
	var flag = [];
	for(var i=0;i<$('#s_news li').length;i++){
		flag[i] = true;
	}
	$('.open .text .more_pic').click(function(){
		var _index = $(this).parents('li.s_li').index();
		if(flag[_index]){
			$(this).next().show();
			flag[_index] = false;
		}else{
			$(this).next().hide();
			flag[_index] = true;
		}
		
	});
	
	$('.m_pic>ul>li img').click(function(){
		$(this).parents('div.text').find('.pictures img').attr('src',$(this).attr('src'));
	})
})
