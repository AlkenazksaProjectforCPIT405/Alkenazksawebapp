<?php
class User
{
    private $conn;
    private $table = 'user';

    public $id;
    public $email;
    public $hash;

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
public function signUp(&$hashed_pass){
    $sql = "INSERT INTO user (id,  email, hash) VALUES (null, :email,  :hash)";
    $stmt = $this->conn->prepare($sql);

    $stmt->bindParam(':email', $this->email);
  
    $stmt->bindParam(':hash', $hashed_pass);

    try {
        $stmt->execute();
        echo json_encode(['success' => true, 'message' => "New record created successfully"]);

    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => "Account Exists"]);
    }
}

public function signIn(&$password){
    $query = "SELECT email, hash FROM user WHERE email=:email";
    $stmt = $this->conn->prepare($query);
    $stmt->bindParam(":email", $this->email);
    try {
        $stmt->execute();

        if ($stmt->rowCount() >= 1) {
            $fetch = $stmt->fetch();
            
            if (password_verify($password, $fetch[1])) {
                echo json_encode(['success' => true, 'message' => "Login Successful"]);
            } else {
                echo json_encode(['success' => false, 'message' => "Invalid Credentials"]);
            }

        } else {
            echo json_encode(['success' => false, 'message' => "Account Doesn't Exists"]);
        }

    } catch (PDOException $e) {
        echo json_encode(['success' => false, 'message' => "ُError: " . $e->getMessage()]);

    }
}


}