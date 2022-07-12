const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
function goCountdown() {
  console.log("Hi!");
  //the final date
  const fest = new Date(2023, 10, 13);

  // the system date
  const current = new Date();

  //time remaining
  const sec = (fest - current) / 1000;
  const d = Math.floor(sec / 3600 / 24);
  const h = Math.floor(sec / 3600) % 24;
  const m = Math.floor(sec / 60) % 60;
  const s = Math.floor(sec) % 60;
  days.innerText = d;
  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
}
goCountdown();
setInterval(goCountdown, 1000);

// console.log("Hello World");
