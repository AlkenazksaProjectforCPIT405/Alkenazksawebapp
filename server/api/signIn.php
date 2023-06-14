<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Content-type: application/json');

include '../db/Database.php';
include_once '../models/user.php';
$db = new Database();
$conn = $db->connect();
$user = new User($conn);
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $user->setEmail($data->email);
    
   

    $user->signIn($data->password);
}