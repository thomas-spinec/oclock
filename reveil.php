<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Réveil</title>
    <link rel="icon" type="images/png" sizes="64x64" href="img/Logo_onglet.png" />
    <link rel="stylesheet" href="style.css">
    <script src="script/horloge.js" defer></script>
    <script src="script/reveil.js" defer></script>
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
            <h1>Réveil</h1>
            <div id="horloge">
            </div>
            <div id="reveil">
                <form action="" method="post" id="formAlarme">
                    <input type="time" name="horaire" id="horaire">
                    <input type="text" id="textAlarme">
                    <button id="buttonAlarm" type="submit" name="submitAlarm">Programmer</button>
                </form>
                <div id="Alarmes">
                    <div id="futur">
                        <h5>Alarmes à venir</h5>
                        <ul id="next"></ul>
                    </div>
                    <div id="pass">
                        <h5>Alarmes passées</h5>
                        <ul id="past"></ul>
                    </div>
                </div>
            </div>
            <div id="popUp">
                <h3 id="titre"></h3>
                <p id="textPop"></p>
                <button id="buttonPop">OK</button>
            </div>
        </section>
    </main>

    <footer>
        <section class="centrage">
            <img id="perso" src="img/Logo.png" alt="Thomas Spinec">
        </section>
</body>

</html>