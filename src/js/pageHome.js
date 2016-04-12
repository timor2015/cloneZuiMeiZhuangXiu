define({
	title : '最美装修-首页',
	body : '\
	<div class="container">\
	<header class="header">\
		<div class="user"><a href="#spa/user" data-animate="slideInLeft" class="iconfont">&#xe71a;</a></div>\
		<div class="title">发现</div>\
		<div class="find"><a href="#spa/find" class="iconfont">&#xe725;</a></div>\
	</header>\
	<div class="content">\
		<div class="swiper-container" id="swiper_home">\
			<div class="swiper-wrapper">\
		        <div class="swiper-slide">1</div>\
		        <div class="swiper-slide">2</div>\
		        <div class="swiper-slide">3</div>\
		        <div class="swiper-slide">4</div>\
		        <div class="swiper-slide">5</div>\
			</div>\
		</div>\
	</div>\
	<nav class="nav">\
		<ul>\
			<li class="nav_act"><i class="iconfont">&#xe6f9;</i><b>发现</b></li>\
			<li><i class="iconfont">&#xe704;</i><b>案例</b></li>\
			<li><i class="iconfont">&#xe6e2;</i><b>日记</b></li>\
			<li><i class="iconfont">&#xe717;</i><b>灵感</b></li>\
			<li><i class="iconfont">&#xe6e5;</i><b>攻略</b></li>\
		</ul>\
	</nav>\
	</div>\
    ',

	init : function(pageData){
		var $view = this

	    // 获取hash
	    function getHash(url) {
	      url = url || location.href
	      return url.replace(/^[^#]*#?\/?(.*)\/?$/, '$1')
	    }

  		$('.swiper-container', $view).trigger('spa:scroll');
	},


	// 初始化出5个块内容
	beforeopen : function(pageData){
		var now_active = 0;
		// 强制定义中间内容框的高度
		$('#swiper_home').css('height', $('#swiper_home').parent().css('height'));
		// 初始化内容区域的swiper滑动
		var guideSwiper = new Swiper ('#swiper_home', {
		    direction: 'horizontal',
		    resistanceRatio : 0,
		    loop: false,
		    onSlideChangeEnd: function(swiper){
		    	var go_num = guideSwiper.progress * 4;
		        $('nav li').eq(now_active).removeClass('nav_act');
		        $('nav li').eq(go_num).addClass('nav_act');
		        now_active = go_num;
		    },
		});


		// 导航点击事件切换页面
		(function(){
			$('nav li').each(function(){
				$(this).click(function(){
					guideSwiper.slideTo($(this).index(), 300, false);
					$('nav li').eq(now_active).removeClass('nav_act');
					$(this).addClass('nav_act');
					now_active = $(this).index();
				})
			})    
		})();
		
	}
})