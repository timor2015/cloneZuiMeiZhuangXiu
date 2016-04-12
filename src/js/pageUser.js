define({
	title : "个人信息-最美装修",
	body : '<div id="user">\
		<div class="user_title">\
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