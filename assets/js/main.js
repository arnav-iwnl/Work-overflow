var i = 0;
var txt = "Ideation 2022";
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("ideation").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

//count down
var countDownDate = new Date("Sept 15, 2023 09:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var difference = countDownDate - now;
  var days = ("0" + Math.floor(difference / (1000 * 60 * 60 * 24))).slice(-2);
  var hours = (
    "0" + Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).slice(-2);
  var minutes = (
    "0" + Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  ).slice(-2);
  var seconds = ("0" + Math.floor((difference % (1000 * 60)) / 1000)).slice(-2);
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
  if (days == 1) {
    document.getElementById("day").innerText = "day";
  }
  if (hours == 1) {
    document.getElementById("hour").innerText = "hour";
  }
  if (difference < 0) {
    clearInterval(x);
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
  }
}, 1000);

let slideIndex1 = 1;
showSlides1(slideIndex1);

// Next/previous controls
function plusSlides1(n) {
  showSlides1((slideIndex1 += n));
}

// Thumbnail image controls
function currentSlide1(n) {
  showSlides1((slideIndex1 = n));
}

function showSlides1(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  let dot1s = document.getElementsByClassName("dot1");
  if (n > slides.length) {
    slideIndex1 = 1;
  }
  if (n < 1) {
    slideIndex1 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dot1s.length; i++) {
    dot1s[i].className = dot1s[i].className.replace(" active", "");
  }
  slides[slideIndex1 - 1].style.display = "block";
  dot1s[slideIndex1 - 1].className += " active";
}

var slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
