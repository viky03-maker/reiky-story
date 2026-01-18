function scrollToStory() {
  document.getElementById("story").scrollIntoView({
    behavior: "smooth"
  });
}
const items = document.querySelectorAll(".timeline-item");

function showTimeline() {
  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showTimeline);
showTimeline();
const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
const startDate = new Date("2025-07-09T20:30:20"); // GANTI tanggal & jam jadian

function updateLoveCounter() {
  const now = new Date();
  let diff = now - startDate;

  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  const displayDays = days % 30;
  const displayMonths = months % 12;

  document.getElementById("time").innerHTML =
    `${years} years ${displayMonths} months ${displayDays} days<br>
     ${hours} hours ${minutes} minutes`;

  // TEXT OTOMATIS
  const milestone = document.getElementById("milestone");

  if (days < 100) {
    milestone.innerText = "🤍 Still at the beginning of our forever";
  } else if (days < 365) {
    milestone.innerText = "✨ Learning, growing, loving";
  } else if (days < 500) {
    milestone.innerText = "💛 One year of choosing each other";
  } else if (days < 1000) {
    milestone.innerText = "💍 Building memories together";
  } else {
    milestone.innerText = "♾️ Forever doesn’t feel long with you";
  }
}

setInterval(updateLoveCounter, 60000); // update tiap menit
updateLoveCounter();
const loveNotes = [
  "Hari ini aku tetap memilih kamu.",
  "Cinta itu pulang, dan kamu rumahnya.",
  "Terima kasih sudah bertahan bersamaku.",
  "Aku mencintaimu, sederhana tapi dalam.",
  "Bersamamu, dunia terasa cukup."
];

const todayIndex = new Date().getDate() % loveNotes.length;
document.getElementById("daily-note").innerText = "💌 " + loveNotes[todayIndex];
const memories = {
  "02-14": "Hari kita saling memilih untuk pertama kali.",
  "01-12": "Chat pertama yang mengubah segalanya.",
  "01-28": "First date, deg-degan tapi bahagia."
};

const today = new Date();
const key = 
  String(today.getMonth()+1).padStart(2,'0') + "-" +
  String(today.getDate()).padStart(2,'0');

if (memories[key]) {
  document.getElementById("memory-title").innerText = "📅 Memory of The Day";
  document.getElementById("memory-text").innerText = memories[key];
}
const hour = new Date().getHours();
if (hour >= 18 || hour <= 5) {
  document.body.classList.add("dark");
}
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

music.volume = 0.3; // lembut

let isPlaying = false;

function playMusic() {
  music.play();
  musicBtn.innerText = "🔇 Pause Music";
  isPlaying = true;
}

function pauseMusic() {
  music.pause();
  musicBtn.innerText = "🔈 Play Music";
  isPlaying = false;
}

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    playMusic();
  } else {
    pauseMusic();
  }
});

// autoplay setelah interaksi pertama
document.addEventListener("click", function autoPlayOnce() {
  if (!isPlaying) playMusic();
  document.removeEventListener("click", autoPlayOnce);
});
music.volume = 0;
music.play();

let vol = 0;
const fade = setInterval(() => {
  if (vol < 0.3) {
    vol += 0.01;
    music.volume = vol;
  } else {
    clearInterval(fade);
  }
}, 200);
const savedState = localStorage.getItem("music");

if (savedState === "on") {
  music.play();
}

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    localStorage.setItem("music", "on");
  } else {
    music.pause();
    localStorage.setItem("music", "off");
  }
});
btn.addEventListener("click", () => {
  document.getElementById("daily-note").innerText =
    "🎶 Lagu ini selalu mengingatkanku padamu";
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll("section").forEach(sec => {
  observer.observe(sec);
});
function openPopup(img) {
  const popup = document.getElementById("popup");
  const popupImg = document.getElementById("popup-img");

  popupImg.src = img.src;
  popup.classList.add("show");
}

function closePopup() {
  document.getElementById("popup").classList.remove("show");
}
