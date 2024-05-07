<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = $_POST['message'];
    $to = 'ioxmy.tech@gmail.com'; // Replace with your email address
    $subject = 'New Message from Website';
    $headers = 'From: your_website@example.com' . "\r\n" .
               'Reply-To: your_website@example.com' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();
    
    // Send email
    mail($to, $subject, $message, $headers);
    
    // Redirect back to the form or any other page
    header("Location: thank you.html");
    exit();
}
?>