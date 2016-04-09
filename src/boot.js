requirejs.config({
   baseUrl: './js/',
   paths: {}
})

$doc = $(document);

// 首页
var pageGuide = {
  route: '',
  classname: 'guide',
  animate: 'fadeIn',
  view: function() {
    var $page = this
    requirejs(['guide'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
}