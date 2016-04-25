<?php
 
header("Content-Type: text/html; charset=utf-8");

$data = array(
	'0' => array(
		'imgurl' => './source/images/inspir_1.jpg'
		),
	'1' => array(
		'imgurl' => './source/images/inspir_8.jpg'
		),
	'2' => array(
		'imgurl' => './source/images/inspir_2.jpg'
		),
	'3' => array(
		'imgurl' => './source/images/inspir_7.jpg'
		),
	'4' => array(
		'imgurl' => './source/images/inspir_3.jpg'
		),
	'5' => array(
		'imgurl' => './source/images/inspir_6.jpg'
		),
	'6' => array(
		'imgurl' => './source/images/inspir_4.jpg'
		),
	'7' => array(
		'imgurl' => './source/images/inspir_5.jpg'
		),
	'8' => array(
		'imgurl' => './source/images/inspir_7.jpg'
		)
	);


$callback = $_GET['callback'];
echo $callback.'('.json_encode($data).')';
exit;
 
?>