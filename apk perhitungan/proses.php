<?php

$bil1 = $_POST['bil1'];
$bil2 = $_POST['bil2'];
$operasi = $_POST['operasi'];

switch ($operasi) {
    case '+':
        $hasil = $bil1 + $bil2;
        break;
    case '-':
        $hasil = $bil1 - $bil2;
        break;
    case '*':
        $hasil = $bil1 * $bil2;
        break;
    case '/':
        $hasil = $bil1 / $bil2;
        break;
}

echo "Hasil: $hasil";

?>