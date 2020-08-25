const imgArray = [
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80',
  'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
];
let slideIndex = 1;
let imgContainer, photo, slideIndicator;

const populateDom = () => {
  for (let i = 0; i < imgArray.length; i++) {
    imgContainer = document.createElement("div");
    imgContainer.className = "carousel-image fade";
    photo = document.createElement("img");
    photo.src = imgArray[i];
    slideIndicator = document.createElement("span");
    slideIndicator.className = "carousel-indicators__dot";
    slideIndicator.onclick = () => currentSlide(i+1);
    imgContainer.appendChild(photo);
    document.getElementsByClassName("hero-section__carousel")[0].appendChild(imgContainer);
    document.getElementsByClassName("carousel-indicators")[0].appendChild(slideIndicator);
  }
};

const currentSlide = n => {
  showSlides(slideIndex = n);
};

const showSlides = n => {
  let i;
  const slides = document.getElementsByClassName("carousel-image");
  const dots = document.getElementsByClassName("carousel-indicators__dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
};

populateDom();
showSlides(slideIndex);
