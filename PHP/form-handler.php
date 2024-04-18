<?php
if (isset ($_POST['button'])) {
  $to = "orders@little-pumpkin-design.com";
  $from = $_POST['email'];
  $vname = $_POST['vname'];
  $zname = $_POST['zname'];
  $phone = $_POST['phone'];
  $subject = "Anfrage Kontaktformular";
  $message = $vname . " " . $zname . "\n\n" . $phone . "\n\n" . "schreibt folgendes:" . "\n\n" . $_POST['message'];
  $headers = "From:" . $from;
  mail($to, $subject, $message, $headers);
  echo '<meta http-equiv="refresh" content="0;url=https://little-pumpkin-design.com/thank_you.html" />';
}
?>