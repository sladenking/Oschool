<?php

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['uname-english'])) {$unameEnglish = $_POST['uname-english'];}
    if (isset($_POST['yourphone-english'])) {$yourphoneEnglish = $_POST['yourphone-english'];}
    if (isset($_POST['howto-english'])) {$howtoEnglish = $_POST['howto-english'];}
    if (isset($_POST['yourtext-english'])) {$yourtextEnglish = $_POST['yourtext-english'];}

    $to = "o.school.community@gmail.com";
    // $to = "deniskosv@gmail.com";
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: "."oschool.com.ua"." <from@"."oschool.com.ua".">\r\n";
    $subject = "Остались вопросы? oschool.com.ua";
    $message = "<span style='font-size: 20px;'>Имя: <b>$unameEnglish</b>  <br /><br />\n\nТелефон: <b>$yourphoneEnglish</b> <br /><br />Как связаться: <b>$howtoEnglish</b> <br /><br />Сообщение: <b>$yourtextEnglish</b></span>";
    $send = mail ($to, $subject, $message, $headers);
  } else {
    http_response_code(403);
    echo "Попробуйте еще раз";
  }

?>