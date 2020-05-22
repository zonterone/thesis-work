<?php
// Файлы phpmailer
require 'PHPMailer/PHPMailer.php';
require 'PHPmailer/SMTP.php';
require 'PHPMailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

$mail = new PHPMailer\PHPMailer\PHPMailer();

$msg = "ok";
$mail->isSMTP();
$mail->CharSet = "UTF-8";
$mail->SMTPAuth   = true;

// Настройки вашей почты
$mail->Host = 'smtp.mail.ru'; // SMTP сервера GMAIL
$mail->Username = 'thesis-work@mail.ru'; // Логин на почте
$mail->Password = 'dudmEd-0tozti-cysjon'; // Пароль на почте
$mail->SMTPSecure = 'ssl';
$mail->Port       = 465;
$mail->setFrom('thesis-work@mail.ru'); // Адрес самой почты и имя отправителя

// Получатель письма
$mail->addAddress('andrey.zonter@yandex.ru');


// -----------------------
// Само письмо
// -----------------------
$mail->isHTML(true);

$mail->Subject = 'Заявка с Thesis-Work';
$mail->Body    = "<b>Имя:</b> $name <br>
<b>Почта:</b> $email <br>
<b>Номер:<b/> $phone";
