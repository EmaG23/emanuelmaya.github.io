// 1. Contador Dinámico (Desde el 29 de Noviembre 2025)
const fechaInicio = new Date("Nov 29, 2025 00:00:00").getTime();

function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = ahora - fechaInicio;

  // Cálculos matemáticos de tiempo
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("contador").innerHTML = 
    `${dias} días, ${horas}h, ${minutos}m, ${segundos}s 💕`;
}
// Actualiza cada segundo
setInterval(actualizarContador, 1000);
actualizarContador(); // Llama inmediatamente para no esperar 1 segundo


// 2. Mostrar/Ocultar Mensaje
function toggleMensaje() {
  const mensajeBox = document.getElementById("mensaje-oculto");
  mensajeBox.classList.toggle("oculto");
}


// 3. Toggle Modo Oscuro / Claro
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Revisa si el usuario ya tenía el modo oscuro activado
if(localStorage.getItem("theme") === "dark") {
  body.setAttribute("data-theme", "dark");
  themeToggleBtn.innerText = "☀️ Modo Claro";
}

themeToggleBtn.addEventListener("click", () => {
  if (body.getAttribute("data-theme") === "dark") {
    body.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    themeToggleBtn.innerText = "🌙 Modo Oscuro";
  } else {
    body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeToggleBtn.innerText = "☀️ Modo Claro";
  }
});


// 4. Activar Música
const musicToggleBtn = document.getElementById("music-toggle");
const bgMusic = document.getElementById("bg-music");
let isPlaying = false;

musicToggleBtn.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
    musicToggleBtn.innerText = "🎵 Reproducir Música";
  } else {
    bgMusic.play();
    musicToggleBtn.innerText = "⏸️ Pausar Música";
  }
  isPlaying = !isPlaying;
});
