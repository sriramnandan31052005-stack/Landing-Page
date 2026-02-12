document.addEventListener("DOMContentLoaded", function () {
  // Ensure these paths match your actual folder structure
  const images = [
    "images/images.png",
    "images/imgage1.png",
    "images/imag2.png",
    // "images/img4.png"
  ];

  let index = 0;
  const imgElement = document.getElementById("sliderImage");
  const dots = document.querySelectorAll(".dot");
  const leftBtn = document.querySelector(".nav-btn.left");
  const rightBtn = document.querySelector(".nav-btn.right");

  function updateSlider() {
    // 1. Start Fade Out
    imgElement.classList.add("fade-out");

    setTimeout(() => {
      // 2. Change Source while invisible
      imgElement.src = images[index];

      // Update Dots
      dots.forEach((d, i) => {
        d.classList.toggle("active", i === index);
      });

      // 3. Fade In
      imgElement.classList.remove("fade-out");
    }, 400); // This delay matches the CSS transition
  }

  function nextSlide() {
    index = (index + 1) % images.length;
    updateSlider();
  }

  function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    updateSlider();
  }

  // Event Listeners
  rightBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  leftBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      if(index === i) return; // Do nothing if clicking current dot
      index = i;
      updateSlider();
      resetAutoSlide();
    });
  });

  // Auto Slide
  let autoSlide = setInterval(nextSlide, 1000);

  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 1000);
  }
});