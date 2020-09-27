<?php

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['uname-math'])) {$unameMath = $_POST['uname-math'];}
    if (isset($_POST['yourphone-math'])) {$yourphoneMath = $_POST['yourphone-math'];}
    if (isset($_POST['howto-math'])) {$howtoMath = $_POST['howto-math'];}
    if (isset($_POST['yourtext-math'])) {$yourtextMath = $_POST['yourtext-math'];}

    $to = "o.school.community@gmail.com";
    // $to = "deniskosv@gmail.com";
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: "."oschool.com.ua"." <from@"."oschool.com.ua".">\r\n";
    $subject = "Остались вопросы? oschool.com.ua";
    $message = "<span style='font-size: 20px;'>Имя: <b>$unameMath</b>  <br /><br />\n\nТелефон: <b>$yourphoneMath</b> <br /><br />Как связаться: <b>$howtoMath</b> <br /><br />Сообщение: <b>$yourtextMath</b></span>";
    $send = mail ($to, $subject, $message, $headers);
  } else {
    http_response_code(403);
    echo "Попробуйте еще раз";
  }

?>