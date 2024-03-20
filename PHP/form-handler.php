<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

function honeypot_validade($req)
{
  if (!empty ($req)) {
    $honeypot_fields = [
      "phone",
      "email",
      "name"
    ];
    foreach ($honeypot_fields as $field) {
      if (isset ($req[$field]) && !empty ($req[$field])) {
        return false;
      }
    }
  }
  return true;
}
if (honeypot_validade($_REQUEST)) {
  $is_spammer = false;
} else {
  $is_spammer = true;
}
if (isset ($_POST['buttonpoyx'])) {
  $to = "orders@little-pumpkin-design.com";
  $from = $_POST['emailpoyx'];
  $vnamepoyx = $_POST['vnamepoyx'];
  $znamepoyx = $_POST['znamepoyx'];
  $phonepoyx = $_POST['phonepoyx'];
  $subjectpoyx = "Anfrage Kontaktformular";
  $subjectpoyx2 = "Kopie deiner Nachricht";
  $messagepoyx = $vname . " " . $zname . " " . $phone . " " . " schrieb folgendes:" . "\n\n" . $_POST['messagepoyx'];
  $messagepoyx2 = "Hier ist eine Kopie deiner Nachricht " . $vname . "\n\n" . $_POST['messagepoyx2'];
  $headerspoyx = "From:" . $from;
  $headerspoyx2 = "From:" . $to;
  mail($to, $subjectpoyx, $messagepoyx, $headerspoyx);
  mail($from, $subjectpoyx2, $messagepoyx2, $headerspoyx2);
  echo '<meta http-equiv="refresh" content="0;url=https://little-pumpkin-design.com/thank_you.html" />';
}
?>