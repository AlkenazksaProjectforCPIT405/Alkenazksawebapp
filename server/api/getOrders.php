<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Content-type: application/json');

include '../db/database.php';
include_once '../models/order.php';

$db = new Database();
$conn = $db->connect();

$email = $_GET['email'];


$order = new Order($conn); 

$order->setEmail($email);



$order->getOrders();