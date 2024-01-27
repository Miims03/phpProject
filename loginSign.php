<?php

$nav = "conv";
require 'header.php';
if (is_conn()) {
    header('location: profil.php');
} else {

    $erreur = null;

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

    <?php

    if (!empty($_POST['uName']) || !empty($_POST['psw'])) {
        if (isset($_SESSION['uNameSign']) && isset($_SESSION['pswSign'])) {
            for ($i = 0; $i < sizeof($_SESSION['uNameSign']); $i++) {
                if ($_SESSION['uNameSign'][$i] === $_POST['uName'] && $_SESSION['pswSign'][$i] === $_POST['psw']) {

                    $_SESSION['index'] = $i;

                    $_SESSION['currentuName'] = $_SESSION['uNameSign'][$i];
                    $_SESSION['currentpsw'] = $_SESSION['pswSign'][$i];
                    $_SESSION['currentemail'] = $_SESSION['emailSign'][$i];
                    $_SESSION['currentdate'] = $_SESSION['dateSign'][$i];
                    $_SESSION['currentpdp'] = $_SESSION['pdpSign'][$i];
                    $_SESSION['connected'] = true;

                    header('location: index.php');
                } else {
                    $erreur = "Identifiants incorrects !";
                }
            }
        } else {
            $erreur = "Identifiants incorrects !";
        }
    }
    ?>

    <section id="sec3">
        <h1>Se connecter / S'inscrire</h1>

        <?php
        if ($erreur) {
            ?>

            <h3 style="color:red">
                <?php
                echo $erreur;
        }
        ?>
        </h3>

        <div class="cont1">
            <div class="convert1">
                <a class="setJs1">Se connecter</a>
                <a class="setJs1">S'inscrire</a>
            </div>
            <div class="convert2">
                <form action="loginSign.php" method='POST' class='formLogin'>
                    <div class="lesInputs">
                        <label for="uName">Nom </label>
                        <input type="text" name="uName">
                        <label for="psw">Password</label>
                        <input type="password" name="psw">
                    </div>
                    <button type='submit'>Valider</button>
                </form>

                <?php
                if (!empty($_POST['uNameSign']) || !empty($_POST['pswSign']) || !empty($_POST['emailSign']) || !empty($_POST['dateSign'])) {
            
                    if (!isset($_SESSION['uNameSign'])) {
                        $_SESSION['uNameSign'] = [];
                    }
                    array_push($_SESSION['uNameSign'], $_POST['uNameSign']);

                    if (!isset($_SESSION['pswSign'])) {
                        $_SESSION['pswSign'] = [];
                    }
                    array_push($_SESSION['pswSign'], $_POST['pswSign']);

                    if (!isset($_SESSION['emailSign'])) {
                        $_SESSION['emailSign'] = [];
                    }
                    array_push($_SESSION['emailSign'], $_POST['emailSign']);

                    if (!isset($_SESSION['dateSign'])) {
                        $_SESSION['dateSign'] = [];
                    }
                    array_push($_SESSION['dateSign'], $_POST['dateSign']);

                    if (!isset($_SESSION['pdpSign'])) {
                        $_SESSION['pdpSign'] = [];
                    }
                    array_push($_SESSION['pdpSign'], "img/profil.png");
                }
                ?>


                <form action="loginSign.php" method='POST' class='formSign'>
                    <div class="lesInputs">

                        <label for="uNameSign">Nom d'utilisateur </label>
                        <input type="text" name="uNameSign">

                        <label for="pswSign">Mot de Passe</label>
                        <input type="password" name="pswSign">

                        <label for="emailSign">Adresse email</label>
                        <input type="email" name="emailSign">

                        <label for="dateSign">Date de naissance</label>
                        <input type="date" name="dateSign">

                    </div>
                    <button type='submit'>Valider</button>
                </form>
            </div>

        </div>
    </section>




    <?php
}
require 'footer.php'
    ?>