const days = document.getElementById("days");
console.log(days);
const hours = document.getElementById("hours");
console.log(hours);
const minutes = document.getElementById("minutes");
console.log(minutes);
const seconds = document.getElementById("seconds");
console.log(seconds);
function goCountdown() {
  const fest = new Date(2022, 10, 13);
  console.log(fest);

  const current = new Date();
  console.log(current);

  const sec = (fest - current) / 1000;
  console.log(sec);
  const d = Math.floor(sec / 3600 / 24);
  console.log(d);
  const h = Math.floor(sec / 3600) % 24;
  console.log(h);
  const m = Math.floor(sec / 60) % 60;
  console.log(m);
  const s = Math.floor(sec) % 60;
  console.log(s);
  days.innerText = d;
  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
}
goCountdown();
setInterval(goCountdown, 1000);
