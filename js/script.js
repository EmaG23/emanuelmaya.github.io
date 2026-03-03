// 1. Cambio de Pestañas (Dinámico)
function mostrarSeccion(id, event) {
  // Ocultar todos los contenidos
  document.querySelectorAll('.tab-content').forEach(section => {
    section.classList.remove('active');
  });
  // Quitar estado activo de todas las pestañas
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  // Mostrar la seleccionada
  document.getElementById(id).classList.add('active');
  event.currentTarget.classList.add('active');
}

// 2. Contador Dinámico
const fechaInicio = new Date("Nov 29, 2025 00:00:00").getTime();
function actualizarContador() {
  const el = document.getElementById("contador");
  if (!el) return;
  const ahora = new Date().getTime();
  const diff = ahora - fechaInicio;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diff % (1000 * 60)) / 1000);
  el.innerHTML = `${dias}d, ${horas}h, ${minutos}m, ${segundos}s 💕`;
}
setInterval(actualizarContador, 1000);
actualizarContador();

// 3. Interacciones y Sonidos
function toggleMensaje() { document.getElementById("mensaje-oculto").classList.toggle("oculto"); }
function revelarSecreto() { alert("✨ El secreto es: Germany ✨"); }
function tocarSonidoGato() { document.getElementById("sonido-gato").play(); }

// 4. Música y Corazones
let intervaloCorazones;
const musicToggleBtn = document.getElementById("music-toggle");
const bgMusic = document.getElementById("bg-music");

function crearCorazon() {
  const container = document.getElementById("corazones-container");
  const corazon = document.createElement("div");
  corazon.innerHTML = "❤️";
  corazon.style.position = "fixed";
  corazon.style.bottom = "-50px";
  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.fontSize = "20px";
  corazon.style.transition = "4s linear";
  container.appendChild(corazon);
  
  setTimeout(() => {
    corazon.style.transform = "translateY(-110vh)";
    corazon.style.opacity = "0";
  }, 100);
  setTimeout(() => { corazon.remove(); }, 4000);
}

musicToggleBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggleBtn.innerText = "⏸️";
    intervaloCorazones = setInterval(crearCorazon, 400);
  } else {
    bgMusic.pause();
    musicToggleBtn.innerText = "🎵";
    clearInterval(intervaloCorazones);
  }
});

// 5. Modo Oscuro
document.getElementById("theme-toggle").addEventListener("click", () => {
  if (document.body.getAttribute("data-theme") === "dark") {
    document.body.removeAttribute("data-theme");
  } else {
    document.body.setAttribute("data-theme", "dark");
  }
});
