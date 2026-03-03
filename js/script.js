// 1. Contador Dinámico (Solo se activa si el elemento existe en la página)
const fechaInicio = new Date("Nov 29, 2025 00:00:00").getTime();
function actualizarContador() {
  const contadorElement = document.getElementById("contador");
  if (!contadorElement) return; // Si no hay contador en esta página, no hace nada

  const ahora = new Date().getTime();
  const diferencia = ahora - fechaInicio;
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
  contadorElement.innerHTML = `${dias} días, ${horas}h, ${minutos}m, ${segundos}s 💕`;
}
setInterval(actualizarContador, 1000);
actualizarContador();

// 2. Interacciones Globales
function toggleMensaje() { 
  const msg = document.getElementById("mensaje-oculto");
  if(msg) msg.classList.toggle("oculto"); 
}
function revelarSecreto() { alert("✨ El secreto es: Germany ✨"); }
function tocarSonidoGato() { 
  const sonido = document.getElementById("sonido-gato");
  if(sonido) sonido.play(); 
}

// 3. Lluvia de Corazones (Se activa con la música)
function crearCorazon() {
  const container = document.getElementById("corazones-container");
  if(!container) return;
  const corazon = document.createElement("div");
  corazon.innerHTML = "❤️";
  corazon.classList.add("corazon-flotante");
  corazon.style.left = Math.random() * 100 + "vw";
  container.appendChild(corazon);
  setTimeout(() => { corazon.remove(); }, 4000);
}

let intervaloCorazones;
const musicToggleBtn = document.getElementById("music-toggle");
const bgMusic = document.getElementById("bg-music");

if (musicToggleBtn && bgMusic) {
  musicToggleBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play().then(() => {
        musicToggleBtn.innerText = "⏸️ Pausar Música";
        intervaloCorazones = setInterval(crearCorazon, 300);
      }).catch(() => {
        bgMusic.load(); bgMusic.play();
        musicToggleBtn.innerText = "⏸️ Pausar Música";
      });
    } else {
      bgMusic.pause();
      musicToggleBtn.innerText = "🎵 Reproducir Música";
      clearInterval(intervaloCorazones);
    }
  });
}

// 4. Modo Oscuro Global
const themeBtn = document.getElementById("theme-toggle");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    if (document.body.getAttribute("data-theme") === "dark") {
      document.body.removeAttribute("data-theme");
      themeBtn.innerText = "🌙 Modo Oscuro";
    } else {
      document.body.setAttribute("data-theme", "dark");
      themeBtn.innerText = "☀️ Modo Claro";
    }
  });
}
