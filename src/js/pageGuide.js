define({
	title : '最美装修',
	body : '<div class="swiper-container" id="swiper_guide">\
			<div class="swiper-wrapper">\
		        <div class="swiper-slide"><img src="./source/images/guide1.png"></div>\
		        <div class="swiper-slide"><img src="./source/images/guide2.jpg">\
		        <a href="#spa/home" class="gotoHome" data-animate="pushOutLeft">点击进入</a></div>\
			</div>\
		</div>\
    ',

	init : function(pageData){
    	var $view = this;

    	// 获取哈希
    	function getHash(url) {
		    url = url || location.href
		    return url.replace(/^[^#]*#?\/?(.*)\/?$/, '$1')
    	}

    	// 跳转到home页面
    	$view.on('click', '.gotoHome', function(event){
    		event.preventDefault();
    		var $btn = $(this),
	          	animate = $btn.attr('data-animate'),
	          	hash = getHash($btn.attr('href'));
	        $doc.trigger('spa:navigate', {hash: hash, pushData: {}})
    	})

    },

    // 创建swiper滑动效果
    beforeopen : function(pageData){
    	var guideSwiper = new Swiper ('#swiper_guide', {
		    direction: 'horizontal',
		    resistanceRatio : 0,
		    loop: false,
		})        
    }
})