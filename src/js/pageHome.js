define({
	title : '最美装修-首页',
	body : '\
	<div class="container">\
	<header class="header">\
		<div class="user"><a href="#spa/user" data-animate="slideInLeft" class="iconfont">&#xe71a;</a></div>\
		<div class="title">\
			发现\
		</div>\
		<div class="find"><a href="#spa/search" class="iconfont">&#xe725;</a></div>\
	</header>\
	<div class="content">\
		<div class="swiper-container" id="swiper_home">\
			<div class="swiper-wrapper">\
		        <div class="swiper-slide" id="scroll1">\
		        	<div class="con_home">\
		        		<div class="home_ban">\
		        			<div class="swiper-container" id="home_ban_swiper">\
							    <div class="swiper-wrapper">\
							        <div class="swiper-slide"><a href="#spa/banner-specific/1"><img src="./source/images/ban_1.jpg"/></a></div>\
							        <div class="swiper-slide"><a href="#spa/banner-specific/2"><img src="./source/images/ban_2.jpg"/></a></div>\
							        <div class="swiper-slide"><a href="#spa/banner-specific/3"><img src="./source/images/ban_3.jpg"/></a></div>\
							    </div>\
							    <div class="swiper-pagination"></div>\
							</div>\
		        		</div>\
		        		<div class="home_actions">\
		        			<div class="server_design">\
		        				<a href="#spa/server_design">\
		        					<i class="iconfont">&#xe729;</i>\
		        					<p>装修设计</p>\
		        				</a>\
		        			</div>\
		        			<div class="server_day">\
		        				<a href="#spa/server_day">\
		        					<i class="iconfont">&#xe72e;</i>\
		        					<p>写日记</p>\
		        				</a>\
		        			</div>\
		        			<div class="server_cash">\
		        				<a href="#spa/server_cash">\
		        					<i class="iconfont">&#xe714;</i>\
		        					<p>金币商城</p>\
		        				</a>\
		        			</div>\
		        			<div class="server_gua">\
		        				<a href="#spa/server_gua">\
			        				<i class="iconfont">刮</i>\
			        				<p>刮刮乐</p>\
		        				</a>\
		        			</div>\
		        		</div>\
		        		<div class="home_cells">\
		        			<div class="home_guess">\
		        				<p>猜您喜欢</p>\
		        				<div class="home_guess_con">\
		        					<a href="#spa/home_guess">\
		        						<img src="./source/images/home_guess.jpg" alt="" />\
		        					</a>\
		        				</div>\
		        			</div>\
		        			<div class="home_cell">\
			        			<dl>\
			        				<dt><a href="#spa/home_cell_author"></a></dt>\
			        				<dd><a href="#spa/home_cell_content"></a></dd>\
			        			</dl>\
		        			</div>\
		        		</div>\
		        	</div>\
		        </div>\
		        <div class="swiper-slide" id="scroll2">\
		        	<div class="con_case">\
		        		<dl>\
		        			<dd class="case_cell">\
		        				<a href="#spa/case_cell">\
		        					<img src="./source/images/case1.jpg"/>\
		        				</a>\
		        				<a href="add_watches" class="case_cell_watches">\
		        					<i class="iconfont">&#xe718;</i>\
		        					<span>21万+</span>\
		        				</a>\
		        			</dd>\
		        			<dt class="case_title">\
		        				<div class="case_author">\
			        				<a href="#spa/designer">\
			        					<img src="./source/images/designer1.jpg"/>\
			        				</a>\
			        			</div>\
			        			<div class="case_title_con">休闲中式</div>\
			        			<div class="case_designer">Rapheal[上海]</div>\
			        			<div class="case_info">\
			        				<div class="case_reser">\
			        					<i class="iconfont">&#xe72d;</i>\
			        					<span>5</span>人预约\
			        				</div>\
			        				<div style="width:1rem; height:0.3rem"></div>\
			        				<div class="case_price">\
			        					<i class="iconfont">&#xe711;</i>\
			        					<span>5</span>元/㎡\
			        				</div>\
			        			</div>\
		        			</dt>\
		        		</dl>\
		        		<dl>\
		        			<dd class="case_cell">\
		        				<a href="#spa/case_cell">\
		        					<img src="./source/images/case2.jpg"/>\
		        				</a>\
		        				<a href="add_watches" class="case_cell_watches">\
		        					<i class="iconfont">&#xe718;</i>\
		        					<span>12万+</span>\
		        				</a>\
		        			</dd>\
		        			<dt class="case_title">\
		        				<div class="case_author">\
			        				<a href="#spa/designer">\
			        					<img src="./source/images/designer2.jpg"/>\
			        				</a>\
			        			</div>\
			        			<div class="case_title_con">美式小家养成记</div>\
			        			<div class="case_designer">蚂蚁设计张欢[重庆]</div>\
			        			<div class="case_info">\
			        				<div class="case_reser">\
			        					<i class="iconfont">&#xe72d;</i>\
			        					<span>2</span>人预约\
			        				</div>\
			        				<div style="width:1rem; height:0.3rem"></div>\
			        				<div class="case_price">\
			        					<i class="iconfont">&#xe711;</i>\
			        					<span>60-100</span>元/㎡\
			        				</div>\
			        			</div>\
		        			</dt>\
		        		</dl>\
		        		<dl>\
		        			<dd class="case_cell">\
		        				<a href="#spa/case_cell">\
		        					<img src="./source/images/case3.jpg"/>\
		        				</a>\
		        				<a href="add_watches" class="case_cell_watches">\
		        					<i class="iconfont">&#xe718;</i>\
		        					<span>5万+</span>\
		        				</a>\
		        			</dd>\
		        			<dt class="case_title">\
		        				<div class="case_author">\
			        				<a href="#spa/designer">\
			        					<img src="./source/images/designer3.jpg"/>\
			        				</a>\
			        			</div>\
			        			<div class="case_title_con">简约自然之家</div>\
			        			<div class="case_designer">崔与娟[上海]</div>\
			        			<div class="case_info">\
			        				<div class="case_reser">\
			        					<i class="iconfont">&#xe72d;</i>\
			        					<span>53</span>人预约\
			        				</div>\
			        				<div style="width:1rem; height:0.3rem"></div>\
			        				<div class="case_price">\
			        					<i class="iconfont">&#xe711;</i>\
			        					<span>150</span>元/㎡\
			        				</div>\
			        			</div>\
		        			</dt>\
		        		</dl>\
		        		<dl>\
		        			<dd class="case_cell">\
		        				<a href="#spa/case_cell">\
		        					<img src="./source/images/case4.jpg"/>\
		        				</a>\
		        				<a href="add_watches" class="case_cell_watches">\
		        					<i class="iconfont">&#xe718;</i>\
		        					<span>56万+</span>\
		        				</a>\
		        			</dd>\
		        			<dt class="case_title">\
		        				<div class="case_author">\
			        				<a href="#spa/designer">\
			        					<img src="./source/images/designer4.jpg"/>\
			        				</a>\
			        			</div>\
			        			<div class="case_title_con">风情小家</div>\
			        			<div class="case_designer">李宝珍[天津]</div>\
			        			<div class="case_info">\
			        				<div class="case_reser">\
			        					<i class="iconfont">&#xe72d;</i>\
			        					<span>3</span>人预约\
			        				</div>\
			        				<div style="width:1rem; height:0.3rem"></div>\
			        				<div class="case_price">\
			        					<i class="iconfont">&#xe711;</i>\
			        					<span>100-500</span>元/㎡\
			        				</div>\
			        			</div>\
		        			</dt>\
		        		</dl>\
		        	</div>\
		        </div>\
		        <div class="swiper-slide" id="scroll3">\
		        	<div class="con_choice">\
		        		<dl><a href=#spa/choice_cell">\
		        			<dd><img src="./source/images/choice_1.jpg"/></dd>\
		        			<dd class="choice_cell_focus">\
		        				<div class="choice_cell_watches">\
		        					<i class="iconfont">&#xe718;</i>\
		        					<span>3245</span>\
		        				</div>\
		        				<div class="choice_cell_praise">\
		        					<i class="iconfont">&#xe6f6;</i>\
		        					<span>234</span>\
		        				</div>\
		        			</dd>\
		        			<dd class="choice_cell_status choice_in">入住</dd>\
		        			<dt>\
		        				<div class="choice_author">\
		        					<img src="./source/images/designer6.jpg"/>\
		        				</div>\
		        				<div class="choice_info">\
		        					<div class="choice_info_title">[入住]二手房软装后焕然一新</div>\
		        					<div class="choice_info_city">[武汉]2室2厅1厨1卫/美式</div>\
		        				</div>\
		        			</dt>\
		        		</a></dl>\
		        		<dl><a href=#spa/choice_cell">\
		        			<dd><img src="./source/images/choice_2.jpg"/></dd>\
		        			<dd class="choice_cell_focus">\
		        				<div class="choice_cell_watches">\
		        					<i class="iconfont">&#xe718;</i>\
		        					<span>76245</span>\
		        				</div>\
		        				<div class="choice_cell_praise">\
		        					<i class="iconfont">&#xe6f6;</i>\
		        					<span>3145</span>\
		        				</div>\
		        			</dd>\
		        			<dd class="choice_cell_status choice_notin">精选</dd>\
		        			<dt>\
		        				<div class="choice_author">\
		        					<img src="./source/images/designer2.jpg"/>\
		        				</div>\
		        				<div class="choice_info">\
		        					<div class="choice_info_title">[精选]60平宽敞的一室户格局</div>\
		        					<div class="choice_info_city">[杭州]2室2厅1厨1卫/宜家</div>\
		        				</div>\
		        			</dt>\
		        		</a></dl>\
		        		<dl><a href=#spa/choice_cell">\
		        			<dd><img src="./source/images/choice_3.jpg"/></dd>\
		        			<dd class="choice_cell_focus">\
		        				<div class="choice_cell_watches">\
		        					<i class="iconfont">&#xe718;</i>\
		        					<span>7645</span>\
		        				</div>\
		        				<div class="choice_cell_praise">\
		        					<i class="iconfont">&#xe6f6;</i>\
		        					<span>8124</span>\
		        				</div>\
		        			</dd>\
		        			<dd class="choice_cell_status choice_in">入住</dd>\
		        			<dt>\
		        				<div class="choice_author">\
		        					<img src="./source/images/designer4.jpg"/>\
		        				</div>\
		        				<div class="choice_info">\
		        					<div class="choice_info_title">[入住]小窝养成记</div>\
		        					<div class="choice_info_city">[上海]2室2厅1厨1卫/现代</div>\
		        				</div>\
		        			</dt>\
		        		</a></dl>\
		        		<dl><a href=#spa/choice_cell">\
		        			<dd><img src="./source/images/choice_4.jpg"/></dd>\
		        			<dd class="choice_cell_focus">\
		        				<div class="choice_cell_watches">\
		        					<i class="iconfont">&#xe718;</i>\
		        					<span>1745</span>\
		        				</div>\
		        				<div class="choice_cell_praise">\
		        					<i class="iconfont">&#xe6f6;</i>\
		        					<span>6234</span>\
		        				</div>\
		        			</dd>\
		        			<dd class="choice_cell_status choice_in">入住</dd>\
		        			<dt>\
		        				<div class="choice_author">\
		        					<img src="./source/images/designer4.jpg"/>\
		        				</div>\
		        				<div class="choice_info">\
		        					<div class="choice_info_title">[入住]IT男和设计女的宅窝</div>\
		        					<div class="choice_info_city">[嘉兴]2室2厅1厨1卫/现代</div>\
		        				</div>\
		        			</dt>\
		        		</a></dl>\
		        		<dl><a href=#spa/choice_cell">\
		        			<dd><img src="./source/images/choice_5.jpg"/></dd>\
		        			<dd class="choice_cell_focus">\
		        				<div class="choice_cell_watches">\
		        					<i class="iconfont">&#xe718;</i>\
		        					<span>345</span>\
		        				</div>\
		        				<div class="choice_cell_praise">\
		        					<i class="iconfont">&#xe6f6;</i>\
		        					<span>34</span>\
		        				</div>\
		        			</dd>\
		        			<dd class="choice_cell_status choice_notin">精选</dd>\
		        			<dt>\
		        				<div class="choice_author">\
		        					<img src="./source/images/designer5.jpg"/>\
		        				</div>\
		        				<div class="choice_info">\
		        					<div class="choice_info_title">[入住]自己设计的小复式</div>\
		        					<div class="choice_info_city">[北京]2室2厅1厨1卫/欧式</div>\
		        				</div>\
		        			</dt>\
		        		</a></dl>\
		        	</div>\
		        </div>\
		        <div class="swiper-slide" id="scroll4">\
		        	<div class="con_inspir">\
		        		<div class="inspir_con">\
		        			<div class="inspir_left">\
			        			<a href="#spa/inspir_cell"><img src="./source/images/inspir_1.jpg"/></a>\
			        			<a href="#spa/inspir_cell"><img src="./source/images/inspir_4.jpg"/></a>\
			        			<a href="#spa/inspir_cell"><img src="./source/images/inspir_5.jpg"/></a>\
			        			<a href="#spa/inspir_cell"><img src="./source/images/inspir_8.jpg"/></a>\
		        			</div>\
		        			<div class="inspir_right">\
		        				<a href="#spa/inspir_cell"><img src="./source/images/inspir_2.jpg"/></a>\
		        				<a href="#spa/inspir_cell"><img src="./source/images/inspir_3.jpg"/></a>\
		        				<a href="#spa/inspir_cell"><img src="./source/images/inspir_6.jpg"/></a>\
			        			<a href="#spa/inspir_cell"><img src="./source/images/inspir_7.jpg"/></a>\
		        			</div>\
		        		</div>\
		        	</div>\
		        </div>\
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
		var title_nav = 0;
		// 强制定义中间内容框的高度
		$('#swiper_home').css('height', $('#swiper_home').parent().css('height'));
		// 初始化内容区域的swiper滑动
		var guideSwiper = new Swiper ('#swiper_home', {
		    direction: 'horizontal',
		    resistanceRatio : 0,
		    longSwipesRatio : 0.2,
		    touchAngle : 20,
		    threshold : 10,
		    loop: false,
		    onSlideChangeEnd: function(swiper){
		    	var go_num = guideSwiper.progress * 4;
		        $('nav li').eq(now_active).removeClass('nav_act');
		        $('nav li').eq(go_num).addClass('nav_act');
		        now_active = go_num;
		        checkoutTitle(now_active);
		    },
		});

		// 初始化内容区域的swiper滑动
		var home_ban_Swiper = new Swiper ('#home_ban_swiper', {
		    direction: 'horizontal',
		    resistanceRatio : 0.8,
		    loop: false,
		    autoplay: 3000,
		    pagination: '.swiper-pagination',
		});


		// 导航点击事件切换页面
		(function(){
			$('nav li').each(function(){
				$(this).click(function(){
					guideSwiper.slideTo($(this).index(), 300, false);
					$('nav li').eq(now_active).removeClass('nav_act');
					$(this).addClass('nav_act');
					now_active = $(this).index();
					checkoutTitle(now_active);
				})
			})    
		})();

		// 顶部精选和最新内容切换
		(function(){
			$('.title').on('click', function(e){
				if ( e.target.tagName.toLowerCase() == 'p') {
					$(e.target).toggleClass('title_nav_act');
					$(e.target).siblings().toggleClass('title_nav_act');
				}
			})
		})();
		
		//console.log($('#scroll2')[0]);
		$('#scroll2').on('scroll', function(){
			console.log(234);
		})

		// 固定swiper高度
		$('#swiper_home').css('height', $('#swiper_home').parent().css('height'));


		var ajaxOff = false;
		// 区域滚动效果
		setTimeout(function(){
			var myScroll1 = new IScroll('#scroll1',{
				mouseWheel: true,
				fadeScrollbars : true,
				interactiveScrollbars : true,
				scrollbars: true
			});

			var myScroll2 = new IScroll('#scroll2',{
				probeType: 3,	// 用于检测页面滚动位置
				mouseWheel: true,
				fadeScrollbars : true,
				interactiveScrollbars : true,
				scrollbars: true,
			});
			
			myScroll2.on('scrollStart', function(){
				myScroll2.refresh();
			});

			// 案例页面的下拉加载更多  使用服务器端的allow-origin设定
			myScroll2.on('scroll', function(){
				var nowPos = $('.con_case')[0].offsetHeight - $('.con_case').parent()[0].offsetHeight - parseInt(this.y)*(-1);
				if ( nowPos <= 100 && ajaxOff == false ) {
					console.log('go');
					$.post(
						'http://tb1483883.mvip7.xyz/con_case.php',
						function(data){
							var caseInfo = JSON.parse(data);
							var str = '';
							for (var i = 0; i < caseInfo.length; i++) {
								str += '<dl><dd class="case_cell"><a href="#spa/case_cell"><img src="'+caseInfo[i].imgurl+'"/></a><a href="add_watches" class="case_cell_watches"><i class="iconfont">&#xe718;</i><span>'+caseInfo[i].watches+'</span></a></dd><dt class="case_title"><div class="case_author"><a href="#spa/designer"><img src="'+caseInfo[i].author_img+'"/></a></div><div class="case_title_con">'+caseInfo[i].title+'</div><div class="case_designer">'+caseInfo[i].designer+'</div><div class="case_info"><div class="case_reser"><i class="iconfont">&#xe72d;</i><span>'+caseInfo[i].reservation+'</span>人预约</div><div style="width:1rem; height:0.3rem"></div><div class="case_price"><i class="iconfont">&#xe711;</i><span>'+caseInfo[i].price+'</span>元/㎡</div></div></dt></dl>';
							}
							$('.con_case')[0].innerHTML += str;
							myScroll2.refresh();
							setTimeout(function(){
								ajaxOff = false;
							}, 800);
						}
					);
					ajaxOff = true;
				}
			});
			

			var myScroll3 = new IScroll('#scroll3',{
				probeType: 3,
				mouseWheel: true,
				fadeScrollbars : true,
				interactiveScrollbars : true,
				scrollbars: true
			});

			myScroll3.on('scrollStart', function(){
				myScroll3.refresh();
			});

			// 日记页面的下拉加载更多
			myScroll3.on('scroll', function(){
				var nowPos = $('.con_choice')[0].offsetHeight - $('.con_choice').parent()[0].offsetHeight - parseInt(this.y)*(-1);
				if ( nowPos <= 100 && ajaxOff == false ) {
					$.ajax({
						type : 'POST',
				        url: 'http://tb1483883.mvip7.xyz/con_choice.php',
				        dataType: "jsonp",
				        jsonp: 'callback',
				        jsonpCallback:"addChoice",
				        timeout : 3000,
				        success: function (data) {
				        	var str = '';
				            for (var i = 0; i < data.length; i++) {
				            	var inClass = data[i].in == 'y' ? 'choice_in' : 'choice_notin';
				            	var inClass_con = data[i].in == 'y' ? '入住' : '精选';
				            	str += '<dl><a href=#spa/choice_cell"><dd><img src="'+data[i].imgurl+'"/></dd><dd class="choice_cell_focus"><div class="choice_cell_watches"><i class="iconfont">&#xe718;</i><span>'+data[i].watches+'</span></div><div class="choice_cell_praise"><i class="iconfont">&#xe6f6;</i><span>'+data[i].good+'</span></div></dd><dd class="choice_cell_status '+inClass+'">'+inClass_con+'</dd><dt><div class="choice_author"><img src="'+data[i].author_img+'"/></div><div class="choice_info"><div class="choice_info_title">'+data[i].title+'</div><div class="choice_info_city">'+data[i].designer+'</div></div></dt></a></dl>';
				            }
				            $('.con_choice')[0].innerHTML += str;
				            myScroll3.refresh();
							setTimeout(function(){
								ajaxOff = false;
							}, 800);
				        }
				    });

					ajaxOff = true;
				}

			});

			var myScroll4 = new IScroll('#scroll4',{
				probeType: 3,
				mouseWheel: true,
				fadeScrollbars : true,
				interactiveScrollbars : true,
				scrollbars: true
			});

			myScroll4.on('scrollStart', function(){
				myScroll4.refresh();
			});

			// 轮播图无限下拉
			myScroll4.on('scroll', function(){
				var nowPos = $('.con_inspir')[0].offsetHeight - $('.con_inspir').parent()[0].offsetHeight - parseInt(this.y)*(-1);
				if ( nowPos <= 200 && ajaxOff == false ) {
					$.ajax({
						type : 'POST',
				        url: 'http://tb1483883.mvip7.xyz/con_inspir.php',
				        dataType: "jsonp",
				        jsonp: 'callback',
				        jsonpCallback:"addInspir",
				        timeout : 3000,
				        success: function (data) {
				            for (var i = 0; i < data.length; i++) {
				            	var str = '<a href="#spa/inspir_cell"><img src="'+data[i].imgurl+'"/></a>';
				            	if($('.inspir_left')[0].offsetHeight <= $('.inspir_right')[0].offsetHeight){
				            		$('.inspir_left')[0].innerHTML += str;
				            	}else{
				            		$('.inspir_right')[0].innerHTML += str;
				            	}
				            }
				            myScroll4.refresh();
							setTimeout(function(){
								ajaxOff = false;
							}, 800);
				        }
				    });
					ajaxOff = true;
				}
			});

		}, 100)

		var string_title = '<p class="title_nav_choice title_nav_act">精选</p><p class="title_nav_least">最新</p>';
		var arrTitle = ['发现', '案例', string_title, '灵感', '攻略'];
		function checkoutTitle(now_active){
			$('.title').html(arrTitle[now_active]);
		}
	}
})