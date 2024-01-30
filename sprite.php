<?php
    $nav = 'sprite';
    $titre = 'Sprite';
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
<section id="sec6">
    <h1>Sprite</h1>
    <h2>N'ayant aucun sujet sur notre page d'accueil,<br>voici un sprite animé en JavaScript par nos soins.</h2>
    <canvas id="canvas">
        <img id="firstImg">
    </canvas>
    <div class='control1'>
        <button class='btnRun' value='run'>Run</button>
        <button class='btnDash' value='dash'>Dash</button>
    </div>
    <div class='control2'>
        <button class='btnAttack' value='attack'>Attack</button>
        <button class='btnJump' value='jump'>Jump</button>
    </div>
    
</section>

<?php
    require 'footer.php';
?>