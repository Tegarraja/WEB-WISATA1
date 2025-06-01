// Toggle Responsive Navbar
function toggleNavbar() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

// Slideshow Manual & Otomatis
let slideIndex = 1;
let slideTimer;

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

// Next/Prev controls
function plusSlides(n) {
  clearInterval(slideTimer); // Reset auto-slide
  showSlides(slideIndex += n);
  startSlideTimer();
}

// Dot controls
function currentSlide(n) {
  clearInterval(slideTimer);
  showSlides(slideIndex = n);
  startSlideTimer();
}

// Auto Slide
function startSlideTimer() {
  slideTimer = setInterval(() => {
    slideIndex++;
    if (slideIndex > document.getElementsByClassName("slide").length) {
      slideIndex = 1;
    }
    showSlides(slideIndex);
  }, 5000); // Ganti setiap 5 detik
}

// Inisialisasi saat halaman load
document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
  startSlideTimer();
});

// Buku Tamu
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('.guestbook-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const nama = document.getElementById("nama").value;
      alert(`Terima kasih, ${nama}! Pesan Anda telah dikirim.`);
      this.reset();
    });
  }
});