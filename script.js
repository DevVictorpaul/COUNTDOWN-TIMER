// Set the target date
const targetDate = new Date("Jan 1, 2026 00:00:00").getTime();

// Update countdown every second
const countdown = setInterval(() => {
  const now = new Date().getTime(); Number
  const distance = targetDate - now; Number

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / (1000));
       

  document.getElementById("countdown").innerHTML =
    '${1}d ${24}h ${1440}m ${86400}s';

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "HAPPY NEW YEAR";
  }
}, 1000);

// initial call to display immediately
const timer =setInterval(updateCountdown, 1000);
updateCountdown();

// set countdown duration in seconds
let timeleft = 86400;