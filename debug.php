<?php
$titre = 'Debug';
$nav = "debug";
require 'header.php';
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
<section id="sec4">
    <h1>Debug</h1>
    <form action="" style="display: flex;justify-content: center;align-items: center;flex-direction: column;gap: 5rem">
        <h2 style='width: 70rem'>
            <?php
            print_r($_SESSION);

            ?>
        </h2>
        <a href='reset.php' style="">RESET</a>
    </form>
</section>

<?php
require 'header.php'
    ?>