<?php

header("Content-Type: text/html; charset=utf-8");


function make_cors($origin = '*') {
 
    $request_method = $_SERVER['REQUEST_METHOD'];
 
    if ($request_method === 'OPTIONS') {
 
        header('Access-Control-Allow-Origin:'.$origin);
        header('Access-Control-Allow-Credentials:true');
        header('Access-Control-Allow-Methods:GET, POST, OPTIONS');
 
        header('Access-Control-Max-Age:1728000');
        header('Content-Type:text/plain charset=UTF-8');
        header('Content-Length: 0',true);
 
        header('status: 204');
        header('HTTP/1.0 204 No Content');
 
    }
 
    if ($request_method === 'POST') {
 
        header('Access-Control-Allow-Origin:'.$origin);
        header('Access-Control-Allow-Credentials:true');
        header('Access-Control-Allow-Methods:GET, POST, OPTIONS');
 
    }
 
    if ($request_method === 'GET') {
 
        header('Access-Control-Allow-Origin:'.$origin);
        header('Access-Control-Allow-Credentials:true');
        header('Access-Control-Allow-Methods:GET, POST, OPTIONS');
 
    }
 
}

make_cors('http://timor2015.github.io');

$data = array(
	'0' => array(
		'imgurl' => './source/images/case1.jpg',
		'watches' => '4万+',
		'author_img' => './source/images/designer1.jpg',
		'title' => '地中海风格',
		'designer' => '绿豆粉[天津]',
		'reservation' => '23',
		'price' => '100-150'
		),
	'1' => array(
		'imgurl' => './source/images/case4.jpg',
		'watches' => '5382',
		'author_img' => './source/images/designer5.jpg',
		'title' => '锦瑟流年',
		'designer' => '合肥李秀领设计师[合肥]',
		'reservation' => '15',
		'price' => '120'
		),
	'2' => array(
		'imgurl' => './source/images/case2.jpg',
		'watches' => '11万+',
		'author_img' => './source/images/designer2.jpg',
		'title' => '好法式风情',
		'designer' => 'TK设计事务所[杭州]',
		'reservation' => '23',
		'price' => '150-300'
		),
	'3' => array(
		'imgurl' => './source/images/case3.jpg',
		'watches' => '1026',
		'author_img' => './source/images/designer6.jpg',
		'title' => '北欧点点',
		'designer' => '轻语设计宋小聪[成都]',
		'reservation' => '73',
		'price' => '220-300'
		),
	);

echo  json_encode($data);


?>