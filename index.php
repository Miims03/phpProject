<?php 
require 'header.php';
$titre = 'Accueil';
$nav = "index";
?>
<a href='#' id='backArrow'>
    <?php if ($titre != "Accueil") {
    ?>
    <img src="img/arrow_13737453.png">
    <p><?php echo $titre ?></p>
    <?php 
    } 
    ?>  
</a>
<section id='sec1'>
    
    <div class='cont1'>
        <div class='div1'>
            <p>
                Convert
                <br>
                <strong>TasTort</strong>
            </p>
            <a class='button' href="conversion.php">
                ESSAYE ICI
            </a>
        </div>
        <div class='div2'>
            <h1>Description</h1>
            <p>
                Ici se trouve la déscription demandé par le professeur.
                <br>
                Je ne sais pas quoi mettre donc j'invoque du lorem.
                <br>
                InVoCaTion ... LOREM !!
                <br>
                --------------------------------------------------
                <br>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br>
                A ad delectus, reprehenderit inventore eum dolores
                <br>
                ratione hic officiis veritatis eos aliquam accusamus.

            </p>
        </div>
    </div>
    <img src="img/Currency-amico.svg">
    
</section>
<?php
require 'footer.php'
?>