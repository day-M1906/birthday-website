const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const nextPageBtn = document.getElementById("next-page-btn");

const page1 = document.getElementById("page-1");
const page2 = document.getElementById("page-2");
const page3 = document.getElementById("page-3");

// Make the "No" button run away when hovered or touched
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

function moveNoButton() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 60);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 60);

  noBtn.style.position = "fixed";
  noBtn.style.left = `${Math.max(20, x)}px`;
  noBtn.style.top = `${Math.max(20, y)}px`;
}

// Page 1 -> Page 2 transition
yesBtn.addEventListener("click", () => {
  page1.classList.remove("active");
  page2.classList.add("active");
});

// Page 2 -> Page 3 transition
nextPageBtn.addEventListener("click", () => {
  page2.classList.remove("active");
  page3.classList.add("active");
});