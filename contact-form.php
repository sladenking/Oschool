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
    if (isset($_POST['teacher-modal'])) {$teacherModal = $_POST['teacher-modal'];}
    if (isset($_POST['subject-modal'])) {$subjectModal = $_POST['subject-modal'];}

    // $to = "o.school.community@gmail.com";
    $to = "deniskosv@gmail.com";
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: "."oschool.com.ua"." <from@"."oschool.com.ua".">\r\n";
    $subject = "Остались вопросы? oschool.com.ua";
    $message = "<span style='font-size: 20px;'>Имя: <b>$unameModal</b>  <br /><br />\n\nТелефон: <b>$yourphoneModa</b> <br /><br />Как связаться: <b>$howtoModa</b> <br /><br />Сообщение: <b>$yourtextModal</b> <br /><br />Учитель: <b>$teacherModal</b> <br /><br />Предмет: <b>$subjectModal</b></span>";
    $send = mail ($to, $subject, $message, $headers);
  } else {
    http_response_code(403);
    echo "Попробуйте еще раз";
  }

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['uname-math'])) {$unameMath = $_POST['uname-math'];}
    if (isset($_POST['yourphone-math'])) {$yourphoneMath = $_POST['yourphone-math'];}
    if (isset($_POST['howto-math'])) {$howtoMath = $_POST['howto-math'];}
    if (isset($_POST['yourtext-math'])) {$yourtextMath = $_POST['yourtext-math'];}

    // $to = "o.school.community@gmail.com";
    $to = "deniskosv@gmail.com";
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: "."oschool.com.ua"." <from@"."oschool.com.ua".">\r\n";
    $subject = "Остались вопросы? oschool.com.ua";
    $message = "<span style='font-size: 20px;'>Имя: <b>$unameMath</b>  <br /><br />\n\nТелефон: <b>$yourphoneMath</b> <br /><br />Как связаться: <b>$howtoMath</b> <br /><br />Сообщение: <b>$yourtextMath</b></span>";
    $send = mail ($to, $subject, $message, $headers);
  } else {
    http_response_code(403);
    echo "Попробуйте еще раз";
  }

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['uname-biology'])) {$unameBiology = $_POST['uname-biology'];}
    if (isset($_POST['yourphone-biology'])) {$yourphoneBiology = $_POST['yourphone-biology'];}
    if (isset($_POST['howto-biology'])) {$howtoBiology = $_POST['howto-biology'];}
    if (isset($_POST['yourtext-biology'])) {$yourtextBiology = $_POST['yourtext-biology'];}

    // $to = "o.school.community@gmail.com";
    $to = "deniskosv@gmail.com";
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: "."oschool.com.ua"." <from@"."oschool.com.ua".">\r\n";
    $subject = "Остались вопросы? oschool.com.ua";
    $message = "<span style='font-size: 20px;'>Имя: <b>$unameBiology</b>  <br /><br />\n\nТелефон: <b>$yourphoneBiology</b> <br /><br />Как связаться: <b>$howtoBiology</b> <br /><br />Сообщение: <b>$yourtextBiology</b></span>";
    $send = mail ($to, $subject, $message, $headers);
  } else {
    http_response_code(403);
    echo "Попробуйте еще раз";
  }

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['uname-chemistry'])) {$unameChemistry = $_POST['uname-chemistry'];}
    if (isset($_POST['yourphone-chemistry'])) {$yourphoneChemistry = $_POST['yourphone-chemistry'];}
    if (isset($_POST['howto-chemistry'])) {$howtoChemistry = $_POST['howto-chemistry'];}
    if (isset($_POST['yourtext-chemistry'])) {$yourtextChemistry = $_POST['yourtext-chemistry'];}

    // $to = "o.school.community@gmail.com";
    $to = "deniskosv@gmail.com";
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: "."oschool.com.ua"." <from@"."oschool.com.ua".">\r\n";
    $subject = "Остались вопросы? oschool.com.ua";
    $message = "<span style='font-size: 20px;'>Имя: <b>$unameChemistry</b>  <br /><br />\n\nТелефон: <b>$yourphoneChemistry</b> <br /><br />Как связаться: <b>$howtoChemistry</b> <br /><br />Сообщение: <b>$yourtextChemistry</b></span>";
    $send = mail ($to, $subject, $message, $headers);
  } else {
    http_response_code(403);
    echo "Попробуйте еще раз";
  }

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['uname-english'])) {$unameEnglish = $_POST['uname-english'];}
    if (isset($_POST['yourphone-english'])) {$yourphoneEnglish = $_POST['yourphone-english'];}
    if (isset($_POST['howto-english'])) {$howtoEnglish = $_POST['howto-english'];}
    if (isset($_POST['yourtext-english'])) {$yourtextEnglish = $_POST['yourtext-english'];}

    // $to = "o.school.community@gmail.com";
    $to = "deniskosv@gmail.com";
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: "."oschool.com.ua"." <from@"."oschool.com.ua".">\r\n";
    $subject = "Остались вопросы? oschool.com.ua";
    $message = "<span style='font-size: 20px;'>Имя: <b>$unameEnglish</b>  <br /><br />\n\nТелефон: <b>$yourphoneEnglish</b> <br /><br />Как связаться: <b>$howtoEnglish</b> <br /><br />Сообщение: <b>$yourtextEnglish</b></span>";
    $send = mail ($to, $subject, $message, $headers);
  } else {
    http_response_code(403);
    echo "Попробуйте еще раз";
  }

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['uname-physics'])) {$unamePhysics = $_POST['uname-physics'];}
    if (isset($_POST['yourphone-physics'])) {$yourphonePhysics = $_POST['yourphone-physics'];}
    if (isset($_POST['howto-physics'])) {$howtoPhysics = $_POST['howto-physics'];}
    if (isset($_POST['yourtext-physics'])) {$yourtextPhysics = $_POST['yourtext-physics'];}

    // $to = "o.school.community@gmail.com";
    $to = "deniskosv@gmail.com";
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: "."oschool.com.ua"." <from@"."oschool.com.ua".">\r\n";
    $subject = "Остались вопросы? oschool.com.ua";
    $message = "<span style='font-size: 20px;'>Имя: <b>$unamePhysics</b>  <br /><br />\n\nТелефон: <b>$yourphonePhysics</b> <br /><br />Как связаться: <b>$howtoPhysics</b> <br /><br />Сообщение: <b>$yourtextPhysics</b></span>";
    $send = mail ($to, $subject, $message, $headers);
  } else {
    http_response_code(403);
    echo "Попробуйте еще раз";
  }

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['uname-ukrainian'])) {$unameUkrainian = $_POST['uname-ukrainian'];}
    if (isset($_POST['yourphone-ukrainian'])) {$yourphoneUkrainian = $_POST['yourphone-ukrainian'];}
    if (isset($_POST['howto-ukrainian'])) {$howtoUkrainian = $_POST['howto-ukrainian'];}
    if (isset($_POST['yourtext-ukrainian'])) {$yourtextUkrainian = $_POST['yourtext-ukrainian'];}

    // $to = "o.school.community@gmail.com";
    $to = "deniskosv@gmail.com";
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