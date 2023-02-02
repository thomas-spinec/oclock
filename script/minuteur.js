document.addEventListener("DOMContentLoaded", function loaded() {
  let horloge = document.querySelector(".horloge");
  let numbersDiv = document.querySelector("#numbersTimer");
  let heureInput = document.querySelector("#hours");
  let minuteInput = document.querySelector("#minutes");
  let secondsInput = document.querySelector("#seconds");
  let popup = document.querySelectorAll(".popup");
  popup = popup[0];
  popup.style.display = "none";
  let popup_p = document.querySelector("#popup-p");
  let popupButtton = document.querySelector("#close-popup");

  // bouton pour reset
  let buttonReset = document.querySelector("#reset");

  // variables utiles
  let time;

  // la fonction va limiter le nb d'input que l'on peut rentrer
  function checkInputNb(typeInput) {
    let ValueInput = typeInput.value;

    if (ValueInput.length < 3) {
      return true;
    } else {
      ValueInput = ValueInput.substring(0, ValueInput.length - 1);
      typeInput.value = ValueInput;
    }
  }

  function minuteur() {
    heureInput.addEventListener("keyup", function () {
      checkInputNb(heureInput);
    });

    minuteInput.addEventListener("keyup", function () {
      checkInputNb(minuteInput);
    });

    secondsInput.addEventListener("keyup", function () {
      checkInputNb(secondsInput);
    });
  }

  let button = document.querySelector("#buttonMinuteur");

  // fonction de décrémentation
  function decreaseTime() {
    if (time == 0) {
      // audio + popup
      let audio = new Audio("sounds/minuteur.mp3");
      audio.play();
      popup.style.display = "block";
      popup_p.innerHTML = "Le temps est écoulé !";
      popupButtton.addEventListener("click", function () {
        audio.pause();
        popup.style.display = "none";
        reset();
      });
    } else {
      time--;
      let hours = Math.floor(time / 3600);
      let minutes = Math.floor((time - hours * 3600) / 60);
      let seconds = time - hours * 3600 - minutes * 60;
      // rajout des 0
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      // console.log(hours, minutes, seconds);
      horloge.innerHTML = hours + ":" + minutes + ":" + seconds;
    }
  }

  //  lancement du timer lors du click
  button.addEventListener("click", function (event) {
    event.preventDefault();
    if (button.dataset.switch == "on") {
      button.innerHTML = "stop";
      let heureValue = parseInt(heureInput.value);
      let minValue = parseInt(minuteInput.value);
      let secValue = parseInt(secondsInput.value);

      time = heureValue * 3600 + minValue * 60 + secValue;
      //   console.log(time, typeof time);
      timesUp = setInterval(decreaseTime, 1000);
      delete button.dataset.switch;
      numbersDiv.style.display = "none";
      horloge.style.display = "block";
    } else {
      button.innerHTML = "start";
      button.dataset.switch = "on";
      clearInterval(timesUp);
    }
  });

  // fonction pour reset
  function reset() {
    location.reload();
  }

  minuteur();

  buttonReset.addEventListener("click", reset);
});
