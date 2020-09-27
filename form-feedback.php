<?php

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['uname-feedback'])) {$unameFeedback = $_POST['uname-feedback'];}
    if (isset($_POST['yourphone-feedback'])) {$yourphoneFeedback = $_POST['yourphone-feedback'];}
    if (isset($_POST['howto-feedback'])) {$howtoFeedback = $_POST['howto-feedback'];}
    if (isset($_POST['yourtext-feedback'])) {$yourtextFeedback = $_POST['yourtext-feedback'];}

    $to = "o.school.community@gmail.com";
    // $to = "deniskosv@gmail.com";
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: "."oschool.com.ua"." <from@"."oschool.com.ua".">\r\n";
    $subject = "Остались вопросы? oschool.com.ua";
    $message = "<span style='font-size: 20px;'>Имя: <b>$unameFeedback</b>  <br /><br />\n\nТелефон: <b>$yourphoneFeedback</b> <br /><br />Как связаться: <b>$howtoFeedback</b> <br /><br />Сообщение: <b>$yourtextFeedback</b></span>";
    $send = mail ($to, $subject, $message, $headers);
  } else {
    http_response_code(403);
    echo "Попробуйте еще раз";
  }

?>