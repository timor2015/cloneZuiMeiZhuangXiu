define({
	title : '最美装修-首页',
	body : '<div class="swiper-container" id="swiper_home">\
			<div class="swiper-wrapper">\
		        <div class="swiper-slide">1</div>\
		        <div class="swiper-slide">2</div>\
		        <div class="swiper-slide">3</div>\
		        <div class="swiper-slide">4</div>\
		        <div class="swiper-slide">5</div>\
			</div>\
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
		$('#swiper_home').css('height', $('#swiper_home').parent().css('height'));
		var guideSwiper = new Swiper ('#swiper_home', {
		    direction: 'horizontal',
		    resistanceRatio : 0,
		    loop: false,
		})    
	}
})