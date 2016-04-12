define({
	title : "个人中心",
	body : '<div id="user">\
		<div class="user_title">\
			<div class="user_title_left">\
				<div class="user_title_back">\
					<a href="#spa/home" class="iconfont">&#xe6fa;</a>\
				</div>\
				<div class="user_title_city">\
					<a href="#spa/citys" data-animate="slideInLeft">北京</a>\
				</div>\
			</div>\
			<div class="user_title_center">\
				个人中心\
			</div>\
			<div class="user_title_right">\
				<a href="#spa/message" class="iconfont">&#xe71b;</a>\
				<div class="user_title_right_add"></div>\
			</div>\
		</div>\
		<div class="user_con">\
		</div>\
	</div>\
	',

	init : function(pageData){
		var $view = this;

		$('#user', $view).trigger('spa:scroll');
	},
})