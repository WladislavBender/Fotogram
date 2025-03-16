let slideIndex = 1;
let imgs = [
  "./img/bird-7902319_1280.jpg",
  "./img/drop-3698073_1280.jpg",
  "./img/forest-7471935_1280.jpg",
  "./img/horses-7407805_1280.jpg",
  "./img/landscape-2979296_1280.jpg",
  "./img/lavender-7489530_1280.jpg",
  "./img/leaves-8413064_1280.jpg",
  "./img/moon-8579189_1280.jpg",
  "./img/mountains-3699372_1280.jpg",
  "./img/boat-7040754_1280.jpg",
  "./img/mountains-7558365_1280.jpg",
  "./img/water-lily-8253542_1280.jpg",
];



function openModal() {
  document.getElementById("myModal").style.display = "block";
  window.addEventListener('click', closeModalOutside);
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  window.removeEventListener('click', closeModalOutside);
}

function closeModalOutside(event) {
  let modal = document.getElementById("myModal");
  if (event.target === modal) {
      closeModal(); 
  }
}


function insertImagesFromArray() {
  let imgsRef = document.getElementById("content", "test");
  imgsRef.innerHTML = '';

  for (let i = 0; i < imgs.length; i++) {
    imgsRef.innerHTML += `<img class="imgTest" onclick="toggleOverlay(${i})" src="${imgs[i]}">`;
  }
}

function toggleOverlayStartWithout() {
  let overlayRef = document.getElementById('overlay');

  overlayRef.classList.add('d_none');
}


function toggleOverlay() {
  let overlayRef = document.getElementById('overlay');

  overlayRef.classList.toggle('d_none');
}


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");


  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
}