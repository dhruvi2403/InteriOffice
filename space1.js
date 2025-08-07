document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const slides = document.querySelectorAll('.slide');
    
    // Since we only have one slide in the markup, this is prepared for when more slides are added
    let currentSlide = 0;
    const maxSlides = slides.length;
    
    // Initialize
    function initSlider() {
        slides.forEach((slide, index) => {
            slide.classList.remove('current');
            if (index === currentSlide) {
                slide.classList.add('current');
            }
        });
    }
    
    // Go to next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % maxSlides;
        initSlider();
    }
    
    // Go to previous slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + maxSlides) % maxSlides;
        initSlider();
    }
    
    // Event listeners
    nextArrow.addEventListener('click', nextSlide);
    prevArrow.addEventListener('click', prevSlide);
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });
    
    // Optional: Auto-play functionality
    const autoPlayInterval = 5000; // 5 seconds
    let slideInterval = setInterval(nextSlide, autoPlayInterval);
    
    // // Pause auto-play on hover
    // const sliderContainer = document.querySelector('.slider-container');
    // sliderContainer.addEventListener('mouseenter', () => {
    //     clearInterval(slideInterval);
    // });
    
    // sliderContainer.addEventListener('mouseleave', () => {
    //     slideInterval = setInterval(nextSlide, autoPlayInterval);
    // });
    
    // Initialize the slider
    initSlider();
});