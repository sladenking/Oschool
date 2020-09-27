<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      if (isset($_POST['uname-feedback'])) {$unameFeedback = $_POST['uname-feedback'];}
      if (isset($_POST['yourphone-feedback'])) {$yourphoneFeedback = $_POST['yourphone-feedback'];}
      if (isset($_POST['howto-feedback'])) {$howtoFeedback = $_POST['howto-feedback'];}
      if (isset($_POST['yourtext-feedback'])) {$yourtextFeedback = $_POST['yourtext-feedback'];}

      // $to = "o.school.community@gmail.com";
      $to = "deniskosv@gmail.com";
      $headers  = "Content-type: text/html; charset=utf-8 \r\n";
      $headers .= "From: "."oschool.com.ua"." <from@"."oschool.com.ua".">\r\n";
      $subject = "Остались вопросы? oschool.com.ua";
      $message = "<span style='font-size: 20px;'>Имя: <b>$unameFeedback</b>  <br /><br />\n\nТелефон: <b>$yourphoneFeedback</b> <br /><br />Как связаться: <b>$howtoFeedback</b> <br /><br />Сообщение: <b>$yourtextFeedback</b></span>";
      $send = mail ($to, $subject, $message, $headers);
  } else {
      http_response_code(403);
      echo "Попробуйте еще раз";
  }

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['uname-modal'])) {$unameModal = $_POST['uname-modal'];}
    if (isset($_POST['yourphone-modal'])) {$yourphoneModal = $_POST['yourphone-modal'];}
    if (isset($_POST['howto-modal'])) {$howtoModal = $_POST['howto-modal'];}
    if (isset($_POST['yourtext-modal'])) {$yourtextModal = $_POST['yourtext-modal'];}

    // $to = "o.school.community@gmail.com";
    $to = "deniskosv@gmail.com";
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: "."oschool.com.ua"." <from@"."oschool.com.ua".">\r\n";
    $subject = "Остались вопросы? oschool.com.ua";
    $message = "<span style='font-size: 20px;'>Имя: <b>$unameModal</b>  <br /><br />\n\nТелефон: <b>$yourphoneModal</b> <br /><br />Как связаться: <b>$howtoModal</b> <br /><br />Сообщение: <b>$yourtextModal</b></span>";
    $send = mail ($to, $subject, $message, $headers);
  } else {
    http_response_code(403);
    echo "Попробуйте еще раз";
  }

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['uname-subs'])) {$unameSubs = $_POST['uname-subs'];}
    if (isset($_POST['yourphone-subs'])) {$yourphoneSubs = $_POST['yourphone-subs'];}
    if (isset($_POST['howto-subs'])) {$howtoSubs = $_POST['howto-subs'];}
    if (isset($_POST['yourtext-subs'])) {$yourtextSubs = $_POST['yourtext-subs'];}

    // $to = "o.school.community@gmail.com";
    $to = "deniskosv@gmail.com";
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: "."oschool.com.ua"." <from@"."oschool.com.ua".">\r\n";
    $subject = "Остались вопросы? oschool.com.ua";
    $message = "<span style='font-size: 20px;'>Имя: <b>$unameSubs</b>  <br /><br />\n\nТелефон: <b>$yourphoneSubs</b> <br /><br />Как связаться: <b>$howtoSubs</b> <br /><br />Сообщение: <b>$yourtextSubs</b></span>";
    $send = mail ($to, $subject, $message, $headers);
  } else {
    http_response_code(403);
    echo "Попробуйте еще раз";
  }
?>