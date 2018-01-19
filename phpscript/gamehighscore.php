<?php
    require_once('gameconnect.php');

    $result = $db->query("SELECT MAX(user_score) AS highest FROM userinfo");
    

    $arr = $result->fetchAll();
    
    echo json_encode($arr);
?>
