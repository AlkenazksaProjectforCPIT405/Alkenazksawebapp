<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Content-type: application/json');

include '../db/database.php';
include_once '../models/order.php';
$db = new Database();
$conn = $db->connect();
$order = new Order($conn); 
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    // Insert the data into the table
$order->setEmail($data->email);
$order->setTotalPrice($data->totalPrice);
$order->setItems($data->items);

$order->makeOrder();
}