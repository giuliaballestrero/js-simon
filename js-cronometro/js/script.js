const tempo = document.getElementById('tempo');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');


// dichiaro un intervallo di tempo
let interval;
let numbers = 0;

//creo una funzione per definire l'intervallo
function startInterval() {
  // verifico che l'intervallo non esista già
  if (!interval) {
    interval = setInterval(timeIncrease, 50);
  }
}

//creo una funzione per incrementare il tempo
function timeIncrease() {
  tempo.innerHTML = numbers;
  numbers++;
}

//creo una funzione per fermare l'intervallo
function stopInterval() {
  clearInterval(interval);
  // resetto la variabile di intervallo
  interval = null;
}

//creo una funzione per azzerare il cronometro
function resetInterval() {
    tempo.innerHTML = 0;
    stopInterval();
    numbers = 0;
}

document.getElementById("start").addEventListener("click", startInterval);
document.getElementById("pause").addEventListener("click", stopInterval);
document.getElementById("reset").addEventListener("click", resetInterval);
