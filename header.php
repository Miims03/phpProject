<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <title>
        <?php
        require 'function/tauxConv.php';
        require 'function/auth.php';
        require 'class/User.php';
        session_start();
        if (isset($titre)) {
            echo $titre;
        } else {
            echo "Site Tah Les Bg's Wesh Agnes Rpz";
        }
        ?>
    </title>
</head>

<body>

    <header>
        <a href="index.php">
            <img src="img/money_61584.png">
            <h1></h1>
        </a>

        <nav>
            <ul>
                <li>
                    <a href="index.php" class='<?php if ($nav === 'index') {
                    echo 'active';} ?>'>Accueil</a>
                </li>
                <li>
                    <a href="sprite.php" class='<?php if ($nav === 'sprite') {
                    echo 'active';} ?>'>Sprite</a>
                </li>
                <li>
                    <a href="debug.php" class='<?php if ($nav === 'debug') {
                    echo 'active';} ?>'>Debug</a>
                </li>
                <?php if (is_conn()) { ?>
                <li>
                    <a href="conversion.php" class='<?php if ($nav === 'conv') {
                    echo 'active';} ?>'>Conversion</a>
                </li>
                    <?php
                }
                ?>
            </ul>
        </nav>
        <nav>
            <ul class='ul2'>
                <?php
                if (!is_conn()) {
                    ?>
                    <li>
                        <a href="loginSign.php" class='loginNav'>Se Connecter</a>
                    </li>
                    <?php
                } else {
                    ?>
                    <li>
                        <a href="logout.php" class='logoutNav'>Se Deconnecter</a>
                    </li>

                    <?php
                }
                ?>

            </ul>

        </nav>
        <?php
        if (is_conn()) {
            ?>
            <a href="profil.php" class='profil'><img src="<?php echo $_SESSION['currentpdp'] ?>" href="#"></a>
            <?php
        }
        ?>
    </header>