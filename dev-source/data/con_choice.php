<?php
 
header("Content-Type: text/html; charset=utf-8");


$data = array(
	'0' => array(
		'in' => 'y',
		'imgurl' => './source/images/choice1.jpg',
		'watches' => '4万+',
		'good' => '2367',
		'author_img' => './source/images/designer1.jpg',
		'title' => '[入住]超迷你户型,客厅秒变卧室!',
		'designer' => '[天津]1室1厅1卫/宜家',
		),
	'1' => array(
		'in' => 'y',
		'imgurl' => './source/images/choice3.jpg',
		'watches' => '9万+',
		'good' => '126',
		'author_img' => './source/images/designer5.jpg',
		'title' => '[入住]美美家的欧式现代港湾',
		'designer' => '[杭州]3室2厅2卫/现代',
		),
	'2' => array(
		'in' => 'n',
		'imgurl' => './source/images/choice2.jpg',
		'watches' => '4万+',
		'good' => '2367',
		'author_img' => './source/images/designer3.jpg',
		'title' => '[精选]实木控打造爱的家园!',
		'designer' => '[北京]3室2厅1卫/美式',
		),
	'3' => array(
		'in' => 'y',
		'imgurl' => './source/images/choice4.jpg',
		'watches' => '3482',
		'good' => '876',
		'author_img' => './source/images/designer7.jpg',
		'title' => '[入住]美式欧式混搭Loft房',
		'designer' => '[北京]3室2厅1卫/欧式',
		),
	);


$callback = $_GET['callback'];
echo $callback.'('.json_encode($data).')';
exit;
 
?>