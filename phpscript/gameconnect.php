<?php
    header("Access-Control-Allow-Origin:*");
    $servername = "localhost";
    $dblogin = "root";
    $password = "root";
    $dbname = "gamelogin";

    try {
        $db = new PDO("mysql:host=$servername;dbname=$dbname", $dblogin, $password);
            
    }catch(PDOException $e){
        echo $e ->getMessage();
    }
?>
