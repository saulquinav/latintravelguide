let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// Manual control of the slides using Next and Prev buttons
function plusSlides(n) {
  slideIndex += n;
  if (slideIndex > document.getElementsByClassName("slide").length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = document.getElementsByClassName("slide").length;
  }
  showSlidesManually(slideIndex);
}

// Show specific slide when dot is clicked
function currentSlide(n) {
  slideIndex = n;
  showSlidesManually(slideIndex);
}

function showSlidesManually(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[n - 1].style.display = "block";
  dots[n - 1].className += " active";
}

showSlides(); // Initial call to show slides
