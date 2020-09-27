<?php

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['uname-modal'])) {$unameModal = $_POST['uname-modal'];}
    if (isset($_POST['yourphone-modal'])) {$yourphoneModal = $_POST['yourphone-modal'];}
    if (isset($_POST['howto-modal'])) {$howtoModal = $_POST['howto-modal'];}
    if (isset($_POST['yourtext-modal'])) {$yourtextModal = $_POST['yourtext-modal'];}
    if (isset($_POST['teacher-modal'])) {$teacherModal = $_POST['teacher-modal'];}
    if (isset($_POST['subject-modal'])) {$subjectModal = $_POST['subject-modal'];}

    $to = "o.school.community@gmail.com";
    // $to = "deniskosv@gmail.com";
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: "."oschool.com.ua"." <from@"."oschool.com.ua".">\r\n";
    $subject = "Остались вопросы? oschool.com.ua";
    $message = "<span style='font-size: 20px;'>Имя: <b>$unameModal</b>  <br /><br />\n\nТелефон: <b>$yourphoneModa</b> <br /><br />Как связаться: <b>$howtoModa</b> <br /><br />Сообщение: <b>$yourtextModal</b> <br /><br />Учитель: <b>$teacherModal</b> <br /><br />Предмет: <b>$subjectModal</b></span>";
    $send = mail ($to, $subject, $message, $headers);
  } else {
    http_response_code(403);
    echo "Попробуйте еще раз";
  }

?>