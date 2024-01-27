<?php
$titre = 'Conversion';
$nav = "conv";
require 'header.php';
if (!is_conn()) {
    header('location: loginSign.php');
}else{
?>
<div>
    <div class='bb100'></div>
    <div class='bb75'></div>
    <div class='bb50'></div>
    <div class='bb25'></div>
    <div class='bb0'></div>
    <div class='b100'></div>
    <div class='b75'></div>
    <div class='b50'></div>
    <div class='b25'></div>
    <div class='b0'></div>
</div>
<section id="sec2">
    <h1>
        <?php echo $titre ?>
    </h1>
    <div class="cont1">
        <div class="convert1">
            <i class="fa-solid fa-euro-sign euro"></i>
            <a class="setJs dollar"><img src="img/money/test/sign.png"></a>
            <a class="setJs dirham"><img src="img/money/test/dirham.png"></a>
            <a class="setJs yen"><i class="fa-solid fa-yen-sign"></i></a>
            <a class="setJs pound"><i class="fa-solid fa-sterling-sign"></i></a>
            <a class="setJs fc">FC</a>
            <a class="setJs bit"><i class="fa-solid fa-bitcoin-sign"></i></a>
        </div>

        <div class="convert2 formDollar">
            <h2>Dollar</h2>
            <form action="conversion.php" class="conversionForm" method='POST'>
                <?php
                if (isset($_POST['euroDollar']) && isset($_POST['DollarC'])) {
                    if (!empty($_POST['euroDollar']) && !empty($_POST['DollarC'])) {

                        if (!isset($_SESSION['convName'])) {
                            $_SESSION['convName'] = [];
                        }
                        array_push($_SESSION['convName'], 'Dollar');

                        if (!isset($_SESSION['convEuro'])) {
                            $_SESSION['convEuro'] = [];
                        }
                        array_push($_SESSION['convEuro'], $_POST['euroDollar']);

                        if (!isset($_SESSION['convDevise'])) {
                            $_SESSION['convDevise'] = [];
                        }
                        array_push($_SESSION['convDevise'], $_POST['DollarC'].' $');

                        if (!isset($_SESSION['convTaux'])) {
                            $_SESSION['convTaux'] = [];
                        }
                        array_push($_SESSION['convTaux'], '1.09 $');
                    }
                }
                ?>
                <div class='lesInputs'>
                    <div>
                        <label for="euroDollar">$</label>
                        <input type="number" name='euroDollar' class='euroDollar' step='any' oninput="convertirDollar('euroDollar')">
                    </div>
                    <i class="fa-solid fa-equals"></i>
                    <div>
                        <label for="DollarC">¥</label>
                        <input type="number" name='DollarC' class='DollarC' step="any"
                            oninput="convertirDollar('DollarC')">
                    </div>
                </div>
                <button type='submit'>Envoyer</button>
            </form>
            <h3>Le taux est de 1 € / 1.09 $</h3>
        </div>
        <div class="convert2 formDirham">
            <h2>DIRHAM</h2>
            <form action="conversion.php" class="conversionForm" method='POST'>
                <?php
                if (isset($_POST['euroDirham']) && isset($_POST['DirhamC'])) {
                    if (!empty($_POST['euroDirham']) && !empty($_POST['DirhamC'])) {

                        if (!isset($_SESSION['convName'])) {
                            $_SESSION['convName'] = [];
                        }
                        array_push($_SESSION['convName'], 'Dirhams');

                        if (!isset($_SESSION['convEuro'])) {
                            $_SESSION['convEuro'] = [];
                        }
                        array_push($_SESSION['convEuro'], $_POST['euroDirham']);

                        if (!isset($_SESSION['convDevise'])) {
                            $_SESSION['convDevise'] = [];
                        }
                        array_push($_SESSION['convDevise'], $_POST['DirhamC'].' د.إ');

                        if (!isset($_SESSION['convTaux'])) {
                            $_SESSION['convTaux'] = [];
                        }
                        array_push($_SESSION['convTaux'], '10,82 د.إ');
                    }
                }
                ?>
                <div class='lesInputs'>
                    <div>
                        <label for="euroDirham">€</label>
                        <input type="number" name='euroDirham' class='euroDirham' step='any' oninput="convertirDirham('euroDirham')">
                    </div>
                    <i class="fa-solid fa-equals"></i>
                    <div>
                        <label for="DirhamC">£</label>
                        <input type="number" name='DirhamC' class='DirhamC' step="any"
                            oninput="convertirDirham('DirhamC')">
                    </div>
                </div>
                <button type='submit'>Envoyer</button>
            </form>
            <h3>Le taux est de 1 € / 10.82 د.إ</h3>
        </div>
        <div class="convert2 formYen">
            <h2>Yen</h2>
            <form action="conversion.php" class="conversionForm" method='POST'>
                <?php
                if (isset($_POST['euroYen']) && isset($_POST['YenC'])) {
                    if (!empty($_POST['euroYen']) && !empty($_POST['YenC'])) {

                        if (!isset($_SESSION['convName'])) {
                            $_SESSION['convName'] = [];
                        }
                        array_push($_SESSION['convName'], 'Yen');

                        if (!isset($_SESSION['convEuro'])) {
                            $_SESSION['convEuro'] = [];
                        }
                        array_push($_SESSION['convEuro'], $_POST['euroYen']);

                        if (!isset($_SESSION['convDevise'])) {
                            $_SESSION['convDevise'] = [];
                        }
                        array_push($_SESSION['convDevise'], $_POST['YenC'].' ¥');

                        if (!isset($_SESSION['convTaux'])) {
                            $_SESSION['convTaux'] = [];
                        }
                        array_push($_SESSION['convTaux'], '8 ¥');
                    }
                }
                ?>
                <div class='lesInputs'>
                    <div>
                        <label for="euroYen">€</label>
                        <input type="number" name='euroYen' class='euroYen' step='any' oninput="convertirYen('euroYen')">
                    </div>
                    <i class="fa-solid fa-equals"></i>
                    <div>
                        <label for="YenC">¥</label>
                        <input type="number" name='YenC' class='YenC' step="any"
                            oninput="convertirYen('YenC')">
                    </div>
                </div>
                <button type='submit'>Envoyer</button>
            </form>
            <h3>Le taux est de 1 € / 8 ¥</h3>
        </div>
        <div class="convert2 formPound">
            <h2>POUND</h2>
            <form action="conversion.php" class="conversionForm" method='POST'>
                <?php
                if (isset($_POST['euroPound']) && isset($_POST['PoundC'])) {
                    if (!empty($_POST['euroPound']) && !empty($_POST['PoundC'])) {

                        if (!isset($_SESSION['convName'])) {
                            $_SESSION['convName'] = [];
                        }
                        array_push($_SESSION['convName'], 'Pounds');

                        if (!isset($_SESSION['convEuro'])) {
                            $_SESSION['convEuro'] = [];
                        }
                        array_push($_SESSION['convEuro'], $_POST['euroPound']);

                        if (!isset($_SESSION['convDevise'])) {
                            $_SESSION['convDevise'] = [];
                        }
                        array_push($_SESSION['convDevise'], $_POST['PoundC'].' £');

                        if (!isset($_SESSION['convTaux'])) {
                            $_SESSION['convTaux'] = [];
                        }
                        array_push($_SESSION['convTaux'], '0.85 £');
                    }
                }
                ?>
                <div class='lesInputs'>
                    <div>
                        <label for="euroPound">€</label>
                        <input type="number" name='euroPound' class='euroPound' step='any' oninput="convertirPound('euroPound')">
                    </div>
                    <i class="fa-solid fa-equals"></i>
                    <div>
                        <label for="PoundC">£</label>
                        <input type="number" name='PoundC' class='PoundC' step="any"
                            oninput="convertirPound('PoundC')">
                    </div>
                </div>
                <button type='submit'>Envoyer</button>
            </form>
            <h3>Le taux est de 1 € / 0.85 £</h3>
        </div>
        <div class="convert2 formFc">
            <h2>FC</h2>
            <form action="conversion.php" class="conversionForm" method='POST'>
                <?php
                if (isset($_POST['euroFc']) && isset($_POST['fcC'])) {
                    if (!empty($_POST['euroFc']) && !empty($_POST['fcC'])) {

                        if (!isset($_SESSION['convName'])) {
                            $_SESSION['convName'] = [];
                        }
                        array_push($_SESSION['convName'], 'FC');

                        if (!isset($_SESSION['convEuro'])) {
                            $_SESSION['convEuro'] = [];
                        }
                        array_push($_SESSION['convEuro'], $_POST['euroFc']);

                        if (!isset($_SESSION['convDevise'])) {
                            $_SESSION['convDevise'] = [];
                        }
                        array_push($_SESSION['convDevise'], $_POST['fcC'].' FC');

                        if (!isset($_SESSION['convTaux'])) {
                            $_SESSION['convTaux'] = [];
                        }
                        array_push($_SESSION['convTaux'], '2988.59 FC');
                    }
                }
                ?>
                <div class='lesInputs'>
                    <div>
                        <label for="euroFc">€</label>
                        <input type="number" name='euroFc' class='euroFc' step='any' oninput="convertirFc('euroFc')">
                    </div>
                    <i class="fa-solid fa-equals"></i>
                    <div>
                        <label for="fcC">FC</label>
                        <input type="number" name='fcC' class='fcC' step="any"
                            oninput="convertirFc('fcC')">
                    </div>
                </div>
                <button type='submit'>Envoyer</button>
            </form>
            <h3>Le taux est de 1 € / 2988.59 FC</i></h3>
        </div>
        <div class="convert2 formBitcoin">
            <h2>BITCOIN</h2>
            <form action="conversion.php" class="conversionForm" method='POST'>
                <?php
                if (isset($_POST['euroBit']) && isset($_POST['bitcoinC'])) {
                    if (!empty($_POST['euroBit']) && !empty($_POST['bitcoinC'])) {

                        if (!isset($_SESSION['convName'])) {
                            $_SESSION['convName'] = [];
                        }
                        array_push($_SESSION['convName'], 'Bitcoin');

                        if (!isset($_SESSION['convEuro'])) {
                            $_SESSION['convEuro'] = [];
                        }
                        array_push($_SESSION['convEuro'], $_POST['euroBit']);

                        if (!isset($_SESSION['convDevise'])) {
                            $_SESSION['convDevise'] = [];
                        }
                        array_push($_SESSION['convDevise'], $_POST['bitcoinC'].' ₿');

                        if (!isset($_SESSION['convTaux'])) {
                            $_SESSION['convTaux'] = [];
                        }
                        array_push($_SESSION['convTaux'], '0.00003 ₿');
                    }
                }
                ?>
                <div class='lesInputs'>
                    <div>
                        <label for="euroBit">€</label>
                        <input type="number" name='euroBit' class='euroBit' step='any' oninput="convertirBit('euroBit')">
                    </div>
                    <i class="fa-solid fa-equals"></i>
                    <div>
                        <label for="bitcoinC">₿</label>
                        <input type="number" name='bitcoinC' class='bitcoinC' step="any"
                            oninput="convertirBit('bitcoinC')">
                    </div>
                </div>
                <button type='submit'>Envoyer</button>
            </form>
            <h3>Le taux est de 1 € / 0.00003 ₿</i></h3>
        </div>
    </div>
</section>



<?php
}
require 'footer.php'
?>