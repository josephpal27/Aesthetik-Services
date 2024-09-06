
// Functionality For Progress Bars
let progressBar = document.querySelectorAll(".progress-box .line");
let percent = document.querySelectorAll(".percent");

window.addEventListener("scroll", () => {

  if (screen.width < '576') {
    if (window.scrollY > 3400) {
      progressBar.forEach((bar) => {
        bar.style.width = "100%";
      });
      percent.forEach(num => {
          num.style.opacity = '1';
      })
    }
  } else{
    if (window.scrollY > 1600) {
      progressBar.forEach((bar) => {
        bar.style.width = "100%";
      });
      percent.forEach(num => {
          num.style.opacity = '1';
      })
    }
  }
});


// Functionality For Footer Section
let footIconBox = document.querySelectorAll('.footer-icon-row .footer-icon');
let footIcon = document.querySelectorAll('.footer-icon-row .footer-icon i');

footIconBox.forEach((box, i) => {
    box.addEventListener('mouseenter', () => {
        footIcon[i].style.color = '#f15c06';
    })
    box.addEventListener('mouseleave', () => {
        footIcon[i].style.color = '#fff';
    })
})


// ----------------------------------------------------------------------------------------------------------------------------------------


// Functionality For Back to Top Btn
let backToTopDiv = document.querySelector(".back-to-top");
let backToTopBtn = document.querySelector(".back-to-top .fa-arrow-up");

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    // Adjust the pixel value as needed
    backToTopDiv.classList.add("show");
  } else {
    backToTopDiv.classList.remove("show");
  }
});
