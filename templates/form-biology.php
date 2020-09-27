<?php

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['uname-biology'])) {$unameBiology = $_POST['uname-biology'];}
    if (isset($_POST['yourphone-biology'])) {$yourphoneBiology = $_POST['yourphone-biology'];}
    if (isset($_POST['howto-biology'])) {$howtoBiology = $_POST['howto-biology'];}
    if (isset($_POST['yourtext-biology'])) {$yourtextBiology = $_POST['yourtext-biology'];}

    $to = "o.school.community@gmail.com";
    // $to = "deniskosv@gmail.com";
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: "."oschool.com.ua"." <from@"."oschool.com.ua".">\r\n";
    $subject = "Остались вопросы? oschool.com.ua";
    $message = "<span style='font-size: 20px;'>Имя: <b>$unameBiology</b>  <br /><br />\n\nТелефон: <b>$yourphoneBiology</b> <br /><br />Как связаться: <b>$howtoBiology</b> <br /><br />Сообщение: <b>$yourtextBiology</b></span>";
    $send = mail ($to, $subject, $message, $headers);
  } else {
    http_response_code(403);
    echo "Попробуйте еще раз";
  }

?>