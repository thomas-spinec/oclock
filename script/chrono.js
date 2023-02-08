document.addEventListener("DOMContentLoaded", function loaded() {
  //   let chronometre = document.querySelector("#chrono");
  let buttonChrono = document.querySelector("#buttonChrono");
  let timeChrono = document.getElementsByTagName("time");
  let buttonReset = document.querySelector("#resetChrono");
  let buttonTour = document.querySelector("#tourChrono");
  let listTours = document.querySelector("#listTours");
  let Tours = document.createElement("ul");
  listTours.appendChild(Tours);

  let timesRunning;
  let timePaused;
  let addTours;
  let timePlus;

  // reset par sécurité
  function resetDebut() {
    clearInterval(timesRunning);
    timeChrono[0].style.display = "block";
    timeChrono[0].innerHTML = "00:00:00";
    timePlus = 0;
    timePaused = 0;

    Tours.innerHTML = "";
    // chronometre.removeChild(listTours)

    buttonChrono.dataset.switch = "on";
    buttonChrono.innerHTML = "go";
  }

  resetDebut();
  // fin reset

  buttonChrono.addEventListener("click", function (event) {
    event.preventDefault();

    if (buttonChrono.dataset.switch == "on") {
      buttonChrono.innerHTML = "pause";

      if (timePaused !== undefined) {
        let timePlus = timePaused;
      } else {
        let secondsChrono = 0;
        let minutesChrono = 0;
        let hoursChrono = 0;

        minutesChrono = minutesChrono * 60;
        hoursChrono = hoursChrono * 3600;

        let timePlus = secondsChrono + minutesChrono + hoursChrono;
      }

      timesRunning = setInterval(chronometer, 1000);
      delete buttonChrono.dataset.switch;
    } else {
      buttonChrono.innerHTML = "go";

      clearInterval(timesRunning);

      let timePause = timeChrono[0].innerHTML;
      timePause = timePause.split(":");

      let newHour = timePause[0];
      let newMinute = timePause[1];
      let newSecond = timePause[2];

      newMinute = newMinute * 60;
      newHour = newHour * 3600;

      timePaused = parseInt(newHour + newMinute + newSecond);

      buttonChrono.dataset.switch = "on";
    }

    function chronometer() {
      timePlus++;

      hoursChrono = parseInt(timePlus / 3600, 10);
      minutesChrono = parseInt((timePlus % 3600) / 60, 10);
      secondsChrono = parseInt((timePlus % 3600) % 60, 10);

      hoursChrono = hoursChrono < 10 ? "0" + hoursChrono : hoursChrono;
      minutesChrono = minutesChrono < 10 ? "0" + minutesChrono : minutesChrono;
      secondsChrono = secondsChrono < 10 ? "0" + secondsChrono : secondsChrono;

      timeChrono[0].innerHTML =
        hoursChrono + ":" + minutesChrono + ":" + secondsChrono;
    }
  });

  buttonTour.addEventListener("click", function tour(event) {
    event.preventDefault();
    if (timeChrono[0].innerHTML !== "00:00:00") {
      addTours = document.createElement("li");

      addTours.innerText = timeChrono[0].innerHTML;
      Tours.appendChild(addTours);
    }
  });

  buttonReset.addEventListener("click", function (event) {
    event.preventDefault();
    resetDebut();
  });
});
