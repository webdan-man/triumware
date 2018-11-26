<?php

$name = $_POST['тфьу'];
$email = $_POST['email'];
$text = $_POST['text'];
$subject = 'TRIUMWARE';

$title = $_POST['title'];

$headers.= "X-Mailer: PHP/" . phpversion()."\r\n";
$headers.= "MIME-Version: 1.0" . "\r\n";
$headers.= "Content-type: text/plain; charset=utf-8\r\n";

$to = "i.const.yank@gmail.com";

$message .= "Заголовок: $title\n";
mail ($to,$subject,$message,$headers);

?>