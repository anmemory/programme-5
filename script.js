document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');
    let autoSlideInterval;

    function showSlide(index) {
        slides.forEach(((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        }));
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    slides.forEach(slide => {
        slide.addEventListener('mouseenter', stopAutoSlide);
        slide.addEventListener('mouseleave', startAutoSlide);
    });

    // Add click event listeners to the navigation buttons
    document.querySelector('.carousel-control.prev').addEventListener('click', prevSlide);
    document.querySelector('.carousel-control.next').addEventListener('click', nextSlide);

    // Initialize the carousel
    showSlide(currentIndex);
    startAutoSlide();
});