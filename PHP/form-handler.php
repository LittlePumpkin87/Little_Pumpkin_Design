<?php
if (!empty($_POST['ohnohoney'])) {
  echo '<meta http-equiv="refresh" content="0;url=https://little-pumpkin-design.com/No_Bots.html" />';;
} else if (isset($_POST['buttonpoyx'])) {
    $to = "orders@little-pumpkin-design.com";
    $from = $_POST['emailpoyx'];
    $vnamepoyx = $_POST['vnamepoyx'];
    $znamepoyx = $_POST['znamepoyx'];
    $phonepoyx = $_POST['phonepoyx'];
    $subjectpoyx = "Anfrage Kontaktformular";
    $subjectpoyx2 = "Kopie deiner Nachricht";
    $messagepoyx = $vnamepoyx . " " . $znamepoyx . "\n\n" . $phonepoyx . "\n\n" . "schreibt folgendes:" . "\n\n" . $_POST['messagepoyx'];
    $messagepoyx2 = "Hallo $vnamepoyx, hier ist eine Kopie deiner Nachricht " . "\n\n" . $_POST['messagepoyx'];
    $headerspoyx = "From:" . $from;
    $headerspoyx2 = "From:" . $to;
    mail($to, $subjectpoyx, $messagepoyx, $headerspoyx);
    mail($from, $subjectpoyx2, $messagepoyx2, $headerspoyx2);
    echo '<meta http-equiv="refresh" content="0;url=https://little-pumpkin-design.com/thank_you.html" />';
}
?>