<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "contact@shadowlane.cymru";
    $subject = "Website Contact Form";
    $name = htmlspecialchars($_POST['name'] ?? '');
    $email = htmlspecialchars($_POST['email'] ?? '');
    $message = htmlspecialchars($_POST['message'] ?? '');
    $headers = "From: " . $email . "\r\n";

    if ($name && $email && $message) {
        mail($to, $subject, $message, $headers);
        $status = "Message sent successfully!";
    } else {
        $status = "Please complete all fields.";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contact - ShadowLane SC</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="assets/styles.css">
</head>
<body>
  <h1>Contact Us</h1>
  <?php if (!empty($status)) { echo "<p>$status</p>"; } ?>
  <form method="POST" action="contact.php">
    <label>Name:<br><input type="text" name="name" required></label><br>
    <label>Email:<br><input type="email" name="email" required></label><br>
    <label>Message:<br><textarea name="message" required></textarea></label><br>
    <button type="submit">Send</button>
  </form>
  <a href="index.html">Back to Home</a>
</body>
</html>