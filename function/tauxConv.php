<?php 

function convertEuroDollar(float $x): float{
    $dollar = 1.09;
    $x = $x * $dollar;
    return $x;
}
function convertEuroYen(float $x): float{
    $yen = 160.72;
    $x = $x * $yen;
    return $x;
}
function convertEuroDirham(float $x): float{
    $dirham = 10.83;
    $x = $x * $dirham;
    return $x;
}
function convertEuroFc(float $x): float{
    $fc = 2988.59;
    $x = $x * $fc;
    return $x;
}
function convertEuroBitcoin(float $x): float{
    $bitcoin = 0.00003;
    $x = $x * $bitcoin;
    return $x;
}
function convertEuroBitcoinReverse(float $x): float{
    $euro = 38461.53846153846;
    $x = $x * $euro;
    return $x;
}

function get_taux($a,$b){
    return $a / $b;
}
function createVar($nom, $valeur) {
    $autoVar[$nom] = $valeur;
    return $autoVar;
}
