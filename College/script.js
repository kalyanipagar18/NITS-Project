// MAIN HOME SLIDER
const images = [
  "img/home1.jpg", "img/home2.jpg", "img/home3.jpg", "img/home4.jpg",
  "img/home5.jpg", "img/home6.jpg", "img/home7.jpg", "img/home8.jpg",
  "img/home9.jpg", "img/home11.jpg", "img/home12.jpg", "img/home13.jpg", "img/home14.jpg"
];

let current = 0;
const imgEl = document.getElementById("sliderImage");

function showImage(index) {
  imgEl.src = images[index];
}
function nextSlide() {
  current = (current + 1) % images.length;
  showImage(current);
}
function prevSlide() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}
setInterval(nextSlide, 4000);
showImage(current);

// INSTITUTE SLIDER
const campusImages = ["img/college2.jpg", "img/college3.jpg", "img/college4.jpg","img/college5.jpg","img/college6.jpg"];
let currentIndex = 0;
const imageEl = document.getElementById("instituteSlide");

function showSlide(index) {
  if (index >= 0 && index < campusImages.length) {
    imageEl.src = campusImages[index];
  }
}
function nextInstituteSlide() {
  currentIndex = (currentIndex + 1) % campusImages.length;
  showSlide(currentIndex);
}
function prevInstituteSlide() {
  currentIndex = (currentIndex - 1 + campusImages.length) % campusImages.length;
  showSlide(currentIndex);
}
setInterval(nextInstituteSlide, 4000);


// placemant
 const cardImages = {
  "card-img-1": ["img/CR11.jpeg", "img/CR12.jpeg","img/CR13.jpeg","img/CR7.jpeg"],
  "card-img-2": ["img/CDAC_Placement_Feb_2020_Final1.jpeg","img/Company-Visited-768x460.jpeg","img/Placement-records-768x351.jpeg","img/CDAC-Placement1.jpeg"],
  "card-img-3": ["img/CR6.jpeg", "img/CR7.jpeg","img/CR8.jpeg","img/CR3.jpeg"]
};

let currentSlideIndex = 0;

function updateAllCardImages() {
  currentSlideIndex = (currentSlideIndex + 1) % cardImages["card-img-1"].length;

  for (const [id, images] of Object.entries(cardImages)) {
    document.getElementById(id).src = images[currentSlideIndex];
  }
}

setInterval(updateAllCardImages, 3000); 

// recruiters
const logoImages = [
  'img/eclerx-copy.jpeg',   
  'img/Byjus-copy.jpeg',
  'img/Capgemini-copy.jpeg',
  'img/Cognifront-copy.jpeg',
  'img/Bitwise-copy.jpeg',
  'img/Aress-Software-Solutions-copy.jpeg',
  'img/Bharat-Serum-copy.jpeg',
  'img/BOSCH-copy.jpeg',
  'img/Axis-Bank-2-copy.jpeg',
  'img/American-Express-copy.jpeg',
  'img/BNY-Mellon-copy.jpeg',
  'img/apollo-pharmacy-copy.jpeg',
  'img/ajanta-pharma-copy.jpeg',
  'img/amdoc-copy.jpeg',
  'img/Angel-broking-copy.jpeg',
  'img/Datamatics-copy.jpeg',
  'img/Decimal-Point-2-copy.jpeg',
  'img/ESDS-copy.jpeg',
  'img/HAL-copy.jpeg',
  'img/Mahindra-and-Mahindra-copy.jpeg',
  'img/Siemens-copy.jpeg',
  'img/Winjit-Technologies-copy',
  'img/Wipro-copy.jpeg',
  'img/Zensar-Technologies-copy.jpeg',
  'img/vscl-copy.jpeg'
];

const carousel = document.getElementById('carousel');
const dotsContainer = document.getElementById('dots');
const btnLeft = document.querySelector('.nav.left');
const btnRight = document.querySelector('.nav.right');

let index = 0;
const visibleCount = 4;


logoImages.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Logo';
  carousel.appendChild(img);
});

const dotCount = logoImages.length - visibleCount + 1;
for (let i = 0; i < dotCount; i++) {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => {
    index = i;
    updateCarousel();
  });
  dotsContainer.appendChild(dot);
}

function updateDots() {
  const dots = document.querySelectorAll('#dots span');
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
}

function updateCarousel() {
  const offset = index * (carousel.children[0].offsetWidth + 20); // 20 = margin
  carousel.style.transform = `translateX(-${offset}px)`;
  updateDots();
}

btnRight.addEventListener('click', () => {
  if (index < dotCount - 1) index++;
  else index = 0;
  updateCarousel();
});

btnLeft.addEventListener('click', () => {
  if (index > 0) index--;
  else index = dotCount - 1;
  updateCarousel();
});

setInterval(() => {
  index = (index + 1) % dotCount;
  updateCarousel();
}, 3000);

updateCarousel(); 

//studentspeak

let slideIndex = 0;
    showSlides();

    function showSlides() {
      let slides = document.getElementsByClassName("slides");
      let dots = document.getElementsByClassName("dot");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      setTimeout(showSlides, 10000); // Change every 5 seconds
    }

    function currentSlide(n) {
      slideIndex = n - 1;
      showSlides();
    }
//list of top-bar
  document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropdown');
    const toggle = document.querySelector('.dropdown-toggle');

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    window.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
      }
    });
  });

