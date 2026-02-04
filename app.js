//  start js for burger menu
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  console.log("fgfgf");
  navLinks.classList.toggle("active");
  menuIcon.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuIcon.classList.remove("active");
  });
});
//end js for burger menu

// start certificate slider
const certificatesPath = "images/certificates/";
const certificates = [
  "cert_1.png",
  "cert_2.png",
  "cert_3.png",
  "cert_4.png",
  "cert_5.png",
  "cert_6.png",
  "cert_7.png",
  "cert_8.png",
  "cert_9.png",
  "cert_10.png",
  "cert_11.png",
  "cert_12.png",
];

const track = document.querySelector(".certificates-track");
const dotsContainer = document.querySelector(".cert-dots");
const prevBtn = document.querySelector(".cert-btn.prev");
const nextBtn = document.querySelector(".cert-btn.next");

const modal = document.querySelector(".cert-modal");
const modalImg = modal.querySelector("img");
const modalClose = document.querySelector(".cert-modal-close");

let currentIndex = 0;

/* Generate slides */
certificates.forEach((file, index) => {
  const slide = document.createElement("div");
  slide.className = "certificate";

  const img = document.createElement("img");
  img.src = certificatesPath + file;
  img.alt = `Сертифікат ${index + 1}`;

  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modal.classList.add("active");
  });

  slide.appendChild(img);
  track.appendChild(slide);

  const dot = document.createElement("button");
  if (index === 0) dot.classList.add("active");

  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });

  dotsContainer.appendChild(dot);
});

const slides = document.querySelectorAll(".certificate");
const dots = document.querySelectorAll(".cert-dots button");

function updateSlider() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

/* Modal close */
modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
// end certificate slider

// start faq-question anime
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    faqItems.forEach((el) => {
      if (el !== item) el.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});
// end faq-question anime
