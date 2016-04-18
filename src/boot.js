requirejs.config({
   baseUrl: './src/js/',
   paths: {}
})

$doc = $(document);

// 首页
var pageGuide = {
  route: '',
  classname: 'guide',
  animate: 'fadeIn',
  view: function() {
    var $page = this;
    requirejs(['pageGuide'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData]);
    })
  }
}


// 首页 也是项目的骨架
var pageHome = {
  route : 'spa/home',
  classname : 'spa-home',
  animate : 'pushOutLeft',
  view : function(){
    var $page = this;
    requirejs(['pageHome'], function(viewData){
      $doc.trigger('spa:initpage', [$page, viewData]);
    })
  }
}

// 用户主页
var pageUser = {
  route : 'spa/user',
  classname : 'spa-user',
  animate : 'slideInLeft',
  view : function(){
    var $page = this;
    requirejs(['pageUser'], function(viewData){
      $doc.trigger('spa:initpage', [$page, viewData]);
    })
  }
}

// 搜索页面
var pageSearch = {
  route : 'spa/search',
  classname : 'spa-search',
  animate : 'slideInLeft',
  view : function(){
    var $page = this;
    requirejs(['pageSearch'], function(viewData){
      $doc.trigger('spa:initpage', [$page, viewData]);
    })
  }
}

// banner图详情页面
var pageBanner = {
  route : 'spa/banner',
  classname : 'spa-banner',
  animate : 'slideInLeft',
  view : function(){
    var $page = this;
    requirejs(['pageBanner'], function(viewData){
      $doc.trigger('spa:initpage', [$page, viewData]);
    })
  }
}


// banner图详情页面
var server_design = {
  route : 'spa/server_design',
  classname : 'spa-server_design',
  animate : 'slideInLeft',
  view : function(){
    var $page = this;
    requirejs(['server_design'], function(viewData){
      $doc.trigger('spa:initpage', [$page, viewData]);
    })
  }
}

// banner图详情页面
var server_day = {
  route : 'spa/server_day',
  classname : 'spa-server_day',
  animate : 'slideInLeft',
  view : function(){
    var $page = this;
    requirejs(['server_day'], function(viewData){
      $doc.trigger('spa:initpage', [$page, viewData]);
    })
  }
}

// banner图详情页面
var server_cash = {
  route : 'spa/server_cash',
  classname : 'spa-server_cash',
  animate : 'slideInLeft',
  view : function(){
    var $page = this;
    requirejs(['server_cash'], function(viewData){
      $doc.trigger('spa:initpage', [$page, viewData]);
    })
  }
}

// banner图详情页面
var server_gua = {
  route : 'spa/server_gua',
  classname : 'spa-server_gua',
  animate : 'slideInLeft',
  view : function(){
    var $page = this;
    requirejs(['server_gua'], function(viewData){
      $doc.trigger('spa:initpage', [$page, viewData]);
    })
  }
}

// 案例详情页面
var case_detail = {
  route : 'spa/case_detail',
  classname : 'spa-case_detail',
  animate : 'slideInLeft',
  view : function(){
    var $page = this;
    requirejs(['case_detail'], function(viewData){
      $doc.trigger('spa:initpage', [$page, viewData]);
    })
  }
}

// 设计师主页
var designer = {
  route : 'spa/designer',
  classname : 'spa-designer',
  animate : 'slideInLeft',
  view : function(){
    var $page = this;
    requirejs(['designer'], function(viewData){
      $doc.trigger('spa:initpage', [$page, viewData]);
    })
  }
}

var pages = [pageGuide, pageHome, pageUser, pageSearch,
 pageBanner, server_design, server_day, server_cash,
  server_gua, case_detail, designer];
$doc.trigger('spa:route', pages);





$(function() {
  $doc.trigger('spa:boot');
})
