<!-- 
// $theme = "Заказ LYNKS";
// error_reporting( E_ERROR );
//     if (isset($_POST['surname']))        {$surname         = $_POST['surname'];          if ($surname == '')        {unset($surname);}}
//     if (isset($_POST['name']))           {$name            = $_POST['name'];             if ($name == '')           {unset($name);}}
//     if (isset($_POST['phone']))          {$phone           = $_POST['phone'];            if ($phone == '')          {unset($phone);}}
//     if (isset($_POST['message']))        {$message         = $_POST['message'];          if ($message == '')        {unset($message);}}
//     if (isset($_POST['sab']))            {$sab             = $_POST['sab'];              if ($sab == '')            {unset($sab);}}
//     if (isset($_POST['delivery']))       {$delivery        = $_POST['delivery'];         if ($delivery == '')       {unset($delivery);}}
//     if (isset($_POST['payment_method'])) {$payment_method  = $_POST['payment_method'];   if ($payment_method == '') {unset($payment_method);}}

    

//     if (isset($surname)) {
//         $surname = stripcslashes($surname);
//         $surname = htmlspecialchars($surname);
//     }
//     if (isset($name)) {
//         $name = stripcslashes($name);
//         $name = htmlspecialchars($name);
//     }
//     if (isset($phone)) {
//         $phone = stripcslashes($phone);
//         $phone = htmlspecialchars($phone);
//     }
//     if (isset($message)) {
//         $message = stripcslashes($message);
//         $message = htmlspecialchars($message);
//     }
//     if (isset($delivery)) {
//         $delivery = stripcslashes($delivery);
//         $delivery = htmlspecialchars($delivery);
//     }
//     if (isset($payment_method)) {
//         $payment_method = stripcslashes($payment_method);
//         $payment_method = htmlspecialchars($payment_method);
//     }

//     $address = "popkova577@gmail.com";
//     $note_text = "Заказ. \r\n Фамилия Имя: $surname $name \r\n Телефон: $phone \r\n Вариант доставки: $delivery \r\n Адрес доставки: $message  \r\n Вариант оплаты: $payment_method";

//     if (isset($name) && isset ($sab)) {
//         mail ($address, $theme, $note_text, "Content-type:text/plain; windows-1251");
//         echo "<p>Дякуємо за замовлення! Менеджер зв'яжеться з вами найближчим часом.</p>"
//     }

?> -->

<?php


    $surname         = $_POST['surname']; 
    $name            = $_POST['name'];
    $phone           = $_POST['phone']; 
    $delivery        = $_POST['delivery'];
    $message         = $_POST['message']; 
    $payment_method  = $_POST['payment_method'];
    $count            = count($_POST['product_id']);

    for ($i=0; $i < $count; $i++){
        $shops = $i." ".$_POST['product_id'][$i]." ".$_POST['product_name'][$i]." ".$_POST['product_counter'][$i]."<br>";
    }

    $to = "popkova577@gmail.com";
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

        
    // header("Access-Control-Allow-Origin: *");
    // // Only process POST reqeusts.
    // if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //     // Get the form fields and remove whitespace.
    //     $name = strip_tags(trim($_POST["name"]));
	// 			$name = str_replace(array("\r","\n"),array(" "," "),$name);
    //     $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    //     $subject = trim($_POST["delivery"]);
	// 	$phone = trim($_POST["phone"]);
    //     $message = trim($_POST["message"]);

    //     // Check that data was sent to the mailer.
    //     if ( empty($name) OR empty($phone) OR empty($subject) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    //         // Set a 400 (bad request) response code and exit.
    //         http_response_code(400);
    //         echo "Please complete the form and try again.";
    //         exit;
    //     }

    //     // Set the recipient email address.
    //     // FIXME: Update this to your desired email address.
    //     $recipient = "popkova577@gmail.com";

    //     // Set the email subject.
    //     $subject = "$subject";

    //     // Build the email content.
    //     $email_content = "Name: $name\n";
    //     $email_content .= "Email: $email\n\n";
    //     $email_content .= "Subject: $subject\n\n";
    //     $email_content .= "Phone: $phone\n\n";
    //     $email_content .= "Message:\n$message\n";

    //     // Build the email headers.
    //     $email_headers = "From: $name <$email>";

    //     // Send the email.
    //     if (mail($recipient, $subject, $email_content, $email_headers)) {
    //         // Set a 200 (okay) response code.
    //         http_response_code(200);
    //         echo "Дякуємо за замовлення!";
    //     } else {
    //         // Set a 500 (internal server error) response code.
    //         http_response_code(500);
    //         echo "Oops! Something went wrong and we couldn't send your message.";
    //     }

    // } else {
    //     // Not a POST request, set a 403 (forbidden) response code.
    //     http_response_code(403);
    //     echo "There was a problem with your submission, please try again.";
    // }
