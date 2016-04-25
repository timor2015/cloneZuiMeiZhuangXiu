<?php
 
header("Content-Type: text/html; charset=utf-8");


$data = array(
	'0' => array(
		'in' => 'y',
		'imgurl' => './source/images/choice_1.jpg',
		'watches' => '4万+',
		'good' => '2367',
		'author_img' => './source/images/designer1.jpg',
		'title' => '[入住]超迷你户型,客厅秒变卧室!',
		'designer' => '[天津]1室1厅1卫/宜家',
		),
	'1' => array(
		'in' => 'y',
		'imgurl' => './source/images/choice_3.jpg',
		'watches' => '9万+',
		'good' => '126',
		'author_img' => './source/images/designer5.jpg',
		'title' => '[入住]美美家的欧式现代港湾',
		'designer' => '[杭州]3室2厅2卫/现代',
		),
	'2' => array(
		'in' => 'n',
		'imgurl' => './source/images/choice_2.jpg',
		'watches' => '4万+',
		'good' => '2367',
		'author_img' => './source/images/designer3.jpg',
		'title' => '[精选]实木控打造爱的家园!',
		'designer' => '[北京]3室2厅1卫/美式',
		),
	'3' => array(
		'in' => 'y',
		'imgurl' => './source/images/choice_4.jpg',
		'watches' => '3482',
		'good' => '876',
		'author_img' => './source/images/designer7.jpg',
		'title' => '[入住]美式欧式混搭Loft房',
		'designer' => '[北京]3室2厅1卫/欧式',
		),
	'4' => array(
		'in' => 'n',
		'imgurl' => './source/images/choice_1.jpg',
		'watches' => '5万+',
		'good' => '8245',
		'author_img' => './source/images/designer2.jpg',
		'title' => '[精选]老房老味道:[80后的90年代]',
		'designer' => '[郑州]3室2厅1卫/现代',
		),
	'5' => array(
		'in' => 'y',
		'imgurl' => './source/images/choice_2.jpg',
		'watches' => '1904',
		'good' => '129',
		'author_img' => './source/images/designer7.jpg',
		'title' => '[入住]美式田园风',
		'designer' => '[武汉]3室2厅1卫/田园',
		),
	);


$callback = $_GET['callback'];
echo $callback.'('.json_encode($data).')';
exit;
 
?>