<?php
session_start();

unset($_SESSION['convName']);
unset($_SESSION['convEuro']);
unset($_SESSION['convDevise']);
unset($_SESSION['convTaux']);
unset($_SESSION['connected']);
header('location: index.php');
?>