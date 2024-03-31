<?php
if (isset ($_POST['button'])) {
  $to = "orders@little-pumpkin-design.com";
  $from = $_POST['email'];
  $vname = $_POST['vname'];
  $zname = $_POST['zname'];
  $phone = $_POST['phone'];
  $subject = "Anfrage Kontaktformular";
  $subject2 = "Kopie deiner Nachricht";
  $message = $vname . " " . $zname . "\n\n" . $phone . "\n\n" . "schreibt folgendes:" . "\n\n" . $_POST['message'];
  $message2 = "Hallo $vname, hier ist eine Kopie deiner Nachricht " . "\n\n" . $_POST['message'];
  $headers = "From:" . $from;
  $headers .= "\r\nReply-To: " . $from; // Add Reply-To header to set reply address
  $headers2 = "From:" . $to;

  // Additional headers to comply with DMARC policy
  $headers .= "\r\nMIME-Version: 1.0";
  $headers .= "\r\nContent-Type: text/plain; charset=utf-8";
  mail($to, $subject, $message, $headers);
  mail($from, $subject2, $message2, $headers2);
  echo '<meta http-equiv="refresh" content="0;url=https://little-pumpkin-design.com/thank_you.html" />';
}
?>