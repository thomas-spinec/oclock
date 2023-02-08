document.addEventListener("DOMContentLoaded", function loaded() {
  let horaire = document.querySelector("#horaire");
  let text = document.querySelector("#textAlarme");
  let buttonAlarme = document.querySelector("#buttonAlarm");
  let formAlarme = document.querySelector("#formAlarme");
  let futur = document.querySelector("#next");
  let passé = document.querySelector("#past");
  let popUp = document.querySelector("#popUp");
  let popUpHeure = document.querySelector("#titre");
  let popUpText = document.querySelector("#textPop");
  let pop = document.querySelector("#buttonPop");

  // variable pour l'alarme

  let audio = new Audio("sounds/alarme.mp3");

  // fonction pour récupérer l'heure actuelle
  function getHeure() {
    let date = new Date();
    let heure = date.getHours();
    let minutes = date.getMinutes();

    heure = heure < 10 ? "0" + heure : heure;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    let clock = heure + ":" + minutes;
    return clock;
  }

  // fonction pour set l'heure de l'alarme
  function getAlarme() {
    let heureAlarme = horaire.value;
    return heureAlarme;
  }

  // fonction pour set le texte de l'alarme
  function getText() {
    let textAlarme = text.value;
    return textAlarme;
  }

  // fonction pour comparer l'heure actuelle et l'heure de l'alarme
  function compareHeure() {
    let heureActuelle = getHeure();
    let heureAlarme = getAlarme();
    let textAlarme = getText();
    if (heureActuelle > heureAlarme) {
      let alarme = document.createElement("li");
      alarme.innerHTML = heureAlarme + ", " + textAlarme;
      passé.appendChild(alarme);
    } else {
      let alarme = document.createElement("li");
      alarme.innerHTML = heureAlarme + ", " + textAlarme;
      futur.appendChild(alarme);
    }
  }

  // fonction pour récupérer les alarmes dans la liste futur
  function getAlarmesFutur() {
    let alarmesFutur = futur.querySelectorAll("li");
    return alarmesFutur;
  }

  // fonction pour lancer l'alarme
  function alarme() {
    let alarmesFutur = getAlarmesFutur();
    let heureActuelle = getHeure();
    for (let i = 0; i < alarmesFutur.length; i++) {
      let alarme = alarmesFutur[i];
      let heureAlarme = alarme.innerHTML.split(", ")[0];
      let raisonAlarme = alarme.innerHTML.split(", ")[1];
      if (heureActuelle == heureAlarme) {
        alarme.innerHTML = heureAlarme + ", " + raisonAlarme;
        passé.appendChild(alarme);
        audio.play();
        audio.currentTime = 89;
        popUp.style.display = "flex";
        popUpHeure.innerHTML = heureAlarme;
        popUpText.innerHTML = raisonAlarme;
      }
    }
  }

  // fonction pour afficher le temps restant avant chaque alarme de la liste future
  function tempsRestant() {
    let alarmesFutur = getAlarmesFutur();
    let date = getHeure();
    let dateSplit = date.split(":");
    let heureActuelle = dateSplit[0];
    let minutesActuelles = dateSplit[1];
    for (let i = 0; i < alarmesFutur.length; i++) {
      let alarme = alarmesFutur[i];
      let heureAlarme = alarme.innerHTML.split(", ")[0];
      let heureAlarmeSplit = heureAlarme.split(":");
      let heureAlarmeSplitHeure = heureAlarmeSplit[0];
      let heureAlarmeSplitMinute = heureAlarmeSplit[1];

      let heureRestante = heureAlarmeSplitHeure - heureActuelle;
      let minutesRestantes = heureAlarmeSplitMinute - minutesActuelles;
      if (minutesRestantes < 0) {
        minutesRestantes = 60 + minutesRestantes;
        heureRestante--;
      }
      //   alarme.innerHTML = "";
      alarme.innerHTML =
        heureAlarme +
        ", " +
        alarme.innerHTML.split(", ")[1] +
        ", temps restant -> " +
        heureRestante +
        "h " +
        minutesRestantes +
        "m";
    }
  }

  // appel des fonctions nécessaire lors du click sur le bouton en empéchant le submit du form
  buttonAlarme.addEventListener("click", function (e) {
    e.preventDefault();
    compareHeure();
    tempsRestant();
    horaire.value = "";
    text.value = "";
  });

  // disparition du popUp et arrêt de l'alarme lors du click
  pop.addEventListener("click", function () {
    popUp.style.display = "none";
    audio.pause();
  });

  // lancement des fonctions que l'on doit lancer toutes les secondes
  setInterval(function () {
    alarme();
    tempsRestant();
  }, 1000);
});
