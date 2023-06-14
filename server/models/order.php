<?php
class Order
{
    private $conn;
    private $table = 'orders';

    public $id;
    public $email;
    public $items;
    public $totalPrice;

    public function __construct($db)
    {
        $this->conn = $db;
    }
    
    public function setEmail($email){
        $this->email = $email;
    }

    public function getEmail(){
        return $this->email;
    }
    
    public function getItems(){
        return $this->items;
    }
    public function setItems($items){
        $this->items = $items;
    }

    public function getTotalPrice(){
        return $this->totalPrice;
    }
    public function setTotalPrice($totalPrice){
        $this->totalPrice = $totalPrice;
    }

    public function makeOrder(){
        $sql = "INSERT INTO orders (id, email, items, totalPrice) VALUES (NULL, :email, :items, :totalPrice)";
        $stmt = $this->conn->prepare($sql);
        $items = json_encode($this->items);
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':items', $items);
        $stmt->bindParam(':totalPrice', $this->totalPrice);
    
        try {
            $stmt->execute();
            echo json_encode(['success' => true, 'message' => "New record created successfully"]);
    
        } catch (PDOException $e) {
            echo json_encode(['success' => false, 'message' => "Account Exists"]);
        }
    }


public function getOrders()
{
    $query = $this->conn->prepare("SELECT * FROM orders where email= :email");
    $query->bindParam(':email', $this->email);
    $query->execute();
    $results = $query->fetchAll(PDO::FETCH_ASSOC);
    foreach ($results as &$result) {
    $result['items'] = json_decode($result['items']);

    }
    echo json_encode($results);
}


}