/* ── Clock ── */
function initClock() {
  function tick() {
    const d = new Date();
    const p = n => String(n).padStart(2,'0');
    const clock = document.getElementById('clock');
    if (clock) {
      clock.textContent =
        `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
    }
  }
  tick();
  setInterval(tick, 1000);
}

/* ── Panel Animations ── */
function initPanelAnimations() {
  document.addEventListener('DOMContentLoaded', function() {
    const panels = document.querySelectorAll('.panel');
    panels.forEach((panel, index) => {
      panel.style.animationDelay = `${index * 0.1}s`;
    });
  });
}

/* ── Title Animations ── */
let animate = true;
let scrollInterval;

const mainTitle = "e m a n o n";
const awayText = "   come back. . . don't get lost - the signal is still here ✦   ";

function recursiveAnimateTitle(string, delay, currentIndex = 0) {
  if (!animate) return;
  if (currentIndex >= string.length) return;

  let title = document.querySelector("title");
  title.innerHTML = string.substring(0, currentIndex + 1);

  setTimeout(function () {
    recursiveAnimateTitle(string, delay, currentIndex + 1);
  }, delay);
}

function animateTitle(string, initialDelay, restartDelay) {
  if (!animate) return;

  document.querySelector("title").innerHTML = "";

  setTimeout(function () {
    recursiveAnimateTitle(string, initialDelay);
  }, 100);

  setTimeout(function () {
    animateTitle(string, initialDelay, restartDelay);
  }, initialDelay * string.length + restartDelay);
}

let scrollText = awayText;

function startScrollingTitle() {
  scrollInterval = setInterval(() => {
    scrollText = scrollText.substring(1) + scrollText[0];
    document.title = scrollText;
  }, 50);
}

function handleVisibilityChange() {
  if (document.hidden) {
    animate = false;
    startScrollingTitle();
  } else {
    clearInterval(scrollInterval);
    animate = true;
    animateTitle(mainTitle, 100, 1000);
  }
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', function() {
  initClock();
  initPanelAnimations();
  
  if (window === window.top) {
    animateTitle(mainTitle, 100, 1000);
  }

  document.addEventListener("visibilitychange", handleVisibilityChange);
});
