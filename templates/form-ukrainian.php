<?php

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['uname-ukrainian'])) {$unameUkrainian = $_POST['uname-ukrainian'];}
    if (isset($_POST['yourphone-ukrainian'])) {$yourphoneUkrainian = $_POST['yourphone-ukrainian'];}
    if (isset($_POST['howto-ukrainian'])) {$howtoUkrainian = $_POST['howto-ukrainian'];}
    if (isset($_POST['yourtext-ukrainian'])) {$yourtextUkrainian = $_POST['yourtext-ukrainian'];}

    $to = "o.school.community@gmail.com";
    // $to = "deniskosv@gmail.com";
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: "."oschool.com.ua"." <from@"."oschool.com.ua".">\r\n";
    $subject = "Остались вопросы? oschool.com.ua";
    $message = "<span style='font-size: 20px;'>Имя: <b>$unameUkrainian</b>  <br /><br />\n\nТелефон: <b>$yourphoneUkrainian</b> <br /><br />Как связаться: <b>$howtoUkrainian</b> <br /><br />Сообщение: <b>$yourtextUkrainian</b></span>";
    $send = mail ($to, $subject, $message, $headers);
  } else {
    http_response_code(403);
    echo "Попробуйте еще раз";
  }

?>