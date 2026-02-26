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

// 2. Mensaje Oculto
function toggleMensaje() {
  document.getElementById("mensaje-oculto").classList.toggle("oculto");
}

// 3. Modo Oscuro
const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
  if (document.body.getAttribute("data-theme") === "dark") {
    document.body.removeAttribute("data-theme");
    themeToggleBtn.innerText = "🌙 Modo Oscuro";
  } else {
    document.body.setAttribute("data-theme", "dark");
    themeToggleBtn.innerText = "☀️ Modo Claro";
  }
});

const musicToggleBtn = document.getElementById("music-toggle");
const bgMusic = document.getElementById("bg-music");

musicToggleBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    // Intentamos reproducir
    bgMusic.play().then(() => {
      musicToggleBtn.innerText = "⏸️ Pausar Música";
      musicToggleBtn.style.background = "#ff99a8"; // Un tono más oscuro al tocar
    }).catch(error => {
      // Si el navegador bloquea, forzamos la carga y reintentamos
      bgMusic.load();
      bgMusic.play();
      musicToggleBtn.innerText = "⏸️ Pausar Música";
    });
  } else {
    bgMusic.pause();
    musicToggleBtn.innerText = "🎵 Reproducir Música";
    musicToggleBtn.style.background = "var(--accent-color)";
  }
});
