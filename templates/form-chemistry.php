<?php

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['uname-chemistry'])) {$unameChemistry = $_POST['uname-chemistry'];}
    if (isset($_POST['yourphone-chemistry'])) {$yourphoneChemistry = $_POST['yourphone-chemistry'];}
    if (isset($_POST['howto-chemistry'])) {$howtoChemistry = $_POST['howto-chemistry'];}
    if (isset($_POST['yourtext-chemistry'])) {$yourtextChemistry = $_POST['yourtext-chemistry'];}

    $to = "o.school.community@gmail.com";
    // $to = "deniskosv@gmail.com";
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: "."oschool.com.ua"." <from@"."oschool.com.ua".">\r\n";
    $subject = "Остались вопросы? oschool.com.ua";
    $message = "<span style='font-size: 20px;'>Имя: <b>$unameChemistry</b>  <br /><br />\n\nТелефон: <b>$yourphoneChemistry</b> <br /><br />Как связаться: <b>$howtoChemistry</b> <br /><br />Сообщение: <b>$yourtextChemistry</b></span>";
    $send = mail ($to, $subject, $message, $headers);
  } else {
    http_response_code(403);
    echo "Попробуйте еще раз";
  }

?>