const countDownDate = new Date("Jun 26, 2023 00:00:00").getTime();

const x = setInterval(function() {

  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0");
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0");
  let seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, "0");

  document.querySelector(".day").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".min").innerHTML = minutes;
  document.querySelector(".sec").innerHTML = seconds;



  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".day").innerHTML = "00";
    document.querySelector(".hours").innerHTML = "00";
    document.querySelector(".min").innerHTML = "00";
    document.querySelector(".sec").innerHTML = "00";


  }
}, 1000);
if (distance <= 0) {
    clearInterval(x);}
