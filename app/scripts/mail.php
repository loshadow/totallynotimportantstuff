
<?php
$errors = array();
$data = array();
if (empty($_POST['firstname']))
$errors['name'] = 'Name is required.';
if (empty($_POST['email']))
$errors['email'] = 'Email is required.';
if (empty($_POST['message']))
$errors['message'] = 'Message is required.';

if ( ! empty($errors)) {

  $data['success'] = false;
  $data['errors'] = $errors;
  $data['messageError'] = 'Please check the fields in red';
} else {

  $data['success'] = true;
  $data['messageSuccess'] = 'Hey! Thanks for reaching out. We will get back to you soon';

  $recipient = "intern4@paywhere.com";
  $firstname = $_POST['firstname'];
  $lastname = $_POST['lastname'];
  $email = $_POST['email'];
  $contact = $_POST['contact'];
  $company = $_POST['company'];
  $subject = $_POST['mailtype'];
  $message = $_POST['message'];

  $formcontent="From: $firstname \n $lastname \n $email \n $company \n $contact \n Message: $message";

  $mailheader = "From: $email \r\n";
  mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");


//  $headers = 'From: '.$email_from."rn".
//  'Reply-To: '.$email_from."rn" .
//  'X-Mailer: PHP/' . phpversion();

}
// return all our data to an AJAX call
echo json_encode($data);

?>
