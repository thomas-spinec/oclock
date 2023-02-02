<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chronomètre</title>
    <link rel="icon" type="images/png" sizes="64x64" href="img/Logo_onglet.png" />
    <link rel="stylesheet" href="style.css">
    <script src="script/chrono.js"></script>
</head>

<body>
    <header>
        <section class="centrage" id="header">
            <h1><a href="index.php">O-clock</a></h1>
            <p id="slogan">L'horloge multifonction à portée de souris!</p>
        </section>
    </header>

    <main>
        <section class="centrage" id="main">
            <h1>Chronomètre</h1>
            <div id="chrono">

                <time class="horloge">00:00:00</time>
                <div id="buttonsChrono">
                    <button id="buttonChrono" data-switch="on">go</button>
                    <button id="resetChrono">reset</button>
                    <button id="tourChrono">tour</button>
                </div>
                <div id="listTours">
                </div>
            </div>
        </section>
    </main>

    <footer>
        <section class="centrage flex">
            <a href="https://thomas-spinec.students-laplateforme.io/"><img id="perso" src="img/Logo.png" alt="lien vers mon portfolio"></a>
            <a href="https://github.com/thomas-spinec/oclock"><img src="img/github.png" alt="lien vers le repo"></a>
        </section>
    </footer>
</body>

</html>