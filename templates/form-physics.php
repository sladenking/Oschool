<?php

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['uname-physics'])) {$unamePhysics = $_POST['uname-physics'];}
    if (isset($_POST['yourphone-physics'])) {$yourphonePhysics = $_POST['yourphone-physics'];}
    if (isset($_POST['howto-physics'])) {$howtoPhysics = $_POST['howto-physics'];}
    if (isset($_POST['yourtext-physics'])) {$yourtextPhysics = $_POST['yourtext-physics'];}

    $to = "o.school.community@gmail.com";
    // $to = "deniskosv@gmail.com";
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: "."oschool.com.ua"." <from@"."oschool.com.ua".">\r\n";
    $subject = "Остались вопросы? oschool.com.ua";
    $message = "<span style='font-size: 20px;'>Имя: <b>$unamePhysics</b>  <br /><br />\n\nТелефон: <b>$yourphonePhysics</b> <br /><br />Как связаться: <b>$howtoPhysics</b> <br /><br />Сообщение: <b>$yourtextPhysics</b></span>";
    $send = mail ($to, $subject, $message, $headers);
  } else {
    http_response_code(403);
    echo "Попробуйте еще раз";
  }

?>