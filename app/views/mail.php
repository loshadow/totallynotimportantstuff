<?php
$recipient = "intern4@paywhere.com";
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$contact = $_POST['contact'];
$company = $_POST['company'];
$subject = $_POST['email-type'];
$message = $_POST['message'];

$formcontent="From: $firstname \n $lastname \n $email \n $company \n $contact \n Message: $message";

$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You For Your Feedback!";
?>
