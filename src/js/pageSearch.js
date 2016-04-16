define({
	'title' : '搜索',

	'body' : '<div id="search">\
		<div class="sear_int">\
			<a href="#spa/home" class="iconfont sear_back">&#xe6fa;</a>\
			<div class="sear_get">\
				<input type="text" />\
				<div class="sear_magn iconfont">&#xe725;</div>\
			</div>\
		</div>\
		<div class="sear_con">\
			<div class="sear_hot">\
				<h3>热门搜索</h3>\
				<a href="#spa/detail">画</a>\
				<a href="#spa/detail">吊灯</a>\
				<a href="#spa/detail">沙发</a>\
			</div>\
		</div>\
	</div>',

	init : function(pageData){
		var $view = this;

		$('#user', $view).trigger('spa:scroll');
	},
})