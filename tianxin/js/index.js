$(function(){
	$('#nav li:not(:first-child)').mouseenter(function(){
		$(this)
		.addClass('active')
		.siblings('li:not(:first-child)')
		.removeClass('active')
		.find('.n_info')
		.removeClass('show');
		$(this).find('.n_info').addClass('show').siblings();
	});
	
	$('#example li').mouseenter(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.example .box').eq($(this).index()).addClass('show_').siblings().removeClass('show_');
	});
	
	/*.sidebar*/
	
	$('.sidebar ul li').mouseenter(function(){
		$(this).addClass('active').siblings().removeClass('active');
	}).mouseleave(function(){
		$(this).removeClass('active');
	});
	
	$('#page li:not(:first-child,:last,:nth-last-child(2))').mouseenter(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	$('.ex_box a img').mouseenter(function(){
		$(this).animate({
			opacity:0.5,
			filter:'alpha(opacity=50)'
		},1000);
	}).mouseleave(function(){
		$(this).animate({
			opacity:1,
			filter:'alpha(opacity=100)'
		},1000);
	});
	
})
