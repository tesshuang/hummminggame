<?php
    require_once('gameconnect.php');

    $usrname = $_POST['username'];

    $result = $db->query("INSERT INTO userinfo (username) VALUES ('$usrname')");
    

    $arr = $result->fetchAll();
    
    echo json_encode($arr);
?>
