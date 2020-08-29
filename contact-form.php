<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['uname'])) {$uname = $_POST['uname'];}
    if (isset($_POST['yourphone'])) {$yourphone = $_POST['yourphone'];}
    if (isset($_POST['howto'])) {$howto = $_POST['howto'];}
    if (isset($_POST['yourtext'])) {$yourtext = $_POST['yourtext'];}

    $to = "o.school.community@gmail.com"; /*Укажите ваш адрес электронной почты*/
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: "."oschool.com.ua"." <from@"."oschool.com.ua".">\r\n";
    $subject = "Остались вопросы? oschool.com.ua";
    $message = "<span style='font-size: 20px;'>Имя: <b>$uname</b>  <br /><br />\n\nТелефон: <b>$yourphone</b> <br /><br />Как связаться: <b>$howto</b> <br /><br />Сообщение: <b>$yourtext</b></span>";
    $send = mail ($to, $subject, $message, $headers);
} else {
    http_response_code(403);
    echo "Попробуйте еще раз";
}
?>