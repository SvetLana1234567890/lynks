<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF';
$mail->setLanguage('ru', 'phpmailer/lenguege/');
$mail->IsHTML(true);

//От кого письмо
$mail->setFrom('shop.golden.web@gmail.com', 'Рассылка заказов');
//Кому отправить
$mail->addAddress('popkova577@gmail.com');
//Тема письма
$mail->Subject = 'Заказ LYNKS';

//Тело письма
$body = '<h2>Заказ: </h2>'

if(trim(!empty($_POST['name']))){
    $body.='<p>Имя: ' .$_POST['name']'</p>';
}
if(trim(!empty($_POST['surname']))){
    $body.='<p>Фамилия: ' .$_POST['surname']'</p>';
}
if(trim(!empty($_POST['phone']))){
    $body.='<p>Телефон: ' .$_POST['phone']'</p>';
}
if(trim(!empty($_POST['delivery']))){
    $body.='<p>Вариант доставки: ' .$_POST['delivery']'</p>';
}
if(trim(!empty($_POST['message']))){
    $body.='<p>Адрес доставки:' .$_POST['message']'</p>';
}
if(trim(!empty($_POST['payment_method']))){
    $body.='<p>Вариант оплаты: ' .$_POST['payment_method']'</p>';
}
$count = count($_POST['product_id']);
$body.= "Количество товаров: " $count."<br>";
var_dump ($_POST['product_id']);
for ($i=0; $i < $count; $i++){
    $body.= $i." ".$_POST['product_id'][$i]." ".$_POST['product_name'][$i]." ".$_POST['product_counter'][$i]."<br>";
}
$mail->Body = $body;

//Отправка
if (!$mail->send()) {
    $message = 'Ошибка';
} else {
    $message = 'Данные отправлены';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?> 