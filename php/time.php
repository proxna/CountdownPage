<?php
	$currenttime=new DateTime("now");
	$targettime=new DateTime('2017-03-10 07:05:00');
	$diff=$currenttime->diff($targettime);
	$responce=array();
	$responce['days']=$diff->format('%a');
	$responce['hours']=$diff->format('%H');
	$responce['minutes']=$diff->format('%I');
	$responce['seconds']=$diff->format('%S');
	echo json_encode($responce);
?>