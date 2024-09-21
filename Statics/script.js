window.onscroll = function() {myFunction()};
var nav = document.getElementById("nav-menu");
var sticky = nav.offsetTop;
var contentList = document.getElementsByClassName("home-content")
function myFunction() {
  if (window.scrollY >= sticky) {
    nav.classList.add("sticky-nav");
    for (let i = 0; i < contentList.length; i++) {
        contentList.item(i).style.position = "fixed"
  }} else {
    nav.classList.remove("sticky-nav");
    for (let i = 0; i < contentList.length; i++) {
        contentList.item(i).style.position = "absolute"
  }}
}

function greetingFunc() {
  var d = new Date();
  var h = d.getHours();
  var E = document.getElementById("greeting");
  if (h>=5 && h<12) {
      E.innerHTML=" Good morning";
  } else if (h>=12 && h<18) {
      E.innerHTML+=" Good afternoon";
  } else if (h>=18 && h<20) {
      E.innerHTML=" Good evening";
  } else  {
      E.innerHTML="Good night";
  } }
// greetingFunc();

var L = window.location.href;
console.log(L);
if (L.includes("index.html")) { /* run only for index.html page */
  greetingFunc();
}

let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}