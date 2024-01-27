<?php
$titre = "Profil";
require 'header.php';
if (!is_conn()) {
    header('location: loginSign.php');
} else {
    ?>

    <div class='bb75'></div>
    <div class='bb50'></div>
    <div class='bb25'></div>
    <div class='bb0'></div>
<div class='b100'></div>
    <div class='b75'></div>
    <div class='b50'></div>
    <div class='b25'></div>
    <div class='b0'></div>
    <section id="sec5">
        <div class='profilMenu'>
            <ul>
                <li>Profil</li>
                <li>Changer de pdp</li>
                <li>Information</li>
            </ul>
        </div>
        <div class="mid">
            <img src="<?php echo $_SESSION['currentpdp'] ?>">
            <h1>Bonjour
                <?php echo $_SESSION['currentuName'] ?>
            </h1>
            <?php
            if (isset($_SESSION['convName'])) {
                ?>
                <div class='lestables'>
                    <table style='margin: 0 0 0 0;'>
                        <thead>
                            <th>
                                Devise
                            </th>
                        </thead>
                        <tbody>
                            <?php
                            foreach ($_SESSION['convName'] as $name) {
                                ?>
                                <tr>
                                    <td>
                                        <?php echo $name; ?>
                                    </td>
                                <tr>
                                    <?php
                            }
                            ;
                            ?>
                        </tbody>
                    </table>
                    <table style='margin: 0 0 0 0;'>
                        <thead>
                            <th>
                                Euro
                            </th>
                        </thead>
                        <tbody>
                            <?php
                            foreach ($_SESSION['convEuro'] as $euro) {
                                ?>
                                <tr>
                                    <td>
                                        <?php echo $euro . ' €'; ?>
                                    </td>
                                <tr>
                                    <?php
                            }
                            ;
                            ?>
                        </tbody>
                    </table>
                    <table style='margin: 0 0 0 0;'>
                        <thead>
                            <th>
                                Conversion
                            </th>
                        </thead>
                        <tbody>
                            <?php
                            foreach ($_SESSION['convDevise'] as $devise) {
                                ?>
                                <tr>
                                    <td>
                                        <?php echo $devise; ?>
                                    </td>
                                <tr>
                                    <?php
                            }
                            ;
                            ?>
                        </tbody>
                    </table>
                    <table style='margin: 0 0 0 0;'>
                        <thead>
                            <th>
                                Taux
                            </th>
                        </thead>
                        <tbody>
                            <?php
                            foreach ($_SESSION['convTaux'] as $taux) {
                                ?>
                                <tr>
                                    <td>
                                        <?php echo '1 € / ' . $taux; ?>
                                    </td>
                                <tr>
                                    <?php
                            }
                            ;
                            ?>
                        </tbody>
                    </table>
                </div>
                <?php
            } else {
                ?>
                <h2 style='color:red;'>
                    <?php echo 'Aucunes données enregistrées'; ?>
                </h2>
                <img src="img/Programming-amico.svg" style='width: 28rem;height: 28rem;margin-top: 0;'>
                <?php
            }
            ?>
        </div>



    </section>



    <?php
}
require 'footer.php'
    ?>