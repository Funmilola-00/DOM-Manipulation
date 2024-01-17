let slideIndex = 1;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function changeSlide(n) {
  showSlides((slideIndex += n));
}

// Auto-advance slides every 3 seconds
setInterval(function () {
  changeSlide(1);
}, 3000);

// Initial slide display
showSlides(slideIndex);
