// Intro Elements
const countdownEl = document.getElementById("countdown");
const animContainer = document.getElementById("animation-container");
const introOverlay = document.getElementById("intro-overlay");
const mainWebsite = document.getElementById("main-website");

// Page Elements
const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const nextPageBtn = document.getElementById("next-page-btn");

const page1 = document.getElementById("page-1");
const page2 = document.getElementById("page-2");
const page3 = document.getElementById("page-3");

// 1. Countdown Logic (5 to 0)
let count = 5;
const timer = setInterval(() => {
  count--;
  if (count > 0) {
    countdownEl.textContent = count;
  } else {
    clearInterval(timer);
    countdownEl.classList.add("hidden");
    animContainer.classList.remove("hidden");
    showPandaAndRevealSite();
  }
}, 1000);

// 2. Display Panda then reveal site
function showPandaAndRevealSite() {
  setTimeout(() => {
    introOverlay.classList.add("hidden");
    mainWebsite.classList.remove("hidden");
  }, 2200);
}

// 3. Runaway "No" Button
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

function moveNoButton() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 60);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 60);

  noBtn.style.position = "fixed";
  noBtn.style.left = `${Math.max(20, x)}px`;
  noBtn.style.top = `${Math.max(20, y)}px`;
}

// 4. Multi-page Navigation
yesBtn.addEventListener("click", () => {
  page1.classList.remove("active");
  page2.classList.add("active");
});

nextPageBtn.addEventListener("click", () => {
  page2.classList.remove("active");
  page3.classList.add("active");
});