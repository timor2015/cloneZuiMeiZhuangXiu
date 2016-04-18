# cloneZuiMeiZhuangXiu
仿最美装修webapp

这是一个模仿最美装修的web页面。

> 页面架构

页面使用了赵达的SPA框架(http://zhaoda.net/spa/docs/)，用于模仿原生APP中的视图转换效果.

整个框架采用了requireJS进行模块化开发.

> 工具和库

辅助工具使用了gulp、gulp-ruby-sass、browser-sync实现SASS的编译，本地服务和浏览器的更新.

页面布局采用flexbox方式布局，在页面加载时动态的获取页面的宽度用于确定一个适合的font-size值，通过rem单位进行页面排版.

页面中使用了 zepto/swiper/iscroll 三个js库来实现DOM的选择与操作，页面滑动转场以及区域滚动效果.

> ajax交互

页面中使用了ajax进行数据的拉取，在案例页面中使用的是CORS设置服务器端allow-origin的方式实现跨域请求，在日记/灵感页面中使用的是JSONP方式跨域请求数据。

> php接口

php代码放在了 http://tb1483883.mvip7.xyz/ 中，在淘宝买的虚拟空间，没有使用数据库，仅仅是echo出了一串死数据。