<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Content-type: application/json');

include '../db/Database.php';
include_once '../models/user.php';
function debug_to_console($data) {
    $output = $data;
    if (is_array($output))
        $output = implode(',', $output);

    echo "<script>console.log('Debug Objects: " . $output . "' );</script>";
}

$db = new Database();
$conn = $db->connect();
$user = new User($conn);
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    if (!filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => "Invalid email format"]);
    } else if (strlen($data->password) < 8 || !preg_match("#[0-9]+#", $data->password) || !preg_match("#[A-Z]+#", $data->password) || !preg_match("#[a-z]+#", $data->password) || !preg_match("#\W+#", $data->password)) {
        echo json_encode(['success' => false, 'message' => "Invalid password format"]);
    } else {
        $hashed_pass = password_hash($data->password, PASSWORD_DEFAULT);

       

       $user->setEmail($data->email);
     
        // Insert the data into the table
       $user->signUp($hashed_pass);
    }
}