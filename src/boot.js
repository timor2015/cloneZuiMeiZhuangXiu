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


$doc.trigger('spa:route', [pageGuide, pageHome, pageUser, pageSearch]);





$(function() {
  $doc.trigger('spa:boot');
})
