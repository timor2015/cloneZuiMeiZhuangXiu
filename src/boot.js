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

$doc.trigger('spa:route', [pageGuide, pageHome]);





$(function() {
  $doc.trigger('spa:boot');
})
