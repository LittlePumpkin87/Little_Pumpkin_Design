<?php if (isset($_POST['button'])) {
      $to = "orders@little-pumpkin-design.com";
      $from = $_POST['email'];
      $vname = $_POST['vname'];
      $zname = $_POST['zname'];
      $phone = $_POST['phone'];
      $subject = "Anfrage Kontaktformular";
      $subject2 = "Kopie deiner Nachricht";
      $message = $vname . " " . $zname . $phone . " schrieb folgendes:" . "\n\n" . $_POST['message'];
      $message2 = "Hier ist eine Kopie deiner Nachricht " . $vname . "\n\n" . $_POST['message'];

      $headers = "From:" . $from;
      $headers2 = "From:" . $to;
      mail($to, $subject, $message, $headers);
      mail($from, $subject2, $message2, $headers2);
      echo '<meta http-equiv="refresh" content="0;url=https://little-pumpkin-design.com/thank_you.html" />';
    }
    ?>