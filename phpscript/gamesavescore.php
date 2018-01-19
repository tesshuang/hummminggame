<?php
    require_once('gameconnect.php');
    $usrscore = $_POST['usrscore'];
    $cusrname = $_POST['cusrname'];

    $result = $db->query("UPDATE userinfo SET user_score = '$usrscore' WHERE username = '$cusrname'");
    

    $arr = $result->fetchAll();
    
    echo json_encode($arr);
?>
