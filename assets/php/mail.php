<?php


    $surname         = $_POST['surname']; 
    $name            = $_POST['name'];
    $phone           = $_POST['phone']; 
    $delivery        = $_POST['delivery'];
    $message         = $_POST['message']; 
    $payment_method  = $_POST['payment_method'];
    $count            = count($_POST['product_id']);

    echo $count."<br>";
    $shops = "";
    for ($i=0; $i <= $count; $i++){
        $shops.= $i." ".$_POST['product_id'][$i]." ".$_POST['product_name'][$i]." количество: ".$_POST['product_counter'][$i]."\n";
    }

    $to = "lynksclean@gmail.com";
    $date = date ("d.m.Y");
    $time = date ("h:i");
    $subject = "Заказ LYNKS";

    $msg = "
        Фамилия Имя: $surname $name /n 
        Телефон: $phone /n 
        Вариант доставки: $delivery /n 
        Адрес доставки: $message /n 
        Вариант оплаты: $payment_method 
        Количество товаров: $count /n 
        Заказ: $shops";
        
    mail($to, $subject, $msg, "From: $to");

    echo "<p>Дякуємо за замовлення! Менеджер зв'яжеться з вами найближчим часом.</p>";
?>