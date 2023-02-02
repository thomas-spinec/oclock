<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minuteur</title>
    <link rel="icon" type="images/png" sizes="64x64" href="img/Logo_onglet.png" />
    <link rel="stylesheet" href="style.css">
    <script src="script/minuteur.js"></script>
</head>

<body>
    <header>
        <section class="centrage" id="header">
            <h1><a href="index.php">O-clock</a></h1>
            <p>L'horloge multifonction à portée de souris!</p>
        </section>
    </header>

    <main>
        <section class="centrage" id="main">
            <h1>Minuteur</h1>
            <div class="popup">
                <span id="popup-p"></span>
                <button type="button" id="close-popup">OK</button>
            </div>
            <div id="minuteur">
                <form action="" method="post">
                    <div class="horloge"></div>
                    <div id="numbersTimer">
                        <input id="hours" name="hours" value="00" type="number" />
                        <p>:</p>
                        <input id="minutes" name="minutes" value="00" type="number" />
                        <p>:</p>
                        <input id="seconds" name="seconds" value="00" type="number" />
                    </div>
                    <button id="buttonMinuteur" type="submit" name="submitMinuteur" data-switch="on">on</button>
                </form>
            </div>
            <button id="reset">Reset</button>
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