const intro = document.getElementById("intro");
const startBtn = document.getElementById("startBtn");

startBtn?.addEventListener("click", () => {
  intro.classList.add("hidden");
  setTimeout(() => intro.remove(), 900);
});

const targetDate = new Date("2026-12-26T09:45:00+01:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "<div class='travel-day'>¡Buen viaje! ♥</div>";
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  document.getElementById("days").textContent = Math.floor(totalSeconds / 86400);
  document.getElementById("hours").textContent = String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, "0");
  document.getElementById("minutes").textContent = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  document.getElementById("seconds").textContent = String(totalSeconds % 60).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
