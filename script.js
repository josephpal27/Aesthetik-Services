

// Functionality For Progress Bars
let progressBar = document.querySelectorAll(".progress-box .line");
let percent = document.querySelectorAll(".percent");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1600) {
    progressBar.forEach((bar) => {
      bar.style.width = "100%";
    });
    percent.forEach(num => {
        num.style.opacity = '1';
    })
  }
});
