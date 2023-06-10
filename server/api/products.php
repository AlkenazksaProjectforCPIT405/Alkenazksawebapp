<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Content-type: application/json');

include '../db/database.php';

$database = new Database();
$conn = $database->connect();

$query = "SELECT * FROM product" ;
        $stmt = $conn->prepare($query);
        if ($stmt->execute() && $stmt->rowCount() > 0) {
            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        echo json_encode($results);
       
