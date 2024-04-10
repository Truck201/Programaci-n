document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll(".itemCarrousel");
    let currentSlide = 0;
    
    function showSlide(index) {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      slides[index].classList.add("active");
    }
    
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
    
    showSlide(currentSlide);
    setInterval(nextSlide, 4500); // Cambia de slide cada 5 segundos
  });
  