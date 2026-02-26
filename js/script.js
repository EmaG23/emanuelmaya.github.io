// 1. Contador Dinámico
const fechaInicio = new Date("Nov 29, 2025 00:00:00").getTime();
function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = ahora - fechaInicio;
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
  document.getElementById("contador").innerHTML = `${dias} días, ${horas}h, ${minutos}m, ${segundos}s 💕`;
}
setInterval(actualizarContador, 1000);
actualizarContador();

// 2. Funciones de Interacción
function toggleMensaje() {
  document.getElementById("mensaje-oculto").classList.toggle("oculto");
}

function revelarSecreto() {
  alert("✨ El secreto es: Germany ✨");
}

function tocarSonidoGato() {
  const sonido = document.getElementById("sonido-gato");
  sonido.currentTime = 0;
  sonido.play();
}

// 3. Lluvia de Corazones
function crearCorazon() {
  const container = document.getElementById("corazones-container");
  const corazon = document.createElement("div");
  corazon.innerHTML = "❤️";
  corazon.classList.add("corazon-flotante");
  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.animationDuration = Math.random() * 2 + 3 + "s";
  container.appendChild(corazon);
  setTimeout(() => { corazon.remove(); }, 4000);
}

let intervaloCorazones;

// 4. Música y Activación de Corazones
const musicToggleBtn = document.getElementById("music-toggle");
const bgMusic = document.getElementById("bg-music");

musicToggleBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play().then(() => {
      musicToggleBtn.innerText = "⏸️ Pausar Música";
      intervaloCorazones = setInterval(crearCorazon, 300); // Salen corazones cada 0.3 seg
    }).catch(error => {
      bgMusic.load();
      bgMusic.play();
      musicToggleBtn.innerText = "⏸️ Pausar Música";
    });
  } else {
    bgMusic.pause();
    musicToggleBtn.innerText = "🎵 Reproducir Música";
    clearInterval(intervaloCorazones); // Deja de crear corazones al pausar
  }
});
