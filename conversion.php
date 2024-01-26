<?php 
require 'header.php';
$titre = 'Conversion';
$nav = "conv";
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
    <h1><?php echo $titre ?></h1>
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
            <h2>Titre</h2>
            <form action="">
                <div class='lesInputs'>
                    <div>
                        <label for="euro">€</label>
                        <input type="number" name='euro'>
                    </div>
                    <i class="fa-solid fa-equals"></i>
                    <div>
                        <label for="otherD">$</label>
                        <input type="number" name='otherD'>
                    </div>
                </div>
                <button type='submit'>Convertir</button>
            </form>
            <h3>Le taux est de 1 € / 8 $</h3>
        </div>
        <div class="convert2 formDirham">
            <h2>DIRHAM</h2>
            <form action="">
                <div class='lesInputs'>
                    <div>
                        <label for="euro">€</label>
                        <input type="number" name='euro'>
                    </div>
                    <i class="fa-solid fa-equals"></i>
                    <div>
                        <label for="otherD">د.إ</label>
                        <input type="number" name='otherD'>
                    </div>
                </div>
                <button type='submit'>Convertir</button>
            </form>
            <h3>Le taux est de 1 € / 8 د.إ</h3>
        </div>
        <div class="convert2 formYen">
            <h2>YEN</h2>
            <form action="">
                <div class='lesInputs'>
                    <div>
                        <label for="euro">€</label>
                        <input type="number" name='euro'>
                    </div>
                    <i class="fa-solid fa-equals"></i>
                    <div>
                        <label for="yen">¥</label>
                        <input type="number" name='yen'>
                    </div>
                </div>
                <button type='submit'>Convertir</button>
            </form>
            <h3>Le taux est de 1 € / 8 ¥</h3>
        </div>
        <div class="convert2 formPound">
            <h2>POUND</h2>
            <form action="">
                <div class='lesInputs'>
                    <div>
                        <label for="euro">€</label>
                        <input type="number" name='euro'>
                    </div>
                    <i class="fa-solid fa-equals"></i>
                    <div>
                        <label for="pound">£</label>
                        <input type="number" name='pound'>
                    </div>
                </div>
                <button type='submit'>Convertir</button>
            </form>
            <h3>Le taux est de 1 € / 8 £</h3>
        </div>
        <div class="convert2 formFc">
            <h2>CFA</h2>
            <form action="">
                <div class='lesInputs'>
                    <div>
                        <label for="euro">€</label>
                        <input type="number" name='euro'>
                    </div>
                    <i class="fa-solid fa-equals"></i>
                    <div>
                        <label for="fc">FC</label>
                        <input type="number" name='fc'>
                    </div>
                </div>
                <button type='submit'>Convertir</button>
            </form>
            <h3>Le taux est de 1 € / 8 FC</h3>
        </div>
        <div class="convert2 formBitcoin">
            <h2>BITCOIN</h2>
            <form action="">
                <div class='lesInputs'>
                    <div>
                        <label for="euro">€</label>
                        <input type="number" name='euro'>
                    </div>
                    <i class="fa-solid fa-equals"></i>
                    <div>
                        <label for="bitcoin">₿</label>
                        <input type="number" name='bitcoin'>
                    </div>
                </div>
                <button type='submit'>Convertir</button>
            </form>
            <h3>Le taux est de 1 € / 8 ₿</i></h3>
        </div>
    </div>
</section>



<?php 
require 'footer.php'
?>